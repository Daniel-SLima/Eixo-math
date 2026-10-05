import { describe, expect, it } from 'vitest'
import { loadDraft, saveDraft, type DraftStorage } from './draft'

function memoryStorage(): DraftStorage {
  const values = new Map<string, string>()
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => { values.set(key, value) },
  }
}

describe('P0 local draft', () => {
  it('restores both math lines after a new session', () => {
    const storage = memoryStorage()
    saveDraft(storage, { before: 'x+2', after: 'x+3' })
    expect(loadDraft(storage)).toEqual({ before: 'x+2', after: 'x+3' })
  })

  it('ignores damaged stored data', () => {
    const storage: DraftStorage = { getItem: () => '{', setItem: () => {} }
    expect(loadDraft(storage)).toEqual({ before: '', after: '' })
  })
})
