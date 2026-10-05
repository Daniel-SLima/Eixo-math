# Eixo Math — Checklist de revisão humana dos assets

**Estado após os comentários do proprietário:** 21 imagens aprovadas, IMG-043 sem decisão e 17 sons em revisão. Use a [montagem](../../assets/REVIEW_CONTACT_SHEET.jpg) para triagem e abra os PNGs individuais antes de decidir. A origem e o caminho de cada arquivo constam em `assets/ASSET_PROVENANCE.csv`. As aprovações das imagens estão registradas em `assets/ASSET_APPROVALS.csv`.

**Escopo da aprovação das imagens:** as marcações `aprovado` aceitam a direção visual dos candidatos. As ilustrações elaboradas são base/referência para a futura interface limpa, não aprovação para usá-las como fundo de tela ou imagem integral. Logo e ícones simples podem ser considerados para uso direto. Mesmo os arquivos com nome `background`, `overlay`, `banner` ou `splash` não devem impor esse tratamento à interface.

Para cada ID, anote **aprovar**, **refazer** ou **rejeitar**, com uma observação breve. As 21 marcações textuais `aprovado` nas imagens foram tratadas como decisões explícitas; os arquivos originais foram preservados em `generated/` e cópias foram registradas em `approved/`. As quatro marcações de UI audio permanecem no histórico abaixo, mas o comentário posterior pedindo para refazer **todos** os sons prevalece: nenhum áudio foi aprovado.

## Critérios comuns

- Imagens: sem texto, fórmula ou watermark gerado; estilo maduro e coerente; conteúdo importante fora das bordas de corte; espaço para UI real; transparência correta quando exigida.
- Áudio: ouvir no alto-falante do celular, em fone comum e em volume baixo; sem voz, susto, clipping ou tom punitivo. Repetir 10–20 vezes os efeitos frequentes.
- Para aprovar: registrar ID, decisão, data e observação; só então mover de `generated/` para `approved/` retirando `_v01`, atualizar `ASSET_MANIFEST.csv`, `ASSET_PROVENANCE.csv` e `ASSET_GENERATION_PROGRESS.md`.

## Lote 1 — Brand (3)

- [ aprovado] **IMG-001** `brand_app_icon_main_v01.png` — prioridade máxima: reconhecer em tamanho pequeno; conferir distinção e aparência Android.
- [ aprovado] **IMG-002** `brand_logo_mark_v01.png` — conferir conceito de marca e recorte transparente.
- [ aprovado] IMG-003 `brand_splash_hero_portrait_v01.png` — conferir respiro central e superior para logo real.

Decisões/observações: ________________________________________________

## Lote 2 — Onboarding (3)

- [ aprovado] IMG-010 `onboarding_math_journey_v01.png` — progressão compreensível e espaço para texto.
- [ aprovado] **IMG-011** `onboarding_math_editor_v01.png` — blocos abstratos não devem parecer fórmula funcional ou UI final.
- [ aprovado] IMG-012 `onboarding_progress_book_v01.png` — livro, nós e ferramentas devem comunicar progresso sem texto gerado.

Decisões/observações: ________________________________________________

## Lote 3 — Worlds (4)

- [aprovado ] IMG-020 `world_fundamentals_banner_v01.png` — fundamentos, corte 16:9 e área para UI.
- [aprovado ] IMG-021 `world_algebra_banner_v01.png` — transformação/equilíbrio, corte e área para UI.
- [aprovado ] IMG-022 `world_functions_banner_v01.png` — relações entre representações sem gráfico pedagógico falso.
- [ aprovado] IMG-023 `world_limits_banner_v01.png` — aproximação e convergência sem notação incorreta.

Decisões/observações: ________________________________________________

## Lote 4 — Challenges (3)

- [aprovado ] **IMG-030** `challenge_equilibrium_keyart_v01.png` — significado do desafio e espaço para título.
- [aprovado ] **IMG-031** `challenge_connect_points_keyart_v01.png` — dois pontos e inclinação legíveis como conceito.
- [ aprovado] **IMG-032** `challenge_limit_point_keyart_v01.png` — lacuna crítica perceptível; evitar leitura de perigo/combate.

Decisões/observações: ________________________________________________

## Lote 5 — Empty (4)

