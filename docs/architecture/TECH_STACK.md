# Eixo Math — Arquitetura Técnica e Stack

**Status:** decisão arquitetural inicial aprovada para implementação futura  
**Fase atual:** pré-implementação  
**Regra:** este documento detalha a arquitetura técnica; o `MASTER_GDD_SPEC.md` continua sendo a fonte canônica de requisitos de produto.

---

# 1. DECISÃO PRINCIPAL

A implementação do Eixo deverá seguir uma arquitetura **web-first, offline-first e cross-platform**, usando:

- **React + TypeScript** para interface e aplicação;
- **Vite** como toolchain web;
- **Capacitor** como runtime nativo para Android/iOS;
- **MathLive Mathfield** como base do editor matemático 2D;
- **MathJSON** como representação/intercâmbio estruturado de expressões;
- **CortexJS Compute Engine** como fundação simbólica;
- **Eixo Math Core** como camada própria de validação matemática/pedagógica;
- **Mafs** como base inicial para visualizações matemáticas interativas;
- **SQLite nativo** em Android/iOS;
- **IndexedDB/Dexie** para web/PWA;
- **Supabase/Postgres + Auth + Edge Functions** como backend remoto inicial;
- **Vitest + fast-check** para testes unitários e property-based do núcleo matemático.

O aplicativo deverá continuar funcional sem conexão para o núcleo educacional já baixado.

---

# 2. POR QUE WEB-FIRST + CAPACITOR

O maior risco técnico do projeto não é navegação ou telas comuns.

É o editor matemático estruturado.

Uma stack web permite utilizar diretamente MathLive, que já oferece:

- campo matemático editável;
- notação 2D;
- teclado virtual;
- touch;
- LaTeX;
- MathJSON;
- MathML;
- acessibilidade;
- comandos e macros customizáveis.

Capacitor permite empacotar essa aplicação como Android/iOS mantendo acesso a APIs nativas quando necessário.

Isso evita criar duas aplicações independentes.

---

# 3. ALTERNATIVAS NÃO ESCOLHIDAS COMO STACK PRINCIPAL

## React Native

É excelente para aplicações móveis, mas MathLive é um Web Component dependente de DOM.

Isso provavelmente exigiria:

```
React Native UI
    ↓
WebView
    ↓
MathLive
    ↓
bridge de mensagens
```

justamente na parte mais central do produto.

Esse limite adicionaria complexidade a:

- foco;
- teclado;
- cursor;
- eventos;
- seleção;
- acessibilidade;
- sincronização de estado.

Não é a primeira escolha.

## Flutter

Possui excelente UX nativa e desempenho.

Entretanto, o ecossistema disponível para edição matemática estruturada completa não oferece uma correspondência tão direta ao conjunto MathLive + MathJSON + Compute Engine.

Poderia exigir editor próprio ou integração via WebView.

## Godot

É adequado para jogos, animação e cenas.

O Eixo, porém, é primeiro:

- editor;
- curso;
- caderno;
- acessibilidade;
- aplicação educacional.

A camada lúdica não justifica utilizar uma engine de jogos como fundação de toda a aplicação.

## PWA pura

Tecnicamente possível e deverá continuar suportada.

Mas Capacitor fornece:

- distribuição por lojas;
- integração Android/iOS;
- APIs nativas;
- caminho futuro para Bluetooth/proximidade;
- armazenamento nativo.

---

# 4. ARQUITETURA EM CAMADAS

```
┌─────────────────────────────────────────┐
│              React UI                   │
├─────────────────────────────────────────┤
│  Caderno | Mapa | Aula | Laboratório   │
├─────────────────────────────────────────┤
│        Math Editor Adapter              │
│             MathLive                    │
├─────────────────────────────────────────┤
│            Eixo Math Core               │
│ parser/context/rules/validation/errors  │
├─────────────────────────────────────────┤
│  Compute Engine / MathJSON Foundation   │
├─────────────────────────────────────────┤
│ Curriculum | Content | Mastery Engine   │
├─────────────────────────────────────────┤
│         Local Data Repository           │
│ SQLite Native / IndexedDB Web           │
├─────────────────────────────────────────┤
│         Sync/API Abstraction            │
├─────────────────────────────────────────┤
│      Supabase/Postgres Backend          │
└─────────────────────────────────────────┘
```

