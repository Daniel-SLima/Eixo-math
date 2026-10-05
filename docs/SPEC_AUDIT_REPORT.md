# Eixo Math — Auditoria Final de Consistência da Especificação

**Data:** 2026-10-04  
**Status:** revisão concluída em nível estrutural  
**Resultado da auditoria na data original:** pronto para revisão do proprietário. O proprietário autorizou a implementação em 2026-10-04; o estado vigente está em `MASTER_GDD_SPEC.md`.

---

# 1. ESCOPO DA AUDITORIA

Foram comparados:

- MASTER_GDD_SPEC.md;
- MVP_SCOPE.md;
- PRODUCT_DECISIONS.md;
- MVP_CURRICULUM_DETAIL.md;
- MVP_MASTERY_CRITERIA.md;
- DESIGN_SYSTEM.md;
- TECH_STACK.md;
- DATA_MODEL_V1.md;
- DATA_SYNC_OFFLINE.md;
- SECURITY_PRIVACY_TELEMETRY.md;
- TEST_STRATEGY.md;
- ROADMAP.md;
- CODEX_HANDOFF.md;
- SPEC_REVIEW_CHECKLIST.md.

---

# 2. RESULTADO GERAL

Não foi encontrada contradição estrutural que impeça o projeto de seguir para implementação após aprovação explícita.

Os documentos convergem nos seguintes princípios:

- matemática escrita em 2D;
- caminhos alternativos válidos;
- motor determinístico;
- IA fora do MVP;
- local-first/offline;
- Android como prioridade;
- conta opcional;
- currículo MVP terminando em introdução prática a limites;
- expansão posterior para Pré-Cálculo e Cálculo I completos;
- gamificação subordinada à matemática;
- recursos sociais fora do MVP;
- P0 técnico como gate obrigatório.

---

# 3. INCONSISTÊNCIAS ENCONTRADAS E CORRIGIDAS

## 3.1 TECH_STACK continha decisões já fechadas como “abertas”

Antes:

- schema de dados;
- sync/conflitos;
- login;
- telemetria;
- content packs.

Esses pontos já haviam sido detalhados em documentos posteriores.

Correção:

TECH_STACK agora reconhece explicitamente as decisões já fechadas e mantém como abertas apenas implementações/refinamentos realmente posteriores.

## 3.2 Segurança dizia que faixa etária ainda não estava definida

PRODUCT_DECISIONS definiu público primário 14+.

Correção:

SECURITY_PRIVACY_TELEMETRY agora assume público 14+, incluindo possível uso por adolescentes de 14–17 anos, mantendo validação jurídica como requisito pré-lançamento.

## 3.3 Modelo do Codex não estava documentado

Decisão do proprietário:

```
GPT-6 Sol
reasoning: medium
```

Correção:

CODEX_HANDOFF registra Sol/médio como padrão e proíbe mudança automática para configuração acima desse orçamento.

---

# 4. CONSISTÊNCIA DO MVP

MVP_SCOPE e MVP_CURRICULUM_DETAIL são compatíveis.

Escopo curricular público:

```
fundamentos
→ frações
→ potências/raízes
→ álgebra
→ equações
→ plano cartesiano/funções
→ fatoração
→ funções racionais/domínio
→ introdução a limites
```

Notações avançadas como:

- log;
- derivada;
- integral;

não precisam de aulas públicas no MVP, mas devem ser exercitadas no P0/test harness para validar a arquitetura do editor.

Isso é intencional e não é conflito.

---

# 5. CONSISTÊNCIA DOS DESAFIOS

MVP_SCOPE exige pelo menos 2 Desafios-Marco.

MVP_CURRICULUM_DETAIL prevê:

1. mecanismo de equilíbrio;
2. conectar dois pontos;
3. desafio final de limite.

Portanto há cobertura acima do mínimo.

---

# 6. CONSISTÊNCIA DE IA

Todos os documentos centrais convergem em:

```
AI_TUTOR_ENABLED=false
```

MVP não depende de:

- API;
- chave do usuário;
- LLM para correção;
- LLM para geração runtime.

Módulo futuro permanece especificado.

---

# 7. CONSISTÊNCIA DE CONTA/SYNC

Direção:

- visitante pode começar;
- local-first;
- SQLite/IndexedDB;
- sync opcional para backup/múltiplos dispositivos;
- Supabase é backend remoto inicial, não requisito para cada interação.

MVP local continua válido caso sync remoto ainda não atinja qualidade de release.

---

# 8. CONSISTÊNCIA DE DADOS

DATA_MODEL_V1 segue DATA_SYNC_OFFLINE:

- evidence append-only;
- mastery como projeção;
- revisions em objetos mutáveis;
- outbox;
- tombstones;
- conflito de Board sem perda silenciosa.

Nenhuma inconsistência relevante encontrada.

---

# 9. CONSISTÊNCIA DO MOTOR

