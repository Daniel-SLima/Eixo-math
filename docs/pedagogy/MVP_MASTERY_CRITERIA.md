# Eixo Math — Critérios de Domínio do MVP

**Status:** baseline pedagógico implementável  
**Objetivo:** definir quando uma habilidade avança entre estados no MVP sem depender de IA ou modelo estatístico opaco.

---

# 1. PRINCÍPIO

Domínio não é uma porcentagem fixa de acertos.

O MVP usará heurísticas explícitas baseadas em evidências.

Estados:

```
UNSEEN
INTRODUCED
LEARNING
PRACTICING
CONSOLIDATING
MASTERED
REVIEW_RECOMMENDED
GAP_DETECTED
```

---

# 2. DIMENSÕES

```
CALCULATION
INTERPRETATION
REPRESENTATION
APPLICATION
TRANSFER
```

Nem toda habilidade exige todas as dimensões para MASTERED.

---

# 3. FORÇA DE EVIDÊNCIA

## Muito forte

- sucesso independente;
- contexto novo;
- atividade de transferência;
- dificuldade adequada ou alta.

## Forte

- sucesso independente direto.

## Média

- sucesso com dica leve;
- autocorreção após erro.

## Fraca

- sucesso após dica forte.

## Exposição

- demonstração quase completa.

---

# 4. EVIDÊNCIA NEGATIVA

Uma falha isolada não derruba domínio.

Peso aumenta quando:

- mesmo erro se repete;
- contextos diferentes;
- erro recente;
- habilidade é pré-requisito direto.

---

# 5. INTRODUCED → LEARNING

Condição:

- conteúdo apresentado;
- pelo menos uma atividade guiada iniciada.

---

# 6. LEARNING → PRACTICING

Condição típica:

- 2 evidências positivas;
- pelo menos 1 sem demonstração completa;
- interface necessária já compreendida.

---

# 7. PRACTICING → CONSOLIDATING

Condição típica:

- 3 sucessos independentes ou equivalentes;
- pelo menos 2 variações estruturais;
- sem erro conceitual recorrente nas últimas evidências.

---

# 8. CONSOLIDATING → MASTERED

Baseline MVP:

- pelo menos 4 evidências positivas relevantes;
- pelo menos 2 contextos/representações;
- pelo menos 2 sucessos independentes recentes;
- nenhuma dica forte nas 2 evidências finais;
- sem padrão de erro recorrente ativo.

Para habilidades-chave, exigir aplicação/transferência.

---

# 9. MASTERED → REVIEW_RECOMMENDED

Pode ocorrer quando:

- confiança cai por ausência prolongada;
- erro recente relevante;
- pré-requisito reaparece e falha.

Não apagar histórico de domínio.

---

# 10. GAP_DETECTED

Usar quando:

- padrão de erro recorrente;
- habilidade está bloqueando skill posterior;
- evidência suficiente aponta causa raiz.

Não ativar por um único erro.

---

# 11. RETENÇÃO

No MVP:

- não decair score automaticamente;
- reduzir confiança após tempo sem evidência;
- confirmar com atividade curta quando necessário.

---

# 12. AJUDA

```
sem ajuda            1.0
dica leve            0.75
dica forte           0.45
demonstração         0.15
```

Pesos acima são heurísticos iniciais, não “nota”.

Podem ser ajustados após testes.

---

# 13. AUTOCORREÇÃO

Erro + correção sem dica:

- registra error code;
- adiciona evidência positiva média/forte;
- não conta igual a sucesso direto;
- não gera lacuna isoladamente.

---

# 14. CAMINHO FORA DO OBJETIVO

Atividade de fatoração resolvida por método diferente:

- evidência de matemática geral;
- evidência da estratégia realmente usada;
- nenhuma evidência positiva de fatoração se não demonstrada.

---

# 15. TIPOS DE HABILIDADE

## Procedural

Exemplos:
- operações;
- frações;
- distributiva.

MASTERED exige:
- CALCULATION forte;
- variação;
- algum uso em contexto posterior.

## Conceptual

Exemplos:
- igualdade;
- função;
- limite.

MASTERED exige:
- INTERPRETATION;
- REPRESENTATION;
- não apenas algoritmo.

## Representational

Exemplos:
- coordenadas;
- gráfico;
- função/tabela.

MASTERED exige:
- REPRESENTATION em mais de uma direção.

## Integrative

Exemplos:
- equação com parênteses;
- limite por fatoração.

MASTERED exige:
- CALCULATION;
- escolha/combinação de habilidades;
- TRANSFER ou APPLICATION.

---

# 16. PERFIL DE DOMÍNIO POR GRUPO MVP