Camadas superiores não devem acessar diretamente detalhes das inferiores quando houver uma interface de domínio.

---

# 5. EIXO MATH CORE

Será um pacote TypeScript independente da UI.

Responsabilidades:

- tipos matemáticos;
- contexto;
- domínio;
- assumptions;
- normalização;
- comparação;
- transformação;
- validação de passos;
- códigos de erro;
- strategy detection;
- contrato pedagógico;
- evidências de habilidade.

O pacote não poderá depender de React.

Exemplo:

```
packages/math-core
```

Assim poderá rodar:

- no app;
- em testes;
- em Node;
- futuramente no backend;
- em ferramentas de autoria.

---

# 6. COMPUTE ENGINE NÃO É O MOTOR PEDAGÓGICO

CortexJS Compute Engine será uma fundação.

Pode auxiliar em:

- parsing;
- MathJSON;
- simplificação;
- equivalência;
- resolução;
- cálculo simbólico;
- derivadas;
- integrais.

Mas:

```
Compute Engine
≠
Eixo Pedagogical Validator
```

A camada Eixo deverá decidir:

- se a transformação preserva soluções;
- se exige condições;
- qual regra foi usada;
- qual erro ocorreu;
- se o conceito-alvo foi demonstrado;
- como atualizar domínio.

---

# 7. MATHJSON COMO REPRESENTAÇÃO CANÔNICA INTERNA

Expressões do editor serão convertidas para uma forma estruturada.

Exemplo:

```
2(x+3)
```

pode tornar-se conceitualmente:

```
["Multiply", 2, ["Add", "x", 3]]
```

Benefícios:

- independente da aparência;
- serializável;
- comparável;
- testável;
- interoperável.

LaTeX continuará útil para renderização/importação/exportação, mas não deverá ser o único modelo semântico.

---

# 8. ADAPTER PARA MATHLIVE

Não espalhar chamadas MathLive pela aplicação.

Criar:

```
packages/math-editor
```

com uma interface própria do Eixo.

Exemplo conceitual:

```
MathEditor
  getExpression()
  setExpression()
  focusSlot()
  moveNext()
  moveOut()
  insertTemplate()
  getSelection()
  serialize()
```

Motivo:

- facilitar testes;
- controlar UX;
- lidar com mudanças de API;
- permitir substituição futura.

---

# 9. TEMPLATE REGISTRY

O Template Registry definido no GDD deverá viver como pacote compartilhado.

```
packages/math-templates
```

Deve conter:

- fração;
- potência;
- raiz;
- log;
- limite;
- derivada;
- integral;
- somatório;
- função por partes;
- demais templates.

O teclado e o editor devem consumir a mesma definição.

---

# 10. VISUALIZAÇÕES MATEMÁTICAS

Base inicial:

**Mafs**

Boa adequação para:

- plano cartesiano;
- funções;
- pontos;
- vetores;
- transformações;
- sliders;
- animações educacionais.

Entretanto, criar:

```
VisualizationAdapter
```

para que atividades não dependam diretamente de uma única biblioteca.

Algumas visualizações avançadas poderão usar SVG/Canvas customizado.

---

# 11. ESTADO DA APLICAÇÃO

Separar:

## Estado efêmero de UI

Exemplos:

- modal aberto;
- aba atual;
- teclado;
- seleção;
- animação.

## Estado persistente de domínio

Exemplos:

- resolução;
- progresso;
- domínio;
- rascunho;
- conteúdo;
- histórico.

Estado persistente deve passar pelo repositório de dados, não viver apenas em store de UI.

---

# 12. PERSISTÊNCIA LOCAL

Interface comum:

```
LocalRepository
```

Implementações:

## Android/iOS

SQLite nativo via plugin Capacitor.

## Web/PWA

IndexedDB usando Dexie.

Não obrigar a versão web e a versão nativa a usar o mesmo mecanismo físico se isso prejudicar confiabilidade.

---

# 13. POR QUE NÃO USAR SOMENTE INDEXEDDB

IndexedDB é apropriado para web, mas persistência pode estar sujeita a políticas de armazenamento do navegador.

