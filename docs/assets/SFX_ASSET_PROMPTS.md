# Eixo Math — Catálogo de SFX e Prompts

**Uso:** geração assistida de efeitos sonoros do MVP  
**Referência:** `docs/assets/ASSET_PIPELINE.md`

## Direção sonora geral

Os sons do Eixo devem ser:

- curtos;
- sutis;
- modernos;
- limpos;
- não infantis;
- sem voz;
- sem melodias longas;
- sem agressividade;
- adequados a repetição frequente;
- distinguíveis em alto-falante de celular.

Evitar:

- moedas;
- cassino;
- fanfarra exagerada;
- buzzer de erro;
- alarmes;
- sons cômicos;
- voz sintetizada;
- efeitos com copyright reconhecível.

---

# A. UI

## SFX-001 — Soft tap

**Arquivo master:** `ui_tap_soft.wav`  
**Duração:** 50–100 ms  
**Uso:** toque em botão comum  
**Prioridade:** alta

**Prompt:**

Create a very short, soft modern UI tap for a premium mathematics learning app. Clean digital-organic click, subtle and pleasant, no sharp transient, no metallic harshness, no voice, no melody, designed for frequent repetition on smartphone speakers.

---

## SFX-002 — Panel open

**Arquivo:** `ui_panel_open.wav`  
**Duração:** 100–180 ms  
**Uso:** abrir bottom sheet, seletor de Quadros, painel de dicas

**Prompt:**

Create a subtle short UI sound for opening a lightweight panel in a modern educational app. Soft upward motion impression, clean and understated, no swoosh exaggeration, no melody.

---

## SFX-003 — Panel close

**Arquivo:** `ui_panel_close.wav`  
**Duração:** 100–180 ms  
**Uso:** fechar painel

**Prompt:**

Create a subtle short UI sound for closing a lightweight panel in a modern educational app. Soft downward settling impression, calm and restrained, paired naturally with an opening sound, no melody.

---

## SFX-004 — Board switch

**Arquivo:** `ui_board_switch.wav`  
**Duração:** 100–180 ms  
**Uso:** troca de Quadro  
**Prioridade:** média  
**Observação:** pode ser desativado se ficar cansativo.

**Prompt:**

Create a very light page-transition UI sound for moving between digital math notebook boards. Smooth, minimal, spatial but not paper-like or cartoonish, suitable for repeated use.

---

# B. FEEDBACK MATEMÁTICO

## SFX-010 — Valid step

**Arquivo:** `feedback_step_valid.wav`  
**Duração:** 120–250 ms  
**Uso:** passo matemático validado  
**Prioridade:** alta

**Prompt:**

Create a short, subtle confirmation sound for a mathematically valid step in a serious learning app. Gentle upward tonal cue, precise and satisfying, not celebratory, no coin sound, no voice, suitable for frequent repetition.

---

## SFX-011 — Invalid step

**Arquivo:** `feedback_step_invalid.wav`  
**Duração:** 120–250 ms  
**Uso:** transformação inválida  
**Prioridade:** alta

**Prompt:**

Create a short, calm error cue for an invalid mathematical step. It should communicate "this needs correction" without punishment or alarm. Soft descending or muted dissonant cue, no buzzer, no harsh beep, no voice.

---

## SFX-012 — Attention

**Arquivo:** `feedback_attention.wav`  
**Duração:** 120–250 ms  
**Uso:** atenção/condição importante

**Prompt:**

Create a short neutral attention cue for a learning app. Informative rather than negative, soft and clean, suitable for warnings such as domain restrictions or incomplete work, no alarm character.

---

## SFX-013 — Unproven

**Arquivo:** `feedback_unproven.wav`  
**Duração:** 150–280 ms  
**Uso:** motor não conseguiu comprovar etapa

**Prompt:**

Create a short neutral uncertainty cue for a mathematics learning app. The sound should feel unresolved but calm, neither success nor error, indicating that the system could not verify a transformation. Minimal and non-anxious.

---

## SFX-014 — Self-correction

**Arquivo:** `feedback_self_correction.wav`  
**Duração:** 150–300 ms  
**Uso:** aluno corrige sozinho um erro  
**Prioridade:** média

**Prompt:**

Create a subtle positive cue representing successful self-correction in a learning app. Slightly warmer than a normal valid-step sound, still restrained and mature, no fanfare.

---

# C. PROGRESSÃO

## SFX-020 — Tool unlock

**Arquivo:** `progress_tool_unlock.wav`  
**Duração:** 450–800 ms  
**Uso:** nova ferramenta matemática desbloqueada  
**Prioridade:** alta

**Prompt:**

Create a refined unlock sound for gaining a new mathematical tool in a premium educational app. A short layered geometric/digital chime that feels like gaining capability, intelligent and rewarding, not magical fantasy, not arcade, no voice.

---

## SFX-021 — Lesson complete