MASTER_GDD, MVP_SCOPE e TEST_STRATEGY convergem em:

- VALID;
- INVALID;
- UNPROVEN;
- primeiro erro relevante;
- caminhos alternativos;
- domínio/contexto;
- objetivo pedagógico separado de validade matemática.

O escopo do Math Core MVP corresponde às aulas publicadas.

---

# 10. CONSISTÊNCIA DE DOMÍNIO

MVP_MASTERY_CRITERIA concretiza o modelo abstrato do MASTER_GDD.

Mantidos:

- cálculo;
- interpretação;
- representação;
- aplicação;
- transferência;
- autocorreção;
- hints;
- anti-grind;
- revisão orgânica.

Heurísticas são explicitamente versionáveis e calibráveis.

---

# 11. CONSISTÊNCIA DO EDITOR

DESIGN_SYSTEM, TECH_STACK, MASTER_GDD e MVP_SCOPE convergem em:

- MathLive como base;
- MathJSON;
- slots;
- teclado customizado;
- editor 2D;
- hit areas ampliadas;
- barra estrutural;
- alinhamento;
- acessibilidade;
- P0 antes de escalar produto.

---

# 12. CONSISTÊNCIA OFFLINE

Todos os documentos relevantes mantêm:

> conteúdo disponível localmente deve continuar estudável em modo avião.

Backend não participa de cada tecla/linha.

---

# 13. CONSISTÊNCIA DE SEGURANÇA

- RLS;
- service role nunca no cliente;
- content pack sem código remoto;
- analytics separado de progresso;
- nada de telemetria de cada tecla;
- Rascunho privado;
- sem IA runtime.

Coerente com stack e modelo de dados.

---

# 14. ITENS AINDA ABERTOS — NÃO BLOQUEADORES DO P0

## Branding

- logo final;
- pesquisa de marca/nome antes de publicação;
- ilustrações finais.

## Produto futuro

- monetização;
- notificações;
- professor/turma;
- social;
- multiplayer;
- Bluetooth;
- IA;
- escrita manual;
- exportação.

## Distribuição

- publicação iOS inicial ou posterior;
- hosting final.

Esses itens não precisam ser resolvidos antes do P0.

---

# 15. ITENS QUE PRECISAM DE VALIDAÇÃO EMPÍRICA

Não são lacunas de especificação.

## P0

Validar:

- MathLive dentro do Capacitor;
- foco;
- teclado;
- slots;
- performance;
- Android real.

## UX

Testar:

- fração;
- expoente;
- raiz;
- limite;
- expressões aninhadas;
- Quadros.

## Pedagogia

Calibrar:

- pesos de evidence;
- threshold de mastery;
- dificuldade;
- tamanho das sessões.

---

# 16. RISCOS PRINCIPAIS ATUAIS

## Risco 1 — editor matemático no mobile

Mitigação:

P0 antes de produto inteiro.

## Risco 2 — validação matemática crescer demais

Mitigação:

Math Core limitado ao currículo publicado e expandido por skill.

## Risco 3 — excesso de escopo

Mitigação:

MVP vertical até primeiros limites; currículo completo depois.

## Risco 4 — adaptação prematura complexa

Mitigação:

heurísticas explicáveis no MVP.

## Risco 5 — perda de dados offline/sync

Mitigação:

local-first, outbox, revisions, snapshots e testes.

---

# 17. PERFIL DE EXECUÇÃO DO CODEX

Padrão:

```
GPT-6 Sol
reasoning_effort: medium
```

Adequado para:

- P0;
- arquitetura;
- math-core;
- editor;
- testes;
- refactors.

Restrição:

não mudar automaticamente para modelo/nível acima.

Modelos mais econômicos podem ser escolhidos manualmente pelo proprietário para tarefas mecânicas.

---

# 18. GATES ANTES DE AUTORIZAR IMPLEMENTAÇÃO

A especificação documental está suficientemente consistente.

A única ação administrativa restante é aprovação explícita do proprietário.

Antes disso:

```
SPEC_STATUS=REVIEW_READY
IMPLEMENTATION_AUTHORIZED=false
```

Após aprovação explícita:

```
SPEC_STATUS=READY_FOR_IMPLEMENTATION
IMPLEMENTATION_AUTHORIZED=true
```

---

# 19. RECOMENDAÇÃO DA AUDITORIA

**Aprovar a especificação para iniciar P0, não para implementar o produto inteiro de uma vez.**

A primeira entrega deve continuar sendo exclusivamente:

> prova técnica do editor/motor/Capacitor em Android.

O avanço para P1+ depende do gate de P0.

---

# 20. CONCLUSÃO

A documentação atual é suficientemente detalhada para que o Codex não precise inventar:

- visão;
- currículo;
- UX matemática;
- arquitetura;
- dados;
- segurança;
- escopo;
- QA.

As incertezas remanescentes são principalmente hipóteses que só podem ser resolvidas com protótipo e teste real.