Para o app instalado nativamente, progresso educacional deve usar storage nativo mais previsível.

---

# 14. BACKEND REMOTO

Stack inicial recomendada:

**Supabase**

Utilizar para:

- Postgres;
- autenticação;
- RLS;
- sincronização;
- backup em nuvem;
- configurações de conta;
- conteúdo remoto;
- futuras funções sociais;
- Edge Functions.

O cliente não deverá acessar tabelas sem políticas adequadas.

---

# 15. CONTA NÃO É PRÉ-REQUISITO DO MOTOR

O núcleo deve permitir conceitualmente:

```
Modo local/visitante
```

e:

```
Conta sincronizada
```

A decisão final de onboarding de conta será definida na especificação de persistência/sync.

Mesmo sem login, matemática local não deve parar.

---

# 16. OFFLINE-FIRST

Conteúdo necessário a uma sessão deverá poder existir localmente.

Componentes offline:

- MathLive;
- Math Core;
- Compute Engine;
- templates;
- atividades baixadas/bundled;
- blueprints permitidos;
- progresso local;
- Caderno;
- Rascunho;
- gráficos locais.

Não carregar bibliotecas essenciais por CDN em produção mobile.

Todos os assets essenciais deverão estar no pacote/local cache.

---

# 17. CONTENT PACKS

Conteúdo deverá poder ser distribuído em pacotes versionados.

Exemplo:

```
content-pack-basic-math-v1
content-pack-precalculus-v1
content-pack-calculus1-v1
```

Cada pack pode conter:

- currículo;
- aulas;
- blueprints;
- questões fixas;
- dicas;
- recursos visuais;
- metadados.

Isso permite atualizar conteúdo sem atualizar todo o binário quando arquiteturalmente seguro.

---

# 18. SYNC ABSTRACTION

Criar:

```
SyncService
```

Responsável por sincronizar objetos de domínio.

UI nunca deve fazer:

```
supabase.from(...).update(...)
```

diretamente.

Ela chama casos de uso/repositórios.

---

# 19. BACKEND NÃO VALIDA CADA TECLA

A digitação e validação cotidiana devem acontecer localmente sempre que possível.

Evitar:

```
digitar
→ internet
→ servidor
→ resposta
```

Objetivos:

- baixa latência;
- offline;
- custo;
- privacidade.

Backend é principalmente sincronização/conta/conteúdo/serviços futuros.

---

# 20. IA

MVP:

```
AI_TUTOR_ENABLED=false
```

Nenhum pacote fundamental deverá importar cliente de IA.

O módulo futuro passa por interface própria.

---

# 21. ESTRUTURA INICIAL DO REPOSITÓRIO

Sugestão:

```
Eixo-math/
│
├── apps/
│   └── eixo/
│       ├── src/
│       ├── android/
│       └── ios/
│
├── packages/
│   ├── math-core/
│   ├── math-editor/
│   ├── math-templates/
│   ├── curriculum/
│   ├── content-engine/
│   ├── mastery-engine/
│   ├── visualization/
│   ├── data/
│   └── shared/
│
├── content/
│   ├── basic-math/
│   ├── precalculus/
│   └── calculus-1/
│
├── supabase/
│
├── docs/
│   └── architecture/
│
└── MASTER_GDD_SPEC.md
```

Essa estrutura só será criada quando a implementação começar.

---

# 22. MONOREPO

Utilizar workspace JavaScript/TypeScript.

Decisão de package manager e orquestrador pode ser fechada no bootstrap.

Preferência inicial:

- pnpm workspaces;
- evitar adicionar Turborepo/Nx sem necessidade real.

---

# 23. TESTES DO NÚCLEO

## Unitários

Regras específicas.

## Property-based

Usar **fast-check** especialmente para:

- geradores;
- equivalência;
- invariantes;
- seeds;
- domínios;
- operações algébricas;
- casos degenerados.

## Golden tests

MathJSON/LaTeX/rendering esperado.

## Integration

Editor ↔ parser ↔ Math Core.

## E2E

Fluxos críticos mobile/web.

---

# 24. REPRODUÇÃO DE BUGS

Todo bug relacionado a questão deverá carregar:

- activity id;
- version;
- blueprint;
- seed;
- MathJSON;
- app version;
- math-core version.

