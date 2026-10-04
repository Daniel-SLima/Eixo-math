# Eixo Math — Estratégia de Testes e Critérios de Aceite

**Status:** especificação inicial  
**Objetivo:** garantir correção matemática, integridade pedagógica, usabilidade do editor e confiabilidade offline.

---

# 1. PRINCÍPIO DE QUALIDADE

O Eixo possui quatro áreas críticas:

1. matemática;
2. editor;
3. conteúdo/adaptação;
4. persistência.

Falha em qualquer uma pode ensinar errado ou fazer o aluno perder trabalho.

Por isso, o projeto deverá possuir cobertura muito acima de uma aplicação comum nessas áreas.

---

# 2. PIRÂMIDE DE TESTES

## Base — unitários e property-based

Maior volume.

## Integração

Editor, motor, conteúdo, persistência e sync.

## E2E web/mobile

Fluxos críticos do usuário.

## Usabilidade e acessibilidade manual

Obrigatórios para UX matemática.

---

# 3. STACK DE TESTES RECOMENDADA

- **Vitest** — unit/integration;
- **fast-check** — property-based testing;
- **Playwright** — E2E web, visual regression e acessibilidade automatizada;
- **Maestro** — E2E mobile Android;
- **axe-core/Playwright** — checks automáticos de acessibilidade.

Testes manuais continuam necessários.

---

# 4. MATH CORE — UNIT TESTS

Cada regra reconhecida deve possuir:

- casos válidos;
- casos inválidos;
- edge cases;
- domínio;
- sinais;
- zero;
- formas equivalentes;
- contraexemplos.

Exemplo distributiva:

Aceitar:

```
3(x+2) → 3x+6
-2(x-4) → -2x+8
```

Rejeitar/classificar:

```
3(x+2) → 3x+2
3(x+2) → 3x+5
```

---

# 5. TESTES DE TRANSFORMAÇÃO

Cada transformação deve verificar:

- equivalência;
- implicação;
- preservação de soluções;
- condições.

Exemplo:

```
x²=4 → x=2
```

não deve ser tratado como equivalente.

---

# 6. PROPERTY-BASED TESTS

Usar fast-check para invariantes.

Exemplos:

## Equações geradas

Para qualquer instância válida do blueprint:

- solução gerada satisfaz equação;
- restrições são respeitadas.

## Fatoração

Expandir(fatorar(expression)) deve preservar equivalência no domínio aplicável.

## Operações em igualdade

Adicionar mesma expressão aos dois lados preserva solução.

## Seeds

Mesma versão + mesma seed gera mesma atividade.

---

# 7. TESTES EM MASSA DE BLUEPRINT

Para cada gerador importante:

```
10.000+ seeds em CI/noturno conforme custo
```

Validar:

- sem divisão por zero;
- sem degeneração proibida;
- dificuldade dentro de faixa;
- solução válida;
- editor suporta notação;
- motor consegue verificar.

Falhas registram seed mínima/reproduzível.

---

# 8. GOLDEN TESTS DE MATHJSON

Expressões de referência deverão possuir snapshots estruturais.

Exemplo:

```
2(x+3)
```

→ MathJSON esperado.

Testar ida e volta:

```
editor/LaTeX
→ MathJSON
→ LaTeX/render
```

sem perda semântica.

---

# 9. TESTES DO EDITOR

Cenários:

- inserir;
- apagar;
- undo/redo;
- seleção;
- cursor;
- slots;
- entrar/sair de estruturas;
- edição anterior;
- duplicar linha.

Templates obrigatórios:

- fração;
- potência;
- raiz;
- log;
- limite;
- derivada;
- integral;
- função por partes.

---

# 10. TESTES DE EXPRESSÕES ANINHADAS

Exemplos:

```
log₂(x²+1)
```

```
       log₂(x)
lim    ───────
x→1     x-1
```

```
 3
 ∫ (x²+1) dx
 0
```

O foco/cursor deve permanecer previsível.

---

# 11. VISUAL REGRESSION

Playwright snapshots para:

- editor;
- templates;
- equações alinhadas;
- mapa;
- gráficos;
- modo claro/escuro;
- tamanhos de fonte.

Baselines devem rodar em ambiente controlado.

---

# 12. TESTES DE ACESSIBILIDADE

Automáticos:

- labels;
- roles;
- contraste detectável;
- foco;
- duplicidade de IDs;
- estrutura ARIA.

Manuais:

- leitor de tela;
- navegação por teclado;
- zoom;
- touch target;
- reduzir movimento;
- compreensão de fórmulas.