## MB-ARI-06 / MB-ARI-07 — ordem/operações

Tipo:
Procedural.

Obrigatório:
- CALCULATION.

Para MASTERED:
- 4 sucessos;
- pelo menos 2 expressões estruturais diferentes;
- uma com parênteses;
- uma com números negativos.

---

## MB-NUM-04 — negativos

Tipo:
Procedural + conceptual.

Obrigatório:
- CALCULATION;
- INTERPRETATION.

Para MASTERED:
- reta/ordenação;
- operações;
- sinais em pelo menos 2 contextos.

---

## MB-FRA-01 — significado de fração

Tipo:
Conceptual/representational.

Obrigatório:
- INTERPRETATION;
- REPRESENTATION.

Não pode ser dominada apenas por contas.

---

## MB-FRA-02 / 03 — equivalência e simplificação

Tipo:
Procedural + conceptual.

Obrigatório:
- CALCULATION;
- INTERPRETATION.

Exigir:
- reconhecer equivalência;
- produzir forma equivalente;
- simplificar.

---

## MB-FRA-06/07/08 — soma/subtração

Tipo:
Procedural.

Obrigatório:
- CALCULATION.

Consolidação:
- denominadores iguais e diferentes;
- sinais.

---

## MB-FRA-09/10 — multiplicação/divisão

Tipo:
Procedural.

Obrigatório:
- CALCULATION;
- ao menos um problema contextual simples para aplicação.

---

## MB-POT-01 — potência

Tipo:
Conceptual + procedural.

Obrigatório:
- INTERPRETATION;
- CALCULATION.

Exigir:
- leitura;
- escrita;
- cálculo.

---

## MB-RAI-01/02/03 — raiz

Tipo:
Conceptual + procedural.

Obrigatório:
- relação potência↔raiz;
- raízes exatas.

---

## MB-ALG-01/02/03 — linguagem algébrica

Tipo:
Conceptual.

Obrigatório:
- INTERPRETATION.

Atividades:
- identificar variável;
- termo;
- coeficiente;
- constante.

---

## MB-ALG-04 — substituição

Tipo:
Procedural + representational.

Obrigatório:
- CALCULATION;
- uso dentro de função posteriormente.

---

## MB-ALG-05/06 — termos semelhantes/simplificação

Tipo:
Procedural.

Obrigatório:
- CALCULATION;
- variedade de sinais/ordem.

---

## MB-ALG-07 — distributiva

Tipo:
Integrative.

Obrigatório:
- CALCULATION;
- TRANSFER.

Para MASTERED:
- coeficiente positivo;
- negativo;
- dentro de equação;
- pelo menos uma atividade sem título entregando o método.

---

## MB-EQU-01 — igualdade

Tipo:
Conceptual.

Obrigatório:
- INTERPRETATION.

Exigir:
- reconhecer operações que preservam igualdade.

---

## MB-EQU-02/03/04 — equações iniciais

Tipo:
Integrative.

Obrigatório:
- CALCULATION;
- INTERPRETATION.

---

## MB-EQU-05/06 — múltiplas etapas/parênteses

Tipo:
Integrative.

Obrigatório:
- CALCULATION;
- escolha de operações;
- distributiva quando necessário.

---

## MB-EQU-08 — verificar solução

Tipo:
Application.

Obrigatório:
- substituir;
- concluir se satisfaz.

---

## MB-CAR-01/02/04 — coordenadas

Tipo:
Representational.

Obrigatório:
- REPRESENTATION.

Exigir:
- ponto → coordenada;
- coordenada → ponto.

---

## PC-FUN-01/02/03 — função

Tipo:
Conceptual.

Obrigatório:
- INTERPRETATION;
- REPRESENTATION.

Exigir:
- entrada/saída;
- notação;
- reconhecer relação funcional em casos básicos.

---

## PC-FUN-04 — avaliar função

Tipo:
Procedural.

Obrigatório:
- CALCULATION;
- conexão com substituição.

---

## PC-FUN-08 — múltiplas representações

Tipo:
Representational.

Obrigatório:
- REPRESENTATION;
- TRANSFER.

Exigir:
- fórmula↔tabela;
- fórmula↔gráfico em casos simples.

---

## PC-LIN-01/02 — inclinação

Tipo:
Conceptual + procedural.

Obrigatório:
- CALCULATION;
- INTERPRETATION;
- REPRESENTATION.

Exigir:
- Δy/Δx;
- leitura visual;
- sinal da inclinação.

---

## PC-LIN-03/07 — função linear/modelagem

Tipo:
Integrative.

Obrigatório:
- CALCULATION;
- REPRESENTATION;
- APPLICATION.