Isso deve permitir reproduzir a situação em teste.

---

# 25. VERSIONAMENTO DE CAMADAS

Registrar versões independentes quando necessário:

```
app_version
math_core_version
content_version
generator_version
schema_version
```

Isso facilita migração e diagnóstico.

---

# 26. API BOUNDARIES

Interfaces principais:

```
MathEngine
StepValidator
MathEditorAdapter
ContentRepository
ProgressRepository
MasteryEngine
QuestionGenerator
VisualizationAdapter
LocalRepository
SyncService
AuthService
AITutor (future)
```

Essas interfaces deverão ser definidas antes das implementações concretas.

---

# 27. SEGURANÇA DE DEPENDÊNCIAS

- lockfile obrigatório;
- dependabot/Renovate posteriormente;
- versões pinadas em componentes críticos;
- revisar changelogs de MathLive/Compute Engine antes de upgrades;
- testes de regressão obrigatórios antes de atualizar editor/motor.

MathLive e Compute Engine deverão ser tratados como dependências críticas.

---

# 28. ACESSIBILIDADE ARQUITETURAL

Não adicionar acessibilidade apenas no fim.

O adapter do editor deverá expor:

- descrição legível;
- leitura matemática;
- foco;
- ordem semântica.

A UI React deverá utilizar HTML semântico/ARIA quando aplicável.

---

# 29. PERFORMANCE

Metas conceituais:

- editor responde imediatamente;
- navegação entre Quadros fluida;
- validação comum local sem latência perceptível;
- abrir aula sem depender de round-trip remoto;
- autosave local rápido.

Tarefas simbólicas caras poderão usar Web Worker.

---

# 30. WEB WORKERS

Compute Engine, geração de questões e validações mais pesadas deverão poder rodar fora da thread principal.

Objetivo:

não travar:

- cursor;
- teclado;
- animação;
- scroll.

---

# 31. FEATURE FLAGS

Recursos pós-MVP deverão existir atrás de flags quando necessário.

Exemplos:

```
AI_TUTOR_ENABLED
MULTIPLAYER_ENABLED
HANDWRITING_ENABLED
SOCIAL_ENABLED
```

Código não implementado não precisa existir; a arquitetura apenas reserva limites claros.

---

# 32. DECISÕES QUE CONTINUAM ABERTAS

Ainda serão definidos:

- estratégia exata de sync/conflito;
- schema de dados;
- necessidade de login obrigatório/opcional;
- E2E mobile framework;
- analytics/telemetria;
- distribuição de content packs;
- notificações;
- monetização;
- hosting definitivo.

---

# 33. ADR RESUMIDO

**Decisão:** React + TypeScript + Capacitor.

**Razão dominante:** o editor matemático 2D é requisito central e MathLive integra-se diretamente ao ambiente web.

**Trade-off:** o app usa uma WebView nativa do runtime Capacitor em vez de widgets 100% nativos.

**Aceitação:** a experiência deverá ser validada em aparelhos Android de gama intermediária antes de escalar implementação.

---

# 34. PROVA TÉCNICA OBRIGATÓRIA ANTES DO PRODUTO COMPLETO

Antes de construir todo o currículo, criar um protótipo técnico que demonstre:

1. MathLive dentro do app Capacitor;
2. teclado customizado;
3. fração;
4. potência;
5. raiz;
6. log com base;
7. limite;
8. integral definida;
9. navegação de slots;
10. MathJSON;
11. validação simples;
12. salvamento local;
13. offline;
14. gráfico Mafs;
15. desempenho em Android real.

Se esse protótipo falhar em UX ou performance, revisar stack antes de continuar.

---

# 35. REFERÊNCIAS TÉCNICAS CONSULTADAS

- MathLive — https://mathlive.io/
- MathJSON — https://mathlive.io/math-json/
- CortexJS Compute Engine — https://mathlive.io/compute-engine/
- Capacitor — https://capacitorjs.com/
- Mafs — https://mafs.dev/
- Dexie — https://dexie.org/
- capacitor-community/sqlite — https://github.com/capacitor-community/sqlite
- Supabase — https://supabase.com/docs
- fast-check — https://fast-check.dev/
