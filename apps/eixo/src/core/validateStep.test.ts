import { describe, expect, it } from 'vitest'
import fc from 'fast-check'
import { validateStep } from './validateStep'

describe('P0 deterministic comparison', () => {
  it('accepts a simple distributive identity', () => {
    expect(validateStep('2(x+3)', '2x+6').status).toBe('VALIDO')
  })

  it('rejects a demonstrably different expression', () => {
    expect(validateStep('2+3', '2+4').status).toBe('INVALIDO')
  })

  it('does not invent a verdict for empty input', () => {
    expect(validateStep('', 'x+1').status).toBe('NAO_COMPROVADO')
  })

  it('defers rational expressions whose domain needs analysis', () => {
    expect(validateStep('x/x', '1').status).toBe('NAO_COMPROVADO')
  })

  it('accepts an exact quadratic expansion through Math Core', () => {
    expect(validateStep('(x+1)^2', 'x^2+2x+1').status).toBe('VALIDO')
  })

  it('preserves distributivity for small positive integer coefficients', () => {
    fc.assert(fc.property(
      fc.integer({ min: 1, max: 9 }),
      fc.integer({ min: 1, max: 9 }),
      (factor, constant) => {
        const before = `${factor}(x+${constant})`
        const after = `${factor}x+${factor * constant}`
        expect(validateStep(before, after).status).toBe('VALIDO')
      },
    ), { numRuns: 40 })
  })
})