Desafio-Marco pode fornecer evidência forte.

---

## PC-ALG-03 — fator comum

Tipo:
Procedural.

Obrigatório:
- CALCULATION.

---

## PC-ALG-05 — diferença de quadrados

Tipo:
Integrative.

Obrigatório:
- CALCULATION;
- TRANSFER.

Exigir:
- reconhecer padrão;
- fatorar;
- usar posteriormente em racional/limite.

Uso em limite vale evidência de retenção forte.

---

## PC-ALG-09 / PC-RAC-01 — domínio racional

Tipo:
Conceptual + procedural.

Obrigatório:
- INTERPRETATION;
- CALCULATION.

Exigir:
- encontrar valor proibido;
- explicar denominador zero.

---

## PC-RAC-02/03 — simplificação/restrição/buraco

Tipo:
Conceptual + representational.

Obrigatório:
- CALCULATION;
- INTERPRETATION;
- REPRESENTATION.

Não dominar só cancelando fatores.

---

## C1-LIM-01 — aproximação

Tipo:
Conceptual.

Obrigatório:
- INTERPRETATION.

---

## C1-LIM-03/04 — tabela/gráfico

Tipo:
Representational.

Obrigatório:
- REPRESENTATION;
- INTERPRETATION.

---

## C1-LAL-01 — substituição direta

Tipo:
Procedural.

Obrigatório:
- CALCULATION;
- identificar quando é suficiente.

---

## C1-LAL-03 — indeterminação 0/0

Tipo:
Conceptual.

Obrigatório:
- INTERPRETATION.

Exigir:
- não concluir valor do limite a partir de 0/0.

---

## C1-LAL-04/05 — limite com fatoração/cancelamento

Tipo:
Integrative.

Obrigatório:
- CALCULATION;
- INTERPRETATION;
- TRANSFER.

Para MASTERED:
- fatorar corretamente;
- respeitar x≠a;
- calcular limite;
- distinguir expressão simplificada da função original no ponto.

---

# 17. DESAFIOS-MARCO

Desafios produzem evidência forte em:

- APPLICATION;
- TRANSFER.

Mas só para habilidades realmente utilizadas.

---

# 18. QUESTÃO COM TÍTULO ENTREGANDO MÉTODO

Tem peso menor de TRANSFER.

Exemplo:

> Use distributiva...

serve para aprendizagem.

Questão neutra:

> Simplifique...

gera evidência maior de escolha estratégica.

---

# 19. MULTIPLE CHOICE

Não pode sozinho levar skill procedural crítica a MASTERED.

---

# 20. AJUSTE DE DIFICULDADE

Se 3 sucessos independentes consecutivos em dificuldade atual:

- aumentar variação/complexidade.

Se 2 falhas conceituais próximas:

- não aumentar;
- diagnosticar pré-requisito.

---

# 21. ANTI-GRIND

Mesma família/estrutura repetida produz evidência decrescente.

Exemplo conceitual:

```
1ª variação: peso 1.0
2ª muito parecida: 0.8
3ª muito parecida: 0.5
```

Objetivo:
forçar variedade, não volume.

---

# 22. RETORNO DE HABILIDADE EM CONTEÚDO AVANÇADO

Uso correto de habilidade antiga em contexto avançado:

- pode confirmar retenção;
- pode elevar confiança;
- evita revisão artificial.

---

# 23. REVISÃO RECOMENDADA

Gatilho MVP:

- 2 erros relevantes recentes em contextos diferentes;
- ou erro crítico em pré-requisito + baixa confiança;
- ou ausência longa + próximo módulo depende fortemente.

---

# 24. REVISÃO NECESSÁRIA

Somente quando:

- skill é prerequisite crítica;
- evidência atual indica que a lacuna impede próxima habilidade.

Evitar excesso de bloqueio.

---

# 25. EXPLICAÇÃO AO ALUNO

Nunca mostrar fórmula interna de score.

Mostrar:

> Você já resolve bem os cálculos, mas ainda precisa praticar como reconhecer quando usar distributiva.

---

# 26. LOG DE DECISÃO

Mastery Engine deverá conseguir explicar internamente:

```
why_state_changed
evidence_ids
rule_id
```

Isso facilita QA/debug.

---

# 27. CONFIGURAÇÃO VERSIONADA

Heurísticas de domínio devem possuir versão:

```
mastery_model_version
```

Mudanças futuras podem recalcular projeções a partir de evidence.

---

# 28. PRINCÍPIO FINAL

> Domínio no MVP deve ser simples o suficiente para explicar e forte o suficiente para não ser enganado por repetição mecânica.
