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

type Polynomial = Map<string, bigint>

const engine = new ComputeEngine()
const MAX_INPUT_LENGTH = 256
const MAX_DEGREE = 4
const MAX_TERMS = 128

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
    const next = (sum.get(key) ?? 0n) + value
    if (next === 0n) sum.delete(key)
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
      const next = (product.get(key) ?? 0n) + leftValue * rightValue
      if (next === 0n) product.delete(key)
      else product.set(key, next)
      if (product.size > MAX_TERMS) return null
    }
  }
  return product
}

function polynomial(node: unknown): Polynomial | null {
  if (typeof node === 'number' && Number.isSafeInteger(node)) {
    return node === 0 ? new Map() : new Map([['', BigInt(node)]])
  }
  if (typeof node === 'string' && /^[A-Za-z]$/.test(node)) {
    return new Map([[node, 1n]])
  }
  if (!Array.isArray(node) || typeof node[0] !== 'string') return null

  const [operator, ...operands] = node
  if (operator === 'Add' || operator === 'Multiply') {
    let accumulated: Polynomial = operator === 'Add' ? new Map() : new Map([['', 1n]])
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
    return value ? multiply(new Map([['', -1n]]), value) : null
  }
  if (operator === 'Subtract' && operands.length === 2) {
    const left = polynomial(operands[0])
    const right = polynomial(operands[1])
    if (!left || !right) return null
    const negative = multiply(new Map([['', -1n]]), right)
    return negative ? add(left, negative) : null
  }
  if (operator === 'Power' && operands.length === 2 && typeof operands[1] === 'number' && Number.isInteger(operands[1]) && operands[1] >= 0 && operands[1] <= MAX_DEGREE) {
    const base = polynomial(operands[0])
    if (!base) return null
    let power: Polynomial = new Map([['', 1n]])
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
  const normalized = latex.replace(/\\(?:left|right|cdot|times)/g, '')
  return normalized.length <= MAX_INPUT_LENGTH && /^[\dA-Za-z\s+\-*(){}^]+$/.test(normalized)
}

function hasZeroExponent(node: unknown): boolean {
  if (!Array.isArray(node)) return false
  if (node[0] === 'Power' && node[2] === 0) return true
  return node.some(hasZeroExponent)
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
    if (hasZeroExponent(beforeRaw.json) || hasZeroExponent(afterRaw.json)) {
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
    const equal = left.size === right.size && [...left].every(([key, value]) => right.get(key) === value)
    return equal
      ? result('VALIDO', [], before.json, after.json)
      : result('INVALIDO', ['POLYNOMIAL_MISMATCH'], before.json, after.json)
  } catch {
    return result('NAO_COMPROVADO', ['UNPARSEABLE_EXPRESSION'])
  }
}
