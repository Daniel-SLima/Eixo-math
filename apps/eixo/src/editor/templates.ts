export interface MathTemplate {
  id: string
  label: string
  latex: string
}

export const mathTemplates: readonly MathTemplate[] = [
  { id: 'fraction', label: 'Fração', latex: '\\frac{#?}{#?}' },
  { id: 'power', label: 'Potência', latex: '{#@}^{#?}' },
  { id: 'root', label: 'Raiz', latex: '\\sqrt{#?}' },
  { id: 'log', label: 'Log com base', latex: '\\log_{#?}\\left(#?\\right)' },
  { id: 'limit', label: 'Limite', latex: '\\lim_{x\\to #?}#?' },
  { id: 'derivative', label: 'Derivada', latex: '\\frac{d}{dx}\\left(#?\\right)' },
  { id: 'integral', label: 'Integral definida', latex: '\\int_{#?}^{#?}#?\\,dx' },
]
