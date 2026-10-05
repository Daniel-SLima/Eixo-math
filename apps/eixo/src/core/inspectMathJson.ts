import { ComputeEngine } from '@cortex-js/compute-engine'

const engine = new ComputeEngine()

export function inspectMathJson(latex: string): string {
  if (!latex.trim()) return ''
  return JSON.stringify(engine.parse(latex).json, null, 2)
}
