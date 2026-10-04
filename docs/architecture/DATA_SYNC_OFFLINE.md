# Eixo Math — Persistência, Sincronização e Offline

**Status:** especificação arquitetural inicial  
**Regra principal:** o Eixo é local-first. A rede sincroniza; não autoriza o aluno a estudar.

---

# 1. PRINCÍPIO LOCAL-FIRST

Toda ação educacional crítica deverá ser persistida localmente antes de depender de confirmação remota.

Fluxo:

```
Aluno escreve
    ↓
salva localmente
    ↓
UI confirma
    ↓
fila de sincronização
    ↓
nuvem quando disponível
```

Nunca:

```
Aluno escreve
    ↓
espera internet
    ↓
servidor responde
    ↓
só então salva
```

---

# 2. MODOS DE USO

## Local/Visitante

Deve permitir:

- estudar;
- resolver;
- manter progresso no aparelho;
- usar Caderno/Rascunho;
- executar motor matemático;
- utilizar conteúdo offline.

## Conta sincronizada

Adiciona:

- backup;
- múltiplos dispositivos;
- recuperação;
- preferências na nuvem;
- recursos sociais futuros.

Recomendação atual: **login não obrigatório para começar a estudar**.

---

# 3. IDENTIDADE LOCAL

Antes de login, criar:

```
installation_id
local_profile_id
```

em UUIDs.

Todos os objetos criados localmente recebem IDs globais estáveis.

Ao criar conta, os objetos não precisam ser recriados; passam a ser associados ao usuário remoto.

---

# 4. ENTIDADES LOCAIS PRINCIPAIS

## Perfil e preferências

- profile;
- settings;
- accessibility;
- interface familiarity.

## Currículo e domínio

- skill state;
- mastery projection;
- evidence;
- prerequisites snapshot.

## Conteúdo

- content packs;
- lessons;
- blueprints;
- fixed activities;
- resource metadata.

## Sessões

- study session;
- current route;
- active lesson;
- activity attempts.

## Caderno

- attempts;
- boards;
- lines/blocks;
- expressions;
- annotations;
- validation snapshots.

## Rascunho

- scratch boards;
- positioned blocks;
- notes.

## Histórico

- milestones;
- favorites;
- saved solutions;
- achievements.

## Sincronização

- outbox;
- remote revisions;
- tombstones;
- sync checkpoints.

---

# 5. EXPRESSÃO MATEMÁTICA PERSISTIDA

Cada expressão deverá possuir pelo menos:

- MathJSON canônico;
- versão do schema;
- LaTeX/render snapshot quando útil;
- metadados estruturais necessários.

MathJSON é a fonte semântica.

LaTeX não deverá ser a única fonte.

---

# 6. ATIVIDADE/TENTATIVA

Estrutura conceitual:

```
attempt_id
activity_id
activity_version
blueprint_id
seed
student_profile_id
started_at
completed_at
status
mode
final_answer
validation_summary
```

A seed permite reprodução.

---

# 7. QUADROS E LINHAS

```
board_id
attempt_id
board_type
position
title
created_at
updated_at
revision
```

Cada bloco/linha:

```
block_id
board_id
position
type
math_json
latex_snapshot
annotation
validation_state
created_at
updated_at
revision
```

---

# 8. EVIDÊNCIAS DE APRENDIZAGEM SÃO EVENTOS

Evidence deverá ser preferencialmente append-only/imutável.

Exemplo:

```
evidence_id
skill_id
attempt_id
dimension
result
independence
error_codes
self_corrected
difficulty
created_at
```

Benefício:

dois dispositivos podem sincronizar evidências sem sobrescrever uma à outra.

---

# 9. DOMÍNIO É PROJEÇÃO

O estado de domínio é uma projeção derivada das evidências.

```
evidence events
      ↓
Mastery Engine
      ↓
mastery projection
```

O estado agregado poderá ser armazenado como cache, mas deve ser possível reconstruí-lo.

Isso facilita:

- correção de algoritmo;
- auditoria;
- merge entre dispositivos.

---

# 10. OUTBOX PATTERN

Toda alteração sincronizável cria uma entrada em:

```
sync_outbox
```

Campos conceituais:

```
operation_id
entity_type
entity_id
operation
base_revision
payload
created_at
attempt_count
status
```

Quando online:

1. enviar lote;
2. servidor confirma;
3. atualizar revision/checkpoint;
4. remover/marcar como sincronizado.

---

