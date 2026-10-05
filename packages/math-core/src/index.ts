import { ComputeEngine } from '@cortex-js/compute-engine'

export type StepStatus = 'VALIDO' | 'INVALIDO' | 'NAO_COMPROVADO'

export interface StepContext {
  kind: 'EXPRESSION' | 'EQUATION' | 'INEQUALITY'
  numberSet: 'REAL'
}

export interface StepInput {
  beforeLatex: string
  afterLatex: string
  context: StepContext
}

export interface StepResult {
  status: StepStatus
  transformationCodes: string[]
  conceptsUsed: string[]
  errorCodes: string[]
  conditions: string[]
  beforeMathJson?: unknown
  afterMathJson?: unknown
}

interface Rational {
  numerator: bigint
  denominator: bigint
}

type Polynomial = Map<string, Rational>

const engine = new ComputeEngine()
const MAX_INPUT_LENGTH = 256
const MAX_DEGREE = 4
const MAX_TERMS = 128

function rational(numerator: bigint, denominator = 1n): Rational | null {
  if (denominator === 0n) return null
  if (numerator === 0n) return { numerator: 0n, denominator: 1n }
  if (denominator < 0n) {
    numerator = -numerator
    denominator = -denominator
  }
  let a = numerator < 0n ? -numerator : numerator
  let b = denominator
  while (b !== 0n) [a, b] = [b, a % b]
  return { numerator: numerator / a, denominator: denominator / a }
}

function addRational(a: Rational, b: Rational): Rational {
  return rational(a.numerator * b.denominator + b.numerator * a.denominator, a.denominator * b.denominator)!
}

function multiplyRational(a: Rational, b: Rational): Rational {
  return rational(a.numerator * b.numerator, a.denominator * b.denominator)!
}

const ONE = rational(1n)!
const NEGATIVE_ONE = rational(-1n)!

function result(status: StepStatus, errorCodes: string[] = [], beforeMathJson?: unknown, afterMathJson?: unknown): StepResult {
  return {
    status,
    transformationCodes: status === 'VALIDO' ? ['POLYNOMIAL_EQUIVALENCE'] : [],
    conceptsUsed: [],
    errorCodes,
    conditions: [],
    beforeMathJson,
    afterMathJson,
  }
}

function add(a: Polynomial, b: Polynomial): Polynomial | null {
  const sum = new Map(a)
  for (const [key, value] of b) {
    const next = addRational(sum.get(key) ?? { numerator: 0n, denominator: 1n }, value)
    if (next.numerator === 0n) sum.delete(key)
    else sum.set(key, next)
  }
  return sum.size <= MAX_TERMS ? sum : null
}

function multiply(a: Polynomial, b: Polynomial): Polynomial | null {
  const product: Polynomial = new Map()
  for (const [leftKey, leftValue] of a) {
    for (const [rightKey, rightValue] of b) {
      const key = [...leftKey, ...rightKey].sort().join('')
      if (key.length > MAX_DEGREE) return null
      const next = addRational(product.get(key) ?? { numerator: 0n, denominator: 1n }, multiplyRational(leftValue, rightValue))
      if (next.numerator === 0n) product.delete(key)
      else product.set(key, next)
      if (product.size > MAX_TERMS) return null
    }
  }
  return product
}

