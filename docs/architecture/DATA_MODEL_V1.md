# Eixo Math — Data Model v1

**Status:** baseline implementável para MVP  
**Objetivo:** impedir que persistência/sync sejam inventados durante desenvolvimento.

---

# 1. CONVENÇÕES

- IDs: UUID.
- Timestamps: ISO-8601 UTC.
- Objetos sincronizáveis: `revision`, `updated_at`, `deleted_at?`.
- Matemática: MathJSON canônico + LaTeX snapshot opcional.
- Evidências: append-only sempre que possível.

---

# 2. PROFILE

```
Profile
- id: uuid
- owner_user_id?: uuid
- installation_id: uuid
- display_name?: string
- locale: string
- study_goal: enum
- created_at
- updated_at
```

---

# 3. SETTINGS

```
Settings
- profile_id
- theme: system|light|dark
- reduce_motion: boolean
- text_scale: number
- analytics_enabled: boolean
- editor_help_level: beginner|intermediate|advanced
- updated_at
- revision
```

---

# 4. SKILL STATE

```
SkillState
- id
- profile_id
- skill_id
- pedagogical_state
- mastery_calculation
- mastery_interpretation
- mastery_representation
- mastery_application
- mastery_transfer
- confidence
- last_evidence_at?
- updated_at
- revision
```

Valores agregados são projeções recalculáveis.

---

# 5. LEARNING EVIDENCE

```
LearningEvidence
- id
- profile_id
- skill_id
- attempt_id?
- dimension
- result: success|partial|failure
- independence: none|light_hint|strong_hint|demonstration
- difficulty
- context_novelty
- strategy_used?
- error_codes: string[]
- self_corrected: boolean
- calculator_used: boolean
- created_at
```

Imutável após sincronização, salvo correção administrativa excepcional.

---

# 6. STUDY SESSION

```
StudySession
- id
- profile_id
- started_at
- ended_at?
- source: home|map|review|practice|challenge
- current_skill_id?
- status
```

---

# 7. ACTIVITY ATTEMPT

```
ActivityAttempt
- id
- profile_id
- session_id?
- activity_id
- activity_version
- blueprint_id?
- generator_version?
- seed?
- mode
- status: active|completed|abandoned
- started_at
- completed_at?
- final_answer_math_json?
- final_answer_latex?
- mathematical_result?
- pedagogical_result?
- primary_strategy?
- help_level_max
- revision
- updated_at
```

---

# 8. BOARD

```
Board
- id
- attempt_id
- type: resolution|scratch|annotation
- title?
- position
- is_final_resolution: boolean
- scroll_state?
- created_at
- updated_at
- revision
- deleted_at?
```

---

# 9. BOARD BLOCK

```
BoardBlock
- id
- board_id
- type: math|annotation|conclusion|justification
- position
- math_json?
- latex_snapshot?
- text_content?
- validation_status: editing|valid|invalid|unproven|not_checked
- validation_payload?
- created_at
- updated_at
- revision
- deleted_at?
```

---

# 10. SCRATCH SPATIAL METADATA

Para blocos de Rascunho:

```
ScratchPlacement
- block_id
- x
- y
- width?
- height?
- z_index
```

Posição visual não altera semântica matemática.

---

# 11. VALIDATION SNAPSHOT

```
ValidationSnapshot
- id
- attempt_id
- from_block_id?
- to_block_id
- math_core_version
- status
- transformation_codes: string[]
- concepts_used: string[]
- error_codes: string[]
- conditions_json?
- created_at
```

Pode ser descartável/recalculável conforme storage.

---

# 12. TOOL FAMILIARITY

```
ToolFamiliarity
- profile_id
- template_id
- state: unseen|introduced|guided|independent
- tutorial_completed_at?
- last_used_at?
- updated_at
```

Não é domínio matemático.

---

# 13. MILESTONE

```
Milestone
- id
- profile_id
- milestone_code
- achieved_at
- related_skill_id?
- related_attempt_id?
```

---

# 14. FAVORITE SOLUTION

```
FavoriteSolution
- id
- profile_id
- attempt_id
- board_id?
- note?
- created_at
```

---

# 15. BOOK ENTRY STATE

Conteúdo base da entrada vem do content pack.

Estado pessoal:

```
BookEntryState
- id
- profile_id
- entry_id
- unlocked_at
- favorite: boolean
- personal_attempt_id?
- updated_at
```

---

# 16. CONTENT PACK INSTALLATION

```
ContentPackInstallation
- pack_id
- version
- schema_version
- checksum
- status
- installed_at
- activated_at?
```

---

# 17. SYNC OUTBOX

