# Eixo Math — Instruções de Handoff para Codex/Agentes

**STATUS:** IMPLEMENTAÇÃO AUTORIZADA PELO PROPRIETÁRIO EM 2026-10-04; GATES DO ROADMAP PERMANECEM OBRIGATÓRIOS

Este arquivo define como o agente deverá trabalhar com a especificação liberada.

O agente só poderá iniciar código quando o `MASTER_GDD_SPEC.md` contiver explicitamente:

```
SPEC_STATUS=READY_FOR_IMPLEMENTATION
```

O `MASTER_GDD_SPEC.md` agora registra `SPEC_STATUS=READY_FOR_IMPLEMENTATION` e `IMPLEMENTATION_AUTHORIZED=true`.

---

# 1. ORDEM DE LEITURA OBRIGATÓRIA

Antes de alterar código:

1. `MASTER_GDD_SPEC.md`
2. `docs/product/MVP_SCOPE.md`
3. `docs/architecture/TECH_STACK.md`
4. `docs/architecture/DATA_SYNC_OFFLINE.md`
5. `docs/architecture/SECURITY_PRIVACY_TELEMETRY.md`
6. `docs/quality/TEST_STRATEGY.md`
7. `docs/implementation/ROADMAP.md`
8. `docs/design/DESIGN_SYSTEM.md`
9. `docs/assets/ASSET_PIPELINE.md` quando a tarefa envolver mídia
10. `docs/assets/ASSET_MANIFEST.csv` quando a tarefa envolver mídia

Não assumir requisitos ausentes.

---


# 1.A PERFIL DE MODELO DO CODEX

Configuração padrão escolhida para desenvolvimento:

```
model: GPT-6 Sol
reasoning_effort: medium
```

Usar essa configuração como padrão para:

- P0 técnico;
- arquitetura;
- Math Core;
- editor;
- persistência/sync;
- refactors;
- implementação das fases principais.

Restrição de orçamento do projeto:

> **não selecionar automaticamente modelo ou nível de raciocínio acima de GPT-6 Sol / médio.**

Para tarefas mecânicas, repetitivas ou de baixo risco, o proprietário poderá escolher manualmente um modelo mais econômico, como Luna, se desejar.

Qualquer mudança de modelo é decisão do proprietário e não deve ocorrer silenciosamente pelo agente.

---

# 2. PRINCÍPIOS INEGOCIÁVEIS

- matemática é a mecânica;
- editor 2D, não campo de texto linear;
- MathJSON estruturado;
- caminhos alternativos válidos;
- validação determinística;
- `NAO_COMPROVADO` em vez de falso negativo quando necessário;
- objetivo pedagógico separado da correção matemática;
- local-first;
- offline;
- nenhum runtime de IA no MVP;
- nenhum segredo no cliente;
- nenhuma perda silenciosa de Caderno;
- acessibilidade desde o início.

---

# 3. NÃO COMEÇAR PELO APP INTEIRO

Primeira implementação:

**P0 — prova técnica.**

Não criar:

- dezenas de telas;
- currículo inteiro;
- backend completo;

antes de validar editor/motor.

---

# 4. P0 É GATE

O agente deverá demonstrar primeiro:

- MathLive no Capacitor;
- teclado customizado;
- slots;
- templates principais;
- MathJSON;
- Compute Engine;
- validação simples;
- armazenamento local;
- offline;
- Mafs;
- Android real/emulador.

Se houver problema arquitetural, reportar e corrigir antes de escalar.

---

# 5. ARQUITETURA POR PACOTES

Evitar uma pasta `src/utils` contendo todo o domínio.

Separar:

- math-core;
- math-editor;
- math-templates;
- curriculum;
- content-engine;
- mastery-engine;
- visualization;
- data;
- shared.

UI não deve possuir regra matemática crítica embutida em componentes.

---

# 6. DEPENDÊNCIAS CRÍTICAS ATRÁS DE ADAPTERS

Não chamar MathLive/Compute Engine/Supabase diretamente de qualquer componente.