**Arquivo:** `progress_lesson_complete.wav`  
**Duração:** 500–900 ms  
**Uso:** concluir aula  
**Prioridade:** alta

**Prompt:**

Create a concise completion cue for finishing a mathematics lesson. Warm, clear, modestly rewarding, sophisticated and calm. Avoid triumphal fanfare, arcade sounds, coins or vocals.

---

## SFX-022 — Skill mastered

**Arquivo:** `progress_skill_mastered.wav`  
**Duração:** 700–1200 ms  
**Uso:** habilidade atinge MASTERED  
**Prioridade:** média

**Prompt:**

Create a polished milestone cue for mastering a mathematical skill. It should feel meaningful and earned, with a clean layered tonal progression, mature and premium, stronger than a lesson completion but still restrained.

---

## SFX-023 — Milestone reached

**Arquivo:** `progress_milestone_reached.wav`  
**Duração:** 900–1500 ms  
**Uso:** marco importante, ex. primeira função/primeiro limite

**Prompt:**

Create a short milestone sound for a major learning achievement in a mathematics app. Intelligent, inspiring, elegant, slightly cinematic but compact, no orchestra swell, no arcade fanfare, no vocals.

---

## SFX-024 — Challenge complete

**Arquivo:** `progress_challenge_complete.wav`  
**Duração:** 1000–1800 ms  
**Uso:** concluir Desafio-Marco  
**Prioridade:** alta

**Prompt:**

Create a compact but meaningful completion sound for solving a major mathematical challenge. Layered geometric digital tones with a sense of resolution and construction becoming complete. Mature, clean, satisfying, no combat or victory-game clichés.

---

# D. SYSTEM

## SFX-030 — Sync complete

**Arquivo:** `system_sync_complete.wav`  
**Duração:** 100–220 ms  
**Uso:** sincronização concluída  
**Prioridade:** baixa  
**Observação:** normalmente não tocar se sync ocorrer silenciosamente em background.

**Prompt:**

Create a tiny, unobtrusive sync-complete UI cue. Clean, soft and neutral-positive, suitable for occasional background confirmation. No melody.

---

## SFX-031 — Offline saved locally

**Arquivo:** `system_saved_offline.wav`  
**Duração:** 120–250 ms  
**Uso:** ação explícita em que o app informa que está salvo localmente

**Prompt:**

Create a calm confirmation sound indicating work was safely saved locally while offline. Reassuring and subtle, no warning tone, no voice.

---

## SFX-032 — Connection restored

**Arquivo:** `system_connection_restored.wav`  
**Duração:** 150–300 ms  
**Uso:** retorno de conexão, somente se UX justificar

**Prompt:**

Create a subtle positive system cue for restored connectivity in a learning app. Soft, clean, minimal, not celebratory.

---

# E. SONS NÃO RECOMENDADOS NO MVP

Não criar inicialmente:

- som para cada tecla numérica;
- som para scroll;
- som contínuo em gráfico;
- trilha sonora obrigatória;
- música de menu;
- som de contador de XP;
- som de moeda;
- som de erro agressivo;
- voz dizendo "correto" ou "errado".

Esses itens aumentam ruído e fadiga.

---

# F. PRIORIDADE DE GERAÇÃO

## Batch S1 — obrigatório

- SFX-001 ui_tap_soft
- SFX-010 feedback_step_valid
- SFX-011 feedback_step_invalid
- SFX-012 feedback_attention
- SFX-013 feedback_unproven
- SFX-020 progress_tool_unlock
- SFX-021 progress_lesson_complete
- SFX-024 progress_challenge_complete

## Batch S2 — depois

- SFX-002 panel_open
- SFX-003 panel_close
- SFX-004 board_switch
- SFX-014 self_correction
- SFX-022 skill_mastered
- SFX-023 milestone_reached
- SFX-030 sync_complete
- SFX-031 saved_offline
- SFX-032 connection_restored

---

# G. VARIAÇÕES

Para cada SFX essencial:

- gerar no máximo 3 variações;
- escolher 1;
- rejeitar o restante;
- não deixar o app escolher aleatoriamente entre muitas versões no MVP.

Objetivo:

consistência sonora.

---

# H. TESTE EM CELULAR

Aprovar somente após ouvir em:

1. alto-falante do celular;
2. fone comum;
3. volume baixo;
4. sequência repetida 10–20 vezes para sons frequentes.

Se ficar irritante quando repetido, rejeitar.

---

# I. ACESSIBILIDADE

Sons nunca substituem:

- ícone;
- texto;
- estado visual.

Usuário pode desligar efeitos sem perder informação.

---

# J. EXPORT

Master:

`WAV 48 kHz / 24-bit`

Runtime inicial:

`MP3 48 kHz / ~128 kbps`

Se testes de compatibilidade/tamanho justificarem outro formato, registrar ADR/decisão antes de substituir o baseline.

---

# K. PRINCÍPIO FINAL

> O som deve confirmar a experiência sem chamar atenção para si mesmo.