# 11. OPERAÇÕES IDEMPOTENTES

Cada operação deverá possuir ID único.

Reenviar a mesma operação não pode duplicar:

- evidência;
- tentativa;
- conquista;
- histórico.

Isso é obrigatório para redes instáveis.

---

# 12. SINCRONIZAÇÃO INCREMENTAL

O cliente não deverá baixar toda a conta sempre.

Usar checkpoint/cursor:

```
last_sync_cursor
```

Fluxo:

- push outbox;
- pull mudanças após cursor;
- aplicar;
- atualizar cursor.

---

# 13. TIPOS DE CONFLITO

Nem toda entidade usa a mesma estratégia.

## Conteúdo oficial

Servidor é autoridade.

Cliente substitui/instala versão.

## Evidências

Merge por ID.

## Tentativas concluídas

Imutáveis, salvo metadados seguros.

## Preferências

Pode usar versão/revisão e política last-write com controle.

## Caderno em edição

Exige proteção contra perda.

---

# 14. CONFLITO EM CADERNO

Cenário:

- usuário abre a mesma atividade em dois aparelhos;
- edita ambos offline;
- ambos sincronizam.

Não usar silenciosamente:

```
último ganha e apaga o outro
```

Estratégia recomendada:

1. detectar revisions divergentes;
2. preservar as duas versões;
3. escolher uma como principal conforme recência/contexto;
4. criar uma cópia de conflito recuperável;
5. informar somente se necessário.

Nunca descartar trabalho.

---

# 15. SNAPSHOTS DE RECUPERAÇÃO

Para tentativas/quadros em edição, manter snapshots periódicos limitados.

Objetivo:

- recuperar corrupção;
- resolver conflito;
- desfazer perda acidental.

Não transformar em histórico infinito.

---

# 16. TOMBSTONES

Exclusões sincronizáveis deverão gerar tombstone.

Sem tombstone:

um dispositivo antigo poderia reenviar item já apagado.

---

# 17. MERGE VISITANTE → CONTA

Ao criar/login em conta:

```
dados locais
    ↓
identificar IDs
    ↓
comparar com nuvem
    ↓
upload/merge
    ↓
recalcular projeções
```

Nunca apagar dados locais imediatamente após login.

Só limpar após confirmação consistente.

---

# 18. TROCA DE CONTA

Dados locais de usuários diferentes não devem se misturar.

Banco deverá separar por:

```
profile_owner
```

ou banco/namespace equivalente.

Logout não precisa apagar progresso local automaticamente.

---

# 19. CONTEÚDO OFFLINE

O aplicativo deverá possuir pelo menos um conteúdo inicial utilizável sem download adicional.

Outros blocos poderão ser distribuídos como **Content Packs**.

Exemplo:

```
starter
basic-math
precalculus
calculus-1
```

---

# 20. CONTENT PACK MANIFEST

```
pack_id
version
schema_version
minimum_app_version
size
checksum
published_at
dependencies
```

O pack deve ser verificado antes de ativar.

---

# 21. ATUALIZAÇÃO DE CONTENT PACK

Fluxo:

1. baixar para staging;
2. validar checksum/schema;
3. validar compatibilidade;
4. instalar atomicamente;
5. manter versão anterior até sucesso;
6. limpar posteriormente.

Nunca deixar conteúdo pela metade após falha.

---

# 22. BLUEPRINTS OFFLINE

Blueprints necessários às atividades baixadas deverão estar no pack.

Geração paramétrica comum não depende do servidor.

Seeds continuam reproduzíveis offline.

---

# 23. MOTOR OFFLINE

Devem estar no binário/local bundle:

- MathLive;
- MathJSON;
- Compute Engine;
- Eixo Math Core;
- regras;
- teclado;
- templates.

Nenhuma CDN essencial em produção.

---

# 24. GRÁFICOS OFFLINE

Visualizações baseadas em Mafs/custom SVG devem funcionar com assets locais.

Recursos que exigirem dataset externo deverão declarar explicitamente essa dependência.

---

# 25. LOGIN E OFFLINE

Se usuário já autenticou anteriormente, perda de rede não deverá encerrar sessão local de estudo.

O sistema pode limitar operações remotas, mas:

- Caderno;
- progresso;
- conteúdo local

continuam funcionando.

---

# 26. TOKENS

Tokens de autenticação deverão utilizar storage seguro apropriado à plataforma.

Não armazenar segredo sensível em texto puro em preferências comuns.