Usar interfaces próprias.

Objetivo:

- teste;
- desacoplamento;
- troca futura;
- controle pedagógico.

---

# 7. NÃO USAR COMPUTE ENGINE COMO “VEREDITO PEDAGÓGICO”

Compute Engine é ferramenta simbólica.

A lógica Eixo decide:

- transformação;
- domínio;
- soluções;
- estratégia;
- objetivo da aula;
- erro;
- evidência.

---

# 8. NÃO ADICIONAR IA

No MVP:

```
AI_TUTOR_ENABLED=false
```

Não instalar SDK de LLM “por precaução” sem necessidade aprovada.

---

# 9. OFFLINE

Qualquer feature educacional nova deve responder:

> o que acontece sem internet?

Se não houver resposta segura, feature não está Done.

---

# 10. TESTES ANTES DE ESCALAR

Para math-core e generators:

- unit;
- fast-check/property;
- invariants;
- seeds.

Para editor:

- integration;
- E2E;
- visual;
- usability.

---

# 11. CONTEÚDO

Nenhuma habilidade nova deve ser publicada sem:

- skill id;
- prerequisites;
- notation/templates;
- engine support;
- errors;
- hints;
- activities;
- tests.

---

# 12. BLUEPRINTS

Todo blueprint precisa:

- constraints;
- deterministic seed;
- solver/validator;
- degeneracy checks;
- property tests.

Não gerar questões por random puro.

---

# 13. UX

Prioridade:

1. clareza;
2. matemática;
3. acessibilidade;
4. fluidez;
5. estética.

Não adicionar animação que atrase resolução.

---

# 14. MUDANÇA DE REQUISITO

Se a implementação revelar conflito real com o GDD:

1. não alterar requisito silenciosamente;
2. registrar problema;
3. propor opções;
4. atualizar documentação após decisão.

Código não é fonte de verdade acima do GDD.

---

# 15. ADR

Mudanças arquiteturais importantes devem gerar ADR.

Exemplos:

- substituir MathLive;
- trocar persistence engine;
- trocar backend;
- alterar representação canônica;
- mudar estratégia de sync.

---

# 16. COMMITS

Commits pequenos e sem misturar áreas não relacionadas.

Não fazer push de grandes lotes sem testes.

---

# 17. PR CHECKLIST

Cada PR deve informar:

- requisito atendido;
- testes;
- impacto offline;
- impacto acessibilidade;
- impacto matemático;
- migração;
- screenshots quando UI;
- riscos.

---

# 18. DEFINIÇÃO DE BLOQUEADOR

Parar progressão da fase quando houver:

- editor central desconfortável;
- validação matemática inconsistente;
- perda de dados;
- arquitetura offline inviável;
- dependência crítica incompatível.

Não mascarar problema com workaround frágil.

---

# 19. PERFORMANCE

Não mover validação comum para servidor só para simplificar implementação.

Usar Web Worker quando necessário.

Interface de edição não pode travar durante cálculo simbólico pesado.

---

# 20. SEGURANÇA

- nenhum service key no app;
- RLS;
- sanitize;
- CSP;
- content packs sem código;
- sem eval;
- secret manager.

---

# 21. ACESSIBILIDADE

Toda tela/controle novo deve considerar:

- label;
- foco;
- tamanho;
- contraste;
- leitor de tela;
- reduce motion.

Editor é caso crítico.

---

# 22. DOCUMENTAÇÃO VIVA

Quando feature fechar uma decisão prevista no GDD:

- atualizar docs;
- registrar ADR quando necessário;
- manter versões/coerência.

---

# 23. RELATÓRIO AO FINAL DE CADA FASE

Informar:

- o que foi implementado;
- arquivos;
- testes;
- decisões;
- problemas;
- riscos;
- gate aprovado/reprovado;
- próximo passo.

---

# 24. REGRA FINAL

> Não otimizar para “terminar rápido”. Otimizar para não construir o produto inteiro sobre uma hipótese errada de editor ou matemática.
