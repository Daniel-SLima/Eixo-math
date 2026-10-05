import { ComputeEngine } from '@cortex-js/compute-engine'

export type StepStatus = 'VALIDO' | 'INVALIDO' | 'NAO_COMPROVADO'

export interface StepResult {
  status: StepStatus
  reason: string
}

const engine = new ComputeEngine()

function isP0Supported(input: string): boolean {
  const normalized = input.replace(/\\(?:left|right|cdot|times)/g, '')
  return /^[\dA-Za-z\s+\-*(){}]+$/.test(normalized)
}

/** P0 comparison only. This is not the pedagogical step validator. */
export function validateStep(before: string, after: string): StepResult {
  if (!before.trim() || !after.trim()) {
    return { status: 'NAO_COMPROVADO', reason: 'Preencha as duas expressões.' }
  }
  if (!isP0Supported(before) || !isP0Supported(after)) {
    return { status: 'NAO_COMPROVADO', reason: 'Este caso exige análise de domínio ou uma regra ainda não implementada.' }
  }

  try {
    const left = engine.parse(before)
    const right = engine.parse(after)
    if (!left.isValid || !right.isValid) {
      return { status: 'NAO_COMPROVADO', reason: 'Uma expressão não pôde ser interpretada.' }
    }
    const comparison = left.isIdenticallyEqual(right)
    if (comparison === true) {
      return { status: 'VALIDO', reason: 'Equivalência simbólica demonstrada nesta prova técnica.' }
    }
    if (comparison === false) {
      return { status: 'INVALIDO', reason: 'As expressões não são equivalentes neste teste.' }
    }
    return { status: 'NAO_COMPROVADO', reason: 'O motor não conseguiu demonstrar a equivalência.' }
  } catch {
    return { status: 'NAO_COMPROVADO', reason: 'Não foi possível analisar as expressões.' }
  }
}