Automação não substitui avaliação humana.

---

# 13. TESTES DE CADERNO

- adicionar linha;
- editar linha passada;
- invalidar validações seguintes;
- revalidar;
- salvar;
- fechar app;
- restaurar;
- múltiplos Quadros;
- transferir Rascunho → Caderno.

---

# 14. PRIMEIRO ERRO RELEVANTE

Cenário:

```
2x+4=10
2x=14
x=7
```

Esperado:

- erro principal na segunda linha;
- terceira linha reconhecida como coerente com estado incorreto anterior;
- feedback não duplica erro sem necessidade.

---

# 15. CAMINHO ALTERNATIVO

Questão de fatoração resolvida por outro método.

Esperado:

- matemática correta;
- estratégia reconhecida;
- domínio de fatoração não concedido;
- mensagem não chama resposta de errada.

---

# 16. TESTES DO ADAPTATIVO

Casos:

## Aprende rápido

- reduz repetição;
- avança.

## Só acerta com dica

- progresso;
- sem domínio independente prematuro.

## Pré-requisito falha

- revisão direcionada.

## Autocorreção

- registra erro e autocorreção;
- não trata como falha total.

## Retorno após tempo

- confirmação curta.

---

# 17. TESTES DE CONTEÚDO

Cada habilidade publicada verifica:

- IDs;
- pré-requisitos;
- templates;
- engine support;
- hints;
- answer contract;
- blueprint tests;
- licença/proveniência.

Criar validator de conteúdo executado em CI.

---

# 18. TESTES DE OFFLINE

Obrigatórios:

1. baixar/ter conteúdo;
2. ativar modo avião;
3. abrir aula;
4. resolver;
5. salvar;
6. fechar;
7. reabrir;
8. continuar;
9. concluir;
10. progresso local atualizado.

---

# 19. TESTES DE SYNC

- outbox retry;
- idempotência;
- duplicidade;
- reconnect;
- troca de conta;
- visitante → conta;
- merge de evidências;
- conflict de Caderno;
- tombstone;
- migration.

---

# 20. TESTES DE PERDA DE DADOS

Simular:

- kill do processo durante autosave;
- app em background;
- bateria encerrando;
- crash;
- storage quase cheio;
- falha durante migração.

Critério:

trabalho recente deve ser recuperável dentro do comportamento documentado.

---

# 21. TESTES DE SEGURANÇA

- RLS;
- IDOR;
- auth inválida;
- payload malicioso;
- XSS;
- MathJSON inválido;
- content pack adulterado;
- replay de sync;
- secrets ausentes do bundle;
- usuário A vs B.

---

# 22. TESTES DE PERFORMANCE

Medir:

- latência de tecla → render;
- inserir template;
- mudar de Quadro;
- autosave;
- validação de passo;
- abrir aula;
- gráfico interativo.

Criar orçamento de performance depois do P0 com base em aparelhos reais.

---

# 23. DEVICE MATRIX MVP

Prioridade:

- Android intermediário atual;
- Android de entrada razoável;
- tela pequena;
- tela grande;
- tablet pelo menos em smoke test;
- navegador Chromium;
- outro navegador web compatível relevante.

Não validar apenas em computador potente.

---

# 24. E2E WEB

Playwright:

- onboarding;
- editor tutorial;
- aula;
- Caderno;
- Rascunho;
- mapa;
- progresso;
- Livro;
- offline simulado onde aplicável.

---

# 25. E2E MOBILE

Maestro:

- launch;
- onboarding;
- tocar teclado matemático;
- nova linha;
- Quadro;
- Rascunho;
- voltar;
- kill/relaunch;
- modo avião quando suportado;
- dark mode;
- fluxo até conclusão.

---

# 26. TESTES DE USABILIDADE DO EDITOR

Antes de escalar conteúdo, usuários devem executar:

1. `2x+4=10`;
2. fração;
3. editar numerador;
4. editar denominador;
5. `x²+3`;
6. sair do expoente;
7. raiz;
8. duplicar linha;
9. novo Quadro;
10. Rascunho;
11. expressão aninhada;
12. limite.

Observar sem ensinar excessivamente.

---

# 27. MÉTRICAS DE USABILIDADE

- sabe onde está o cursor?
- sabe onde o próximo símbolo vai entrar?
- consegue sair de estrutura?
- percebe numerador/denominador?
- perde contexto?
- comete erro por UI?
- recupera erro com undo?
- precisa de explicação repetida?

---

# 28. CRITÉRIO DO EDITOR

