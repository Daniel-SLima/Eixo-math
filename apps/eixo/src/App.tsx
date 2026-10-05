import { useEffect, useRef, useState } from 'react'
import type { MathfieldElement } from 'mathlive'
import { ComputeEngine } from '@cortex-js/compute-engine'
import { Coordinates, Mafs, Plot } from 'mafs'
import 'mafs/core.css'
import { MathEditor } from './editor/MathEditor'
import { mathTemplates } from './editor/templates'
import { validateStep, type StepResult } from './core/validateStep'
import { loadDraft, saveDraft, type Draft } from './data/draft'
import './App.css'

const inspectionEngine = new ComputeEngine()

function initialDraft(): Draft {
  try { return loadDraft(window.localStorage) } catch { return { before: '', after: '' } }
}

function App() {
  const [draft, setDraft] = useState<Draft>(initialDraft)
  const [active, setActive] = useState<'before' | 'after'>('before')
  const [result, setResult] = useState<StepResult | null>(null)
  const [saveState, setSaveState] = useState('Salvo somente neste aparelho')
  const beforeRef = useRef<MathfieldElement>(null)
  const afterRef = useRef<MathfieldElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        saveDraft(window.localStorage, draft)
        setSaveState('Salvo somente neste aparelho')
      } catch {
        setSaveState('Não foi possível salvar neste aparelho')
      }
    }, 300)
    return () => window.clearTimeout(timer)
  }, [draft])

  function updateLine(line: 'before' | 'after', value: string) {
    setDraft(current => ({ ...current, [line]: value }))
    setResult(null)
    setSaveState('Salvando…')
  }

  function insertTemplate(latex: string) {
    const field = active === 'before' ? beforeRef.current : afterRef.current
    field?.focus()
    field?.insert(latex, { selectionMode: 'placeholder' })
    if (field) updateLine(active, field.value)
  }

  function loadExample() {
    const example = { before: '2(x+3)', after: '2x+6' }
    beforeRef.current?.setValue(example.before)
    afterRef.current?.setValue(example.after)
    setDraft(example)
    setResult(null)
  }

  const currentField = active === 'before' ? beforeRef.current : afterRef.current
  const mathJson = draft[active]
    ? JSON.stringify(inspectionEngine.parse(draft[active]).json, null, 2)
    : ''

  return (
    <main className="shell">
      <header className="topbar"><div className="identity"><span className="mark" aria-hidden="true">∑</span><span>Eixo Math</span></div><span className="phase">P0 · prova técnica</span></header>
      <div className="layout">
        <section className="workspace" aria-labelledby="work-title">
          <div className="section-head"><p className="eyebrow">EDITOR E MOTOR</p><h1 id="work-title">Escreva matemática em 2D</h1><p>Teste templates, navegação entre espaços e comparação simbólica. Esta tela ainda não é uma aula.</p></div>
          <div className="exercise">
            <div className="exercise-head"><div><span className="step-number">01</span><h2>Transformação</h2></div><button className="text-button" type="button" onClick={loadExample}>Carregar exemplo</button></div>
            <span className="field-label">Expressão inicial</span>
            <div className={`math-container ${active === 'before' ? 'selected' : ''}`}><MathEditor label="Expressão inicial" initialValue={draft.before} elementRef={beforeRef} onFocus={() => setActive('before')} onChange={value => updateLine('before', value)} /></div>
            <div className="step-arrow" aria-hidden="true">↓</div>
            <span className="field-label">Próximo passo</span>
            <div className={`math-container ${active === 'after' ? 'selected' : ''}`}><MathEditor label="Próximo passo" initialValue={draft.after} elementRef={afterRef} onFocus={() => setActive('after')} onChange={value => updateLine('after', value)} /></div>
            <div className="actions"><span className="save-state" role="status">{saveState}</span><button className="primary-button" type="button" onClick={() => setResult(validateStep(draft.before, draft.after))}>Verificar equivalência</button></div>
            {result && <div className={`result result-${result.status.toLowerCase()}`} role="status"><strong>{result.status.replace('_', ' ')}</strong><span>{result.reason}</span></div>}
          </div>
          <div className="keyboard" aria-label="Teclado matemático"><div className="keyboard-head"><h2>Templates matemáticos</h2><span>Campo ativo: {active === 'before' ? 'expressão inicial' : 'próximo passo'}</span></div><div className="keys">{mathTemplates.map(template => <button key={template.id} type="button" onClick={() => insertTemplate(template.latex)}>{template.label}</button>)}<button type="button" onClick={() => currentField?.executeCommand('moveToNextPlaceholder')}>Próximo espaço →</button><button type="button" onClick={() => currentField?.executeCommand('deleteBackward')}>Apagar</button></div></div>
        </section>
        <aside className="side" aria-label="Inspeção técnica">
          <section className="panel"><p className="eyebrow">REPRESENTAÇÃO</p><h2>MathJSON</h2><p>Expressão do MathLive convertida pelo Compute Engine.</p><pre>{mathJson || 'Selecione e edite um campo para inspecionar.'}</pre></section>
          <section className="panel"><p className="eyebrow">VISUALIZAÇÃO LOCAL</p><h2>Gráfico de referência</h2><p>Renderizado com Mafs, sem conexão de rede.</p><div className="graph"><Mafs height={220} viewBox={{ x: [-3, 3], y: [-1, 5] }}><Coordinates.Cartesian /><Plot.OfX y={x => x * x} color="#4f46e5" /></Mafs></div><span className="graph-caption">y = x² · demonstração técnica</span></section>
          <section className="note"><strong>Escopo do P0</strong><p>A comparação verifica apenas equivalência simbólica. O veredito pedagógico, domínio e soluções ficam para o Math Core nas próximas fases.</p></section>
        </aside>
      </div>
    </main>
  )
}

export default App
