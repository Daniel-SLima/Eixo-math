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

  it('proves addition of constant-denominator fractions exactly', () => {
    const result = validateStep({ beforeLatex: '\\frac{1}{2}x+\\frac{1}{2}x', afterLatex: 'x', context })
    expect(result.status).toBe('VALIDO')
  })

  it('proves equivalent rational coefficients', () => {
    const result = validateStep({ beforeLatex: '\\frac{2}{3}x', afterLatex: '\\frac{4}{6}x', context })
    expect(result.status).toBe('VALIDO')
  })

  it('rejects unequal rational coefficients exactly', () => {
    const result = validateStep({ beforeLatex: '\\frac{x}{2}', afterLatex: 'x', context })
    expect(result.status).toBe('INVALIDO')
  })

  it('normalizes a nonzero negative denominator', () => {
    const result = validateStep({ beforeLatex: '\\frac{x}{-2}', afterLatex: '-\\frac{1}{2}x', context })
    expect(result.status).toBe('VALIDO')
  })

  it('does not prove division by zero', () => {
    const result = validateStep({ beforeLatex: '\\frac{1}{0}', afterLatex: '1', context })
    expect(result.status).toBe('NAO_COMPROVADO')
  })

  it('does not prove a fraction with a variable denominator', () => {
    const result = validateStep({ beforeLatex: '\\frac{x}{x}', afterLatex: '1', context })
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

  it('preserves addition of rational coefficients with a constant denominator', () => {
    fc.assert(fc.property(
      fc.integer({ min: -9, max: 9 }),
      fc.integer({ min: -9, max: 9 }),
      fc.integer({ min: 1, max: 9 }),
      (left, right, denominator) => {
        const before = `\\frac{${left}}{${denominator}}x+\\frac{${right}}{${denominator}}x`
        const after = `\\frac{${left + right}}{${denominator}}x`
        expect(validateStep({ beforeLatex: before, afterLatex: after, context }).status).toBe('VALIDO')
      },
    ), { numRuns: 40 })
  })
})
