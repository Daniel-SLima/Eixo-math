import { describe, expect, it } from 'vitest'
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
})
