import { useEffect, useRef, type RefObject } from 'react'
import { MathfieldElement } from 'mathlive'

MathfieldElement.fontsDirectory = '/fonts'
MathfieldElement.soundsDirectory = null

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>
    }
  }
}

interface MathEditorProps {
  label: string
  initialValue: string
  elementRef: RefObject<MathfieldElement>
  onChange: (value: string) => void
  onFocus: () => void
}

export function MathEditor({ label, initialValue, elementRef, onChange, onFocus }: MathEditorProps) {
  const handlers = useRef({ onChange, onFocus })
  handlers.current = { onChange, onFocus }

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    element.mathVirtualKeyboardPolicy = 'manual'
    element.setValue(initialValue)
    const handleInput = () => handlers.current.onChange(element.value)
    const handleFocus = () => handlers.current.onFocus()
    element.addEventListener('input', handleInput)
    element.addEventListener('focus', handleFocus)
    return () => {
      element.removeEventListener('input', handleInput)
      element.removeEventListener('focus', handleFocus)
    }
    // Initial value is restored once; edits are managed by the mathfield.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <math-field ref={elementRef} aria-label={label} />
}
