# Eixo Math — Checklist de Fechamento da Especificação

**Objetivo:** verificar se o projeto pode ser entregue a um agente de implementação sem exigir invenção de requisitos estruturais.

---

# 1. PRODUTO

- [x] visão;
- [x] objetivo educacional;
- [x] público-alvo MVP;
- [x] idioma;
- [x] tom;
- [x] direção visual;
- [x] escopo MVP;
- [x] pós-MVP separado.

---

# 2. EXPERIÊNCIA MATEMÁTICA

- [x] Caderno;
- [x] Rascunho;
- [x] Quadros;
- [x] teclado progressivo;
- [x] editor 2D;
- [x] slots;
- [x] alinhamento;
- [x] templates matemáticos;
- [x] onboarding de notação;
- [x] erro de interface separado de erro matemático.

---

# 3. MOTOR

- [x] validação por passo;
- [x] caminhos alternativos;
- [x] aderência pedagógica;
- [x] domínio/contexto;
- [x] solução perdida/extranha;
- [x] inequações;
- [x] erro parcial;
- [x] NAO_COMPROVADO;
- [x] taxonomia inicial;
- [x] estratégia global.

---

# 4. CURRÍCULO

- [x] grafo Matemática Básica → Pré-Cálculo → Cálculo I;
- [x] IDs de skill;
- [x] pré-requisitos conceituais;
- [x] currículo exato do MVP;
- [x] sequência de aulas;
- [x] desafios do MVP;
- [x] expansão pós-MVP.

---

# 5. DOMÍNIO

- [x] dimensões;
- [x] estados;
- [x] evidências;
- [x] ajuda;
- [x] autocorreção;
- [x] retenção;
- [x] critérios por skill MVP;
- [x] anti-grind;
- [x] revisão recomendada/necessária.

---

# 6. CONTEÚDO

- [x] banco;
- [x] blueprints;
- [x] seeds;
- [x] restrições;
- [x] validação;
- [x] hints;
- [x] dificuldade;
- [x] proveniência;
- [x] licenças;
- [x] importação futura.

---

# 7. GAMIFICAÇÃO

- [x] filosofia math-first;
- [x] mundo/construção;
- [x] Desafios-Marco;
- [x] recompensas;
- [x] ferramentas como desbloqueio;
- [x] multiplayer pós-MVP;
- [x] Bluetooth pós-MVP.

---

# 8. UX E DESIGN

- [x] fluxo completo;
- [x] Home;
- [x] Mapa;
- [x] aula;
- [x] atividade;
- [x] conclusão;
- [x] perfil;
- [x] Livro;
- [x] design system base;
- [x] light/dark;
- [x] mobile/tablet/web.

---

# 9. ARQUITETURA

- [x] React/TypeScript;
- [x] Capacitor;
- [x] MathLive;
- [x] MathJSON;
- [x] Compute Engine;
- [x] Math Core próprio;
- [x] Mafs;
- [x] adapters;
- [x] packages;
- [x] P0 spike obrigatório.

---

# 10. DADOS

- [x] local-first;
- [x] SQLite;
- [x] IndexedDB/Dexie;
- [x] Supabase remoto;
- [x] modelo de dados v1;
- [x] outbox;
- [x] conflitos;
- [x] content packs;
- [x] offline.

---

# 11. SEGURANÇA/PRIVACIDADE

- [x] minimização;
- [x] RLS;
- [x] secure storage;
- [x] CSP/sanitização;
- [x] content packs sem código;
- [x] analytics separado;
- [x] perfil privado;
- [x] IA fora do MVP.

---

# 12. IA

- [x] módulo futuro especificado;
- [x] provider abstraction;
- [x] feature flag;
- [x] fallback;
- [x] zero dependência MVP;
- [x] IA não decide matemática.

---

# 13. QUALIDADE

- [x] test strategy;
- [x] unit;
- [x] property-based;
- [x] integration;
- [x] E2E;
- [x] visual;
- [x] accessibility;
- [x] offline;
- [x] security;
- [x] release gates.

---

# 14. IMPLEMENTAÇÃO

- [x] roadmap por fases;
- [x] gates;
- [x] handoff Codex;
- [x] regra de não iniciar sem autorização.

---

# 15. DECISÕES NÃO BLOQUEADORAS DE P0/MVP

Podem mudar posteriormente sem invalidar arquitetura:

- logo final;
- nome final após busca de marca;
- ilustrações;
- paleta refinada;
- monetização pós-MVP;
- notificações;
- professor;
- exportação;
- social;
- avatar.

---

# 16. ITENS QUE EXIGEM VALIDAÇÃO DURANTE IMPLEMENTAÇÃO

Não são requisitos ausentes; são hipóteses que precisam de evidência:

- conforto do MathLive dentro de Capacitor;
- performance em Android intermediário;
- ordem ideal de foco em templates complexos;
- usabilidade real do teclado;
- qualidade das heurísticas de domínio;
- calibração de dificuldade.

Por isso P0 e testes de usuário são gates.

---

# 17. ESTADO RECOMENDADO

A especificação está suficientemente detalhada para **revisão final do proprietário do projeto**.

Ainda não iniciar código até aprovação explícita.

Estado:

```
SPEC_STATUS=REVIEW_READY
IMPLEMENTATION_AUTHORIZED=false
```

Após aprovação:

```
SPEC_STATUS=READY_FOR_IMPLEMENTATION
IMPLEMENTATION_AUTHORIZED=true
```

---

# 18. DOCUMENTOS CANÔNICOS

1. `MASTER_GDD_SPEC.md`
2. `docs/product/MVP_SCOPE.md`
3. `docs/product/PRODUCT_DECISIONS.md`
4. `docs/content/MVP_CURRICULUM_DETAIL.md`
5. `docs/pedagogy/MVP_MASTERY_CRITERIA.md`
6. `docs/design/DESIGN_SYSTEM.md`
7. `docs/architecture/TECH_STACK.md`
8. `docs/architecture/DATA_MODEL_V1.md`
9. `docs/architecture/DATA_SYNC_OFFLINE.md`
10. `docs/architecture/SECURITY_PRIVACY_TELEMETRY.md`
11. `docs/quality/TEST_STRATEGY.md`
12. `docs/implementation/ROADMAP.md`
13. `docs/implementation/CODEX_HANDOFF.md`

---

# 19. PRINCÍPIO FINAL

> Nenhum agente deve precisar inventar a filosofia, o fluxo, a matemática, a arquitetura ou o escopo do MVP.