- [aprovado ] IMG-040 `empty_no_history_v01.png` — histórico vazio sem parecer erro.
- [aprovado ] IMG-041 `empty_no_favorites_v01.png` — favoritos vazios sem confundir com histórico.
- [ aprovado] IMG-042 `empty_offline_mode_v01.png` — estudo local e nuvem desconectada; barras na tela não devem parecer texto falso.
- [ ] IMG-043 `empty_no_review_needed_v01.png` — ausência de pendências sem triunfo infantil.

Decisões/observações: ________________________________________________

## Lote 6 — Decorative (3) e badges (2)

- [ aprovado] IMG-050 `decor_geometric_pack_v01.png` — elementos isolados para recorte.
- [ aprovado] IMG-051 `decor_map_ambient_background_v01.png` — centro discreto, contraste com nós da UI.
- [ aprovado] IMG-052 `decor_challenge_ambient_overlay_v01.png` — centro transparente e pouco ruído.
- [ aprovado] **IMG-060** `badge_tool_unlock_frame_v01.png` — símbolo matemático real cabe no centro transparente.
- [aprovado ] **IMG-061** `badge_milestone_frame_v01.png` — ícone real cabe no centro transparente.

Decisões/observações: ________________________________________________
APARENTEMENTA PRA MIM NO AUDIO TODAS TEM UM MESMO SOM, SO MUDA A VELOCIDADE, TENTE CRIAR NOVAMENTE OS SONS

**Ação registrada:** os 17 SFX ganharam candidatos `_v02.wav` com timbres e ritmos diferentes. Os WAVs originais foram preservados; [ouça e avalie os v02](SFX_V02_REVIEW.md). Nenhum som foi movido para `approved/`.

## Lote 7 — UI audio (4)

- [ aprovado] **SFX-001** `ui_tap_soft.wav` — uso muito frequente: testar fadiga em 20 repetições.
- [ aprovado] SFX-002 `ui_panel_open.wav` — abertura discreta.
- [aprovado ] SFX-003 `ui_panel_close.wav` — formar par natural com abertura.
- [aprovado ] SFX-004 `ui_board_switch.wav` — repetição e possível cansaço.

Decisões/observações: ________________________________________________

## Lote 8 — Feedback audio (5)

- [ ] **SFX-010** `feedback_step_valid.wav` — frequente, confirmação sem prêmio exagerado.
- [ ] **SFX-011** `feedback_step_invalid.wav` — correção sem punição.
- [ ] **SFX-012** `feedback_attention.wav` — distinto do inválido, sem alarme.
- [ ] **SFX-013** `feedback_unproven.wav` — incerteza distinta de acerto e erro.
- [ ] SFX-014 `feedback_self_correction.wav` — positivo, porém discreto.

Decisões/observações: ________________________________________________

## Lote 9 — Progression audio (5)

- [ ] **SFX-020** `progress_tool_unlock.wav` — desbloqueio significativo sem fantasia/arcade.
- [ ] SFX-021 `progress_lesson_complete.wav` — conclusão curta e moderada.
- [ ] SFX-022 `progress_skill_mastered.wav` — mais importante que aula, sem exagero.
- [ ] **SFX-023** `progress_milestone_reached.wav` — marco importante, ainda compacto.
- [ ] **SFX-024** `progress_challenge_complete.wav` — resolução marcante sem fanfarra.

Decisões/observações: ________________________________________________

## Lote 10 — System audio (3)

- [ ] SFX-030 `system_sync_complete.wav` — usar apenas se UX justificar som para sync.
- [ ] SFX-031 `system_saved_offline.wav` — tranquilizador e diferente de alerta.
- [ ] SFX-032 `system_connection_restored.wav` — usar apenas se UX justificar som para retorno de conexão.

Decisões/observações: ________________________________________________

## Registro das decisões

| Data | Lote | IDs | Decisão por ID | Motivo / ajuste solicitado | Revisor |
|---|---|---|---|---|---|
| 2026-10-04 | 1–6 | 21 imagens em `assets/ASSET_APPROVALS.csv` | aprovado | Marcações `aprovado` no checklist; IMG-043 não marcado | proprietário |
| 2026-10-04 | 7–10 | 17 SFX do manifesto | refazer | Sons v01 percebidos como semelhantes; v02 aguardando escuta | proprietário |
| 2026-10-04 | 1–6 | 21 imagens aprovadas | esclarecer uso | Ilustrações elaboradas são referência; interface final deve ser limpa, sem tratá-las automaticamente como fundo | proprietário |
| | | | | | |

**Prioridade:** itens em negrito primeiro. Todos os demais também exigem revisão humana antes de qualquer aprovação.
