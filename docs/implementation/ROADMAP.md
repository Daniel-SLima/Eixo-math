# Eixo Math — Roadmap de Implementação

**Status:** planejamento de execução  
**Importante:** este roadmap NÃO autoriza implementação. O início depende de SPEC_STATUS=READY_FOR_IMPLEMENTATION no MASTER_GDD_SPEC.md.

---

# FASE S0 — FECHAMENTO DA ESPECIFICAÇÃO

Antes de qualquer código:

- revisar MASTER_GDD_SPEC.md;
- revisar docs técnicos;
- fechar decisões finais de produto;
- confirmar público-alvo;
- confirmar direção visual;
- confirmar escopo curricular do MVP;
- validar restrições legais/idade;
- congelar critérios de aceite;
- marcar SPEC_STATUS=READY_FOR_IMPLEMENTATION.

Gate:

**nenhum requisito estrutural crítico em aberto.**

---

# FASE P0 — PROVA TÉCNICA DO EDITOR/MOTOR

Objetivo:

provar que a arquitetura escolhida funciona.

Entregas:

- React/TypeScript/Vite;
- Capacitor Android;
- MathLive;
- teclado customizado;
- MathJSON;
- Compute Engine;
- Math Core mínimo;
- fração;
- potência;
- raiz;
- log com base;
- limite;
- derivada;
- integral;
- gráfico Mafs;
- persistência local;
- offline.

Não construir o produto inteiro ainda.

Gate:

editor confortável + performance aceitável em Android real.

---

# FASE P1 — FUNDAÇÃO DO REPOSITÓRIO

- monorepo/workspaces;
- packages base;
- lint/typecheck;
- Vitest;
- fast-check;
- Playwright;
- CI;
- versionamento;
- ADRs.

Gate:

pipeline verde.

---

# FASE P2 — EIXO MATH CORE

- AST/MathJSON wrappers;
- context/domain;
- equivalência;
- transformations;
- step validator;
- error codes;
- strategy detection;
- pedagogical contract;
- fixtures.

Gate:

currículo MVP suportado matematicamente.

---

# FASE P3 — EDITOR MATEMÁTICO

- adapter MathLive;
- Template Registry;
- teclado progressivo;
- slots;
- cursor;
- selection;
- undo/redo;
- alinhamento;
- acessibilidade.

Gate:

testes de usabilidade essenciais aprovados.

---

# FASE P4 — CADERNO, RASCUNHO E QUADROS

- linhas/blocos;
- múltiplos Quadros;
- Rascunho espacial;
- transferência;
- autosave;
- revalidação;
- restauração.

Gate:

kill/relaunch sem perda relevante.

---

# FASE P5 — PERSISTÊNCIA LOCAL

- SQLite native;
- Dexie web;
- repositories;
- migrations;
- snapshots;
- outbox preparada.

Gate:

fluxo completo em modo avião.

---

# FASE P6 — CONTEÚDO/CURRÍCULO

- schema de skills;
- lessons;
- blueprints;
- fixed items;
- validator de conteúdo;
- seeds;
- content packs.

Gate:

rota MVP coerente e validada.

---

# FASE P7 — MOTOR ADAPTATIVO

- evidence;
- mastery;
- hints;
- autocorreção;
- revisão;
- seleção adaptativa;
- anti-repetição.

Gate:

cenários pedagógicos principais passam.

---

# FASE P8 — UX DO PRODUTO

- onboarding;
- Home;
- Mapa;
- módulo;
- aula;
- atividade;
- conclusão;
- continuidade.

Gate:

novo usuário completa fluxo sem instrução externa.

---

# FASE P9 — LABORATÓRIO E VISUALIZAÇÕES

- plano cartesiano;
- funções;
- parâmetros;
- comparação;
- limites.

Gate:

visualização confirma matemática sem entregar solução indevidamente.

---

# FASE P10 — GAMIFICAÇÃO MVP

- progresso visual;
- desbloqueios;
- Caixa de Ferramentas;
- marcos;
- Desafio-Marco 1;
- Desafio-Marco 2.

Gate:

gamificação não interfere negativamente na aprendizagem.

---

# FASE P11 — PERFIL, PROGRESSO E LIVRO

- perfil;
- estados;
- histórico;
- favoritos;
- ferramentas;
- Livro Matemático.

Gate:

aluno entende evolução e próximo passo.

---

# FASE P12 — BACKEND/SYNC OPCIONAL DO MVP

Se entrar no release:

- Supabase;
- Auth;
- RLS;
- SyncService;
- merge visitante;
- conflitos;
- backup.

Se não atingir qualidade:

não bloquear MVP local.

---

# FASE P13 — SEGURANÇA E ACESSIBILIDADE

Hardening:

- CSP;
- sanitize;
- secure storage;
- RLS tests;
- accessibility audit;
- reduce motion;
- screen reader.

Gate:

nenhum blocker/critical.

---

# FASE P14 — QA/RELEASE CANDIDATE

- regression;
- device matrix;
- offline;
- migrations;
- performance;
- property tests extensos;
- visual snapshots;
- content validation.

Gate:

critérios do MVP atendidos.

---

# FASE P15 — MVP RELEASE

- Android;
- web quando aplicável;
- documentação;
- conteúdo MVP.

Sem IA.

Sem multiplayer.

---

# EXPANSÃO E1 — MATEMÁTICA BÁSICA COMPLETA

Completar nós restantes e cobertura.

---

# EXPANSÃO E2 — PRÉ-CÁLCULO COMPLETO

- funções avançadas;
- exponenciais;
- logaritmos;
- trigonometria;
- sequências;
- preparação para cálculo.

---

# EXPANSÃO E3 — CÁLCULO I COMPLETO

- limites;
- continuidade;
- derivadas;
- aplicações;
- Riemann;
- integrais;
- TFC.

---

# RELEASE CURRICULAR 1.0

Objetivo:

```
Matemática Básica
→ Pré-Cálculo
→ Cálculo I
```

com cobertura completa do produto.

---

# PÓS-1.0

Possibilidades:

- tutor IA;
- multiplayer;
- Bluetooth;
- escrita manual;
- importação de listas;
- professor;
- exportação;
- novos cursos.

---

# ESTRATÉGIA DE BRANCHES

Sugestão:

```
main
develop (opcional)
feature/<area>
fix/<area>
docs/<area>
```

Preferir PRs pequenos e revisáveis.

Para trabalho assistido por agente:

cada fase deve possuir branch própria e critérios explícitos.

---

# COMMITS

Commits devem explicar intenção:

```
feat(math-core): validate distributive transformations
feat(editor): add structured fraction navigation
test(content): add property tests for linear equation generator
docs(architecture): document sync conflicts
```

---

# GATE ENTRE FASES

Não iniciar a próxima fase crítica apenas porque “o código compila”.

Cada fase possui critérios de aceite.

Especialmente:

P0 → editor provado  
P2 → motor confiável  
P3 → UX de escrita provada  
P5 → offline provado  
P14 → release provado

---

# PRINCÍPIO FINAL

> construir primeiro a parte que pode invalidar a arquitetura inteira; depois escalar conteúdo.
