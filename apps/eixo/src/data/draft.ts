export interface Draft {
  before: string
  after: string
}

export interface DraftStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

const key = 'eixo:p0-draft:v1'
const emptyDraft: Draft = { before: '', after: '' }

export function loadDraft(storage: DraftStorage): Draft {
  try {
    const raw = storage.getItem(key)
    if (!raw) return { ...emptyDraft }
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed === 'object' && parsed !== null &&
      'before' in parsed && typeof parsed.before === 'string' &&
      'after' in parsed && typeof parsed.after === 'string') {
      return { before: parsed.before, after: parsed.after }
    }
  } catch {
    // A damaged local record must not prevent the P0 editor from opening.
  }
  return { ...emptyDraft }
}

export function saveDraft(storage: DraftStorage, draft: Draft): void {
  storage.setItem(key, JSON.stringify(draft))
}