Antes de liberar expansão curricular, pelo menos usuários de teste devem conseguir escrever confortavelmente:

```
       x² - 4
lim    ──────
x→2     x - 2
```

sem assistência constante.

Fixtures mais avançadas também testam log/derivada/integral.

---

# 29. TESTES DE ACESSO VISUAL

Validar:

- 100% font scale;
- escala aumentada;
- portrait;
- landscape;
- teclado aberto;
- fórmulas longas;
- expressão muito alta.

Nada crítico pode ficar inacessível.

---

# 30. TESTES DE REDUZIR MOVIMENTO

Com opção ativa:

- troca de Quadros;
- feedback;
- gamificação;
- transições;

devem continuar claras sem animação intensa.

---

# 31. TESTES DE GAMIFICAÇÃO

Validar:

- matemática altera visual correto;
- visual não revela resposta antes;
- falha não bloqueia estudo;
- XP/recompensa não permite grind trivial;
- Desafio-Marco aceita métodos válidos.

---

# 32. TESTES DO LIVRO

- entrada desbloqueia;
- atualização conceitual;
- exemplo pessoal;
- favorito;
- links para mapa/prática;
- offline.

---

# 33. TESTES DE MIGRAÇÃO

Cada schema publicado precisa de fixture de upgrade.

Exemplo:

```
schema 1
→ schema 2
→ schema atual
```

Preservar resoluções e progresso.

---

# 34. CI — PULL REQUEST

Gate mínimo:

- typecheck;
- lint;
- unit;
- property-based quick suite;
- content validation;
- integration;
- Playwright crítico;
- build web;
- build/check Android quando viável.

---

# 35. CI — NIGHTLY / EXTENDED

- property tests com mais seeds;
- todos blueprints;
- visual regression;
- performance;
- security scans;
- E2E mais longo.

---

# 36. RELEASE CANDIDATE

Antes de release:

- suite completa verde;
- testes em Android real;
- smoke offline;
- migração;
- content pack;
- acessibilidade;
- checklist de segurança;
- zero blocker/critical conhecido.

---

# 37. SEVERIDADE DE BUG

## Blocker

- perda/corrupção de progresso;
- app não abre;
- matemática ensinada incorretamente em fluxo central;
- acesso indevido a dados.

## Critical

- editor impede resolver habilidade;
- valida caminho inválido como correto;
- rejeita caminho básico correto sistematicamente;
- sync destrói trabalho.

## Major

- funcionalidade importante degradada;
- dica errada;
- gráfico inconsistente.

## Minor

- visual/cosmético sem impacto pedagógico relevante.

---

# 38. BUG MATEMÁTICO TEM PRIORIDADE ESPECIAL

Erro que ensina matemática incorreta não deve ser tratado como bug comum de UI.

Release gate deve bloquear.

---

# 39. CRITÉRIOS DE ACEITE DO MVP

## Editor

- funciona em Android real;
- templates do MVP;
- navegação estrutural compreensível;
- autosave;
- undo/redo.

## Motor

- regras publicadas testadas;
- caminhos alternativos;
- domínio;
- não comprovado.

## Conteúdo

- rota MVP coerente;
- blueprints validados;
- sem questões conhecidamente incorretas.

## Offline

- fluxo completo em modo avião após conteúdo disponível.

## UX

- onboarding;
- mapa;
- aula;
- atividade;
- conclusão;
- progresso.

## Dados

- sem perda nos cenários críticos.

## Acessibilidade

- baseline atendida.

## IA

- nenhuma dependência em runtime.

---

# 40. QUALITY GATES PARA EXPANSÃO DO CURRÍCULO

Nova habilidade só entra quando:

1. editor suporta notação;
2. motor suporta operações;
3. erros principais cobertos;
4. conteúdo validado;
5. testes;
6. UX;
7. acessibilidade;
8. dados/telemetria necessários definidos.

---

# 41. DEFINIÇÃO DE DONE — FEATURE

Uma feature só está Done quando:

- requisito implementado;
- teste automatizado adequado;
- acessibilidade considerada;
- offline considerado;
- erro/fallback considerado;
- documentação atualizada;
- sem regressão matemática conhecida.

---

# 42. DEFINIÇÃO DE DONE — HABILIDADE CURRICULAR

- conteúdo;
- prerequisites;
- editor;
- engine;
- hints;
- blueprints;
- mastery;
- tests;
- review;
- publishable.

---

# 43. PRINCÍPIO FINAL

> **No Eixo, qualidade significa não apenas “o software funciona”, mas “a matemática continua correta enquanto o software funciona”.**
