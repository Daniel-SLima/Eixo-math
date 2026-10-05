export interface MathTemplate {
  id: string
  label: string
  symbol: string
  latex: string
}

export const mathTemplates: readonly MathTemplate[] = [
  { id: 'fraction', label: 'Fração', symbol: 'a⁄b', latex: '\\frac{#?}{#?}' },
  { id: 'power', label: 'Potência', symbol: 'x²', latex: '{#@}^{#?}' },
  { id: 'root', label: 'Raiz', symbol: '√', latex: '\\sqrt{#?}' },
  { id: 'log', label: 'Log com base', symbol: 'logₐ', latex: '\\log_{#?}\\left(#?\\right)' },
  { id: 'limit', label: 'Limite', symbol: 'lim', latex: '\\lim_{x\\to #?}#?' },
  { id: 'derivative', label: 'Derivada', symbol: 'd/dx', latex: '\\frac{d}{dx}\\left(#?\\right)' },
  { id: 'integral', label: 'Integral definida', symbol: '∫', latex: '\\int_{#?}^{#?}#?\\,dx' },
  { id: 'matrix', label: 'Matriz 2 por 2', symbol: '2×2', latex: '\\begin{pmatrix}#?&#?\\\\#?&#?\\end{pmatrix}' },
]