Detalhes entram na seção de segurança.

---

# 27. SUPABASE REMOTO

Uso inicial:

- Auth;
- Postgres;
- RLS;
- Edge Functions;
- armazenamento de metadados/sync.

O banco remoto representa estado sincronizado, não o único estado existente.

---

# 28. RLS

Toda tabela associada a usuário deverá possuir política explícita.

Regra base:

> usuário só lê/escreve registros que pertencem ao seu perfil, salvo conteúdo público controlado.

Admin/service roles nunca ficam no cliente.

---

# 29. DADOS PÚBLICOS VS PRIVADOS

## Públicos/controlados

- currículo;
- conteúdo publicado;
- versões de pack;
- blueprints públicos.

## Privados

- progresso;
- histórico;
- Caderno;
- Rascunho;
- domínio;
- evidências;
- preferências.

---

# 30. SINCRONIZAÇÃO NÃO BLOQUEIA UI

Indicadores possíveis:

```
✓ salvo
↻ sincronizando
☁ pendente
! problema de sincronização
```

Mas o aluno não deve esperar upload para continuar.

---

# 31. ESTADO “SALVO LOCALMENTE”

É importante diferenciar:

- salvo no aparelho;
- sincronizado na nuvem.

Mensagem em erro de rede:

> Seu trabalho está salvo neste aparelho e será sincronizado quando houver conexão.

---

# 32. QUANDO SINCRONIZAR

Eventos:

- app abre;
- app volta ao foreground;
- conectividade retorna;
- atividade conclui;
- sessão encerra;
- intervalo razoável durante uso.

Não sincronizar cada tecla individualmente.

---

# 33. AUTOSAVE

Edição do Caderno:

- salvar local com debounce curto;
- flush em mudança de linha/quadro;
- flush ao background;
- flush ao sair da atividade.

A experiência deve tolerar encerramento inesperado.

---

# 34. TRANSAÇÕES

Operações relacionadas devem ser atômicas.

Exemplo concluir atividade:

- attempt status;
- evidence;
- history;
- mastery projection;
- outbox.

Se parte falhar, não deixar estado incoerente.

---

# 35. MIGRAÇÕES

SQLite/IndexedDB precisam possuir schema versionado.

Migrações devem:

- ser testadas;
- manter dados;
- suportar upgrade a partir de versões publicadas.

Não assumir instalação limpa.

---

# 36. BACKUP

Conta sincronizada funciona como backup.

Pós-MVP poderá existir:

- export local;
- backup manual;
- import.

MVP deve priorizar sincronização segura.

---

# 37. DADOS DERIVADOS

Não sincronizar dados que podem ser recalculados sem necessidade, salvo por performance.

Exemplo:

alguns agregados de dashboard.

Fonte de verdade deve ser claramente definida.

---

# 38. TELEMETRIA NÃO É SINCRONIZAÇÃO

Eventos analíticos não devem compartilhar modelo com progresso.

Falha da telemetria nunca pode bloquear:

- autosave;
- domínio;
- sync.

---

# 39. MULTIPLAYER FUTURO

Desafio entre amigos deverá usar camada separada.

Não reaproveitar tabelas de progresso para presença/matchmaking.

Possíveis serviços futuros:

```
ChallengeService
PresenceService
PeerTransport
```

Bluetooth não influencia arquitetura do sync educacional MVP.

---

# 40. IA FUTURA

Conversas/tutor futuro também ficam separados do sync acadêmico.

Não guardar prompt/resposta como parte do Caderno por padrão.

---

# 41. TESTES OFFLINE

Cenários obrigatórios:

1. iniciar atividade online e perder internet;
2. concluir offline;
3. reiniciar app offline;
4. continuar resolução;
5. recuperar conexão;
6. sincronizar;
7. usar dois aparelhos com evidências diferentes;
8. editar mesma tentativa em dois aparelhos;
9. falha durante upload;
10. falha durante instalação de content pack;
11. login após longo período como visitante;
12. migração de schema com dados existentes.

---

# 42. CRITÉRIO DE ACEITE OFFLINE

Após conteúdo estar disponível localmente, um usuário deve conseguir:

```
abrir aula
→ resolver
→ trocar quadros
→ fechar app
→ reabrir
→ continuar
→ concluir
→ atualizar progresso
```

em modo avião.

---

# 43. PRINCÍPIO FINAL

> **A nuvem protege e conecta o aprendizado. Ela não é dona dele.**
