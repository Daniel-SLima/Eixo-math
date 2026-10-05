import { validateStep as validateMathStep, type StepStatus } from '@eixo/math-core'

export type { StepStatus }

export interface StepResult {
  status: StepStatus
  reason: string
}

/** UI adapter for the first exact polynomial slice of Math Core. */
export function validateStep(before: string, after: string): StepResult {
  const result = validateMathStep({
    beforeLatex: before,
    afterLatex: after,
    context: { kind: 'EXPRESSION', numberSet: 'REAL' },
  })
  if (result.status === 'VALIDO') {
    return { status: 'VALIDO', reason: 'Equivalência polinomial comprovada exatamente.' }
  }
  if (result.status === 'INVALIDO') {
    return { status: 'INVALIDO', reason: 'Os polinômios não são equivalentes nos reais.' }
  }
  if (result.errorCodes.includes('EMPTY_EXPRESSION')) {
    return { status: 'NAO_COMPROVADO', reason: 'Preencha as duas expressões.' }
  }
  return { status: 'NAO_COMPROVADO', reason: 'Este caso exige análise de domínio ou uma regra ainda não implementada.' }
}
