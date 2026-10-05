import { describe, expect, it } from 'vitest'
import fc from 'fast-check'
import { validateStep } from './index'

const context = { kind: 'EXPRESSION', numberSet: 'REAL' } as const

describe('Math Core polynomial step validation', () => {
  it('proves distributivity with a negative coefficient', () => {
    const result = validateStep({ beforeLatex: '-2(x-4)', afterLatex: '-2x+8', context })
    expect(result.status).toBe('VALIDO')
    expect(result.transformationCodes).toContain('POLYNOMIAL_EQUIVALENCE')
    expect(result.conceptsUsed).toEqual([])
  })

  it('rejects unequal polynomials exactly', () => {
    const result = validateStep({ beforeLatex: '3(x+2)', afterLatex: '3x+5', context })
    expect(result.status).toBe('INVALIDO')
  })

  it('does not erase a rational expression domain', () => {
    const result = validateStep({ beforeLatex: 'x/x', afterLatex: '1', context })
    expect(result.status).toBe('NAO_COMPROVADO')
  })

  it('does not erase the zero-base condition from a zero exponent', () => {
    const result = validateStep({ beforeLatex: 'x^0', afterLatex: '1', context })
    expect(result.status).toBe('NAO_COMPROVADO')
  })

  it('does not compare equation solution sets as expressions', () => {
    const result = validateStep({ beforeLatex: 'x^2=4', afterLatex: 'x=2', context: { kind: 'EQUATION', numberSet: 'REAL' } })
    expect(result.status).toBe('NAO_COMPROVADO')
  })

  it('does not classify malformed input as an incorrect step', () => {
    const result = validateStep({ beforeLatex: '', afterLatex: 'x+1', context })
    expect(result.status).toBe('NAO_COMPROVADO')
  })

  it('keeps integer distributivity exact across signed coefficients', () => {
    fc.assert(fc.property(
      fc.integer({ min: -9, max: 9 }),
      fc.integer({ min: -9, max: 9 }),
      (factor, constant) => {
        const before = `${factor}(x+(${constant}))`
        const after = `${factor}x+(${factor * constant})`
        expect(validateStep({ beforeLatex: before, afterLatex: after, context }).status).toBe('VALIDO')
      },
    ), { numRuns: 50 })
  })
})