```
SyncOutbox
- operation_id
- profile_id
- entity_type
- entity_id
- operation
- base_revision?
- payload_json
- created_at
- attempts
- last_error?
- status
```

---

# 18. SYNC CHECKPOINT

```
SyncCheckpoint
- profile_id
- remote_cursor?
- last_success_at?
- last_attempt_at?
```

---

# 19. CONTENT ENTITIES

Conteúdo publicado não precisa ser copiado para tabelas privadas.

Entidades versionadas:

```
SkillDefinition
UnitDefinition
ModuleDefinition
LessonDefinition
ActivityDefinition
BlueprintDefinition
HintDefinition
BookEntryDefinition
TemplateDefinition
```

Distribuídas em content packs.

---

# 20. SKILL DEFINITION

```
SkillDefinition
- skill_id
- version
- name
- description
- area
- type
- prerequisites: string[]
- unlocks: string[]
- concepts: string[]
- editor_templates: string[]
- transformations: string[]
- common_errors: string[]
- mastery_profile
```

---

# 21. LESSON DEFINITION

```
LessonDefinition
- lesson_id
- version
- module_id
- title
- objective
- target_skills
- prerequisite_skills
- blocks
- estimated_size
- editor_tutorials
```

---

# 22. ACTIVITY DEFINITION

```
ActivityDefinition
- activity_id
- version
- type
- target_skills
- prerequisite_skills
- statement
- required_templates
- difficulty
- pedagogical_contract
- calculator_policy
- detail_level
- solution_contract
- hint_ladder
- visual_config?
- provenance
```

---

# 23. BLUEPRINT DEFINITION

```
BlueprintDefinition
- blueprint_id
- version
- generator_type
- target_skills
- parameter_schema
- constraints
- degeneracy_rules
- solution_builder
- accepted_strategy_rules
- hints
- test_metadata
```

A forma concreta de serializar lógica do gerador deverá evitar código remoto arbitrário.
Geradores podem existir como código versionado no app/package quando necessário.

---

# 24. RELACIONAMENTOS PRINCIPAIS

```
Profile
 ├── Settings
 ├── SkillState*
 ├── LearningEvidence*
 ├── StudySession*
 │    └── ActivityAttempt*
 │         └── Board*
 │              └── BoardBlock*
 ├── Milestone*
 ├── FavoriteSolution*
 └── BookEntryState*
```

---

# 25. DELETE

Preferência:

- evidence concluída: não deletar individualmente no fluxo normal;
- attempts ativos: podem ser abandonados;
- boards/blocks: tombstone quando sincronizados;
- exclusão de conta: fluxo separado.

---

# 26. REVISIONS

Objetos mutáveis sincronizados usam inteiro monotônico por entidade.

Servidor aceita update quando:

```
base_revision == current_revision
```

Caso contrário:

conflict handler.

---

# 27. CONFLITO DE BOARD

Se dois revisions divergem:

- preservar snapshots;
- não merge textual automático cego;
- criar conflict copy se necessário;
- nunca descartar.

---

# 28. ÍNDICES LOCAIS IMPORTANTES

- evidence por profile/skill/time;
- attempts por profile/status/time;
- boards por attempt/position;
- blocks por board/position;
- skill state por profile/skill;
- outbox por status/created_at.

---

# 29. MIGRATIONS

Cada alteração de schema:

- version;
- migration;
- fixture de upgrade;
- rollback/recovery strategy quando aplicável.

---

# 30. PII

Não duplicar email/nome em registros acadêmicos.

Use `profile_id`.

---

# 31. REMOTE SUPABASE

Tabelas privadas podem espelhar entidades sincronizáveis.

Conteúdo público/versionado pode utilizar tabelas próprias ou distribuição por packs.

RLS por `user_id/profile_id`.

---

# 32. DADOS DERIVADOS

Exemplos:

- total de habilidades dominadas;
- progresso da unidade;
- estatísticas da Home.

Recalcular/cachear.

Não transformar em fonte de verdade.

---

# 33. VERSÕES EMBUTIDAS EM TENTATIVA

Uma tentativa guarda:

- activity_version;
- blueprint/generator version;
- math_core version quando necessário ao diagnóstico.

Assim histórico continua reproduzível.

---

# 34. SCHEMA DE VALIDATION PAYLOAD

Estrutura conceitual:

```
{
  status,
  transformation_codes,
  concepts_used,
  error_codes,
  conditions,
  first_invalid_reference
}
```

Evitar texto pedagógico como única informação persistida.

---

# 35. PRIVACIDADE

Rascunho sincronizado, se conta ativa, pertence ao dado acadêmico privado.

Não é analytics.

---

# 36. PRINCÍPIO FINAL

> Persistir fatos e evidências; derivar dashboards e conclusões.