function polynomial(node: unknown): Polynomial | null {
  if (typeof node === 'number' && Number.isSafeInteger(node)) {
    return node === 0 ? new Map() : new Map([['', rational(BigInt(node))!]])
  }
  if (typeof node === 'string' && /^[A-Za-z]$/.test(node)) {
    return new Map([[node, ONE]])
  }
  if (!Array.isArray(node) || typeof node[0] !== 'string') return null

  const [operator, ...operands] = node
  if (operator === 'Rational' && operands.length === 2 && operands.every(value => typeof value === 'number' && Number.isSafeInteger(value))) {
    const value = rational(BigInt(operands[0]), BigInt(operands[1]))
    return value ? value.numerator === 0n ? new Map() : new Map([['', value]]) : null
  }
  if (operator === 'Add' || operator === 'Multiply') {
    let accumulated: Polynomial = operator === 'Add' ? new Map() : new Map([['', ONE]])
    for (const operand of operands) {
      const next = polynomial(operand)
      if (!next) return null
      const combined = operator === 'Add' ? add(accumulated, next) : multiply(accumulated, next)
      if (!combined) return null
      accumulated = combined
    }
    return accumulated
  }
  if (operator === 'Negate' && operands.length === 1) {
    const value = polynomial(operands[0])
    return value ? multiply(new Map([['', NEGATIVE_ONE]]), value) : null
  }
  if (operator === 'Subtract' && operands.length === 2) {
    const left = polynomial(operands[0])
    const right = polynomial(operands[1])
    if (!left || !right) return null
    const negative = multiply(new Map([['', NEGATIVE_ONE]]), right)
    return negative ? add(left, negative) : null
  }
  if (operator === 'Power' && operands.length === 2 && typeof operands[1] === 'number' && Number.isInteger(operands[1]) && operands[1] >= 0 && operands[1] <= MAX_DEGREE) {
    const base = polynomial(operands[0])
    if (!base) return null
    let power: Polynomial = new Map([['', ONE]])
    for (let index = 0; index < operands[1]; index++) {
      const next = multiply(power, base)
      if (!next) return null
      power = next
    }
    return power
  }
  return null
}

function supportedSyntax(latex: string): boolean {
  const normalized = latex.replace(/\\(?:left|right|cdot|times|frac)/g, '')
  return normalized.length <= MAX_INPUT_LENGTH && /^[\dA-Za-z\s+\-*(){}^/]+$/.test(normalized)
}

function nonzeroIntegerLiteral(node: unknown): boolean {
  if (typeof node === 'number') return Number.isSafeInteger(node) && node !== 0
  return Array.isArray(node) && node[0] === 'Negate' && node.length === 2 && nonzeroIntegerLiteral(node[1])
}

function hasUnsafeDomain(node: unknown): boolean {
  if (!Array.isArray(node)) return false
  if (node[0] === 'Power' && (typeof node[2] !== 'number' || node[2] <= 0 || !Number.isInteger(node[2]))) return true
  if (node[0] === 'Divide' && !nonzeroIntegerLiteral(node[2])) return true
  return node.some(hasUnsafeDomain)
}

/** Exact polynomial equivalence over the reals; all other families remain unproven. */
export function validateStep(input: StepInput): StepResult {
  if (input.context.kind !== 'EXPRESSION' || input.context.numberSet !== 'REAL') {
    return result('NAO_COMPROVADO', ['UNSUPPORTED_CONTEXT'])
  }
  if (!input.beforeLatex.trim() || !input.afterLatex.trim()) {
    return result('NAO_COMPROVADO', ['EMPTY_EXPRESSION'])
  }
  if (!supportedSyntax(input.beforeLatex) || !supportedSyntax(input.afterLatex)) {
    return result('NAO_COMPROVADO', ['UNSUPPORTED_EXPRESSION'])
  }
  try {
    const beforeRaw = engine.parse(input.beforeLatex, { form: 'raw' })
    const afterRaw = engine.parse(input.afterLatex, { form: 'raw' })
    if (hasUnsafeDomain(beforeRaw.json) || hasUnsafeDomain(afterRaw.json)) {
      return result('NAO_COMPROVADO', ['DOMAIN_CONDITION_UNSUPPORTED'])
    }
    const before = engine.parse(input.beforeLatex)
    const after = engine.parse(input.afterLatex)
    if (!before.isValid || !after.isValid) {
      return result('NAO_COMPROVADO', ['UNPARSEABLE_EXPRESSION'], before.json, after.json)
    }
    const left = polynomial(before.json)
    const right = polynomial(after.json)
    if (!left || !right) {
      return result('NAO_COMPROVADO', ['UNSUPPORTED_EXPRESSION'], before.json, after.json)
    }
    const equal = left.size === right.size && [...left].every(([key, value]) => {
      const other = right.get(key)
      return other?.numerator === value.numerator && other.denominator === value.denominator
    })
    return equal
      ? result('VALIDO', [], before.json, after.json)
      : result('INVALIDO', ['POLYNOMIAL_MISMATCH'], before.json, after.json)
  } catch {
    return result('NAO_COMPROVADO', ['UNPARSEABLE_EXPRESSION'])
  }
}
