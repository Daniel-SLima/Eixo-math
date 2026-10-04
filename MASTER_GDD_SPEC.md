# MASTER GDD / PRODUCT SPEC — Eixo Math

**Versão de especificação:** 0.11 em construção  
**Status:** pré-implementação  
**Escopo inicial:** Matemática Básica → Pré-Cálculo → Cálculo I  
**Plataformas-alvo:** mobile como prioridade; expansão futura para web/desktop/tablet  
**Nome do produto:** Eixo

---

# 1. VISÃO DO PRODUTO

Eixo é um aplicativo/jogo educacional de matemática cujo objetivo é levar um estudante desde fundamentos matemáticos até conteúdos de Cálculo I por meio de prática real, progressiva e interativa.

O projeto não deve se tornar um “quiz com skin de jogo”. A matemática precisa ser a própria ferramenta de interação.

O estudante deve poder:

- desenvolver resoluções passo a passo;
- escrever expressões matemáticas reais;
- utilizar um caderno de resolução;
- utilizar um rascunho separado;
- testar hipóteses;
- observar gráficos e representações;
- receber feedback sobre erros específicos;
- aplicar conceitos em problemas contextualizados;
- revisar pré-requisitos quando surgirem lacunas;
- avançar conforme demonstra domínio.

Princípio central:

> A matemática não é uma pergunta dentro do jogo. A matemática é a ferramenta usada para resolver problemas dentro dele.

---

# 2. OBJETIVO EDUCACIONAL

O produto deverá oferecer uma trilha capaz de receber alunos com base fraca e conduzi-los progressivamente por:

1. Matemática Básica;
2. Álgebra e fundamentos;
3. Pré-Cálculo;
4. Cálculo I.

A progressão não será apenas linear. O currículo deverá ser representado por uma árvore/grafo de dependências.

Exemplo:

```
Operações
   ↓
Frações
   ↓
Manipulação algébrica
   ↓
Funções racionais
   ↓
Limites
```

Se um estudante estiver errando limites por não saber fatorar, o sistema deve identificar a lacuna de fatoração em vez de apenas repetir questões de limite.

---

# 3. PRINCÍPIOS PEDAGÓGICOS

## 3.1 O aluno precisa calcular

A resposta final isolada não deve ser suficiente quando o objetivo pedagógico exige desenvolvimento.

Exemplo:

```
3(x + 2) = 18
3x + 6 = 18
3x = 12
x = 4
```

O sistema deverá compreender e, conforme o modo, validar cada transformação.

## 3.2 Caminhos diferentes podem ser corretos

O aplicativo não poderá exigir uma única sequência previamente cadastrada.

Exemplo: uma equação quadrática pode ser resolvida por:

- fatoração;
- fórmula quadrática;
- completamento de quadrados;
- outro método matematicamente válido.

O sistema deve verificar validade matemática e não apenas comparar strings.

## 3.3 Visualização não substitui resolução

Gráficos, animações e simulações devem servir para criar intuição, permitir previsão e confirmar significado.

O estudante continua responsável pelo cálculo quando o objetivo da atividade for cálculo.

## 3.4 Interface também precisa ser ensinada

O sistema nunca poderá exigir que o aluno saiba usar uma ferramenta matemática do aplicativo que ainda não foi apresentada.

É necessário distinguir:

- não saber matemática;
- não saber usar o aplicativo.

---

# 4. LOOP DE APRENDIZAGEM

A sequência preferencial é:

```
ver
↓
experimentar
↓
prever
↓
entender
↓
calcular
↓
aplicar
↓
explicar
```

Estrutura típica de uma aula:

1. verificação/revisão de pré-requisitos;
2. introdução do problema ou conceito;
3. exploração/experimentação;
4. formalização matemática;
5. tutorial de nova ferramenta, se necessário;
6. exemplo resolvido;
7. prática guiada;
8. prática independente;
9. aplicação;
10. desafio combinando conhecimentos;
11. avaliação de domínio;
12. revisão futura espaçada/adaptativa.

---

# 5. NÚCLEO DE INTERAÇÃO

A experiência matemática será composta por três sistemas distintos:

## 5.1 Caderno Matemático

Local da resolução oficial avaliada.

## 5.2 Teclado Matemático

Ferramenta para escrever matemática. Não resolve automaticamente.

## 5.3 Rascunho

Área para cálculos auxiliares, tentativas e anotações que não precisam aparecer na resolução final.

Separação obrigatória:

- teclado escreve;
- caderno registra raciocínio;
- rascunho auxilia;
- calculadora, quando permitida, calcula;
- motor pedagógico observa e orienta.

---

# 6. TELA BASE DE ATIVIDADE

Referência conceitual mobile:

```
┌──────────────────────────────────────┐
│ ←  Equações Lineares         3 / 8  │
│                        [?] [⋮]       │
├──────────────────────────────────────┤
│ ENUNCIADO                            │
│                                      │
│ Resolva:                             │
│        3(x + 2) = 18                 │
│                                      │
│ [Rever conceito]                     │
├──────────────────────────────────────┤
│ RESOLUÇÃO                            │
│                                      │
│ 1 │ 3(x + 2) = 18              ✓    │
│ 2 │ __________________________       │
│                                      │
│        [+ Nova linha]                │
├──────────────────────────────────────┤
│ [📝 Rascunho]              [💡 Dica] │
├──────────────────────────────────────┤
│ TECLADO MATEMÁTICO                   │
└──────────────────────────────────────┘
```

A atividade deverá permitir rolagem. O enunciado poderá ser recolhido para liberar espaço.

---

# 7. CADERNO MATEMÁTICO

## 7.1 Linhas de resolução

Uma resolução será formada por linhas estruturadas.

Exemplo:

```
1 │ 3(x + 2) = 18
2 │ 3x + 6 = 18
3 │ 3x = 12
4 │ x = 4
```

Internamente, cada linha deverá poder carregar:

- expressão matemática;
- posição;
- estado de validação;
- relação com a linha anterior;
- erros reconhecidos;
- dicas usadas;
- tipo de linha;
- metadados pedagógicos.

## 7.2 Tipos de linha

### Linha matemática

Ex.: `2x + 4 = 10`

### Anotação

Ex.: `Preciso isolar x.`

### Conclusão

Ex.: `Resposta: x = 3`

### Justificativa

Ex.: `Subtraindo 4 dos dois lados.`

## 7.3 Nova linha

Deve oferecer:

- linha vazia;
- duplicar linha anterior.

Duplicar é recurso de digitação, não dica.

## 7.4 Edição retroativa

O aluno pode editar linhas anteriores.

Quando isso ocorrer, as etapas posteriores precisam ser revalidadas.

## 7.5 Desfazer/refazer

Obrigatório no Caderno e Rascunho.

## 7.6 Salvamento automático

Salvar:

- atividade atual;
- resolução;
- rascunho;
- cursor/contexto;
- progresso.

Ao reabrir o aplicativo, o estudante deve retornar ao ponto em que parou.

---

# 8. EDITOR MATEMÁTICO ESTRUTURADO

Expressões não podem existir apenas como texto bruto.

`3(x + 2) = 18` deverá possuir representação matemática estruturada, por exemplo AST/árvore de expressão.

Exemplo conceitual:

```
Equality
├── Left
│   └── Multiply
│       ├── 3
│       └── Add
│           ├── x
│           └── 2
└── Right
    └── 18
```

Isso será necessário para:

- precedência;
- seleção matemática;
- frações;
- expoentes;
- raízes;
- funções;
- equivalência;
- validação de passos.

---

# 9. CURSOR E SELEÇÃO MATEMÁTICA

O cursor deverá navegar pela estrutura matemática.

## Fração

```
 x + 1
───────
 x - 2
```

O usuário precisa tocar diretamente no numerador ou denominador.

## Potência

`x^(2x+1)`

O expoente é uma região editável independente.

## Raiz

`√(x+3)`

O cursor entra na região interna.

## Seleção

Em `3(x+2)`, o usuário pode selecionar:

- `x+2`;
- `3(x+2)`.

Não depender de seleção caractere a caractere.

Ações seguras:

- copiar;
- recortar;
- colar;
- destacar;
- enviar para rascunho;
- adicionar anotação.

Evitar durante aprendizagem:

- resolver;
- simplificar automaticamente;
- fatorar automaticamente;
- derivar automaticamente;
- integrar automaticamente.

---

# 10. NOTAÇÃO

O editor deve compreender:

- multiplicação implícita: `3x`;
- multiplicação por parênteses: `2(x+1)`;
- parênteses inteligentes;
- frações estruturadas;
- potências;
- raízes;
- valor absoluto;
- inequações;
- funções;
- trigonometria;
- limites;
- derivadas;
- integrais.

O editor não pode depender de teclado físico.

---

# 11. TECLADO MATEMÁTICO PROGRESSIVO

O teclado começa simples e cresce junto com o currículo.

## Nível 1 — Aritmética

```
0–9
+ − × ÷
( ) =
.
```

## Nível 2 — Álgebra inicial

```
x y a b
x²
fração
√
```

## Nível 3 — Álgebra avançada

```
xⁿ
|x|
±
< > ≤ ≥
```

## Nível 4 — Funções

```
f(x)
g(x)
→
```

## Nível 5 — Trigonometria

```
sin cos tan
π
°
```

Posteriormente funções trigonométricas inversas.

## Nível 6 — Exponenciais/logaritmos

```
e
eˣ
log
ln
10ˣ
```

## Nível 7 — Cálculo

```
lim
→
∞
d/dx
f'(x)
∫
dx
```

Esses botões escrevem símbolos. Não resolvem automaticamente.

Quando houver muitas ferramentas, usar abas como:

```
[Básico] [Álgebra] [Funções] [Trig] [Cálculo]
```

Também poderá existir área de recentes/favoritos.

---

# 12. TUTORIAL DE NOVA FERRAMENTA

Nenhuma ferramenta nova deve surgir sem apresentação.

Exemplo para raiz:

## Etapa 1 — Descoberta

`√`

“Nova ferramenta desbloqueada.”

## Etapa 2 — Aprender a interface

O sistema pede apenas:

> Escreva `√16`.

Aqui se testa uso do aplicativo, não conhecimento matemático.

## Etapa 3 — Significado

Explicar que `√16` procura o número cujo quadrado resulta em 16.

## Etapa 4 — Uso guiado

Calcular `√25`.

## Etapa 5 — Uso autônomo

Calcular `√81` sem instrução de interface.

Só depois a ferramenta passa a ser considerada incorporada.

---

# 13. AJUDA PERMANENTE DE FERRAMENTAS

Pressionar/segurar um botão deverá abrir uma ficha curta.

Exemplo:

```
sin
Nome: seno
Exemplo: sin(30°) = 1/2

[Rever explicação]
[Ver exemplo]
[Praticar]
```

O perfil poderá possuir uma “Caixa de Ferramentas” mostrando ferramentas aprendidas, em aprendizado e ainda bloqueadas.

---

# 14. RASCUNHO

Área independente da resolução oficial.

Deve abrir e fechar rapidamente sem perda de contexto.

## 14.1 Rascunho livre

```
18 - 6 = 12
12 ÷ 3 = 4
4 × 3 = 12
```

## 14.2 Rascunho rápido

| Cálculo | Resultado |
|---|---:|
| `18 - 6` | `12` |
| `12 / 3` | `4` |
| `4 × 3` | `12` |

O rascunho não deve ser tratado como prova. Tentativas e correções não devem gerar punição pedagógica automática.

## 14.3 Transferência

O usuário poderá:

- enviar cálculo do rascunho para o Caderno;
- enviar trecho do Caderno para o rascunho.

Nada do rascunho entra automaticamente na resposta final.

---

## 14.4 SISTEMA DE QUADROS DE TRABALHO

O ambiente de resolução não deverá ser limitado a uma única página longa.

Cada atividade poderá possuir múltiplos **Quadros de Trabalho**, equivalentes a folhas/páginas de um caderno.

O objetivo é permitir que o aluno separe raciocínios sem perder contexto.

Exemplos de uso:

- Quadro 1: resolução principal;
- Quadro 2: cálculo auxiliar;
- Quadro 3: tentativa alternativa;
- Quadro 4: análise de um gráfico ou tabela;
- Quadro 5: revisão de um cálculo anterior.

## 14.5 QUADRO PRINCIPAL E QUADROS AUXILIARES

Toda atividade começa com um **Quadro Principal**.

O usuário poderá criar quadros adicionais conforme precisar.

Cada quadro deverá possuir:

- identificador;
- posição;
- nome opcional;
- tipo;
- conteúdo;
- data/ordem de criação;
- última posição do cursor;
- histórico local de desfazer/refazer.

Tipos iniciais:

- **Resolução**;
- **Rascunho**;
- **Anotação**;
- futuramente **Gráfico/Laboratório**, quando fizer sentido.

A resolução oficial poderá usar um ou mais quadros de tipo Resolução, preservando uma ordem lógica entre eles.

## 14.6 NAVEGAÇÃO RÁPIDA ENTRE QUADROS

Quando houver poucos quadros, a navegação deverá ser praticamente instantânea.

Exemplo conceitual:

```
        Quadro 2 de 4
     ●  ●  ○  ○

[‹]                 [›]

        conteúdo
```

O usuário poderá avançar ou voltar usando controles explícitos e uma transição horizontal suave que transmita a sensação de mudar de página.

A navegação não deverá depender somente de gesto de deslizar, pois fórmulas grandes também podem exigir rolagem horizontal.

Gestos poderão existir como atalho, mas sempre deverá existir uma alternativa visível.

## 14.7 SELETOR DE QUADROS

Quando o aluno criar muitos quadros, os indicadores simples deixam de ser suficientes.

Deverá existir um botão como:

**Todos os quadros**

que abre um seletor visual.

Exemplo:

```
┌──────────────────────────────┐
│ QUADROS                      │
│                              │
│ 1. Resolução principal      │
│ 2. Conta auxiliar           │
│ 3. Tentativa por fatoração  │
│ 4. Conferência              │
│ 5. Rascunho                 │
│                              │
│ [+ Novo quadro]             │
└──────────────────────────────┘
```

O seletor poderá usar lista ou miniaturas dependendo do tamanho da tela.

O aluno poderá tocar em qualquer quadro e ir diretamente até ele.

## 14.8 NOMES AUTOMÁTICOS E PERSONALIZADOS

Ao criar um quadro, o sistema poderá usar nomes automáticos:

- Quadro 1;
- Quadro 2;
- Rascunho 1.

O aluno poderá renomear:

- “Bhaskara”;
- “Conta da raiz”;
- “Tentativa 2”;
- “Gráfico”.

Renomear é opcional e nunca deve interromper o fluxo de resolução.

## 14.9 CRIAÇÃO RÁPIDA

O botão de novo quadro deverá permitir:

- novo quadro de resolução;
- novo rascunho;
- nova anotação.

Também poderá existir:

**Duplicar quadro**

para testar uma estratégia alternativa sem destruir o raciocínio anterior.

## 14.10 PRESERVAÇÃO DE CONTEXTO

Ao alternar entre quadros, o aplicativo deverá lembrar:

- posição de rolagem;
- linha selecionada;
- cursor;
- zoom, quando aplicável;
- estado do teclado;
- seleção matemática atual, quando possível.

O aluno deve poder ir ao Quadro 3, conferir um cálculo e voltar ao Quadro 1 exatamente onde estava.

## 14.11 TRANSIÇÕES

A troca entre quadros deverá utilizar animação curta e fluida, preferencialmente com sensação de deslocamento lateral entre páginas.

A animação deverá:

- reforçar orientação espacial;
- não atrasar a interação;
- respeitar a opção de redução de movimento da acessibilidade.

## 14.12 QUADROS E AVALIAÇÃO

O motor pedagógico deverá distinguir:

- conteúdo da resolução oficial;
- conteúdo auxiliar;
- tentativas alternativas;
- rascunhos.

Somente quadros marcados como parte da resolução final deverão ser usados para avaliar a cadeia oficial de passos.

Entretanto, quadros auxiliares poderão ser usados futuramente para compreender estratégias de estudo, desde que isso respeite as regras de privacidade e não penalize tentativas ou erros de rascunho.

## 14.13 VISÃO GERAL DA ATIVIDADE

Em atividades extensas, poderá existir uma visão geral:

```
Problema
   │
   ├── Quadro 1 — Modelagem
   ├── Quadro 2 — Desenvolvimento
   ├── Quadro 3 — Cálculo auxiliar
   └── Quadro 4 — Conclusão
```

O objetivo não é obrigar o aluno a organizar dessa forma, mas oferecer estrutura quando ele desejar.

---

# 15. CALCULADORA

É diferente do Teclado Matemático.

- Teclado: escreve.
- Calculadora: computa resultado.

Cada exercício deverá definir uma política de calculadora, por exemplo:

- nenhuma;
- básica;
- científica;
- completa.

Exemplos:

- prática de multiplicação: nenhuma;
- porcentagem aplicada: básica;
- trigonometria aplicada: científica;
- Cálculo I: depende do objetivo.

O sistema pode possuir um motor simbólico interno poderoso sem expor essas funções ao aluno.

---

# 16. VALIDAÇÃO LINHA POR LINHA

Exemplo válido:

```
2x + 4 = 10
2x = 6
x = 3
```

Exemplo inválido:

```
2x + 4 = 10
2x = 14
```

O sistema deve reconhecer que a transformação perdeu equivalência.

A validação deverá considerar contexto e domínio, não apenas igualdade textual.

---

## 16.1 VALIDADE MATEMÁTICA VS. OBJETIVO PEDAGÓGICO

O motor deverá avaliar uma resolução em duas dimensões independentes:

1. **Validade matemática:** o caminho utilizado é matematicamente correto e chega a uma resposta válida?
2. **Aderência pedagógica:** a resolução demonstra o conceito que está sendo ensinado ou avaliado naquela atividade?

Isso permite aceitar diferentes caminhos sem perder o objetivo da aula.

### Exemplo — aula de fatoração

Questão:

`x² - 5x + 6 = 0`

O aluno resolve por fórmula quadrática e encontra:

`x = 2` e `x = 3`.

A solução é matematicamente correta.

Entretanto, se a atividade possui como conceito-alvo **fatoração de trinômios**, o sistema deverá responder de forma semelhante a:

> Sua resposta está correta, mas esta atividade quer verificar sua prática de fatoração. Tente resolver novamente usando fatoração.

O aluno não deverá receber “resposta errada”, pois o resultado é válido.

Porém essa tentativa não deverá conceder domínio de fatoração.

### Exemplo — caminho alternativo dentro do mesmo conceito

Se a atividade ensina resolução de equações lineares:

```
2x + 4 = 10
```

São aceitáveis, por exemplo:

```
2x = 6
x = 3
```

ou:

```
2x + 4 - 4 = 10 - 4
2x = 6
2x/2 = 6/2
x = 3
```

ou outra sequência matematicamente válida que demonstre a habilidade-alvo.

O sistema não deverá impor uma solução-modelo única.

## 16.2 CONTRATO PEDAGÓGICO DA ATIVIDADE

Cada atividade deverá possuir metadados que indiquem o que ela pretende avaliar.

Campos conceituais previstos:

- `conceitosAlvo`;
- `conceitosPermitidos`;
- `conceitosObrigatorios`, quando aplicável;
- `estrategiasAceitas`;
- `estrategiasQueNaoComprovamDominio`;
- `nivelDeDetalhamento`;
- `politicaDeCalculadora`;
- `preRequisitos`.

O motor deverá avaliar a resolução completa e identificar quais conceitos realmente foram usados.

## 16.3 TRÊS RESULTADOS POSSÍVEIS PARA UMA RESOLUÇÃO

Uma resolução poderá ser classificada como:

### Correta e alinhada

A matemática está correta e o aluno demonstrou o assunto-alvo.

Conta normalmente para domínio.

### Correta, mas fora do objetivo

A matemática está correta, porém o aluno contornou a habilidade que a atividade pretendia praticar.

O resultado deve ser reconhecido como correto, mas a atividade pode solicitar uma nova resolução usando o assunto atual.

Não deve contar como evidência suficiente de domínio do conceito-alvo.

### Matematicamente incorreta

Existe uma transformação inválida, erro de cálculo ou conclusão incorreta.

O sistema aplica o fluxo normal de diagnóstico e feedback.

## 16.4 USO DE CONHECIMENTOS ANTERIORES E MAIS AVANÇADOS

Conhecimentos anteriores podem e devem ser usados livremente quando necessários.

Conhecimentos mais avançados também poderão ser reconhecidos como matematicamente válidos, mas não poderão substituir automaticamente o conceito-alvo quando a atividade existe para praticá-lo.

Em atividades de **aplicação**, **desafio**, **revisão mista** ou **prova cumulativa**, o aluno deverá possuir liberdade muito maior para escolher qualquer estratégia válida.

Assim, a rigidez pedagógica depende do tipo de atividade.

---

## 16.5 ARQUITETURA CONCEITUAL DO MOTOR MATEMÁTICO E PEDAGÓGICO

O motor deverá funcionar como uma cadeia de análise, e não como uma comparação simples entre a resposta do aluno e uma solução cadastrada.

Fluxo conceitual:

```
Entrada do aluno
      ↓
Parser matemático
      ↓
Representação estruturada (AST)
      ↓
Contexto matemático e hipóteses
      ↓
Validador matemático
      ↓
Detector de transformação
      ↓
Analisador de estratégia
      ↓
Validador pedagógico
      ↓
Classificador de erro
      ↓
Gerador de feedback
      ↓
Atualização de domínio
```

Cada camada deverá possuir responsabilidade separada.

## 16.6 CORREÇÃO MATEMÁTICA DETERMINÍSTICA

O veredito de correção matemática não deverá depender de um modelo de linguagem gerar uma opinião sobre a resolução.

O núcleo deverá usar regras matemáticas verificáveis, álgebra simbólica e validação determinística sempre que o conteúdo estiver dentro do escopo suportado.

Modelos de linguagem poderão futuramente auxiliar em:

- reformulação de explicações;
- feedback em linguagem natural;
- interpretação de anotações textuais;
- sugestões pedagógicas;
- classificação auxiliar quando houver evidência estruturada.

Entretanto, um modelo de linguagem não deverá ser a autoridade final para declarar uma transformação matemática correta ou incorreta.

Quando o motor determinístico não conseguir provar nem refutar uma etapa, o sistema deverá assumir **incerteza**, e não marcar automaticamente como erro.

## 16.7 RESULTADO DE VALIDAÇÃO DE UMA ETAPA

Cada transição entre duas linhas deverá retornar internamente algo conceitualmente semelhante a:

```
statusMatematico:
  VALIDO
  INVALIDO
  NAO_COMPROVADO

transformacaoDetectada:
  ...

condicoes:
  ...

conceitosUsados:
  [...]

errosDetectados:
  [...]

confianca:
  ...
```

O estado `NAO_COMPROVADO` é obrigatório.

Ele evita que uma limitação do motor seja confundida com erro do aluno.

## 16.8 O QUE FAZER QUANDO O MOTOR NÃO CONSEGUIR VERIFICAR

Se uma etapa estiver sintaticamente válida, mas o motor não conseguir comprovar sua relação com a etapa anterior, o sistema poderá:

1. tentar estratégias alternativas de equivalência;
2. verificar numericamente pontos seguros como evidência auxiliar, nunca como prova única quando uma prova simbólica for necessária;
3. pedir ao aluno uma etapa intermediária;
4. permitir que o aluno continue e revisar a cadeia posteriormente;
5. em modos avançados, marcar a etapa como “não verificada”.

Mensagem possível:

> Não consegui verificar automaticamente esta transformação. Tente mostrar uma etapa intermediária.

O sistema não deverá dizer “errado” sem evidência suficiente.

## 16.9 CONTEXTO MATEMÁTICO DA ATIVIDADE

Toda validação deverá considerar contexto.

Exemplos de informações contextuais:

- conjunto numérico atual: naturais, inteiros, racionais, reais;
- domínio das variáveis;
- hipóteses declaradas;
- restrições do enunciado;
- intervalos;
- unidades;
- variável independente;
- variável dependente;
- tolerância numérica, quando aplicável.

A expressão isolada não é suficiente para determinar validade em todos os casos.

## 16.10 TIPOS DE EQUIVALÊNCIA

O motor não deverá possuir somente uma função genérica de “são iguais?”.

Ele deverá distinguir pelo menos:

### Equivalência de expressões

Exemplo:

`2(x+3)`

e

`2x+6`

representam a mesma expressão no domínio aplicável.

### Equivalência de equações por conjunto-solução

Exemplo:

`2x+4=10`

e

`x=3`

possuem o mesmo conjunto de soluções.

### Implicação sem equivalência

Exemplo:

`x=2`

implica:

`x²=4`

mas o caminho inverso não preserva todas as soluções.

### Igualdade aproximada

Exemplo:

`√2 ≈ 1,4142`

deve usar política explícita de precisão/tolerância.

### Igualdade de conjuntos

Exemplo:

`{2,3}`

e

`{3,2}`

são o mesmo conjunto.

### Igualdade de funções

Deve considerar expressão e domínio.

Duas fórmulas que produzem os mesmos valores em parte do domínio não são necessariamente a mesma função se os domínios diferirem.

## 16.11 PRESERVAÇÃO DO CONJUNTO DE SOLUÇÕES

Em resolução de equações e inequações, o motor deverá acompanhar se cada transformação:

- preserva exatamente o conjunto de soluções;
- amplia o conjunto de possíveis soluções;
- restringe o conjunto;
- exige condição adicional.

Exemplo:

```
x² = 4
x = 2
```

não pode ser aceito como transformação equivalente porque perdeu `x=-2`.

Já:

```
x² = 4
|x| = 2
x = ±2
```

preserva as soluções.

## 16.12 OPERAÇÕES QUE EXIGEM CONDIÇÕES

O motor deverá reconhecer operações potencialmente perigosas.

### Divisão por uma expressão

De:

`x(x-2)=0`

para:

`x-2=0`

ao dividir por `x`, a solução `x=0` é perdida.

O sistema deve detectar isso.

### Multiplicação por expressão potencialmente zero

Pode alterar a equivalência dependendo do contexto.

### Elevar ambos os lados a uma potência

Pode introduzir soluções extranhas.

Exemplo:

`√x = -2`

ao elevar ao quadrado produz `x=4`, mas `x=4` não satisfaz a equação original.

### Aplicar raiz

Pode exigir consideração de sinais e domínio.

### Logaritmos

Exigem argumento positivo no contexto real.

### Frações

Denominadores precisam ser diferentes de zero.

Essas condições devem fazer parte da análise e, quando pedagogicamente adequado, aparecer ao aluno.

## 16.13 VALIDAÇÃO DE INEQUAÇÕES

O motor deverá reconhecer regras específicas de inequações.

Exemplo:

`-2x < 6`

ao dividir por `-2`:

`x > -3`

O sinal precisa ser invertido.

Se o aluno escrever:

`x < -3`

o sistema deverá classificar o erro especificamente como falha ao inverter a desigualdade após multiplicação/divisão por número negativo.

## 16.14 RECONHECIMENTO DE TRANSFORMAÇÕES

O motor deverá tentar identificar qual operação ou estratégia explica a passagem entre duas linhas.

Categorias iniciais incluem:

### Aritmética

- somar;
- subtrair;
- multiplicar;
- dividir;
- calcular potência;
- calcular raiz;
- simplificar valor numérico.

### Álgebra

- aplicar distributiva;
- coletar termos semelhantes;
- mover/reorganizar termos;
- adicionar mesma quantidade aos dois lados;
- subtrair mesma quantidade dos dois lados;
- multiplicar/dividir ambos os lados;
- fatorar fator comum;
- diferença de quadrados;
- fatorar trinômio;
- completar quadrado;
- substituir variável;
- expandir produto;
- simplificar fração algébrica.

### Funções

- avaliar função;
- compor funções;
- obter/inverter relação;
- aplicar transformação de gráfico.

### Exponenciais e logaritmos

- aplicar propriedades de potências;
- aplicar propriedade de logaritmos;
- mudança de base;
- exponenciar;
- aplicar logaritmo a ambos os lados.

### Trigonometria

- aplicar identidade;
- substituir valor notável;
- reorganizar identidade;
- resolver equação trigonométrica.

### Limites

- substituição direta;
- fatoração para remover indeterminação;
- racionalização;
- uso de limite notável;
- análise lateral;
- comparação de crescimento, quando dentro do currículo.

### Derivadas

- regra da constante;
- potência;
- soma;
- produto;
- quociente;
- cadeia;
- derivação implícita.

### Integrais

- reconhecimento de antiderivada;
- linearidade;
- substituição, quando fizer parte do escopo;
- aplicação do Teorema Fundamental do Cálculo.

A taxonomia deverá crescer junto com o currículo.

## 16.15 UMA TRANSIÇÃO PODE CONTER MAIS DE UMA TRANSFORMAÇÃO

O aluno não deverá ser obrigado a executar apenas uma micro-operação por linha.

Exemplo:

```
3(x+2)=18
x=4
```

é uma passagem matematicamente correta, embora omita várias etapas.

A aceitação depende de `nivelDeDetalhamento`.

### Livre

Pode aceitar saltos grandes se o motor conseguir comprovar a relação.

### Moderado

Pode exigir etapas conceitualmente relevantes.

### Didático

Pode exigir a transformação que está sendo ensinada de forma explícita.

### Demonstrativo

Pode exigir justificativas.

Assim, “pular etapas” não é intrinsecamente errado.

## 16.16 DETECÇÃO DE CONCEITOS USADOS

Além de validar, o motor deverá produzir evidências de quais habilidades aparecem na resolução.

Exemplo:

```
3(x+2)=18
3x+6=18
3x=12
x=4
```

poderá gerar evidências para:

- propriedade distributiva;
- subtração nos dois membros;
- divisão nos dois membros;
- resolução de equação linear.

Essas evidências alimentarão o sistema de domínio.

## 16.17 CONCEITO-ALVO NÃO PRECISA APARECER EM TODA LINHA

Se a aula é sobre distributiva, não é necessário que todas as linhas sejam classificadas como distributiva.

É suficiente que a resolução demonstre a habilidade-alvo em ponto relevante e correto.

O avaliador pedagógico observa a resolução completa.

## 16.18 ESTRATÉGIA GLOBAL DA RESOLUÇÃO

O motor deverá tentar reconhecer não apenas operações locais, mas também a estratégia global.

Exemplo para equação quadrática:

- fatoração;
- fórmula quadrática;
- completar quadrados.

Exemplo para limite:

- substituição direta;
- fatoração;
- racionalização;
- análise gráfica/numérica quando permitida.

Exemplo para derivada:

- expansão antes de derivar;
- aplicação direta da regra do produto;
- simplificação anterior.

Isso permite aceitar diferentes caminhos e ainda identificar o método efetivamente utilizado.

## 16.19 EXEMPLO — MESMO RESULTADO, DOMÍNIO DIFERENTE

Considere:

`f(x) = (x²-1)/(x-1)`

e:

`g(x)=x+1`.

As expressões coincidem para `x ≠ 1`, mas a primeira não está definida em `x=1`.

Portanto o motor não deverá tratar automaticamente as duas funções como idênticas sem considerar domínio.

Esse tipo de distinção será especialmente importante em Pré-Cálculo e limites.

## 16.20 EXEMPLO — SOLUÇÃO EXTRANHA

Questão:

`√(x+1)=x-1`

Se o aluno elevar ambos os lados ao quadrado, o procedimento pode produzir candidatos que precisam ser verificados na equação original.

O motor deverá reconhecer:

- a etapa de quadratura como uma implicação potencialmente não reversível;
- a necessidade de conferir soluções finais;
- soluções extranhas, caso apareçam.

## 16.21 VALIDAÇÃO NUMÉRICA COMO APOIO, NÃO AUTORIDADE UNIVERSAL

Testar valores numéricos pode ajudar a:

- encontrar contraexemplos;
- detectar rapidamente expressões provavelmente diferentes;
- apoiar equivalência em contextos específicos;
- depurar o motor.

Entretanto, testar alguns pontos não prova identidade matemática em geral.

Portanto validação numérica isolada não poderá ser utilizada como prova universal de equivalência simbólica.

## 16.22 TOLERÂNCIA E APROXIMAÇÕES

Atividades que aceitam resultado decimal deverão declarar:

- precisão esperada;
- casas decimais;
- erro absoluto/relativo permitido;
- se fração exata é preferível;
- se forma exata é obrigatória.

Exemplo:

`√2`

Pode ser aceito como:

- `√2`, se forma exata for solicitada;
- `1,414`, se aproximação a três casas for solicitada.

O motor não deverá converter indiscriminadamente respostas exatas em decimais.

## 16.23 UNIDADES

Problemas aplicados deverão poder associar unidades aos valores.

Exemplo:

`v = 20 m/s`

Uma resposta numericamente correta com unidade incorreta não deverá ser considerada completamente correta quando a unidade fizer parte do objetivo.

O motor deverá futuramente suportar:

- compatibilidade dimensional básica;
- conversões permitidas;
- equivalência de unidades.

## 16.24 AVALIAÇÃO DA RESPOSTA FINAL

Além dos passos, o motor deverá validar se a conclusão responde exatamente ao que foi perguntado.

Exemplos:

- encontrar `x`;
- encontrar todas as soluções;
- indicar intervalo;
- fornecer ponto `(x,y)`;
- informar unidade;
- fornecer função;
- identificar máximo/mínimo;
- calcular derivada;
- calcular valor de uma integral.

Uma resolução pode possuir passos válidos e ainda estar incompleta.

## 16.25 ERROS PARCIAIS E PROPAGAÇÃO DE ERRO

Se o aluno cometer um erro e depois operar corretamente sobre o resultado errado, o sistema deverá distinguir:

1. o primeiro ponto em que a matemática ficou inválida;
2. passos posteriores que são coerentes com a linha errada.

Exemplo:

```
2x + 4 = 10
2x = 14       ← primeiro erro
x = 7         ← divisão está coerente com 2x=14
```

O feedback principal deve apontar para a primeira quebra de validade, e não marcar todas as linhas posteriores como erros independentes.

Isso é importante pedagogicamente.

## 16.26 ERRO LOCAL VS. ERRO CONCEITUAL RECORRENTE

Um erro isolado pode ser acidente.

O sistema só deverá inferir uma lacuna de conhecimento após acumular evidência suficiente.

Exemplo:

errar um sinal uma vez não significa que o aluno não domina números negativos.

Mas repetir o mesmo padrão em diferentes contextos pode gerar evidência de dificuldade.

## 16.27 EXPLICAÇÃO GERADA A PARTIR DE CÓDIGOS DE ERRO

O motor matemático deverá produzir códigos/estruturas de erro, por exemplo:

```
ERRO_DISTRIBUTIVA_PARCIAL
ERRO_SINAL
ERRO_DIVISAO_POR_EXPRESSAO_ZERO
ERRO_INVERTER_INEQUACAO
ERRO_REGRA_CADEIA_INCOMPLETA
```

A camada pedagógica transforma esses códigos em feedback adequado ao nível do aluno.

Assim, lógica matemática e texto pedagógico permanecem separados.

## 16.28 PROFUNDIDADE DO FEEDBACK

O mesmo erro poderá gerar respostas diferentes dependendo do modo e do histórico.

### Primeira ajuda

> Observe novamente como o 3 atua sobre os termos dentro dos parênteses.

### Segunda ajuda

> O 3 precisa multiplicar cada termo dentro dos parênteses.

### Demonstração

`3(x+2)=3x+6`

A profundidade é controlada pelo sistema de dicas.

## 16.29 EXPLICAÇÃO DO PRÓPRIO ALUNO

Linhas de justificativa em linguagem natural poderão ser usadas como evidência pedagógica complementar, mas não substituirão a validação matemática.

Futuramente um modelo de linguagem poderá analisar frases como:

> Dividi os dois lados por 2 para manter a igualdade.

e comparar com a transformação realizada.

Porém a correção da operação continua sendo determinada pelo motor matemático.

## 16.30 REAVALIAÇÃO APÓS EDIÇÃO

Ao editar uma linha antiga:

1. invalidar avaliações derivadas daquele ponto;
2. reprocessar as transições posteriores;
3. recalcular estratégia global;
4. recalcular conceitos demonstrados;
5. preservar histórico de edição apenas quando necessário para UX/diagnóstico.

O usuário deverá perceber a atualização sem demora excessiva.

## 16.31 DESEMPENHO DE INTERAÇÃO

A validação das operações comuns deverá parecer imediata.

O objetivo de UX é que digitar uma nova linha e receber o estado de validação não pareça uma chamada lenta a um tutor remoto.

Isso influencia posteriormente a escolha de arquitetura e o que deve funcionar localmente/offline.

## 16.32 ESCOPO PROGRESSIVO DO MOTOR

O motor não precisa compreender toda a matemática existente no primeiro lançamento.

Ele deverá crescer de forma alinhada ao currículo.

Prioridade de suporte:

1. aritmética;
2. frações;
3. álgebra elementar;
4. equações e inequações;
5. funções;
6. exponenciais/logaritmos;
7. trigonometria;
8. limites;
9. derivadas;
10. integrais do escopo de Cálculo I.

Cada tópico curricular só poderá entrar no produto quando o motor possuir validação suficiente para as atividades planejadas naquele tópico.

## 16.33 MATRIZ DE CAPACIDADE DO MOTOR

Deverá existir futuramente uma matriz rastreável ligando:

```
conteúdo curricular
      ↕
notações necessárias
      ↕
transformações reconhecidas
      ↕
erros reconhecidos
      ↕
tipos de atividade suportados
      ↕
casos de teste
```

Isso impedirá que um módulo educacional seja publicado sem suporte real do motor.

## 16.34 TESTES DO MOTOR COMO REQUISITO CENTRAL

Cada transformação deverá possuir testes positivos e negativos.

Exemplo para distributiva:

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

Também deverão existir testes para:

- caminhos alternativos válidos;
- saltos de etapas;
- domínios;
- soluções extranhas;
- inequações;
- aproximações;
- casos-limite.

O motor matemático será uma das áreas de maior cobertura automatizada do projeto.

## 16.35 PRINCÍPIO DE SEGURANÇA PEDAGÓGICA

Quando houver conflito entre:

- marcar rapidamente;
- e marcar corretamente,

o sistema deverá preferir **não afirmar** algo que não consegue comprovar.

É pedagogicamente melhor dizer:

> “Não consegui verificar esta etapa.”

do que ensinar ao aluno que uma transformação válida está errada.

---

# 17. MODOS DE FEEDBACK

## Aprendizado

- validação imediata;
- dicas disponíveis;
- explicações detalhadas.

## Prática

- pouca orientação;
- dicas opcionais;
- resolução livre.

## Domínio

- sem dicas automáticas;
- sem método indicado;
- feedback pode ocorrer somente ao finalizar.

## Prova

- sem feedback durante execução;
- indicadores ocultos;
- política de calculadora definida pela avaliação;
- correção ao final.

---

# 18. DICAS PROGRESSIVAS

Nunca entregar a solução imediatamente.

Exemplo para `2x + 4 = 10`:

1. “Observe o termo +4.”
2. “Precisamos eliminá-lo preservando a igualdade.”
3. “O que acontece se subtrairmos 4 dos dois lados?”
4. Mostrar `2x + 4 - 4 = 10 - 4`.

Usar dica não deve ser tratado como fracasso, mas pode indicar que o conceito ainda precisa de prática independente.

---

# 19. CLASSIFICAÇÃO DE ERROS

O sistema deverá evoluir para reconhecer, entre outros:

- erro aritmético;
- erro de sinal;
- distributiva incorreta;
- cancelamento inválido;
- divisão por zero;
- operação aplicada somente a um lado;
- erro de potência;
- fatoração incorreta;
- erro de domínio;
- regra do produto incorreta;
- regra da cadeia incompleta;
- erro trigonométrico;
- erro conceitual de limite.

Feedback deverá aproveitar acertos parciais.

Exemplo:

`f(x)=(x²+1)³`

Resposta:

`f'(x)=3(x²+1)²`

Feedback:

> A derivação da função externa está correta, mas ainda existe uma função interna que precisa ser considerada.

---

# 20. NÍVEL DE DETALHAMENTO DA RESOLUÇÃO

Cada atividade poderá definir:

- **Livre** — resultado matematicamente suficiente;
- **Moderado** — exige passos principais;
- **Didático** — exige aplicação explícita do método;
- **Demonstrativo** — exige justificativas.

Isso evita obrigar alunos avançados a escrever passos triviais enquanto ainda permite ensinar método a iniciantes.

---

# 21. TIPOS DE ATIVIDADE

O sistema deverá suportar, no mínimo:

## Resolução livre

Resolver uma expressão/problema no Caderno.

## Modelagem

O enunciado não fornece a equação; o aluno precisa construí-la.

## Correção de erro

Receber uma resolução incorreta, encontrar a primeira etapa errada e corrigi-la.

## Completar raciocínio

Usar lacunas pontualmente como formato complementar, nunca como núcleo do produto.

## Explicação

Responder por que um passo é ou não válido.

## Previsão gráfica

Prever comportamento antes de liberar a visualização real.

## Aplicação

Resolver situação contextualizada escolhendo sozinho a ferramenta matemática adequada.

---

# 22. VISUALIZAÇÕES E GRÁFICOS

Gráficos devem estar vinculados ao significado matemático.

Exemplo:

Para `f(x)=x²` e `f'(x)=2x`, ao mover um ponto:

```
x = -2 → f'(x) = -4
x = -1 → f'(x) = -2
x = 0  → f'(x) = 0
x = 1  → f'(x) = 2
x = 2  → f'(x) = 4
```

A reta tangente deve mudar em tempo real.

O sistema também deverá permitir atividades:

```
previsão → observação → comparação
```

---

# 23. GAMIFICAÇÃO

Evitar:

> Acerte 10 contas para causar dano a um monstro.

Preferir:

> Resolva a matemática necessária para operar, construir, otimizar ou prever algo no mundo.

Exemplo de otimização:

O estudante precisa projetar uma estrutura usando quantidade mínima de material.

Para isso:

1. interpreta o cenário;
2. define variáveis;
3. cria a função;
4. identifica restrições;
5. deriva;
6. encontra pontos críticos;
7. compara soluções;
8. aplica o resultado.

A matemática é a mecânica.

---

# 24. RECOMPENSAS

Podem incluir:

- novas ferramentas;
- novas áreas;
- desafios;
- personalização;
- conquistas;
- novas visualizações;
- registros de domínio.

A principal recompensa deve continuar sendo a percepção:

> “Agora consigo resolver algo que antes não conseguia.”

---

# 25. SISTEMA DE DOMÍNIO E APRENDIZAGEM ADAPTATIVA

O Eixo não deverá representar aprendizagem apenas como quantidade de exercícios certos.

O sistema deverá manter um **modelo de domínio por habilidade curricular**, atualizado a partir de múltiplas evidências.

O objetivo é responder perguntas como:

- o aluno consegue executar o procedimento?
- entende o que está fazendo?
- reconhece o conceito em outras representações?
- consegue decidir quando utilizá-lo?
- consegue aplicar sem ajuda?
- ainda lembra depois de algum tempo?
- a dificuldade atual vem desta habilidade ou de um pré-requisito?

---

## 25.1 DOMÍNIO É MULTIDIMENSIONAL

Cada habilidade poderá possuir, inicialmente, cinco dimensões principais:

### Cálculo / Procedimento

Consegue executar corretamente operações e transformações.

### Interpretação

Entende o significado matemático do que está fazendo.

### Representação

Consegue relacionar formas diferentes:

- expressão;
- gráfico;
- tabela;
- desenho;
- descrição verbal.

### Aplicação

Consegue usar a habilidade em problemas contextualizados.

### Transferência

Consegue reconhecer e utilizar o conhecimento em situações diferentes daquelas usadas no ensino inicial.

Uma habilidade não deverá ser considerada plenamente dominada apenas porque o aluno repete corretamente um algoritmo.

---

## 25.2 PERFIL DE DOMÍNIO

Internamente, uma habilidade poderá possuir algo conceitualmente semelhante a:

```
habilidade: PC-FUN-10

calculo:        0.82
interpretacao:  0.67
representacao:  0.74
aplicacao:      0.51
transferencia:  0.38

confiancaDaEstimativa: 0.71
ultimaEvidencia: ...
estado: EM_CONSOLIDACAO
```

Os valores acima são conceituais.

A fórmula exata de estimativa deverá ser definida e testada durante a arquitetura pedagógica/técnica.

A interface não precisa mostrar números decimais ao aluno.

---

## 25.3 ESTADOS PEDAGÓGICOS DA HABILIDADE

Uma habilidade poderá passar por estados como:

### Não apresentada

O aluno ainda não estudou formalmente o conceito.

### Em descoberta

Está recebendo introdução e exemplos.

### Em aprendizagem

Consegue executar com apoio.

### Em prática

Já resolve atividades independentes simples.

### Em consolidação

Resolve variações e começa a aplicar em contextos diferentes.

### Dominada

Há evidências suficientes em múltiplas dimensões e contextos.

### Revisão recomendada

O domínio existia, mas evidências recentes sugerem perda ou fragilidade.

### Lacuna detectada

A habilidade está interferindo em conteúdos posteriores.

Esses estados não devem ser tratados como rótulos permanentes.

---

## 25.4 EVIDÊNCIA, NÃO CONTAGEM BRUTA

Cada atividade produz **evidências de aprendizagem**.

Uma evidência deverá considerar fatores como:

- habilidade avaliada;
- dimensão de domínio;
- dificuldade;
- complexidade;
- quantidade de ajuda;
- tipo de atividade;
- independência;
- estratégia utilizada;
- erros cometidos;
- correções realizadas;
- tempo desde a última exposição;
- variedade do contexto;
- se a atividade era nova ou muito semelhante a uma anterior.

Assim:

> acertar cinco questões praticamente iguais

não deverá valer o mesmo que:

> acertar três questões estruturalmente diferentes que exigem reconhecer e aplicar o mesmo conceito.

---

## 25.5 ACERTO COM AJUDA NÃO É IGUAL A ACERTO INDEPENDENTE

O uso de dicas não deverá punir o aluno, mas deverá alterar a força da evidência.

Exemplo:

### Resolveu sem ajuda

Evidência forte de independência.

### Usou dica conceitual leve

Evidência positiva, porém menor.

### Precisou de dica operacional

Mostra compreensão parcial.

### Precisou de demonstração quase completa

Conta principalmente como exposição/aprendizagem, não como domínio independente.

Isso permite ajudar sem transformar ajuda em “fracasso”.

---

## 25.6 ACERTO NA PRIMEIRA TENTATIVA VS. CORREÇÃO

O sistema deverá diferenciar:

- resposta correta diretamente;
- erro identificado e corrigido pelo próprio aluno;
- erro corrigido após dica;
- resposta mostrada pelo sistema.

Corrigir o próprio erro é uma evidência pedagógica positiva e não deverá ser tratado como equivalente a simplesmente falhar.

Exemplo:

```
2x + 4 = 10
2x = 14   ← aluno percebe
2x = 6    ← corrige sozinho
x = 3
```

O sistema pode registrar:

- ocorreu erro aritmético/operacional;
- houve autocorreção;
- resolução final válida;
- necessidade de observar recorrência antes de inferir lacuna.

---

## 25.7 EVITAR DOMÍNIO POR SORTE

Questões de múltipla escolha, verdadeiro/falso ou respostas muito restritas deverão possuir peso menor quando utilizadas isoladamente.

Para declarar domínio, o sistema deverá preferir evidências em que o aluno:

- produz a resposta;
- desenvolve passos;
- modela o problema;
- explica;
- escolhe o método;
- transfere conhecimento.

Um único acerto nunca deverá ser suficiente para declarar domínio de uma habilidade relevante.

---

## 25.8 VARIEDADE OBRIGATÓRIA

O Eixo deverá evitar declarar domínio após uma sequência excessivamente homogênea.

Exemplo para distributiva:

Não basta resolver apenas:

`2(x+3)`

`3(x+4)`

`5(x+2)`

Também é necessário variar:

- sinais;
- coeficientes;
- ordem;
- termos algébricos;
- contexto em equações;
- identificação de erro;
- uso dentro de outro conteúdo.

A habilidade precisa sobreviver à mudança de aparência.

---

## 25.9 INTERCALAÇÃO DE CONTEÚDOS

Após a fase inicial de aprendizagem, o sistema deverá misturar habilidades.

Em vez de mostrar sempre:

> agora faça 20 exercícios de fatoração,

poderá apresentar uma sequência contendo:

- simplificação;
- distributiva;
- fatoração;
- equação;
- função.

Assim o aluno precisa primeiro reconhecer **qual ferramenta matemática utilizar**.

Essa capacidade é central para transferência.

---

## 25.10 PRÁTICA BLOQUEADA E PRÁTICA INTERCALADA

O Eixo poderá utilizar duas fases.

### Prática bloqueada

Vários exemplos próximos do mesmo conceito durante o aprendizado inicial.

Objetivo:

- compreender a técnica;
- ganhar fluência.

### Prática intercalada

Misturar conceitos depois que a técnica básica está estabilizada.

Objetivo:

- decidir qual método usar;
- fortalecer discriminação;
- desenvolver transferência.

---

## 25.11 RETENÇÃO AO LONGO DO TEMPO

Domínio não deverá ser considerado eterno.

Uma habilidade dominada poderá receber revisões futuras.

O sistema deverá utilizar princípios de revisão espaçada sem transformar o aplicativo em uma agenda rígida.

Uma habilidade que continua aparecendo naturalmente em conteúdos posteriores pode receber evidência de retenção sem exigir uma sessão específica de revisão.

---

## 25.12 REVISÃO ORGÂNICA

Sempre que possível, revisar habilidades antigas dentro de problemas novos.

Exemplo:

Ao estudar derivadas, o aluno naturalmente utiliza:

- frações;
- potências;
- fatoração;
- funções;
- trigonometria.

Essas utilizações poderão gerar evidência de manutenção dos pré-requisitos.

Assim evitamos pedir:

> “volte e faça dez contas de fração”

quando o aluno já demonstrou frações corretamente em atividades mais avançadas.

---

## 25.13 REVISÃO EXPLÍCITA

Será usada quando:

- a habilidade não aparece há muito tempo;
- surgem erros recorrentes;
- a habilidade é pré-requisito crítico do próximo módulo;
- existe baixa confiança na estimativa;
- o aluno solicita revisão.

A revisão explícita deverá ser curta e focada.

---

## 25.14 DECAIMENTO DE CONFIANÇA, NÃO DE CONHECIMENTO AUTOMÁTICO

O sistema não deverá assumir:

> “passaram 30 dias, então o aluno esqueceu”.

O que poderá diminuir com o tempo é a **confiança da estimativa**.

Exemplo:

```
Domínio estimado alto
+
nenhuma evidência recente
=
revisão curta para confirmar
```

Se o aluno resolver facilmente, a confiança retorna rapidamente.

---

## 25.15 DIFICULDADE ADAPTATIVA

Cada habilidade deverá possuir atividades em diferentes níveis de complexidade.

Exemplo conceitual:

### Nível A — reconhecimento

Identificar a propriedade correta.

### Nível B — execução direta

Aplicar o conceito de maneira explícita.

### Nível C — combinação

Usar junto com outras habilidades.

### Nível D — aplicação

Resolver problema contextualizado.

### Nível E — transferência

Reconhecer o conceito em situação nova.

O sistema deverá escolher atividades de modo que o aluno permaneça em desafio produtivo sem cair em repetição trivial ou frustração contínua.

---

## 25.16 NÃO AUMENTAR DIFICULDADE APENAS COM NÚMEROS MAIORES

Uma questão não se torna pedagogicamente mais profunda somente porque utiliza números grandes.

A dificuldade poderá crescer por:

- mais etapas;
- maior abstração;
- escolha de estratégia;
- mistura de conhecimentos;
- mudança de representação;
- condições adicionais;
- domínio/restrições;
- necessidade de modelagem;
- menor suporte;
- transferência.

---

## 25.17 PERFIL DE ERROS

Além do domínio, o sistema poderá manter um perfil de padrões recorrentes.

Exemplo:

```
habilidade: inequações
padrão observado:
ERRO_INVERTER_INEQUACAO

ocorrências relevantes: 3
contextos diferentes: 2
recência: alta
```

Somente após evidências suficientes o sistema deverá concluir que existe uma provável lacuna.

---

## 25.18 DIAGNÓSTICO DE CAUSA RAIZ

Quando o aluno tiver dificuldade em uma habilidade avançada, o sistema deverá consultar o grafo de pré-requisitos.

Exemplo:

Aluno erra:

```
lim x→2 (x²-4)/(x-2)
```

Possíveis causas:

- não entende limite;
- não reconhece indeterminação;
- não domina diferença de quadrados;
- cancela fatores incorretamente;
- não entende restrição de domínio.

O sistema deverá usar as evidências da resolução para localizar a causa mais provável.

Não deverá automaticamente atribuir todo erro ao conteúdo atual.

---

## 25.19 REVISÃO EM CAMADAS

Quando uma lacuna de pré-requisito for detectada, o Eixo poderá oferecer:

### Lembrete

Uma explicação de poucos segundos.

### Microprática

1–3 atividades focadas.

### Revisão curta

Pequeno conjunto variado.

### Retorno ao módulo

Quando a lacuna for realmente estrutural.

O sistema deverá escolher a intervenção mínima suficiente.

---

## 25.20 NÃO BLOQUEAR DESNECESSARIAMENTE

O objetivo da adaptação é ajudar o aluno a avançar, não criar portões excessivos.

Se uma lacuna é pequena e não impede o conteúdo atual:

> revisão recomendada.

Se impede diretamente a compreensão:

> revisão necessária antes de continuar.

A decisão deve considerar o grafo curricular e evidências reais.

---

## 25.21 LIBERDADE DO ALUNO

O aluno poderá abrir a tela de uma habilidade e escolher:

- continuar;
- praticar;
- revisar;
- fazer desafio;
- rever teoria;
- rever ferramentas;
- visualizar exemplos anteriores.

O sistema recomenda, mas não deverá transformar todo o aprendizado em uma sequência opaca controlada pelo algoritmo.

Em situações não críticas, o aluno poderá optar por seguir mesmo com revisão recomendada.

---

## 25.22 TESTE DE NIVELAMENTO INICIAL

O Eixo poderá oferecer um diagnóstico inicial opcional.

Objetivo:

- evitar obrigar quem já conhece a base a começar do zero;
- localizar lacunas;
- construir uma estimativa inicial.

O teste deverá ser adaptativo e relativamente curto.

Ele não deverá tentar certificar domínio definitivo.

O resultado inicial possui confiança limitada e será refinado pelo uso real.

---

## 25.23 NÃO USAR APENAS PROVA INICIAL

Mesmo que o aluno tenha excelente desempenho no nivelamento, conteúdos críticos poderão ser confirmados naturalmente posteriormente.

Da mesma forma, um desempenho ruim no primeiro dia não deverá condenar o perfil do aluno por meses.

O modelo precisa ser continuamente atualizado.

---

## 25.24 EVIDÊNCIA POSITIVA E NEGATIVA

Acertos e erros possuem valor diferente dependendo do contexto.

Exemplo:

Um erro em questão de transferência difícil não deverá destruir um histórico forte de domínio procedimental.

Da mesma forma, dez acertos básicos não compensam necessariamente incapacidade constante de aplicar o conceito.

O sistema deverá atualizar a dimensão realmente avaliada.

---

## 25.25 DOMÍNIO POR DIMENSÃO

Exemplo:

Um aluno pode possuir:

```
Derivada — Regra da potência

Cálculo:         Forte
Interpretação:   Forte
Representação:   Em consolidação
Aplicação:       Em consolidação
Transferência:   Fraca
```

Nesse caso, o Eixo não precisa repetir vinte derivadas mecânicas.

Deve oferecer atividades de aplicação e transferência.

---

## 25.26 CONTEÚDO DOMINADO NÃO SOME DA TRILHA

Mesmo após dominar uma habilidade:

- ela continua acessível;
- pode ser revisada;
- pode receber desafios;
- pode aparecer como pré-requisito;
- pode gerar evidência de retenção.

“Concluído” não significa “arquivado para sempre”.

---

## 25.27 FLUÊNCIA VS. COMPREENSÃO

Algumas habilidades exigem fluência operacional.

Exemplo:

- sinais;
- frações;
- manipulação algébrica básica.

Outras exigem principalmente interpretação.

Exemplo:

- limite;
- continuidade;
- significado de derivada.

Os critérios de domínio deverão mudar conforme a natureza da habilidade.

Não usar a mesma fórmula rígida para tudo.

---

## 25.28 TEMPO DE RESPOSTA

Tempo poderá ser usado como sinal secundário de fluência, nunca como critério principal universal.

Resolver lentamente não significa não compreender.

O sistema não deverá pressionar velocidade em conteúdos conceituais sem necessidade.

Atividades cronometradas deverão ser exceção e ter propósito pedagógico explícito.

---

## 25.29 USO DE CALCULADORA E DOMÍNIO

Se uma habilidade está avaliando cálculo manual, o uso de calculadora pode reduzir ou invalidar a evidência daquela dimensão.

Se a habilidade está avaliando modelagem ou derivada e a calculadora é permitida para aritmética, seu uso não deverá reduzir domínio do conceito-alvo.

O contrato pedagógico da atividade define isso.

---

## 25.30 CAMINHO ALTERNATIVO E DOMÍNIO

Como definido no motor:

uma resposta pode ser matematicamente correta e ainda não fornecer evidência do conceito-alvo.

Exemplo:

atividade de fatoração resolvida por fórmula quadrática.

Resultado:

- matemática: correta;
- domínio de resolução de quadrática: pode gerar evidência;
- domínio de fatoração: não comprovado.

O sistema deverá aproveitar evidências válidas sem atribuir habilidade não demonstrada.

---

## 25.31 DESAFIOS DE DOMÍNIO

Antes de promover uma habilidade para “Dominada”, o sistema poderá incluir uma pequena atividade de consolidação contendo:

- problema não idêntico aos exemplos;
- pouca ou nenhuma dica;
- mistura controlada com pré-requisitos;
- ao menos uma representação ou contexto diferente quando apropriado.

Isso funciona como confirmação, não como “prova final” punitiva.

---

## 25.32 DOMÍNIO NÃO PRECISA SER 100%

Matemática real não exige perfeição absoluta para continuar aprendendo.

O sistema deverá tolerar erros ocasionais.

O critério precisa buscar evidência suficiente de competência, não ausência total de falhas.

---

## 25.33 GATE DE PRÉ-REQUISITO

Para habilidades críticas, poderá existir uma condição de prontidão.

Exemplo:

antes de regra da cadeia, é necessário possuir evidência suficiente em:

- composição de funções;
- regras básicas de derivação;
- notação funcional.

Se um deles estiver frágil:

- revisão recomendada ou necessária;
- dependendo da gravidade.

---

## 25.34 RECOMENDAÇÃO DE PRÓXIMA ATIVIDADE

O sistema adaptativo poderá considerar:

1. objetivo atual do aluno;
2. trilha curricular;
3. pré-requisitos;
4. habilidades frágeis;
5. revisões necessárias;
6. variedade recente;
7. fadiga/repetição;
8. dificuldade adequada.

A recomendação não deverá depender apenas de:

> “faça o próximo ID da lista”.

---

## 25.35 SESSÕES CURTAS E SESSÕES LONGAS

O Eixo deverá funcionar tanto para:

- 5 minutos de revisão;
- 20–30 minutos de estudo;
- sessões mais longas.

Ao iniciar uma sessão, poderá sugerir algo como:

```
Continuar conteúdo atual
+ 1 revisão antiga
+ 1 aplicação
```

sem obrigar o aluno a completar uma quantidade fixa de exercícios.

---

## 25.36 EVITAR REPETIÇÃO EXCESSIVA

Quando há evidência forte de domínio:

- reduzir exercícios mecânicos;
- aumentar intervalo até próxima revisão;
- priorizar aplicação;
- permitir avanço.

Isso é essencial para evitar que alunos mais rápidos abandonem o aplicativo por tédio.

---

## 25.37 EVITAR FRUSTRAÇÃO CONTÍNUA

Quando o aluno acumular erros:

o sistema não deverá simplesmente continuar aumentando o número de exercícios do mesmo tipo.

Deverá verificar:

- pré-requisitos;
- complexidade;
- necessidade de exemplo;
- ferramenta de interface;
- notação;
- possível erro conceitual específico.

A intervenção deve mudar, não apenas repetir.

---

## 25.38 INDICADORES VISUAIS PARA O ALUNO

A interface poderá representar o estado de uma habilidade de maneira simples.

Exemplo:

```
Frações              Dominada
Equações lineares    Em consolidação
Fatoração            Praticando
Funções              Aprendendo
```

Evitar apresentar uma falsa precisão como:

> “Você sabe exatamente 83,7% de fatoração.”

Valores numéricos detalhados poderão existir internamente para o modelo adaptativo.

---

## 25.39 MAPA DE CONHECIMENTO

O aluno poderá visualizar um mapa simplificado:

```
Frações ✓
   ↓
Álgebra ✓
   ↓
Fatoração ◐
   ↓
Funções racionais ○
   ↓
Limites 🔒
```

O objetivo é mostrar:

- de onde ele veio;
- o que está aprendendo;
- por que determinado assunto importa;
- o que será desbloqueado depois.

---

## 25.40 EXPLICAR RECOMENDAÇÕES

Sempre que o Eixo recomendar uma revisão importante, deverá conseguir explicar por quê.

Exemplo:

> Recomendo revisar diferença de quadrados porque você encontrou dificuldade nesse passo em 3 atividades recentes de limites.

Evitar:

> “Nosso algoritmo recomenda esta revisão.”

A adaptação precisa ser compreensível.

---

## 25.41 CONTROLE DO ALUNO SOBRE REVISÕES

Em revisões não críticas, oferecer:

- revisar agora;
- continuar e revisar depois.

Se a habilidade for realmente impeditiva, explicar:

> Este conteúdo usa fatoração em quase todos os próximos exercícios. Uma revisão curta provavelmente evitará que você fique preso.

---

## 25.42 DOMÍNIO E GAMIFICAÇÃO

Recompensas não deverão incentivar o aluno a escolher questões fáceis apenas para acumular XP.

O sistema de progressão deverá valorizar:

- avanço real;
- domínio;
- revisão de lacunas;
- desafios;
- transferência.

Evitar recompensar somente volume bruto de respostas.

---

## 25.43 SEQUÊNCIA ADAPTATIVA DE EXEMPLO

Considere `PC-ALG-05 — diferença de quadrados`.

### Exposição

`x² - 9 = (x-3)(x+3)`

### Prática guiada

`x² - 16`

### Prática independente

`4x² - 25`

### Variação

`49 - y²`

### Uso em equação

`x² - 16 = 0`

### Uso em função racional

`(x²-16)/(x-4)`

### Uso posterior em limite

`lim x→4 (x²-16)/(x-4)`

A mesma habilidade reaparece em níveis diferentes, produzindo evidência de retenção e transferência.

---

## 25.44 MODELO DE EVIDÊNCIA CONCEITUAL

Uma evidência poderá possuir estrutura semelhante a:

```
evidence_id
student_id
skill_id
activity_id
timestamp

dimension:
  CALCULO | INTERPRETACAO | REPRESENTACAO |
  APLICACAO | TRANSFERENCIA

result:
  SUCESSO | PARCIAL | FALHA

independence:
  SEM_AJUDA | DICA_LEVE | DICA_FORTE | DEMONSTRACAO

difficulty
context_novelty
strategy_used
error_codes
self_corrected
calculator_policy
calculator_used
```

A estrutura final dependerá da arquitetura escolhida, mas o conceito de evidência deverá permanecer.

---

## 25.45 NÃO ARMAZENAR MAIS DADOS DO QUE O NECESSÁRIO

O sistema de aprendizagem adaptativa deverá utilizar apenas dados necessários para:

- progresso;
- feedback;
- diagnóstico;
- personalização educacional.

Detalhes de privacidade, retenção e telemetria serão definidos na seção específica de segurança/privacidade.

---

## 25.46 TESTES DO SISTEMA ADAPTATIVO

O sistema deverá possuir cenários de teste como:

### Aluno domina rapidamente

Espera-se:

- menos repetição;
- avanço mais rápido;
- desafio maior.

### Aluno acerta somente com dicas

Espera-se:

- progresso;
- mas sem domínio independente prematuro.

### Aluno erra por pré-requisito

Espera-se:

- revisão do pré-requisito;
- não repetição infinita do conteúdo atual.

### Aluno volta após muito tempo

Espera-se:

- pequena confirmação;
- recuperação rápida se ainda dominar.

### Aluno usa método alternativo

Espera-se:

- reconhecer matemática correta;
- registrar habilidades realmente usadas;
- não conceder domínio da habilidade-alvo não demonstrada.

### Aluno comete erro e se autocorrige

Espera-se:

- registrar erro;
- registrar autocorreção;
- não tratar como falha completa.

---

## 25.47 PRINCÍPIO DO SISTEMA ADAPTATIVO

A adaptação deverá tentar responder:

> “Qual é a menor próxima intervenção capaz de fazer este aluno aprender ou consolidar esta habilidade?”

e não:

> “Quantos exercícios ainda faltam nesta lista?”

---

# 26. DIAGNÓSTICO DE PRÉ-REQUISITOS

Quando ocorrerem erros recorrentes, o sistema deverá procurar a origem provável.

Exemplo:

```
lim x→2 (x² - 4)/(x - 2)
```

Se o aluno entende limite mas não consegue fatorar `x²-4`, recomendar revisão de diferença de quadrados em vez de repetir apenas limites.

---

# 27. ARQUITETURA CURRICULAR

O currículo do Eixo não será modelado apenas como capítulos em sequência.

A unidade principal será a **habilidade curricular**, representada como um nó em um grafo de dependências.

Uma habilidade poderá depender de várias anteriores e desbloquear várias posteriores.

Exemplo:

```
Frações equivalentes
       ↓
Operações com frações
       ↓
Frações algébricas
       ↓
Funções racionais
       ↓
Limites com fatoração
```

Outro ramo:

```
Razão
   ↓
Inclinação
   ↓
Taxa média de variação
   ↓
Reta secante
   ↓
Derivada
```

A trilha visual mostrada ao estudante poderá ser simples e linearizada, mas internamente o sistema deverá preservar o grafo real.

## 27.1 TIPOS DE HABILIDADE

Cada nó curricular poderá ser classificado como:

### Núcleo

Conhecimento necessário para seguir pela trilha principal.

### Ponte

Conhecimento que conecta dois blocos importantes.

Exemplo: taxa média de variação conecta funções a derivadas.

### Apoio

Conhecimento útil para compreensão, aplicações ou recuperação de lacunas, mas que não precisa bloquear toda a progressão.

### Extensão

Conteúdo que amplia a formação, porém não é requisito para concluir o escopo inicial Matemática Básica → Pré-Cálculo → Cálculo I.

## 27.2 IDENTIFICADORES ESTÁVEIS

Cada habilidade deverá possuir um ID estável.

Convenção inicial:

- `MB-...` — Matemática Básica;
- `PC-...` — Pré-Cálculo;
- `C1-...` — Cálculo I.

Exemplos:

- `MB-FRA-03` — simplificação de frações;
- `PC-FUN-04` — domínio e imagem;
- `C1-DER-07` — regra da cadeia.

Esses IDs deverão ser usados por:

- banco de questões;
- motor matemático;
- sistema de domínio;
- dicas;
- códigos de erro;
- telemetria pedagógica;
- testes automatizados;
- documentação.

O nome exibido ao estudante poderá mudar sem quebrar a identidade interna da habilidade.

## 27.3 METADADOS DE UMA HABILIDADE

Cada nó curricular deverá poder armazenar:

- ID;
- nome;
- descrição;
- área;
- tipo: núcleo, ponte, apoio ou extensão;
- pré-requisitos diretos;
- conhecimentos que desbloqueia;
- conceitos matemáticos;
- notações necessárias;
- ferramentas do teclado necessárias;
- transformações que o motor precisa reconhecer;
- erros comuns;
- tipos de atividade permitidos;
- dimensões de domínio avaliadas;
- critérios de domínio;
- exemplos de aplicação;
- recursos visuais associados;
- dificuldade mínima/máxima;
- política de calculadora típica.

## 27.4 REGRA DE PROGRESSÃO

A progressão não deverá exigir que o aluno faça todo o conteúdo novamente quando já demonstra domínio.

O sistema poderá:

- aplicar diagnóstico;
- reconhecer conhecimentos prévios;
- liberar habilidades já dominadas;
- exigir apenas pré-requisitos realmente necessários;
- recomendar revisões locais quando surgirem lacunas.

Entretanto, habilidades críticas não deverão ser ignoradas somente porque o aluno acertou uma questão isolada.

---

# 27.A MATEMÁTICA BÁSICA

O objetivo desta etapa é construir a linguagem e as operações que sustentam Álgebra, Pré-Cálculo e Cálculo.

## 27.A1 LINGUAGEM MATEMÁTICA E SENTIDO NUMÉRICO

### MB-NUM-01 — Ler e escrever números

- naturais;
- inteiros;
- decimais;
- representação numérica básica.

### MB-NUM-02 — Comparação e ordenação

- maior/menor;
- igualdade;
- ordenação;
- símbolos `<`, `>`, `=`.

### MB-NUM-03 — Reta numérica

- posição;
- distância;
- orientação;
- números positivos e negativos.

### MB-NUM-04 — Números negativos

- significado;
- comparação;
- opostos;
- operações intuitivas.

### MB-NUM-05 — Valor absoluto

- distância até zero;
- interpretação geométrica;
- cálculo básico.

Dependências principais:

```
MB-NUM-01
   ↓
MB-NUM-02
   ↓
MB-NUM-03
   ↓
MB-NUM-04
   ↓
MB-NUM-05
```

## 27.A2 OPERAÇÕES ARITMÉTICAS

### MB-ARI-01 — Adição

### MB-ARI-02 — Subtração

### MB-ARI-03 — Multiplicação

- soma repetida;
- propriedades básicas;
- sinais.

### MB-ARI-04 — Divisão

- repartição;
- razão inicial;
- resto;
- divisão por zero como operação não definida.

### MB-ARI-05 — Propriedades das operações

- comutativa;
- associativa;
- distributiva em contexto numérico.

### MB-ARI-06 — Ordem das operações

- parênteses;
- potências;
- multiplicação/divisão;
- soma/subtração.

### MB-ARI-07 — Operações combinadas

Resolver expressões numéricas com múltiplas operações.

## 27.A3 DIVISIBILIDADE

### MB-DIV-01 — Múltiplos e divisores

### MB-DIV-02 — Critérios de divisibilidade

### MB-DIV-03 — Números primos

### MB-DIV-04 — Fatoração prima

### MB-DIV-05 — MDC

### MB-DIV-06 — MMC

Essas habilidades sustentam principalmente frações, simplificação e denominadores comuns.

## 27.A4 FRAÇÕES

### MB-FRA-01 — Significado de fração

- parte-todo;
- quociente;
- medida;
- número na reta numérica.

### MB-FRA-02 — Frações equivalentes

### MB-FRA-03 — Simplificação de frações

### MB-FRA-04 — Comparação de frações

### MB-FRA-05 — Número misto e fração imprópria

Quando pedagogicamente útil.

### MB-FRA-06 — Soma e subtração com mesmo denominador

### MB-FRA-07 — Denominador comum

### MB-FRA-08 — Soma e subtração com denominadores diferentes

### MB-FRA-09 — Multiplicação de frações

### MB-FRA-10 — Divisão de frações

### MB-FRA-11 — Operações combinadas com frações

### MB-FRA-12 — Frações negativas

Dependência resumida:

```
significado
   ↓
equivalência
   ↓
simplificação
   ├──────────────┐
   ↓              ↓
comparação   denominador comum
                  ↓
            soma/subtração
                  ↓
       multiplicação/divisão
                  ↓
       operações combinadas
```

## 27.A5 DECIMAIS

### MB-DEC-01 — Valor posicional decimal

### MB-DEC-02 — Fração ↔ decimal

### MB-DEC-03 — Comparação de decimais

### MB-DEC-04 — Soma e subtração

### MB-DEC-05 — Multiplicação

### MB-DEC-06 — Divisão

### MB-DEC-07 — Arredondamento e aproximação

### MB-DEC-08 — Erro e precisão básica

Essa habilidade servirá posteriormente para aproximações numéricas em funções e Cálculo.

## 27.A6 PORCENTAGEM, RAZÃO E PROPORÇÃO

### MB-RAZ-01 — Razão

### MB-RAZ-02 — Taxa

### MB-RAZ-03 — Proporção

### MB-RAZ-04 — Proporcionalidade direta

### MB-RAZ-05 — Proporcionalidade inversa

### MB-RAZ-06 — Regra de três como consequência de proporções

O Eixo deverá evitar ensinar regra de três apenas como algoritmo mecânico.

### MB-POR-01 — Significado de porcentagem

### MB-POR-02 — Fração, decimal e porcentagem

### MB-POR-03 — Calcular porcentagem de uma quantidade

### MB-POR-04 — Aumento e desconto percentual

### MB-POR-05 — Variação percentual

### MB-POR-06 — Porcentagens sucessivas

## 27.A7 POTÊNCIAS, RAÍZES E NOTAÇÃO CIENTÍFICA

### MB-POT-01 — Potência como multiplicação repetida

### MB-POT-02 — Expoente zero

### MB-POT-03 — Expoentes negativos

Pode ser introduzido após frações e propriedades.

### MB-POT-04 — Produto de potências de mesma base

### MB-POT-05 — Quociente de potências

### MB-POT-06 — Potência de potência

### MB-POT-07 — Potência de produto/quociente

### MB-RAI-01 — Raiz quadrada

### MB-RAI-02 — Relação entre potência e raiz

### MB-RAI-03 — Raízes exatas

### MB-RAI-04 — Aproximação de raízes não exatas

### MB-NOT-01 — Notação científica

### MB-NOT-02 — Operações básicas em notação científica

## 27.A8 MEDIDAS E UNIDADES

### MB-MED-01 — Comprimento

### MB-MED-02 — Área

### MB-MED-03 — Volume

### MB-MED-04 — Tempo

### MB-MED-05 — Massa

### MB-MED-06 — Conversão de unidades

### MB-MED-07 — Análise dimensional intuitiva

A análise dimensional será uma ponte para problemas aplicados em Cálculo.

## 27.A9 GEOMETRIA FUNDAMENTAL

### MB-GEO-01 — Ponto, reta, segmento e plano

### MB-GEO-02 — Ângulos

### MB-GEO-03 — Triângulos

### MB-GEO-04 — Quadriláteros e polígonos

### MB-GEO-05 — Perímetro

### MB-GEO-06 — Área

### MB-GEO-07 — Circunferência e círculo

### MB-GEO-08 — Teorema de Pitágoras

### MB-GEO-09 — Semelhança e escala

Semelhança será importante como apoio à trigonometria.

## 27.A10 INTRODUÇÃO À ÁLGEBRA

### MB-ALG-01 — Variável e incógnita

Distinguir o uso de uma letra como número desconhecido, variável ou parâmetro.

### MB-ALG-02 — Expressão algébrica

### MB-ALG-03 — Termo, coeficiente e constante

### MB-ALG-04 — Avaliação de expressão por substituição

### MB-ALG-05 — Termos semelhantes

### MB-ALG-06 — Simplificação de expressões

### MB-ALG-07 — Propriedade distributiva algébrica

### MB-ALG-08 — Remoção e uso de parênteses

### MB-ALG-09 — Expressões com frações simples

## 27.A11 IGUALDADE E EQUAÇÕES

### MB-EQU-01 — Significado de igualdade

A igualdade deverá ser ensinada como relação entre duas expressões, e não apenas como “o lugar onde aparece a resposta”.

### MB-EQU-02 — Equações de uma etapa

### MB-EQU-03 — Operação inversa

### MB-EQU-04 — Preservar igualdade fazendo a mesma operação nos dois membros

### MB-EQU-05 — Equações lineares de múltiplas etapas

### MB-EQU-06 — Equações com parênteses

### MB-EQU-07 — Equações com frações numéricas

### MB-EQU-08 — Verificação da solução

## 27.A12 INEQUAÇÕES INICIAIS

### MB-INE-01 — Significado de desigualdade

### MB-INE-02 — Representação na reta numérica

### MB-INE-03 — Inequações lineares simples

### MB-INE-04 — Multiplicar/dividir por número negativo

### MB-INE-05 — Intervalos simples

A notação formal de intervalos poderá ser aprofundada em Pré-Cálculo.

## 27.A13 PLANO CARTESIANO

### MB-CAR-01 — Eixos e origem

### MB-CAR-02 — Coordenadas ordenadas

### MB-CAR-03 — Quadrantes

### MB-CAR-04 — Representar pontos

### MB-CAR-05 — Ler informações de gráficos

### MB-CAR-06 — Variação horizontal e vertical

Essa habilidade será ponte para inclinação.

## 27.A14 MODELAGEM E LEITURA DE PROBLEMAS

Habilidades transversais:

### MB-MOD-01 — Identificar dados e pergunta

### MB-MOD-02 — Escolher operações

### MB-MOD-03 — Traduzir frase em expressão

### MB-MOD-04 — Traduzir situação em equação

### MB-MOD-05 — Interpretar o resultado no contexto

### MB-MOD-06 — Conferir plausibilidade

Essas habilidades deverão aparecer ao longo de todos os módulos, não como um capítulo isolado.

---

# 27.B PRÉ-CÁLCULO

O objetivo é transformar a base aritmética e algébrica em domínio funcional, gráfico e trigonométrico suficiente para Cálculo I.

## 27.B1 ÁLGEBRA INTERMEDIÁRIA

### PC-ALG-01 — Manipulação algébrica fluente

### PC-ALG-02 — Produtos notáveis

- quadrado da soma;
- quadrado da diferença;
- produto da soma pela diferença.

### PC-ALG-03 — Fator comum

### PC-ALG-04 — Agrupamento

### PC-ALG-05 — Diferença de quadrados

### PC-ALG-06 — Fatoração de trinômios

### PC-ALG-07 — Soma/diferença de cubos

Pode ser classificada como apoio/extensão conforme o escopo.

### PC-ALG-08 — Simplificação de expressões racionais

### PC-ALG-09 — Restrições de domínio em expressões racionais

### PC-ALG-10 — Racionalização

### PC-ALG-11 — Expoentes racionais

### PC-ALG-12 — Radicais algébricos

## 27.B2 EQUAÇÕES E INEQUAÇÕES

### PC-EQU-01 — Sistemas lineares 2×2

### PC-EQU-02 — Sistemas e interpretação gráfica

### PC-EQU-03 — Equação quadrática por fatoração

### PC-EQU-04 — Completamento de quadrado

### PC-EQU-05 — Fórmula quadrática

### PC-EQU-06 — Discriminante

### PC-EQU-07 — Equações polinomiais simples

### PC-EQU-08 — Equações racionais

Com restrições e verificação de soluções.

### PC-EQU-09 — Equações radicais

Com verificação de soluções extranhas.

### PC-EQU-10 — Equações com valor absoluto

### PC-INE-01 — Inequações lineares compostas

### PC-INE-02 — Notação de intervalos

### PC-INE-03 — Inequações quadráticas

### PC-INE-04 — Inequações polinomiais

### PC-INE-05 — Inequações racionais

### PC-INE-06 — Inequações com valor absoluto

## 27.B3 FUNÇÕES — FUNDAMENTOS

Este é um dos blocos mais importantes de todo o Pré-Cálculo.

### PC-FUN-01 — Relações e funções

### PC-FUN-02 — Entrada, saída e regra

### PC-FUN-03 — Notação `f(x)`

### PC-FUN-04 — Avaliar função

### PC-FUN-05 — Domínio

### PC-FUN-06 — Imagem

### PC-FUN-07 — Zeros/interceptos

### PC-FUN-08 — Representações múltiplas

Relacionar:

- fórmula;
- tabela;
- gráfico;
- descrição verbal.

### PC-FUN-09 — Crescimento e decrescimento

### PC-FUN-10 — Taxa média de variação

Ponte direta para derivadas.

### PC-FUN-11 — Funções definidas por partes

### PC-FUN-12 — Operações com funções

### PC-FUN-13 — Composição

### PC-FUN-14 — Função inversa

### PC-FUN-15 — Teste da reta vertical/horizontal quando aplicável

## 27.B4 TRANSFORMAÇÕES DE GRÁFICOS

### PC-GRA-01 — Translação vertical

### PC-GRA-02 — Translação horizontal

### PC-GRA-03 — Reflexões

### PC-GRA-04 — Escala vertical

### PC-GRA-05 — Escala horizontal

### PC-GRA-06 — Combinação de transformações

Exemplo:

`g(x)=a f(b(x-h))+k`

O objetivo é compreender geometricamente cada parâmetro, não decorar uma fórmula.

## 27.B5 FUNÇÕES LINEARES E AFINS

### PC-LIN-01 — Inclinação

### PC-LIN-02 — Inclinação como razão `Δy/Δx`

### PC-LIN-03 — Forma `y=mx+b`

### PC-LIN-04 — Equação da reta a partir de pontos

### PC-LIN-05 — Forma ponto-inclinação

### PC-LIN-06 — Retas paralelas/perpendiculares

### PC-LIN-07 — Modelagem linear

Inclinação deverá ser conectada explicitamente a taxa de variação.

## 27.B6 FUNÇÕES QUADRÁTICAS

### PC-QUA-01 — Forma padrão

### PC-QUA-02 — Parábola

### PC-QUA-03 — Vértice

### PC-QUA-04 — Forma fatorada

### PC-QUA-05 — Forma de vértice

### PC-QUA-06 — Zeros e gráfico

### PC-QUA-07 — Máximo/mínimo de uma quadrática

### PC-QUA-08 — Modelagem quadrática

## 27.B7 POLINÔMIOS

### PC-POL-01 — Grau e coeficientes

### PC-POL-02 — Operações

### PC-POL-03 — Zeros e fatores

### PC-POL-04 — Multiplicidade

### PC-POL-05 — Comportamento final

### PC-POL-06 — Esboço de gráfico

### PC-POL-07 — Divisão polinomial

### PC-POL-08 — Teorema do resto/fator

Podem ser apoio conforme a profundidade desejada.

## 27.B8 FUNÇÕES RACIONAIS

### PC-RAC-01 — Domínio e pontos proibidos

### PC-RAC-02 — Simplificação sem perder restrições

### PC-RAC-03 — Buracos/descontinuidades removíveis

### PC-RAC-04 — Assíntotas verticais

### PC-RAC-05 — Assíntotas horizontais

### PC-RAC-06 — Comportamento gráfico

### PC-RAC-07 — Modelagem simples

Esse bloco é ponte direta para limites.

## 27.B9 EXPONENCIAIS

### PC-EXP-01 — Crescimento exponencial

### PC-EXP-02 — Decaimento exponencial

### PC-EXP-03 — Função `a^x`

### PC-EXP-04 — Número `e`

### PC-EXP-05 — Transformações de exponenciais

### PC-EXP-06 — Equações exponenciais

### PC-EXP-07 — Modelagem exponencial

## 27.B10 LOGARITMOS

### PC-LOG-01 — Logaritmo como inversa da exponencial

### PC-LOG-02 — Definição `log_a b=c ↔ a^c=b`

### PC-LOG-03 — Domínio do logaritmo

### PC-LOG-04 — Produto

### PC-LOG-05 — Quociente

### PC-LOG-06 — Potência

### PC-LOG-07 — Mudança de base

### PC-LOG-08 — Equações logarítmicas

### PC-LOG-09 — Equações exponenciais usando logaritmos

### PC-LOG-10 — Logaritmo natural

## 27.B11 GEOMETRIA ANALÍTICA

### PC-GAN-01 — Distância entre pontos

### PC-GAN-02 — Ponto médio

### PC-GAN-03 — Equação do círculo

### PC-GAN-04 — Interseções

### PC-GAN-05 — Interpretação geométrica de equações

Cônicas adicionais poderão ser extensão, pois não são requisito central para o escopo inicial de Cálculo I.

## 27.B12 TRIGONOMETRIA — FUNDAMENTOS

### PC-TRI-01 — Ângulo

### PC-TRI-02 — Graus e radianos

Radianos são obrigatórios antes de derivadas trigonométricas.

### PC-TRI-03 — Conversão graus ↔ radianos

### PC-TRI-04 — Círculo trigonométrico

### PC-TRI-05 — Seno

### PC-TRI-06 — Cosseno

### PC-TRI-07 — Tangente

### PC-TRI-08 — Sinais por quadrante

### PC-TRI-09 — Valores notáveis

### PC-TRI-10 — Relação pitagórica fundamental

## 27.B13 GRÁFICOS TRIGONOMÉTRICOS

### PC-TGR-01 — Gráfico do seno

### PC-TGR-02 — Gráfico do cosseno

### PC-TGR-03 — Gráfico da tangente

### PC-TGR-04 — Amplitude

### PC-TGR-05 — Período

### PC-TGR-06 — Deslocamento de fase

### PC-TGR-07 — Transformações trigonométricas

## 27.B14 IDENTIDADES E EQUAÇÕES TRIGONOMÉTRICAS

### PC-TID-01 — Identidade pitagórica

### PC-TID-02 — Identidades recíprocas

### PC-TID-03 — Identidades de quociente

### PC-TID-04 — Simplificação trigonométrica

### PC-TID-05 — Equações trigonométricas básicas

Identidades de soma/diferença e ângulo duplo poderão ser apoio/extensão dependendo do currículo final.

## 27.B15 FUNÇÕES TRIGONOMÉTRICAS INVERSAS

### PC-INV-01 — `arcsin`

### PC-INV-02 — `arccos`

### PC-INV-03 — `arctan`

### PC-INV-04 — Domínios e imagens restritos

Importante se o Cálculo I incluir derivadas de funções trigonométricas inversas.

## 27.B16 SEQUÊNCIAS E PADRÕES

### PC-SEQ-01 — Sequência

### PC-SEQ-02 — Notação

### PC-SEQ-03 — Sequência aritmética

### PC-SEQ-04 — Sequência geométrica

### PC-SEQ-05 — Intuição de comportamento infinito

Este bloco é principalmente ponte conceitual. Séries formais ficam fora do escopo inicial de Cálculo I.

## 27.B17 PREPARAÇÃO DIRETA PARA CÁLCULO

Antes de desbloquear Cálculo I, o aluno deverá trabalhar explicitamente:

### PC-CAL-01 — Taxa média de variação

### PC-CAL-02 — Reta secante

### PC-CAL-03 — Aproximar uma taxa instantânea

### PC-CAL-04 — Comportamento de função perto de um ponto

### PC-CAL-05 — Aproximação por tabela

### PC-CAL-06 — Aproximação por gráfico

### PC-CAL-07 — Assíntotas e comportamento extremo

### PC-CAL-08 — Revisão de manipulação algébrica para limites

Esse bloco deverá fazer o aluno chegar a Cálculo já entendendo intuitivamente o problema que limites e derivadas resolvem.

---

# 27.C CÁLCULO I

## 27.C1 LIMITES — INTUIÇÃO E REPRESENTAÇÕES

### C1-LIM-01 — Ideia de aproximação

### C1-LIM-02 — Notação de limite

### C1-LIM-03 — Limite por tabela

### C1-LIM-04 — Limite por gráfico

### C1-LIM-05 — Limite por expressão

### C1-LIM-06 — Limites laterais

### C1-LIM-07 — Quando o limite existe

### C1-LIM-08 — Quando o limite não existe

O aluno deverá relacionar sempre que possível:

```
tabela ↔ gráfico ↔ expressão
```

## 27.C2 CÁLCULO ALGÉBRICO DE LIMITES

### C1-LAL-01 — Substituição direta

### C1-LAL-02 — Leis dos limites

### C1-LAL-03 — Indeterminação `0/0`

### C1-LAL-04 — Fatoração

### C1-LAL-05 — Cancelamento com restrição de domínio

### C1-LAL-06 — Racionalização

### C1-LAL-07 — Limites trigonométricos fundamentais

Quando o currículo e o motor estiverem preparados.

## 27.C3 LIMITES INFINITOS E NO INFINITO

### C1-INF-01 — Limite infinito

### C1-INF-02 — Assíntota vertical

### C1-INF-03 — Limite no infinito

### C1-INF-04 — Comportamento dominante

### C1-INF-05 — Assíntota horizontal

### C1-INF-06 — Comparação de ordens de crescimento

## 27.C4 CONTINUIDADE

### C1-CON-01 — Continuidade intuitiva

### C1-CON-02 — Condições formais de continuidade em um ponto

### C1-CON-03 — Tipos de descontinuidade

### C1-CON-04 — Continuidade em intervalos

### C1-CON-05 — Teorema do Valor Intermediário

Pode ser tratado como núcleo conceitual/aplicação conforme o curso.

## 27.C5 DERIVADA — MOTIVAÇÃO

### C1-DER-01 — Taxa média

Revisão/ponte.

### C1-DER-02 — Taxa instantânea

### C1-DER-03 — Reta tangente

### C1-DER-04 — Quociente de diferenças

### C1-DER-05 — Derivada como limite

### C1-DER-06 — Notações de derivada

- `f'(x)`;
- `dy/dx`;
- outras quando necessárias.

### C1-DER-07 — Derivabilidade e interpretação

## 27.C6 REGRAS DE DERIVAÇÃO

### C1-REG-01 — Constante

### C1-REG-02 — Potência

### C1-REG-03 — Constante multiplicativa

### C1-REG-04 — Soma e diferença

### C1-REG-05 — Produto

### C1-REG-06 — Quociente

### C1-REG-07 — Regra da cadeia

A regra da cadeia deverá ser considerada uma habilidade crítica.

## 27.C7 DERIVADAS DE FUNÇÕES ESPECÍFICAS

### C1-ESP-01 — Exponenciais

### C1-ESP-02 — `e^x`

### C1-ESP-03 — Logaritmos

### C1-ESP-04 — `ln x`

### C1-ESP-05 — Seno

### C1-ESP-06 — Cosseno

### C1-ESP-07 — Tangente

### C1-ESP-08 — Trigonométricas inversas

Se incluídas no escopo principal.

## 27.C8 DERIVAÇÃO IMPLÍCITA E DERIVADAS DE ORDEM SUPERIOR

### C1-IMP-01 — Relações implícitas

### C1-IMP-02 — Derivação implícita

### C1-IMP-03 — Resolver para `dy/dx`

### C1-ORD-01 — Segunda derivada

### C1-ORD-02 — Derivadas de ordem superior

### C1-ORD-03 — Interpretação física de posição, velocidade e aceleração

## 27.C9 TAXAS RELACIONADAS

### C1-TAX-01 — Identificar quantidades variáveis

### C1-TAX-02 — Construir relação entre variáveis

### C1-TAX-03 — Derivar em relação ao tempo

### C1-TAX-04 — Substituir valores no momento correto

### C1-TAX-05 — Interpretar sinal e unidade

Esse módulo exige forte domínio de modelagem e unidades.

## 27.C10 ANÁLISE DE FUNÇÕES COM DERIVADAS

### C1-ANA-01 — Pontos críticos

### C1-ANA-02 — Crescimento e decrescimento

### C1-ANA-03 — Máximos e mínimos locais

### C1-ANA-04 — Extremos absolutos

### C1-ANA-05 — Concavidade

### C1-ANA-06 — Pontos de inflexão

### C1-ANA-07 — Teste da primeira derivada

### C1-ANA-08 — Teste da segunda derivada

### C1-ANA-09 — Esboço de curvas

## 27.C11 TEOREMAS DE DERIVADAS

### C1-TEO-01 — Teorema de Rolle

### C1-TEO-02 — Teorema do Valor Médio

O foco deverá incluir significado geométrico, não apenas aplicação algorítmica.

## 27.C12 OTIMIZAÇÃO

### C1-OTI-01 — Definir variável e objetivo

### C1-OTI-02 — Identificar restrições

### C1-OTI-03 — Construir função objetivo

### C1-OTI-04 — Determinar domínio viável

### C1-OTI-05 — Encontrar candidatos

### C1-OTI-06 — Comparar candidatos

### C1-OTI-07 — Interpretar solução

Otimização deverá ser um dos principais exemplos de matemática integrada à mecânica do jogo.

## 27.C13 APROXIMAÇÃO LOCAL

### C1-APR-01 — Linearização

### C1-APR-02 — Diferenciais

### C1-APR-03 — Aproximação e erro

Pode ser núcleo ou apoio conforme a grade final.

## 27.C14 ANTIDERIVADAS

### C1-ANT-01 — Operação inversa da derivação

### C1-ANT-02 — Família de antiderivadas

### C1-ANT-03 — Constante de integração

### C1-ANT-04 — Regras básicas

### C1-ANT-05 — Condição inicial simples

## 27.C15 ÁREA E SOMAS DE RIEMANN

### C1-RIE-01 — Área acumulada

### C1-RIE-02 — Partição de intervalo

### C1-RIE-03 — Retângulos à esquerda

### C1-RIE-04 — Retângulos à direita

### C1-RIE-05 — Ponto médio

### C1-RIE-06 — Soma de Riemann

### C1-RIE-07 — Limite das somas

A visualização deverá ter papel central neste bloco.

## 27.C16 INTEGRAL DEFINIDA

### C1-INT-01 — Notação de integral definida

### C1-INT-02 — Integral como acumulação

### C1-INT-03 — Integral como área orientada

### C1-INT-04 — Propriedades da integral

### C1-INT-05 — Interpretação de unidades

## 27.C17 TEOREMA FUNDAMENTAL DO CÁLCULO

### C1-TFC-01 — Relação entre acumulação e derivada

### C1-TFC-02 — Primeira parte do TFC

### C1-TFC-03 — Segunda parte do TFC

### C1-TFC-04 — Avaliar integral definida por antiderivada

Esse deverá ser um dos pontos de culminação conceitual do primeiro ciclo do Eixo.

## 27.C18 INTEGRAÇÃO BÁSICA

### C1-IBS-01 — Integral indefinida

### C1-IBS-02 — Regra da potência

### C1-IBS-03 — Linearidade

### C1-IBS-04 — Integrais exponenciais/logarítmicas básicas

### C1-IBS-05 — Integrais trigonométricas básicas

### C1-IBS-06 — Substituição simples

A substituição poderá ser núcleo ou ponte para Cálculo II, conforme o recorte final adotado.

## 27.C19 APLICAÇÕES BÁSICAS DE INTEGRAIS

### C1-APL-01 — Deslocamento a partir de velocidade

### C1-APL-02 — Acumulação de taxa

### C1-APL-03 — Área entre curvas

### C1-APL-04 — Valor médio de uma função

Volumes e técnicas adicionais poderão ficar como extensão ou início de um futuro Cálculo II.

---

# 27.D CONTEÚDOS DE EXTENSÃO — FORA DO NÚCLEO INICIAL

O Eixo deverá poder crescer futuramente para:

- números complexos;
- cônicas aprofundadas;
- vetores;
- matrizes;
- matemática discreta;
- probabilidade;
- estatística;
- Cálculo II;
- Cálculo III;
- Álgebra Linear;
- Equações Diferenciais;
- Física matemática;
- outros percursos.

Esses conteúdos não deverão influenciar a arquitetura inicial de forma que dificultem o MVP, mas o modelo curricular deve permitir sua inclusão futura.

---

# 27.E DEPENDÊNCIAS CRÍTICAS PARA ENTRAR EM CÁLCULO I

Antes de considerar o aluno preparado para a trilha principal de Cálculo I, o sistema deverá possuir evidência suficiente, especialmente em:

- operações com frações;
- sinais;
- potências e raízes;
- manipulação algébrica;
- fatoração;
- equações;
- inequações básicas;
- domínio;
- notação de função;
- leitura de gráficos;
- taxa média de variação;
- funções polinomiais;
- funções racionais;
- exponenciais;
- logaritmos;
- radianos;
- seno e cosseno;
- comportamento gráfico.

O aluno não precisa possuir domínio perfeito de cada subtema de Pré-Cálculo para abrir a primeira aula de limites, mas lacunas críticas deverão gerar revisão recomendada ou obrigatória quando impedirem a compreensão.

## 27.E1 GATE DE PRONTIDÃO

O Eixo poderá utilizar um **Gate de Prontidão para Cálculo**.

Esse gate não será uma única prova com nota.

Ele agregará evidências já coletadas ao longo da trilha e, quando necessário, pequenas atividades diagnósticas.

Resultado possível:

### Pronto

Pré-requisitos essenciais suficientemente consolidados.

### Pronto com revisão recomendada

Pode iniciar Cálculo, mas alguns nós devem ser revisados em paralelo.

### Revisão necessária

Há lacunas que provavelmente impedirão o progresso.

O sistema deverá indicar exatamente quais habilidades precisam de reforço.

---

# 27.F EXEMPLOS DE GRAFO DE DEPENDÊNCIAS

## Derivada pela definição

```
frações
   ↓
manipulação algébrica
   ↓
funções
   ↓
taxa média
   ↓
limites
   ↓
quociente de diferenças
   ↓
derivada pela definição
```

## Regra da cadeia

```
funções
   ↓
composição de funções
   ↓
regras básicas de derivação
   ↓
regra da cadeia
```

## Otimização

```
modelagem
   ├──→ funções
   ├──→ domínio/restrições
   └──→ equações
             ↓
        derivadas
             ↓
       pontos críticos
             ↓
        otimização
```

## Integral definida

```
área
   ↓
funções e gráficos
   ↓
somatórios/partições
   ↓
limites
   ↓
somas de Riemann
   ↓
integral definida
   ↓
Teorema Fundamental do Cálculo
```

---

# 27.G REGRA DE CONTEÚDO PUBLICÁVEL

Uma habilidade curricular somente poderá ser liberada em produção quando existirem:

1. definição pedagógica;
2. pré-requisitos cadastrados;
3. notação suportada pelo editor;
4. ferramentas necessárias ensinadas;
5. transformações necessárias reconhecidas pelo motor;
6. erros principais classificados;
7. atividades suficientes para aprendizagem e domínio;
8. critérios de domínio;
9. testes automatizados do motor;
10. revisão pedagógica do conteúdo.

Isso conecta diretamente currículo, produto e qualidade técnica.

---

# 28. BANCO DE QUESTÕES, GERAÇÃO E SELEÇÃO DE ATIVIDADES

O Eixo não deverá depender de milhares de questões escritas manualmente uma a uma.

O sistema de conteúdo será híbrido e deverá combinar:

1. questões autorais/curadas;
2. famílias paramétricas de exercícios;
3. adaptações de recursos educacionais legalmente utilizáveis;
4. atividades interativas construídas especificamente para o Eixo;
5. geração assistida por IA apenas sob validação estruturada;
6. seleção adaptativa baseada em habilidade, domínio e contexto.

O objetivo não é produzir volume pelo volume.

O objetivo é conseguir gerar **variedade pedagogicamente útil e matematicamente verificável**.

---

## 28.1 QUESTÃO NÃO É SOMENTE ENUNCIADO + RESPOSTA

Cada atividade deverá ser tratada como um objeto pedagógico estruturado.

Metadados previstos:

```
activity_id
version
status

skill_targets
skill_prerequisites
secondary_skills

activity_type
difficulty
complexity
novelty

statement
math_objects
editor_templates_required

pedagogical_goal
required_strategy
accepted_strategies
strategies_not_proving_target_mastery

detail_level
calculator_policy

solution_contract
answer_contract
domain_assumptions
units

common_errors
hint_ladder

visual_resources
graph_config
interactive_resources

source_provenance
license
author
review_status
```

Nem todos os campos serão obrigatórios em todas as atividades, mas o modelo deverá suportá-los.

---

## 28.2 TIPOS DE CONTEÚDO

### Questão fixa

Enunciado e dados definidos manualmente.

Útil para:

- problemas cuidadosamente desenhados;
- aplicações;
- desafios;
- introduções;
- situações com contexto específico.

### Família paramétrica

Possui estrutura pedagógica fixa e parâmetros variáveis.

Exemplo:

```
a(x+b)=c
```

com restrições sobre `a`, `b` e `c`.

### Atividade interativa

Depende de:

- gráfico;
- slider;
- construção;
- previsão;
- manipulação visual.

### Atividade diagnóstica

Projetada para distinguir possíveis lacunas.

### Atividade de transferência

Usa o mesmo conceito em contexto significativamente diferente.

### Atividade de correção de erro

Apresenta uma resolução e pede identificação/correção.

### Atividade aberta

Permite múltiplas estratégias e possivelmente múltiplas respostas válidas.

---

## 28.3 BLUEPRINT PEDAGÓGICO

Cada família de atividades deverá possuir um **blueprint**.

O blueprint define a intenção pedagógica antes dos números específicos.

Exemplo:

```
Blueprint: EQUACAO_LINEAR_DISTRIBUTIVA_01

habilidade-alvo:
  MB-ALG-07
  MB-EQU-05

forma:
  a(x+b)=c

objetivo:
  exigir distributiva antes de isolar x

restrições:
  a ≠ 0
  solução inteira
  evitar números excessivamente grandes

variações:
  sinal de a
  sinal de b
  posição dos termos
  solução positiva/negativa/zero

erros-alvo:
  distributiva parcial
  erro de sinal
  operação em apenas um membro

dificuldade:
  ...
```

O blueprint é mais importante do que uma questão individual gerada.

---

## 28.4 GERAÇÃO PARAMÉTRICA NÃO PODE SER APENAS TROCA DE NÚMEROS

Uma família precisa possuir eixos reais de variação.

Exemplo ruim:

```
2(x+3)=10
3(x+4)=15
4(x+5)=20
```

O padrão fica óbvio e mede pouco.

Melhor família pode variar:

- coeficiente positivo/negativo;
- constante positiva/negativa;
- variável em lados diferentes;
- parênteses de um ou dois lados;
- solução positiva/negativa;
- coeficientes fracionários em níveis avançados;
- ordem visual dos termos.

Exemplos:

```
3(x+2)=18
-2(x-4)=10
5-3(x+1)=-7
2(x-3)=x+4
```

desde que cada instância continue alinhada ao objetivo pedagógico.

---

## 28.5 PARÂMETROS COM RESTRIÇÕES

Geradores deverão declarar restrições matemáticas.

Exemplo:

para uma equação destinada a produzir solução inteira:

```
a ≠ 0
x_solution ∈ Z
c = a(x_solution+b)
```

Em vez de escolher números aleatórios e torcer para que a questão fique adequada.

---

## 28.6 GERAÇÃO A PARTIR DA SOLUÇÃO

Quando útil, o gerador poderá começar pela resposta desejada.

Exemplo:

1. escolher `x=4`;
2. escolher `a=3`;
3. escolher `b=2`;
4. construir:
   `3(x+2)=18`.

Isso facilita garantir características como:

- solução inteira;
- solução negativa;
- solução fracionária;
- raízes específicas;
- fatoração exata.

---

## 28.7 GERAÇÃO POR ESTRUTURA ALGÉBRICA

Para fatoração:

em vez de criar trinômio aleatório e depois descobrir se é fatorável, gerar:

```
(x-r₁)(x-r₂)
```

e expandir automaticamente.

Exemplo:

escolher:

`r₁=2`

`r₂=3`

gerar:

```
(x-2)(x-3)
```

e então:

```
x²-5x+6
```

Isso garante uma instância pedagogicamente controlável.

---

## 28.8 SEEDS REPRODUZÍVEIS

Cada instância gerada deverá possuir uma seed ou identificador reproduzível.

Assim:

- um bug pode ser reproduzido;
- professor/suporte pode abrir exatamente a mesma questão;
- testes automatizados podem repetir casos;
- evidências podem apontar para a instância real.

Exemplo conceitual:

```
blueprint_id: EQUACAO_LINEAR_DISTRIBUTIVA_01
seed: 845291
```

deve sempre reconstruir a mesma atividade naquela versão do gerador.

---

## 28.9 VERSÃO DO GERADOR

BluePrints e geradores precisam ser versionados.

Se uma regra mudar:

```
v1 → v2
```

atividades históricas continuam associadas à versão que as criou.

Isso evita impossibilidade de reproduzir uma questão antiga.

---

## 28.10 SOLUTION CONTRACT

Cada questão deverá possuir um contrato matemático de solução.

Ele define:

- objeto procurado;
- domínio;
- conjunto de respostas válidas;
- necessidade de todas as soluções;
- precisão;
- unidades;
- formas equivalentes;
- condições adicionais.

Exemplo:

```
type: SOLVE_EQUATION
variable: x
domain: REAL
expected_solution_set: {2,3}
require_all_solutions: true
```

O contrato não precisa definir uma única sequência de passos.

---

## 28.11 SOLUÇÃO DE REFERÊNCIA NÃO É CAMINHO OBRIGATÓRIO

O conteúdo poderá armazenar uma ou mais soluções de referência para:

- produção de dicas;
- revisão humana;
- documentação;
- testes.

Mas essas soluções nunca deverão se tornar implicitamente:

> “a única forma correta”.

O motor continua aceitando outros caminhos válidos.

---

## 28.12 ESTRATÉGIA-ALVO

Quando o objetivo da aula exigir um método, a questão deverá declarar isso.

Exemplo:

```
target_skill: PC-ALG-06
required_evidence:
  FACTOR_TRINOMIAL
```

Se o aluno usar fórmula quadrática:

- resposta matemática pode ser correta;
- evidência de fatoração não é concedida.

---

## 28.13 HINT LADDER POR BLUEPRINT

Dicas deverão ser associadas à estrutura do exercício, não apenas à questão individual.

Exemplo para distributiva:

### Dica 1

> Observe o número fora dos parênteses.

### Dica 2

> Ele precisa multiplicar cada termo dentro do grupo.

### Dica 3

Destacar visualmente:

```
3(x+2)
↓ ↓
3·x + 3·2
```

### Dica 4

Mostrar o próximo passo.

Parâmetros concretos são injetados automaticamente.

---

## 28.14 DICAS DEPENDENTES DO ERRO REAL

Quando o motor reconhecer um erro específico, a questão poderá selecionar uma dica correspondente.

Exemplo:

`ERRO_DISTRIBUTIVA_PARCIAL`

não deve receber uma dica genérica de “tente novamente”.

A dica deve atacar aquele padrão.

---

## 28.15 DISTRAÇÕES E MÚLTIPLA ESCOLHA

Quando houver múltipla escolha, alternativas incorretas deverão preferencialmente representar erros plausíveis.

Exemplo:

para:

`3(x+2)`

alternativas podem incluir:

- `3x+6`;
- `3x+2` — distributiva parcial;
- `3x+5` — erro aritmético;
- outra opção pedagogicamente justificável.

Evitar alternativas aleatórias absurdas apenas para completar quatro opções.

---

## 28.16 MÚLTIPLA ESCOLHA NÃO É O FORMATO PADRÃO

O Eixo deverá priorizar produção matemática pelo aluno.

Múltipla escolha será adequada principalmente para:

- reconhecimento conceitual;
- leitura de gráfico;
- identificação de erro;
- diagnóstico rápido;
- comparação.

Não substituirá o Caderno Matemático.

---

## 28.17 VALIDAÇÃO AUTOMÁTICA DE QUESTÃO GERADA

Antes de mostrar uma instância ao aluno, o pipeline deverá verificar:

1. sintaxe;
2. domínio;
3. existência de solução;
4. quantidade de soluções quando relevante;
5. resposta esperada;
6. restrições do blueprint;
7. nível de dificuldade esperado;
8. ausência de degenerações indesejadas;
9. compatibilidade com o motor;
10. compatibilidade com editor/templates.

Se qualquer validação falhar:

**descartar a instância e gerar outra.**

---

## 28.18 CASOS DEGENERADOS

O gerador deverá evitar instâncias que destruam o objetivo pedagógico.

Exemplo:

uma questão de distributiva:

```
1(x+0)=x
```

pode ser matematicamente válida, mas pedagogicamente inútil para aquela aula.

Outro exemplo:

uma equação quadrática que acidentalmente vira linear após cancelamento.

BluePrints precisam declarar degenerações proibidas.

---

## 28.19 VERIFICAÇÃO DUPLA EM CONTEÚDOS CRÍTICOS

Para questões mais complexas, poderá haver duas formas independentes de confirmação.

Exemplo:

- construir simbolicamente;
- resolver/verificar com motor matemático;
- substituir soluções na expressão original.

Isso reduz risco de disponibilizar questão errada.

---

## 28.20 TESTES DE PROPRIEDADE DOS GERADORES

Geradores deverão possuir testes automatizados do tipo:

> gerar 10.000 instâncias e verificar invariantes.

Exemplos:

- nenhuma possui divisão por zero;
- todas têm solução inteira quando prometido;
- todas exigem a habilidade-alvo;
- todas permanecem no intervalo de dificuldade;
- nenhuma resulta em expressão inválida.

Isso será particularmente importante no Codex/CI.

---

## 28.21 COBERTURA DE VARIAÇÃO

O sistema deverá medir se um blueprint está realmente produzindo variedade.

Possíveis dimensões:

- sinais;
- tamanho de números;
- posição de variável;
- representação;
- tipo de solução;
- contexto;
- combinação de pré-requisitos.

Isso evita “1000 exercícios” que na prática são o mesmo exercício.

---

## 28.22 DIFICULDADE NÃO SERÁ UM ÚNICO NÚMERO

A atividade poderá possuir dimensões como:

- carga algébrica;
- quantidade de etapas;
- abstração;
- novidade;
- número de habilidades combinadas;
- exigência de modelagem;
- complexidade de notação;
- suporte oferecido.

A interface pode reduzir isso a rótulos simples.

Internamente, a representação pode ser multidimensional.

---

## 28.23 CALIBRAÇÃO EMPÍRICA DE DIFICULDADE

A dificuldade inicialmente será definida por especialistas/regras.

Depois, dados reais poderão ajustar estimativas.

Exemplo:

uma questão classificada como “média” que consistentemente produz desempenho muito abaixo de outras questões similares deve ser revisada.

Dados não substituem revisão pedagógica.

---

## 28.24 BANCO DE ITENS E BANCO DE BLUEPRINTS

Devem existir dois conceitos separados.

### Banco de Blueprints

Templates geradores e regras pedagógicas.

### Banco de Itens

Questões fixas e/ou instâncias congeladas.

Isso permite combinar conteúdo artesanal com geração dinâmica.

---

## 28.25 QUESTÕES DE REFERÊNCIA

Para cada habilidade, deverá existir um pequeno conjunto de questões fixas de referência.

Usos:

- testes;
- calibração;
- demonstração;
- validação do motor;
- comparação entre versões.

Elas não precisam ser exibidas frequentemente a alunos.

---

## 28.26 CONTEÚDO AUTORAL

Atividades especialmente importantes deverão ser desenhadas manualmente.

Exemplos:

- introdução de limite;
- visualização de derivada;
- problema de otimização;
- construção da integral;
- desafios de unidade.

Geradores paramétricos não substituem bom design instrucional.

---

## 28.27 CONTEÚDO EXTERNO

Conteúdo externo só poderá entrar após:

- verificar licença;
- registrar origem;
- adaptar ao modelo pedagógico;
- revisar matemática;
- mapear habilidades;
- revisar linguagem;
- validar acessibilidade;
- verificar compatibilidade com o editor/motor.

Copiar um enunciado da internet sem rastreabilidade não será permitido.

---

## 28.28 PROVENIÊNCIA

Toda questão não totalmente autoral deverá armazenar:

- fonte;
- autor/instituição quando disponível;
- URL ou identificador de origem;
- licença;
- data de obtenção;
- tipo de adaptação;
- atribuição exigida.

Isso deverá existir mesmo quando a atribuição não aparece diretamente para o aluno em toda atividade.

---

## 28.29 LICENÇA COMO CAMPO EXECUTÁVEL

A licença não deverá ser apenas texto em documentação.

Ela deverá fazer parte do cadastro do conteúdo.

Isso permite impedir publicação de material com status jurídico desconhecido.

Possíveis estados:

- AUTORAL;
- DOMINIO_PUBLICO;
- CC0;
- CC_BY;
- CC_BY_SA;
- OUTRA_COMPATIVEL;
- REVISAO_NECESSARIA;
- NAO_PUBLICAVEL.

A lista final deverá ser revisada juridicamente antes de produção.

---

## 28.30 IA COMO AUTORA AUXILIAR, NÃO FONTE DE VERDADE

Modelos de linguagem poderão ajudar a:

- criar variações de contexto;
- reescrever enunciados;
- propor erros comuns;
- criar rascunhos de dicas;
- classificar habilidades;
- gerar propostas de blueprint.

Mas a IA não deverá publicar diretamente atividades.

---

## 28.31 PIPELINE DE IA PARA CONTEÚDO

Exemplo:

```
IA propõe
   ↓
parser transforma em estrutura
   ↓
motor matemático verifica
   ↓
regras pedagógicas verificam
   ↓
filtros de qualidade
   ↓
revisão humana quando necessária
   ↓
publicação
```

Em nenhum ponto:

```
IA → aluno
```

sem validação.

---

## 28.32 IA NÃO DEVE INVENTAR RESPOSTA ESPERADA IRREVISÁVEL

Se a resposta não puder ser verificada pelo motor ou por regra confiável, a atividade deverá:

- exigir revisão humana;
- ou não entrar no fluxo automático.

---

## 28.33 GERAÇÃO DE CONTEXTO

Um blueprint matemático poderá receber múltiplos contextos.

Exemplo de função linear:

- corrida de táxi;
- assinatura;
- produção;
- consumo;
- distância;
- orçamento.

Mas o contexto precisa obedecer:

- números plausíveis;
- unidades coerentes;
- linguagem natural;
- ausência de informação desnecessária;
- não introduzir conhecimento externo irrelevante.

---

## 28.34 CONTEXTO NÃO PODE MASCARAR A MATEMÁTICA

Um problema contextualizado não deve virar teste de leitura obscura quando a habilidade-alvo é matemática.

Complexidade textual deve ser controlada separadamente.

---

## 28.35 DIVERSIDADE DE REPRESENTAÇÃO

Uma habilidade deverá aparecer em diferentes representações.

Exemplo para função linear:

- expressão;
- tabela;
- gráfico;
- descrição verbal;
- situação real.

Isso alimenta domínio de representação e transferência.

---

## 28.36 QUESTÕES ESPELHADAS

O mesmo conceito poderá ser pedido de direções diferentes.

Exemplo:

### Direção A

Dada a função, obtenha o gráfico.

### Direção B

Dado o gráfico, obtenha característica/função.

### Direção C

Dada uma situação, construa a função.

Isso reduz memorização superficial.

---

## 28.37 ATIVIDADES DE PREVISÃO

Em conteúdos visuais:

1. aluno prevê;
2. registra previsão;
3. visualização é liberada;
4. compara;
5. explica diferença.

Exemplo:

> O que acontecerá ao gráfico se `a` passar de 1 para 3 em `y=ax²`?

A atividade não precisa sempre ter “uma resposta final numérica”.

---

## 28.38 QUESTÕES DE EXPLICAÇÃO

Algumas habilidades exigirão explicação.

Exemplo:

> Por que não podemos cancelar `x` em `x(x-2)=0` sem considerar `x=0`?

A resposta em linguagem natural poderá ser:

- avaliada por critérios/rubrica;
- analisada assistidamente por IA;
- revisada em atividades específicas.

Esse formato não deverá ser núcleo do MVP até existir validação confiável.

---

## 28.39 RUBRICAS

Atividades abertas poderão possuir rubrica estruturada.

Exemplo:

```
modelou corretamente
identificou domínio
aplicou estratégia válida
interpretou resultado
incluiu unidade
```

Cada item produz evidência separada.

---

## 28.40 SELEÇÃO ADAPTATIVA DE QUESTÕES

O seletor deverá considerar:

- habilidade-alvo;
- dimensões de domínio frágeis;
- dificuldade atual;
- atividades recentes;
- representações recentes;
- erros recorrentes;
- necessidade de revisão;
- nível de ajuda recente;
- variedade.

O objetivo é evitar repetir a mesma superfície.

---

## 28.41 ANTI-REPETIÇÃO

O sistema deverá manter uma janela recente.

Evitar:

- mesmo blueprint repetido várias vezes;
- mesmos números;
- mesmo contexto;
- mesma representação;
- mesma estrutura visual.

Repetição intencional poderá ocorrer durante aprendizagem inicial, mas deve ser controlada.

---

## 28.42 SELEÇÃO POR INFORMAÇÃO PEDAGÓGICA

Quando houver dúvida entre duas possíveis lacunas, escolher uma atividade capaz de distingui-las.

Exemplo:

não sabemos se o aluno erra limites por:

- fatoração;
- conceito de limite.

Selecionar questão que exige limite sem fatoração.

Se acertar:

a hipótese de fatoração ganha força.

Esse é um uso diagnóstico do banco.

---

## 28.43 SESSÃO NÃO É PLAYLIST FIXA

A sessão poderá ser montada dinamicamente.

Exemplo:

```
Atividade 1 — conteúdo atual
Atividade 2 — variação
Atividade 3 — pré-requisito antigo
Atividade 4 — aplicação
```

Depois do desempenho na Atividade 2, a Atividade 3 pode mudar.

---

## 28.44 INTERRUPÇÃO ADAPTATIVA

Se o sistema já possui evidência suficiente:

não precisa continuar até o “exercício 10”.

Pode encerrar aquele bloco e avançar.

Da mesma forma, dificuldade inesperada pode inserir uma microprática.

---

## 28.45 MODO PRÁTICA LIVRE

Ao selecionar uma habilidade manualmente, o aluno poderá definir algo como:

- rápido;
- normal;
- desafio;
- misturado.

O seletor adapta quantidade e dificuldade.

Não precisa perguntar detalhes técnicos.

---

## 28.46 MODO PROVA

Questões deverão ser selecionadas com:

- cobertura definida;
- distribuição de dificuldade;
- pouca redundância;
- controle de ajuda;
- seed/reprodutibilidade.

Uma avaliação formal precisa ser reproduzível.

---

## 28.47 QUESTÕES NÃO DEVEM VAZAR A RESPOSTA

Verificar automaticamente problemas como:

- resposta aparecendo no enunciado;
- gráfico já marcando o ponto pedido;
- alternativa destacada visualmente;
- dica inicial revelando operação;
- nome da atividade entregando método em avaliação mista.

Exemplo ruim:

> Módulo “Use fatoração”  
> Questão: escolha o método para resolver.

---

## 28.48 TÍTULOS CONTEXTUAIS

Durante aprendizagem:

> Fatoração — diferença de quadrados

é aceitável.

Durante transferência/avaliação:

usar título neutro:

> Resolva

para não entregar a estratégia.

---

## 28.49 LOCALIZAÇÃO E FORMATAÇÃO

Questões deverão respeitar locale.

Para pt-BR, por exemplo:

- vírgula decimal quando apropriado;
- moeda `R$`;
- unidades e separadores coerentes;
- linguagem brasileira natural.

A estrutura matemática interna permanece independente da apresentação.

---

## 28.50 ACESSIBILIDADE DE QUESTÕES

Cada atividade deverá prever:

- descrição de imagens;
- descrição de gráfico quando necessária;
- ordem de leitura;
- não depender apenas de cor;
- linguagem compreensível;
- alternativa equivalente quando interação específica não for acessível.

---

## 28.51 CICLO DE VIDA DO CONTEÚDO

Status possíveis:

```
DRAFT
AUTOMATICALLY_VALIDATED
PEDAGOGICALLY_REVIEWED
APPROVED
PUBLISHED
DEPRECATED
RETIRED
```

Geração automática não pula diretamente para `PUBLISHED` em conteúdos que exigem revisão humana.

---

## 28.52 REVISÃO E VERSIONAMENTO

Uma questão publicada não deverá ser alterada silenciosamente de forma que mude sua interpretação histórica.

Mudança significativa cria nova versão.

Isso preserva:

- tentativas anteriores;
- evidências;
- auditoria;
- reprodução.

---

## 28.53 RELATO DE PROBLEMA PELO ALUNO

O aluno poderá sinalizar:

- enunciado confuso;
- possível erro;
- resposta não aceita;
- problema visual;
- conteúdo inadequado.

A ação deve capturar automaticamente:

- activity_id;
- version;
- seed;
- estado necessário para reprodução.

Sem exigir que o aluno copie toda a conta.

---

## 28.54 TELEMETRIA DE QUALIDADE DA QUESTÃO

Sem expor dados pessoais desnecessários, o sistema poderá observar indicadores como:

- taxa anormal de abandono;
- taxa de “não comprovado” do motor;
- uso de dica;
- relatos de erro;
- tempo extremamente discrepante;
- desempenho incompatível com questões semelhantes.

Isso gera fila de revisão de conteúdo.

---

## 28.55 QUESTÃO COM MOTOR “NÃO COMPROVADO”

Se muitas soluções válidas de uma questão resultarem em:

`NAO_COMPROVADO`

isso é sinal de que:

- o motor precisa melhorar;
- ou a questão não é adequada para publicação automatizada.

A culpa não deve ser transferida ao aluno.

---

## 28.56 COBERTURA MÍNIMA POR HABILIDADE

Antes de publicar uma habilidade, deverá haver cobertura suficiente em diferentes categorias.

Exemplo conceitual:

- introdução;
- prática direta;
- variação;
- diagnóstico de erro;
- aplicação;
- transferência;
- revisão.

Nem toda habilidade precisa da mesma quantidade.

---

## 28.57 QUALIDADE > QUANTIDADE

Não haverá meta artificial como:

> cada habilidade precisa de 1000 perguntas.

Uma boa combinação de:

- blueprints ricos;
- parâmetros controlados;
- atividades artesanais;
- variações de representação

pode gerar grande diversidade com menos conteúdo-base.

---

## 28.58 EXEMPLO — BLUEPRINT DE DIFERENÇA DE QUADRADOS

```
id: PC_ALG_DIFF_SQUARES_FACTOR_01

target_skill:
  PC-ALG-05

family:
  A² - B²

generation:
  choose p,q
  A = p*x^m
  B = q
  expression = A²-B²

constraints:
  p,q != 0
  avoid trivial A=B
  coefficients within level bounds

expected_structure:
  (A-B)(A+B)

accepted:
  algebraically equivalent factorization

common_errors:
  (A-B)²
  A²-B
  sign mistakes
```

Instâncias:

```
x²-16
4x²-25
9y²-1
```

em níveis adequados.

---

## 28.59 EXEMPLO — BLUEPRINT DE LIMITE COM FATORAÇÃO

```
id: C1_LIMIT_FACTOR_CANCEL_01

target_skill:
  C1-LAL-04
  C1-LAL-05

prerequisite:
  PC-ALG-05

generate:
  choose a
  numerator = x²-a²
  denominator = x-a
  approach = a

constraints:
  a != 0
```

Questão:

```
        x²-a²
lim     ─────
x→a      x-a
```

O sistema sabe que a estratégia natural é fatoração, mas continuará aceitando outro caminho matematicamente válido conforme contrato pedagógico.

---

## 28.60 EXEMPLO — BLUEPRINT DE REGRA DA CADEIA

Gerar composição explícita:

```
f(x) = (ax+b)^n
```

Variar posteriormente:

- potência;
- trigonométrica;
- exponencial;
- logaritmo.

O gerador precisa garantir que a função interna não seja trivial quando o objetivo é realmente testar cadeia.

Exemplo ruim:

`f(x)=(x+0)^2`

pode reduzir demais a evidência desejada.

---

## 28.61 CONTEÚDO PARA GAMIFICAÇÃO

Problemas ligados ao mundo/jogo também devem utilizar contratos estruturados.

Uma missão pode conter:

```
narrative_context
mathematical_model
parameters
visual_state
success_condition
skill_targets
```

A camada narrativa nunca substitui o objeto matemático verificável.

---

## 28.62 IMPORTAÇÃO FUTURA DE LISTAS

Futuramente, professor/usuário poderá importar:

- PDF;
- imagem;
- texto;
- lista digital.

Fluxo ideal:

```
importar
↓
extrair questões
↓
interpretar matemática
↓
sugerir habilidades
↓
resolver/verificar
↓
mostrar revisão ao usuário
↓
salvar coleção
```

Isso não deve ser requisito do MVP inicial.

---

## 28.63 IMPORTAÇÃO NÃO PRESUME DIREITO DE PUBLICAÇÃO

Uma lista importada por usuário pode ser usada em contexto pessoal conforme regras futuras do produto, mas isso não concede automaticamente direito de adicioná-la ao banco público do Eixo.

Banco público e coleção privada são conceitos separados.

---

## 28.64 CRITÉRIO DE PUBLICAÇÃO DE UM BLUEPRINT

Um blueprint só poderá gerar atividades públicas quando:

1. possui habilidade-alvo;
2. possui restrições matemáticas;
3. passa validação automática;
4. possui solução/contrato verificável;
5. possui casos de teste;
6. evita degenerações conhecidas;
7. possui dificuldade definida;
8. possui erros comuns/dicas quando necessário;
9. possui notação suportada;
10. foi pedagogicamente revisado conforme criticidade.

---

## 28.65 PRINCÍPIO FINAL DO BANCO

O Eixo não precisa saber previamente **todas as perguntas que fará**.

Precisa saber:

> **o que quer avaliar, quais estruturas pode variar e como provar que cada instância gerada é válida.**

Esse será o fundamento para escalar o conteúdo sem sacrificar qualidade matemática.

---

# 29. FONTES DE CONTEÚDO, PROVENIÊNCIA E DIREITOS AUTORAIS

O Eixo deverá aproveitar o grande volume de material matemático existente, mas **gratuito para ler não significa livre para incorporar, adaptar ou redistribuir**.

Todo conteúdo externo deverá possuir proveniência e licença verificadas antes de entrar no banco público.

## 29.1 HIERARQUIA DE PREFERÊNCIA

Prioridade inicial:

1. conteúdo autoral do Eixo;
2. domínio público;
3. CC0;
4. licenças abertas que permitam adaptação e o modelo de distribuição do produto;
5. recursos externos usados apenas como referência pedagógica, sem cópia.

## 29.2 LICENÇAS MAIS SIMPLES PARA O BANCO PÚBLICO

Para reduzir risco e complexidade, priorizar:

- domínio público;
- CC0;
- CC BY, respeitando atribuição.

CC BY-SA poderá ser utilizado somente após avaliar corretamente as obrigações de compartilhamento da adaptação.

Materiais com cláusula NC exigem análise específica caso o produto possua qualquer uso comercial.

Materiais ND não deverão ser adaptados.

A política final deverá receber revisão jurídica antes de publicação comercial.

## 29.3 “USAR COMO REFERÊNCIA” É DIFERENTE DE COPIAR

Livros comerciais, cursos e listas protegidas poderão ser utilizados para:

- entender sequência curricular;
- identificar tipos de exercício;
- comparar abordagens pedagógicas;
- encontrar lacunas no currículo.

Não deverão ser copiados em massa para o banco.

O Eixo poderá criar exercício original sobre o mesmo conceito matemático sem reproduzir expressão criativa protegida do material de origem.

## 29.4 REGISTRO DE PROVENIÊNCIA

Conteúdo externo deverá guardar:

```
source_id
source_title
source_author
source_organization
source_url
license
license_url
retrieved_at
original_item_reference
adaptation_notes
attribution_text
review_status
```

## 29.5 LICENÇA POR ITEM

Não assumir que todos os materiais de uma plataforma possuem exatamente a mesma licença.

A licença deve ser verificada:

- no livro;
- na página;
- no item;
- ou no conjunto explicitamente licenciado.

## 29.6 RECURSOS OER CANDIDATOS

Plataformas de Recursos Educacionais Abertos poderão ser avaliadas como fonte de referência e, quando a licença específica permitir, de adaptação.

Exemplo candidato já identificado:

### LibreTexts

A plataforma se apresenta como infraestrutura de OER e informa possuir livros, materiais interativos e um banco ADAPT com grande volume de elementos abertamente licenciados.

Antes da incorporação, cada recurso selecionado deverá ter sua licença individual confirmada.

Outras fontes deverão passar pelo mesmo processo de verificação antes de serem registradas como aprovadas.

## 29.7 CATÁLOGO DE FONTES APROVADAS

Deverá existir futuramente um arquivo/registro separado com status:

```
APPROVED
APPROVED_WITH_ATTRIBUTION
REVIEW_REQUIRED
REFERENCE_ONLY
BLOCKED
```

por fonte e, quando necessário, por coleção/item.

## 29.8 CONTEÚDO GERADO A PARTIR DE MATERIAL ABERTO

Mesmo quando a licença permitir adaptação:

- manter atribuição quando exigida;
- registrar modificação;
- preservar avisos de licença necessários;
- não remover autoria;
- não misturar licenças incompatíveis sem análise.

## 29.9 QUESTÕES IMPORTADAS PELO USUÁRIO

Conteúdo privado importado futuramente não será automaticamente adicionado ao banco público.

Separação obrigatória:

```
Coleção privada do usuário
≠
Banco público do Eixo
```

## 29.10 FONTES CURRICULARES

Também poderão existir fontes usadas apenas para validar cobertura curricular.

Essas fontes ajudam a responder:

> “Estamos ensinando tudo que normalmente é necessário antes de Cálculo I?”

Elas não precisam fornecer questões copiáveis.

## 29.11 AUDITORIA

Antes de lançamento público, deverá ser possível responder para qualquer conteúdo externo:

- de onde veio?
- qual é a licença?
- podemos adaptar?
- precisamos atribuir?
- o que foi alterado?
- qual versão está publicada?

Se isso não puder ser respondido, o conteúdo não deverá ser publicado.

---

# 30. LIVRO MATEMÁTICO PESSOAL

O sistema poderá construir automaticamente um material de revisão com os conceitos aprendidos pelo aluno.

Exemplo:

## Potência

`a² = a × a`

## Função linear

`f(x)=ax+b`

## Derivada

Definição, interpretação gráfica e exemplos já resolvidos pelo próprio estudante.

---

# 31. MODOS DO PRODUTO

Planejados inicialmente:

- Aprender;
- Praticar;
- Revisar;
- Desafio;
- Laboratório;
- Avaliação.

---

# 31.A ESTRUTURA DE MÓDULOS, AULAS E MAPA DE CONHECIMENTO

O conteúdo do Eixo deverá possuir uma hierarquia clara para o aluno, mas flexível internamente.

Hierarquia inicial:

```
Trilha
  ↓
Unidade
  ↓
Módulo
  ↓
Aula
  ↓
Blocos de aprendizagem
  ↓
Atividades
```

Essa organização é de apresentação.

Internamente, as habilidades continuam ligadas pelo grafo curricular e podem cruzar módulos.

---

## 31.A1 TRILHAS PRINCIPAIS

No escopo inicial:

### Trilha 1 — Fundamentos Matemáticos

Abrange Matemática Básica e preparação algébrica.

### Trilha 2 — Pré-Cálculo

Consolida funções, álgebra, trigonometria e preparação para limites.

### Trilha 3 — Cálculo I

Limites, derivadas, aplicações e integrais.

A interface poderá exibir essas trilhas como grandes regiões do mapa.

---

## 31.A2 UNIDADES

Uma Unidade reúne módulos relacionados.

Exemplo:

```
Pré-Cálculo
  └── Unidade: Funções
      ├── Módulo: O que é uma função?
      ├── Módulo: Domínio e imagem
      ├── Módulo: Gráficos
      ├── Módulo: Transformações
      ├── Módulo: Composição
      └── Módulo: Função inversa
```

Uma unidade deverá ter propósito conceitual, não apenas tamanho arbitrário.

---

## 31.A3 MÓDULO

Um módulo é um conjunto pequeno de habilidades fortemente relacionadas.

Exemplo:

### Módulo — Frações equivalentes

Pode trabalhar:

- significado;
- representação visual;
- ampliação;
- simplificação;
- comparação.

O módulo não precisa conter uma quantidade fixa de aulas.

Sua duração depende do conteúdo.

---

## 31.A4 AULA

Uma aula é a menor sequência pedagógica completa que o aluno percebe como uma sessão de conteúdo.

Estrutura típica:

```
1. contexto/intuição
2. exploração
3. explicação
4. ferramenta nova, se houver
5. exemplo
6. prática guiada
7. prática independente
8. aplicação
9. consolidação
```

Nem toda aula precisa utilizar todas as etapas.

---

## 31.A5 BLOCOS DE APRENDIZAGEM

A aula será composta por blocos pequenos.

Tipos previstos:

- introdução;
- explicação;
- demonstração;
- manipulação interativa;
- previsão;
- exemplo resolvido;
- atividade guiada;
- atividade livre;
- gráfico;
- rascunho;
- reflexão;
- desafio;
- resumo.

Isso permite montar aulas variadas sem criar telas únicas para cada assunto.

---

## 31.A6 DURAÇÃO FLEXÍVEL

O Eixo não deverá dizer que toda aula possui, por exemplo, exatamente 10 questões.

A duração deve variar conforme:

- habilidade;
- desempenho;
- ajuda usada;
- evidência já existente;
- necessidade de revisão.

Um aluno que demonstra rapidamente domínio pode concluir antes.

Outro pode receber mais prática.

---

## 31.A7 OBJETIVO VISÍVEL

Ao iniciar uma aula, o aluno deverá saber claramente:

> O que vou aprender?

Exemplo:

> **Hoje você vai aprender a usar a propriedade distributiva para remover parênteses.**

E, se houver ferramenta nova:

> **Também vamos aprender a escrever parênteses e blocos de expressão no Eixo.**

Matemática e interface são apresentadas separadamente.

---

## 31.A8 PRÉ-REQUISITOS VISÍVEIS QUANDO RELEVANTES

O aluno poderá ver:

```
Para esta aula você vai usar:

✓ multiplicação
✓ números negativos
✓ parênteses
```

Normalmente isso deverá ser discreto.

Se houver dificuldade detectada:

> Antes desta aula, recomendo revisar números negativos.

---

## 31.A9 MAPA DE CONHECIMENTO

O Eixo deverá possuir um mapa visual de progressão.

Ele não será apenas uma lista vertical de capítulos.

Deverá representar conexões entre grandes grupos de conhecimento.

Exemplo conceitual:

```
Números
   │
   ├──── Frações
   │       │
   │       └──── Álgebra
   │                │
   │                ├──── Equações
   │                │
   │                └──── Funções
   │                       │
   │                       ├──── Trigonometria
   │                       │
   │                       └──── Pré-Cálculo
   │                               │
   │                               └──── Limites
   │                                      │
   │                                      └──── Derivadas
   │                                             │
   │                                             └──── Integrais
```

O mapa exibido será simplificado em relação ao grafo interno.

---

## 31.A10 MAPA NÃO DEVE VIRAR TEIA INCOMPREENSÍVEL

O grafo curricular real poderá conter centenas de dependências.

A interface não deve mostrar tudo simultaneamente.

O mapa deverá trabalhar por níveis de zoom:

### Visão geral

Grandes áreas.

### Visão de unidade

Módulos.

### Visão de módulo

Habilidades principais.

O usuário poderá entrar e sair de cada nível.

---

## 31.A11 ESTADOS VISUAIS NO MAPA

Cada nó poderá aparecer como:

- não iniciado;
- disponível;
- aprendendo;
- praticando;
- em consolidação;
- dominado;
- revisão recomendada;
- bloqueado por pré-requisito.

A cor nunca será o único indicador.

Ícone, forma ou símbolo também deverão comunicar estado.

---

## 31.A12 BLOQUEIO EXPLICÁVEL

Ao tocar em um nó bloqueado:

não apenas:

> 🔒 Bloqueado

mas:

> Para começar **Regra da Cadeia**, você precisa de:
>
> ✓ Derivadas básicas
> ◐ Composição de funções — em consolidação

A tela poderá oferecer:

**Revisar composição**

---

## 31.A13 CAMINHO RECOMENDADO

O mapa poderá destacar uma rota recomendada.

Exemplo:

```
Você está aqui
      ↓
Funções
      ↓
Composição
      ↓
Função inversa
      ↓
Preparação para limites
```

Mas outros conteúdos já disponíveis continuam exploráveis.

---

## 31.A14 LIBERDADE DE EXPLORAÇÃO

O aluno poderá abrir conteúdos já disponíveis fora da recomendação.

O Eixo deve evitar sensação de corredor obrigatório.

Conteúdo realmente dependente de pré-requisito poderá permanecer bloqueado ou marcado como avançado.

---

## 31.A15 “POR QUE ESTOU APRENDENDO ISSO?”

Cada habilidade importante poderá mostrar:

**Isso será usado depois em:**

Exemplo para fatoração:

```
Fatoração
  ↓
Equações quadráticas
  ↓
Funções racionais
  ↓
Limites
```

Isso ajuda a combater a sensação de conteúdos matemáticos desconectados.

---

## 31.A16 CONEXÕES RETROSPECTIVAS

Ao chegar em um conteúdo avançado, o sistema poderá mostrar:

> Lembra de diferença de quadrados? Agora você vai usá-la para resolver um limite.

Isso transforma pré-requisitos antigos em ferramentas vivas.

---

## 31.A17 TELA DE UM MÓDULO

Exemplo:

```
FUNÇÕES — DOMÍNIO

O que você vai aprender
• identificar valores permitidos
• reconhecer restrições
• relacionar domínio ao gráfico

Pré-requisitos
✓ frações
✓ equações
✓ plano cartesiano

Aulas
1. O que significa domínio       ✓
2. Restrições em frações         ◐
3. Raízes e domínio              ○
4. Desafio de domínio            🔒

[Continuar]
```

---

## 31.A18 TELA DE AULA

Antes de começar:

```
Domínio em funções racionais

Objetivo
Encontrar valores que tornam uma expressão inválida.

Você vai usar
• frações
• equações

Nova ferramenta do editor
Nenhuma

Duração estimada
curta / média
```

Evitar estimativas rígidas em minutos se o sistema adaptativo puder alterar muito a duração.

---

## 31.A19 MARCOS

Alguns pontos do mapa poderão ser marcos importantes:

- primeira equação;
- primeira função;
- entrada em Pré-Cálculo;
- primeira ideia de limite;
- primeira derivada;
- primeiro problema de otimização;
- primeira integral;
- Teorema Fundamental do Cálculo.

Esses marcos podem receber tratamento visual especial.

---

## 31.A20 DESAFIOS DE UNIDADE

Ao terminar uma unidade, poderá existir um desafio que mistura as principais habilidades.

Exemplo:

Unidade de funções:

- interpretar gráfico;
- construir função;
- encontrar domínio;
- calcular valor;
- escolher representação.

O desafio não deve ser apenas uma prova de repetição.

---

## 31.A21 REVISÃO DA UNIDADE

A conclusão de uma unidade não significa que todas as habilidades nunca mais aparecerão.

O sistema poderá mostrar:

```
Funções
✓ 8 habilidades dominadas
◐ 2 em consolidação
! 1 revisão recomendada
```

O aluno pode avançar se os pré-requisitos do próximo módulo estiverem suficientes.

---

# 31.B FLUXO COMPLETO DO APLICATIVO

---

## 31.B1 PRIMEIRA ABERTURA

Fluxo inicial:

```
Logo / identidade
      ↓
Proposta do Eixo
      ↓
Escolher objetivo
      ↓
Breve tutorial da interface
      ↓
Nivelamento opcional
      ↓
Mapa inicial
```

---

## 31.B2 APRESENTAÇÃO DO PRODUTO

A apresentação deve ser curta.

Mensagem central:

> Aprenda matemática resolvendo de verdade, passo a passo.

Mostrar rapidamente:

- Caderno Matemático;
- visualizações;
- mapa de conhecimento;
- adaptação ao nível do aluno.

Evitar carrossel longo de onboarding.

---

## 31.B3 OBJETIVO DO ALUNO

O usuário poderá escolher algo como:

### Quero construir minha base

Começar por Matemática Básica.

### Quero me preparar para Pré-Cálculo

Realizar diagnóstico de fundamentos.

### Quero chegar em Cálculo

Construir rota recomendada até Cálculo I.

### Quero revisar algo específico

Explorar mapa.

Essa escolha orienta recomendações, não limita o acesso permanentemente.

---

## 31.B4 NIVELAMENTO

Pode ser:

**Fazer nivelamento**

ou:

**Começar do início**

ou:

**Escolher onde começar**

O nivelamento deverá ser opcional.

---

## 31.B5 TUTORIAL INICIAL DE ESCRITA

Antes da primeira atividade real:

o usuário deverá completar uma miniatividade de interface.

Exemplo:

1. inserir `2+3`;
2. criar nova linha;
3. apagar;
4. desfazer;
5. concluir.

Somente recursos básicos.

Frações, raízes e outros templates serão ensinados posteriormente.

---

## 31.B6 HOME

A tela inicial deverá responder imediatamente:

> O que faz sentido estudar agora?

Estrutura conceitual:

```
Olá

[Continuar de onde parei]

Próximo recomendado
→ Frações equivalentes

Revisão curta
→ Sinais com números negativos

Seu caminho
[Ver mapa]

Atalhos
[Praticar] [Laboratório] [Livro]
```

Evitar excesso de widgets e estatísticas.

---

## 31.B7 CONTINUAR DE ONDE PAROU

Se houver aula/atividade incompleta:

essa deverá ser a ação principal.

Ao tocar:

retorna exatamente ao quadro, linha e cursor salvos.

---

## 31.B8 SESSÃO RECOMENDADA

O Eixo poderá montar uma sessão curta automaticamente:

```
1 conteúdo atual
1 revisão
1 aplicação
```

Mas o aluno poderá:

- remover revisão;
- estudar só conteúdo atual;
- escolher outra habilidade.

---

## 31.B9 ENTRADA EM UMA AULA

Fluxo:

```
Tela do módulo
      ↓
Objetivo da aula
      ↓
revisão de pré-requisito se necessária
      ↓
conteúdo
      ↓
atividade
      ↓
consolidação
      ↓
resumo
```

---

## 31.B10 DENTRO DA AULA

A aula não deverá trocar de tela desnecessariamente.

Exemplo:

```
explicação curta
   ↓ gesto/continuar
visualização
   ↓
atividade guiada
   ↓
atividade independente
```

A transição deve preservar sensação de continuidade.

---

## 31.B11 ENTRADA NO CADERNO

Quando a aula chega a uma atividade matemática:

o Caderno ocupa o centro da experiência.

A interface geral da aula deve recuar.

O aluno precisa sentir:

> agora vou resolver.

---

## 31.B12 PAUSAR UMA ATIVIDADE

O usuário poderá sair sem perder progresso.

Ao voltar:

- mesma atividade;
- mesmo quadro;
- mesma linha;
- mesmo rascunho.

---

## 31.B13 CONCLUSÃO DE ATIVIDADE

Após concluir:

### Se correta e alinhada

Mostrar feedback curto primeiro.

Exemplo:

> ✓ Boa resolução. Você aplicou corretamente fatoração.

Depois opções:

- próxima;
- ver análise;
- comparar métodos quando relevante.

### Se correta por outro método

> ✓ A resposta está correta.
>
> Esta atividade queria praticar fatoração.

Oferecer:

**Tentar com fatoração**

### Se houver erro

Destacar primeiro ponto relevante e iniciar feedback/dica.

---

## 31.B14 NÃO EXIBIR FESTA A CADA CONTA

Microanimações podem confirmar progresso.

Mas uma atividade simples não deverá interromper estudo com telas completas de:

- confete;
- moedas;
- ranking;
- “INCRÍVEL!!!”.

Celebrações maiores ficam para marcos reais.

---

## 31.B15 RESUMO DA AULA

Ao final:

```
Você trabalhou:

✓ propriedade distributiva
✓ preservação da igualdade

Em consolidação:
◐ sinais com números negativos

Nova ferramenta:
✓ parênteses no editor
```

Não mostrar somente:

> 8/10.

---

## 31.B16 PRÓXIMA AÇÃO

Depois de uma aula, oferecer uma recomendação clara:

**Continuar**

e opções secundárias:

- praticar mais;
- ver mapa;
- revisar;
- encerrar sessão.

---

## 31.B17 FINAL DE SESSÃO

Se o usuário decidir parar:

poderá receber um resumo leve:

```
Hoje você:
• concluiu 2 habilidades
• revisou frações
• começou funções

Próximo passo sugerido:
Domínio e imagem
```

Evitar técnicas agressivas de retenção.

---

## 31.B18 TELA PRATICAR

Permitir escolher:

- prática recomendada;
- habilidade específica;
- conteúdo recente;
- revisão;
- mistura de habilidades;
- modo prova.

---

## 31.B19 TELA REVISAR

Organizar por necessidade:

```
Revisão recomendada
• sinais
• fatoração

Manutenção
• porcentagem
• equações

Dominado
• operações básicas
```

---

## 31.B20 LABORATÓRIO

Área exploratória sem obrigação de “acertar”.

Ferramentas futuras:

- gráficos;
- manipulação de funções;
- comparação de curvas;
- parâmetros;
- tangentes;
- áreas;
- visualização de Riemann.

O laboratório deve servir para experimentar matemática.

---

## 31.B21 LIVRO MATEMÁTICO

Atalho para conceitos já aprendidos.

O aluno poderá navegar por:

- assunto;
- ferramenta;
- exemplos próprios;
- fórmulas;
- visualizações.

---

## 31.B22 PESQUISA

Futuramente, o usuário poderá pesquisar:

> regra da cadeia

e chegar a:

- conceito;
- exemplos;
- habilidade no mapa;
- prática;
- sua própria resolução anterior.

Não precisa ser MVP se aumentar muito o escopo.

---

## 31.B23 PERFIL E PROGRESSO

Deverá priorizar informações úteis:

- caminho atual;
- habilidades dominadas;
- áreas em consolidação;
- histórico de marcos;
- objetivos.

Evitar transformar aprendizado em painel de métricas excessivo.

---

## 31.B24 NAVEGAÇÃO PRINCIPAL

Possível navegação inferior mobile:

```
[Início] [Mapa] [Praticar] [Livro] [Perfil]
```

**Laboratório** pode existir dentro de Início/Mapa ou como item próprio após testes de UX.

A quantidade final de abas deverá ser validada em protótipo.

---

## 31.B25 CADERNO NÃO É UMA ABA GLOBAL VAZIA

O Caderno existe principalmente dentro de atividades.

Poderá existir futuramente um “Caderno Livre”, mas não deve confundir a navegação principal do MVP.

---

## 31.B26 RETORNO PREVISÍVEL

O botão voltar precisa seguir hierarquia clara:

```
atividade
→ aula
→ módulo
→ unidade/mapa
```

Dentro de Quadros, mudar página não altera a pilha de navegação geral.

---

## 31.B27 DEEP LINK INTERNO

Recomendações do sistema deverão poder abrir diretamente:

- habilidade;
- aula;
- revisão;
- exemplo;
- ferramenta.

Isso deverá ser previsto na arquitetura de rotas.

---

## 31.B28 ESTADO GLOBAL DE CONTINUIDADE

O aplicativo deverá saber:

- qual trilha está ativa;
- módulo atual;
- aula atual;
- atividade atual;
- quadro atual;
- posição de edição.

Assim, “Continuar” funciona de forma confiável.

---

## 31.B29 OFFLINE E FLUXO

Quando estudarmos arquitetura offline, o objetivo será manter disponível, sempre que possível:

- aula atual;
- atividades baixadas;
- Caderno;
- Rascunho;
- progresso local;
- motor necessário para o conteúdo atual.

Sincronização não deverá bloquear escrita.

---

## 31.B30 CRITÉRIO DE SUCESSO DA NAVEGAÇÃO

Um novo usuário deve conseguir responder facilmente:

1. onde estou?
2. o que estou estudando?
3. o que faço agora?
4. como volto?
5. onde vejo meu caminho?
6. por que este conteúdo está bloqueado?
7. como continuo depois?

Se qualquer resposta depender de explorar menus escondidos, a navegação precisa ser revisada.

---


# 32. UX MOBILE E ESCRITA MATEMÁTICA 2D

Mobile é prioridade inicial, mas a experiência não poderá tratar matemática como se fosse texto comum.

No papel, o aluno utiliza posição espacial para comunicar estrutura:

- numerador fica acima do denominador;
- expoente fica acima e à direita;
- índice de raiz possui posição própria;
- equações podem ser alinhadas pelo sinal de igualdade;
- cálculos auxiliares podem ficar ao lado;
- setas e anotações ocupam posições diferentes;
- o estudante pode voltar visualmente a qualquer parte da folha.

Se o Eixo reduzir tudo a uma única linha textual como:

`(x^2+1)/(x-3)`

a interface poderá se tornar mais difícil do que a própria matemática.

Portanto o princípio de UX será:

> **preservar a estrutura espacial da notação matemática sempre que ela transmitir significado.**

---

## 32.1 DOIS ESPAÇOS COM LIBERDADES DIFERENTES

O Eixo terá dois comportamentos principais.

### Caderno Matemático — estrutura controlada

A resolução oficial utiliza linhas e blocos matemáticos estruturados.

O aluno possui liberdade matemática, mas o sistema mantém organização suficiente para:

- interpretar;
- validar;
- navegar;
- alinhar;
- selecionar.

### Rascunho — liberdade espacial maior

O rascunho poderá funcionar como uma folha digital em que pequenos blocos podem ser posicionados com maior liberdade.

Isso permitirá:

- conta auxiliar à direita;
- anotação no canto;
- duas tentativas lado a lado;
- setas;
- pequenos blocos independentes.

O rascunho não deverá exigir a mesma rigidez visual da resolução oficial.

---

## 32.2 NÃO USAR UM CAMPO DE TEXTO COMUM

A entrada principal não poderá ser um `TextField` ou equivalente no qual toda matemática aparece em uma linha.

O editor deverá renderizar matemática bidimensional.

Exemplo:

Em vez de:

```
(x+1)/(x-2)
```

mostrar:

```
 x + 1
───────
 x - 2
```

Em vez de:

```
x^(2+3)
```

mostrar visualmente:

```
   2+3
 x
```

Em vez de:

```
sqrt(x+1)
```

mostrar:

```
√(x + 1)
```

com o conteúdo realmente dentro da estrutura visual da raiz.

---

## 32.3 ESTRUTURA POR BLOCOS MATEMÁTICOS

Cada expressão deverá ser composta por blocos estruturais.

Exemplos:

- número;
- variável;
- operador;
- grupo;
- fração;
- potência;
- raiz;
- função;
- igualdade;
- inequação;
- limite;
- derivada;
- integral.

O estudante não precisa conhecer a palavra “bloco”.

Para ele, a experiência deve parecer apenas escrita matemática normal.

---

## 32.4 ÂNCORAS DE INSERÇÃO

Um dos maiores problemas de matemática em tela touch é:

> “onde exatamente o próximo número vai entrar?”

O editor deverá mostrar **âncoras visuais discretas** quando uma estrutura estiver selecionada.

Exemplo ao criar uma fração:

```
┌───────────┐
│     □     │
│  ───────  │
│     □     │
└───────────┘
```

O numerador pode receber um contorno/realce suave.

Depois de preenchido:

```
   x + 1
──────────
    □
```

o foco passa ao denominador quando o usuário:

- toca nele;
- usa botão “próximo”;
- conclui a região atual.

Os espaços vazios deverão ser visualmente identificáveis sem parecer formulário.

---

## 32.5 CURSOR ESTRUTURAL

O cursor matemático deverá indicar não apenas uma posição entre caracteres, mas **em qual região matemática o aluno está**.

Exemplo:

```
  x + 1
────────
  x | 2
```

O cursor pode estar no denominador.

Ao tocar no expoente:

```
  2|
 x
```

o teclado passa a editar o expoente.

A mudança deverá ser visualmente clara.

---

## 32.6 NAVEGAÇÃO POR REGIÕES

Além de tocar diretamente, o teclado poderá possuir controles de navegação estrutural:

```
[←] [→] [↑] [↓] [Próximo]
```

Esses controles não precisam estar sempre visíveis.

Poderão aparecer quando existe uma expressão 2D complexa.

Exemplo:

em uma fração:

- ↑ vai ao numerador;
- ↓ vai ao denominador.

Em uma potência:

- ↑ pode levar ao expoente;
- → pode sair da potência.

O comportamento deverá ser previsível e consistente.

---

## 32.7 BOTÃO “SAIR DA ESTRUTURA”

Expressões aninhadas podem confundir.

Exemplo:

```
       2
√(x + ─)
       3
```

O aluno precisa compreender quando está:

- dentro da fração;
- dentro da raiz;
- fora da raiz.

Portanto poderá existir uma ação contextual:

**Sair**

ou:

**Próximo bloco**

que move o cursor para fora da estrutura atual.

O sistema deve ensinar esse comportamento durante os primeiros usos.

---

## 32.8 REALCE DO BLOCO ATIVO

A região atual poderá receber:

- contorno discreto;
- fundo suave;
- cursor;
- pequena animação de foco.

Exemplo conceitual:

```
√( x + [  □  ] )
```

O realce nunca deverá alterar a leitura matemática.

---

## 32.9 VISUALIZAÇÃO TEMPORÁRIA DA ESTRUTURA

Para iniciantes, o Eixo poderá oferecer um modo chamado provisoriamente:

**Mostrar estrutura**

Ao ativar, aparecem contornos discretos indicando:

```
[ 3 × [ ( x + 2 ) ] ] = [ 18 ]
```

ou em uma fração:

```
┌ numerador ┐
│   x + 1   │
├───────────┤
│   x - 2   │
└ denominador
```

Isso ajuda o aluno a entender onde cada parte está.

O recurso deve poder desaparecer conforme ele ganha familiaridade.

---

## 32.10 INTRODUÇÃO PROGRESSIVA À ESCRITA DIGITAL

O Eixo não deverá apresentar o editor completo no primeiro minuto.

A adaptação à escrita matemática digital fará parte do onboarding pedagógico.

### Primeiro contato

Apenas:

```
2 + 3 = 5
```

O aluno aprende:

- tocar em uma linha;
- inserir número;
- apagar;
- criar nova linha.

### Depois

Parênteses:

```
2(3 + 4)
```

### Depois

Frações.

### Depois

Potências.

### Depois

Raízes.

E assim por diante.

Cada nova dimensão espacial da notação deverá ser introduzida quando necessária.

---

## 32.11 TUTORIAL DE FRAÇÃO COMO INTERAÇÃO

Não basta explicar o conceito de fração.

O tutorial do editor deverá mostrar fisicamente:

1. toque no botão de fração;
2. surgem dois espaços;
3. numerador fica ativo;
4. escreva `x+1`;
5. toque ou avance para o denominador;
6. escreva `x-2`;
7. use “sair” para continuar depois da fração.

Exemplo final:

```
 x + 1
─────── + 3
 x - 2
```

O objetivo inicial é aprender **a escrever a notação**, não resolver uma questão.

---

## 32.12 TUTORIAL DE POTÊNCIA

Ao pressionar potência após `x`:

```
x □
```

o espaço de expoente aparece elevado.

O aluno escreve:

```
  2
 x
```

Depois usa “sair da estrutura” e continua:

```
x² + 3
```

O aplicativo deve mostrar claramente que digitar `+3` dentro do expoente é diferente de digitar fora dele.

---

## 32.13 PREVENÇÃO DE ERRO DE POSIÇÃO

Se o usuário está no expoente:

```
  2 |
 x
```

e digita `+3`, o resultado será:

```
  2+3
 x
```

Isso é válido e não deve ser automaticamente “corrigido”.

Porém o realce visual deverá deixar extremamente claro que ele ainda está dentro do expoente.

A UX deve prevenir erros sem adivinhar a intenção do aluno.

---

## 32.14 DESFAZER É ESSENCIAL

Erros de posição serão inevitáveis enquanto o usuário aprende.

Portanto:

**Desfazer** deverá ser fácil e sempre acessível.

O aluno nunca deverá ter medo de experimentar a interface.

---

## 32.15 EQUAÇÕES ALINHADAS PELO SINAL DE IGUALDADE

Quando apropriado, o Caderno poderá alinhar automaticamente equações sucessivas:

```
3(x + 2) = 18
  3x + 6 = 18
      3x = 12
       x = 4
```

O objetivo não é alterar a expressão, mas melhorar legibilidade.

O alinhamento deverá ser opcional/automático conforme o tipo da atividade.

---

## 32.16 NÃO FORÇAR ALINHAMENTO QUANDO NÃO FIZER SENTIDO

Nem toda resolução possui um único sinal de igualdade central.

Exemplo:

```
u = x²
v = sin(x)

u' = 2x
v' = cos(x)
```

ou:

```
x = 2 ou x = 3
```

O layout deverá se adaptar ao tipo de conteúdo.

---

## 32.17 LINHAS PODEM TER ALTURA VARIÁVEL

Uma “linha” do Caderno não significa altura fixa.

Exemplo:

```
        x² - 1
lim    ───────
x→1     x - 1
```

pode ocupar verticalmente muito mais espaço do que:

`x=2`.

Cada bloco de resolução deve crescer conforme a notação.

---

## 32.18 QUEBRA DE EXPRESSÕES LONGAS

Expressões grandes não deverão simplesmente diminuir até ficarem ilegíveis.

Possíveis estratégias:

1. rolagem horizontal controlada;
2. quebra em pontos matematicamente seguros;
3. continuação indentada;
4. modo paisagem;
5. zoom temporário.

O sistema nunca deverá quebrar uma expressão em posição que altere ou confunda seu significado.

---

## 32.19 QUEBRA SEMÂNTICA

Se for necessária uma quebra visual:

```
f(x) = x⁴ + 3x³ - 7x²
       + 10x - 8
```

é preferível a uma quebra arbitrária no meio de um termo.

O renderer matemático deverá conhecer pontos válidos de quebra.

---

## 32.20 ZOOM DE EXPRESSÃO

O usuário poderá tocar duas vezes ou usar uma ação de foco para abrir temporariamente uma expressão grande em uma área ampliada.

Ao concluir:

retorna ao quadro mantendo a posição.

Especialmente útil para:

- integrais;
- limites;
- frações aninhadas;
- expressões trigonométricas longas.

---

## 32.21 PAINEL DE EDIÇÃO FOCADO

No celular, quando uma linha estiver sendo editada, o aplicativo poderá aumentar sua área útil.

Exemplo:

### Estado normal

enunciado + várias linhas + controles.

### Estado de edição

- enunciado recolhido;
- linha ativa ampliada;
- contexto anterior ainda visível;
- teclado matemático ocupando parte inferior.

Ao sair da edição, a visão completa retorna.

---

## 32.22 NÃO ESCONDER TODO O CONTEXTO

Mesmo no modo focado, o aluno deverá conseguir ver pelo menos:

- a linha anterior;
- a linha atual;
- idealmente a próxima região disponível.

Isso é importante porque matemática passo a passo depende de comparação visual.

---

## 32.23 DUPLICAR LINHA COMO MECÂNICA PRINCIPAL

Em papel, o aluno frequentemente reescreve quase toda a expressão e muda uma parte.

No celular isso seria cansativo.

Portanto **Duplicar linha anterior** deverá ser uma ação de primeira classe.

Exemplo:

```
2x + 4 = 10
```

duplicar:

```
2x + 4 = 10
```

e editar para:

```
2x = 6
```

Isso reduz digitação sem resolver matemática pelo aluno.

---

## 32.24 EDIÇÃO POR SELEÇÃO ESTRUTURAL

Depois de duplicar:

```
2x + 4 = 10
```

o aluno poderá tocar no bloco `+4`.

A seleção deve tratar `+4` como uma unidade quando apropriado.

Ações possíveis:

- apagar;
- substituir;
- mover para rascunho;
- copiar.

Evitar oferecer transformações matemáticas automáticas.

---

## 32.25 ÁREA LIVRE NO RASCUNHO

O Rascunho poderá utilizar uma área maior que a tela, com:

- pan;
- zoom;
- blocos arrastáveis;
- texto;
- expressões matemáticas;
- setas simples.

Exemplo:

```
┌─────────────────────────────────────┐
│  Δ = b² - 4ac          25 - 24 = 1 │
│                                     │
│  a = 1                              │
│  b = -5               → Δ = 1      │
│  c = 6                              │
│                                     │
└─────────────────────────────────────┘
```

Isso se aproxima mais da liberdade do papel.

---

## 32.26 BLOCOS ARRASTÁVEIS NO RASCUNHO

Cada cálculo auxiliar poderá ser um pequeno bloco.

O aluno pode:

- arrastar;
- agrupar visualmente;
- duplicar;
- apagar;
- enviar ao Caderno.

O posicionamento não deverá alterar o significado matemático interno do bloco.

---

## 32.27 SNAP OPCIONAL

Para evitar um rascunho completamente caótico, poderá existir encaixe suave em:

- grade;
- linhas;
- outros blocos.

Mas isso deverá ser opcional/discreto.

A sensação deve continuar sendo de folha livre.

---

## 32.28 RASCUNHO NÃO É DOCUMENTO FINAL

O sistema não deverá exigir que o rascunho fique bonito.

Sua função é permitir pensamento.

Por isso:

- blocos podem ficar desalinhados;
- tentativas podem permanecer;
- erros podem ser riscados/apagados;
- organização é responsabilidade opcional do aluno.

---

## 32.29 ENVIO VISUAL ENTRE RASCUNHO E CADERNO

Ao selecionar um bloco no rascunho:

**Adicionar à resolução**

poderá produzir uma pequena animação de transição mostrando o bloco sendo incorporado ao quadro de resolução.

Isso reforça mentalmente:

> “esta conta auxiliar agora faz parte do raciocínio oficial”.

A animação deve ser breve e opcional em redução de movimento.

---

## 32.30 POSICIONAMENTO LIVRE NÃO DEVE EXISTIR NA RESOLUÇÃO OFICIAL DO MVP

Apesar de o papel permitir escrever em qualquer lugar, permitir coordenadas totalmente livres no Caderno oficial criaria problemas de:

- ordem de leitura;
- validação;
- acessibilidade;
- navegação por teclado/leitor de tela;
- interpretação da sequência;
- telas pequenas.

Portanto, no MVP:

- **Caderno oficial:** sequência estruturada de blocos/linhas;
- **Rascunho:** liberdade espacial.

Essa divisão busca equilibrar naturalidade e verificabilidade.

---

## 32.31 MODO “COMO NO PAPEL”

O objetivo visual da notação deverá ser aproximar-se do que o aluno veria escrito corretamente em um livro ou caderno.

Exemplos:

### Fração

Preferir:

```
a + b
─────
  c
```

a:

`(a+b)/c`

### Potência

Preferir expoente visual.

### Integral

Preferir:

```
∫ f(x) dx
```

com limites superior/inferior visualmente posicionados quando existirem.

### Limite

Preferir `x→a` visualmente associado ao operador `lim`.

---

## 32.32 MODO LINEAR COMO ALTERNATIVA TÉCNICA, NÃO PADRÃO PEDAGÓGICO

Pode existir internamente uma representação linear:

```
(x+1)/(x-2)
```

para:

- serialização;
- exportação;
- depuração;
- compatibilidade;
- acessibilidade específica.

Mas o aluno deverá ver por padrão notação matemática renderizada.

---

## 32.33 PREVIEW ANTES DE INSERIR ESTRUTURAS NOVAS

Nos primeiros usos, tocar em uma ferramenta poderá mostrar um preview curto.

Exemplo:

Botão:

`a/b`

Preview:

```
numerador
─────────
denominador
```

Depois:

**Inserir**

Com o tempo, essa etapa desaparece automaticamente ou pode ser desativada.

---

## 32.34 EXEMPLO COMPLETO DE APRENDIZAGEM DA INTERFACE

Primeira vez usando fração.

### Tela 1

> Hoje vamos começar a escrever frações no Eixo.

### Tela 2

Botão de fração é destacado.

> Toque aqui.

### Tela 3

A estrutura aparece:

```
 □
───
 □
```

> A parte de cima está selecionada.

### Tela 4

> Digite 3.

```
 3
───
 □
```

### Tela 5

> Agora toque na parte de baixo ou use “Próximo”.

### Tela 6

```
 3
───
 4
```

### Tela 7

> Pronto. Você escreveu três quartos.

Só depois começa uma atividade sobre o conteúdo matemático.

---

## 32.35 EXEMPLO COMPLETO — POTÊNCIA E SAÍDA DA ESTRUTURA

Objetivo:

escrever `x² + 4`.

Passos:

1. inserir `x`;
2. tocar em potência;
3. escrever `2`;
4. região do expoente permanece destacada;
5. tocar em **Sair** ou **Próximo**;
6. escrever `+4`.

O tutorial deverá mostrar explicitamente a diferença entre:

`x^(2+4)`

e

`x²+4`.

---

## 32.36 EXEMPLO COMPLETO — FRAÇÃO DENTRO DE RAIZ

Quando o aluno já conhece ambas as ferramentas:

```
   x+1
√ ─────
   x-2
```

A interface deverá mostrar claramente os níveis:

1. raiz;
2. fração dentro da raiz;
3. numerador/denominador dentro da fração.

O foco visual deverá indicar a profundidade sem poluir a tela.

---

## 32.37 BREADCRUMB ESTRUTURAL OPCIONAL

Em expressões muito aninhadas, poderá existir uma indicação pequena como:

```
Raiz > Fração > Denominador
```

Aparece somente durante edição complexa.

Pode ser escondida para usuários experientes.

---

## 32.38 TOQUE PRECISO SEM EXIGIR PRECISÃO CIRÚRGICA

Elementos matemáticos podem ser pequenos, especialmente expoentes.

O sistema deverá aumentar invisivelmente a área de toque de regiões pequenas.

O usuário não pode precisar acertar exatamente um expoente de poucos pixels.

---

## 32.39 LUPA DE SELEÇÃO

Ao pressionar uma região muito pequena, poderá aparecer ampliação temporária.

Isso é particularmente útil para:

- expoentes;
- índices;
- limites de integral;
- limites de somatório futuramente.

---

## 32.40 TECLADO CONTEXTUAL

O teclado poderá adaptar algumas teclas ao bloco selecionado.

Exemplo:

ao editar uma função trigonométrica, atalhos relevantes podem ficar próximos.

Ao editar limite:

- `→`;
- `∞`;
- laterais `+`/`-` quando ensinadas.

Mas nunca ocultar ferramentas necessárias de modo imprevisível.

A adaptação deve reduzir esforço, não criar um teclado que muda completamente a cada toque.

---

## 32.41 BARRA FIXA DE NAVEGAÇÃO MATEMÁTICA

Mesmo que o conteúdo do teclado mude, uma pequena área de navegação deverá permanecer consistente:

- apagar;
- desfazer;
- refazer;
- mover cursor;
- próximo bloco;
- sair de estrutura;
- nova linha.

A memória muscular do aluno é importante.

---

## 32.42 ONBOARDING DO EDITOR COMO HABILIDADE

O sistema deverá manter separadamente um pequeno estado de familiaridade com a interface.

Exemplos:

- sabe criar fração;
- sabe entrar/sair de expoente;
- sabe editar raiz;
- sabe navegar entre regiões;
- sabe duplicar linha;
- sabe utilizar quadros.

Isso **não é domínio matemático**.

É competência de uso do aplicativo.

Se um aluno com bom conhecimento matemático demonstrar dificuldade apenas na interface, o Eixo deverá ajudá-lo na interface e não rebaixar sua avaliação matemática.

---

## 32.43 AJUDA CONTEXTUAL DA INTERFACE

Se o aluno ficar vários segundos tentando tocar fora de um expoente ou repetidamente inserir elementos no local errado, o aplicativo poderá sugerir:

> Quer sair do expoente? Use este botão.

Esse tipo de ajuda não deverá contar como dica matemática.

---

## 32.44 ERRO DE INTERFACE NÃO É ERRO MATEMÁTICO

O sistema deverá distinguir sempre que possível:

- expressão matematicamente errada;
- expressão incompleta;
- erro de edição;
- estrutura ainda aberta;
- símbolo colocado em região inesperada.

Enquanto a expressão estiver claramente incompleta, evitar feedback matemático prematuro.

Exemplo:

```
 x + 1
──────
   □
```

não deve receber:

> “Resposta incorreta.”

O aluno ainda está escrevendo.

---

## 32.45 ESTADO “EM EDIÇÃO”

Uma linha deverá possuir estado intermediário.

Enquanto ativa:

```
EDITANDO
```

Somente após pausa curta, saída da linha ou ação de concluir, o sistema realiza validação pedagógica completa.

Isso evita feedback piscando a cada caractere.

---

## 32.46 VALIDAÇÃO SUAVE DURANTE DIGITAÇÃO

Podem existir validações de sintaxe discretas durante edição:

- parêntese incompleto;
- denominador vazio;
- operador sem operando.

Mas feedback conceitual deverá esperar a expressão estar suficientemente completa.

---

## 32.47 ORIENTAÇÃO ESPACIAL ENTRE QUADROS

A animação entre Quadros de Trabalho deverá preservar a sensação de páginas vizinhas.

Se o usuário vai de Quadro 1 para 2:

a página 1 desliza para a esquerda e a 2 entra pela direita.

Ao voltar:

movimento inverso.

Isso ajuda a construir memória espacial.

---

## 32.48 MINI-MAPA DE QUADROS

Ao segurar ou tocar no indicador de quadro, poderá abrir:

```
[1 Resolução] [2 Conta] [3 Gráfico] [4 Rascunho]
```

Em muitos quadros:

lista/grade completa.

Isso reduz a sensação de “me perdi entre páginas”.

---

## 32.49 FLUXO DE UMA ATIVIDADE NO CELULAR

Fluxo base:

```
Enunciado
   ↓
compreender objetivo
   ↓
abrir Quadro principal
   ↓
escrever primeira etapa
   ↓
usar Rascunho/novo Quadro quando necessário
   ↓
retornar à resolução
   ↓
concluir
   ↓
feedback
   ↓
explicação/revisão se necessária
```

O aluno não deverá navegar por várias telas completamente diferentes para fazer uma única conta.

---

## 32.50 MODO PAISAGEM

Em aparelhos com espaço suficiente, o modo paisagem poderá exibir:

```
┌──────────────────┬─────────────────────┐
│ Enunciado        │ Quadro/Rascunho     │
│                  │                     │
├──────────────────┴─────────────────────┤
│ Resolução                              │
├────────────────────────────────────────┤
│ Teclado Matemático                     │
└────────────────────────────────────────┘
```

ou variações conforme a atividade.

---

## 32.51 TABLETS

Em tablets, a experiência poderá aproximar-se ainda mais de um caderno.

Possível composição:

```
┌───────────────┬────────────────────────┐
│ Enunciado     │ Rascunho / Gráfico     │
│               │                        │
│               │                        │
├───────────────┼────────────────────────┤
│ Resolução                              │
│                                        │
├────────────────────────────────────────┤
│ Teclado                                │
└────────────────────────────────────────┘
```

Também poderá permitir caneta/stylus futuramente, sem tornar isso requisito do MVP.

---

## 32.52 TESTES DE USABILIDADE OBRIGATÓRIOS

O editor matemático deverá ser validado com usuários antes de expandir todo o currículo.

Cenários mínimos de teste:

1. escrever `2x+4=10`;
2. escrever uma fração;
3. editar numerador;
4. editar denominador;
5. escrever `x²+3`;
6. sair corretamente do expoente;
7. escrever uma raiz;
8. duplicar uma linha;
9. criar novo quadro;
10. fazer conta no rascunho e voltar;
11. escrever expressão aninhada;
12. corrigir erro de posição.

Métricas qualitativas importantes:

- usuário entende onde está o cursor?
- sabe para onde o próximo símbolo irá?
- consegue sair de uma estrutura?
- encontra o rascunho?
- perde contexto ao trocar de quadro?
- sente que está escrevendo matemática ou preenchendo formulário?

---

## 32.53 CRITÉRIO CENTRAL DE UX MATEMÁTICA

Antes de qualquer implementação completa, o protótipo do editor deverá provar que um usuário consegue escrever, sem instrução constante:

```
       x² - 4
lim    ──────
x→2     x - 2
```

e também:

```
         2x + 1
f'(x) = ───────
         x² + 3
```

confortavelmente em uma tela de celular.

Se isso for desconfortável, o projeto ainda não está pronto para escalar o currículo.

---

## 32.54 PRINCÍPIO FINAL DE UX

O Eixo deverá ensinar duas coisas separadamente:

> **como pensar matemática**

e

> **como escrever matemática no Eixo**.

A segunda deve desaparecer da consciência do usuário com o tempo.

O objetivo é que, após adaptação, ele pare de pensar:

> “como eu coloco esse número aqui?”

e volte a pensar apenas:

> “qual é o próximo passo matemático?”

---

# 32.A CATÁLOGO DE NOTAÇÃO MATEMÁTICA E TEMPLATES VISUAIS

O editor deverá possuir um **catálogo explícito de estruturas matemáticas** cobrindo toda notação necessária ao currículo publicado.

Nenhum novo assunto poderá depender de uma notação que o editor ainda não saiba representar, navegar e ensinar.

Cada estrutura deverá definir:

- aparência matemática;
- regiões editáveis;
- ordem padrão de foco;
- formas alternativas equivalentes;
- comportamento ao tocar;
- comportamento de teclado;
- ação para entrar;
- ação para sair;
- regras de quebra visual;
- representação interna;
- forma acessível/linear;
- tutorial de interface quando necessário.

---

## 32.A1 REGRA DOS SLOTS

Estruturas complexas deverão ser modeladas como templates contendo **slots**.

Exemplo conceitual de logaritmo:

```
       argumento
log
   base
```

Na notação convencional:

`log₂(8)`

existem pelo menos:

- operador `log`;
- slot de base em subscrito;
- slot de argumento.

Ao inserir o template, o sistema deve destacar claramente qual slot está ativo.

---

## 32.A2 LOGARITMOS

Representação principal:

```
log₂(8)
```

e genericamente:

```
logₐ(x)
```

O índice/base deverá aparecer abaixo e à direita de `log`, como na notação matemática convencional.

Percurso de foco sugerido:

1. base;
2. argumento;
3. sair da função.

Exemplo de criação:

```
log□(□)
```

Depois:

```
log₂(□)
```

Depois:

```
log₂(8)
```

O aluno também poderá inserir primeiro o argumento e editar a base posteriormente.

`ln(x)` não necessita de slot de base porque sua base é `e`.

`log(x)` sem base explícita deverá respeitar a convenção definida pelo conteúdo e não presumir silenciosamente uma base quando isso for pedagogicamente ambíguo.

---

## 32.A3 SUPERSCRITOS E SUBSCRITOS GENÉRICOS

O editor deverá suportar regiões superior e inferior associadas a símbolos quando a notação exigir.

Exemplos:

```
x²
aₙ
xᵢ
f⁻¹(x)
```

Internamente, sobrescrito e subscrito são slots distintos.

Isso será reutilizado por várias notações.

---

## 32.A4 RAIZ N-ÉSIMA

Raiz quadrada:

```
√x
```

Raiz genérica:

```
ⁿ√x
```

Slots:

- índice da raiz, opcional;
- radicando.

Exemplo:

```
³√8
```

O índice deve possuir área de toque ampliada invisivelmente.

---

## 32.A5 POTÊNCIAS COMPLEXAS

Deverá ser possível escrever:

```
    x+1
  2
```

ou visualmente `2^(x+1)`, sem transformar o expoente em texto linear.

O expoente poderá conter qualquer expressão suportada:

- soma;
- fração;
- função;
- raiz;
- outro expoente, dentro de limites razoáveis de legibilidade.

---

## 32.A6 FRAÇÕES ANINHADAS

Deverá ser possível escrever estruturas como:

```
   1
 ─────
 x + 1
───────
   2
```

ou outras frações dentro de numerador/denominador.

O editor deverá:

- aumentar altura automaticamente;
- preservar tamanho mínimo legível;
- permitir zoom/foco;
- exibir breadcrumb estrutural se necessário.

---

## 32.A7 VALOR ABSOLUTO

Template:

```
| □ |
```

As barras devem crescer visualmente conforme o conteúdo.

Exemplo:

```
|x - 3|
```

O sistema precisa diferenciar as barras de valor absoluto de símbolos de divisão ou texto comum.

---

## 32.A8 PARÊNTESES, COLCHETES E CHAVES

Agrupadores deverão redimensionar automaticamente.

Exemplo:

```
⎛ x + 1 ⎞
⎜ ───── ⎟
⎝ x - 2 ⎠
```

O usuário não deverá precisar escolher manualmente o tamanho dos parênteses.

---

## 32.A9 EQUAÇÕES E INEQUAÇÕES ENCADEADAS

Suportar:

```
a = b = c
```

e:

```
-2 < x ≤ 5
```

A estrutura precisa reconhecer relações encadeadas, não uma simples sequência de caracteres.

---

## 32.A10 INTERVALOS

Suportar visualmente:

```
(2, 5]
[-3, ∞)
```

e união:

```
(-∞, 1) ∪ (3, ∞)
```

O teclado deverá introduzir símbolos como `∞` e `∪` somente quando o currículo chegar a esse tipo de notação.

---

## 32.A11 CONJUNTOS E SOLUÇÕES

Suportar:

```
{2, 3}
```

e, quando necessário:

```
{x ∈ ℝ | x > 2}
```

A notação de conjuntos mais avançada poderá ser introduzida progressivamente.

---

## 32.A12 FUNÇÕES

Templates:

```
f(x)
g(t)
P(n)
```

O usuário deverá conseguir editar:

- nome da função;
- variável/argumento;
- expressão associada.

Exemplo:

```
f(x) = 2x + 3
```

---

## 32.A13 COMPOSIÇÃO

Suportar:

```
(f ∘ g)(x)
```

e:

```
f(g(x))
```

O sistema deverá entender ambas quando matematicamente apropriadas.

---

## 32.A14 FUNÇÃO INVERSA

Representação:

```
f⁻¹(x)
```

O editor deverá diferenciar visual e semanticamente:

`f⁻¹(x)`

de:

`1/f(x)`.

Esse é um ponto pedagógico importante.

---

## 32.A15 FUNÇÕES DEFINIDAS POR PARTES

Template vertical:

```
       ⎧ expressão 1, condição 1
f(x) = ⎨ expressão 2, condição 2
       ⎩ expressão 3, condição 3
```

Cada linha possui:

- slot de expressão;
- slot de condição.

O usuário poderá adicionar/remover casos.

No celular, a edição poderá focar uma linha por vez sem perder a visão da chave geral.

---

## 32.A16 NOTAÇÃO CIENTÍFICA

Representação:

```
3,2 × 10⁵
```

O expoente deve usar o mesmo componente de potência já ensinado.

O sistema não deve criar uma sintaxe separada desnecessária.

---

## 32.A17 PORCENTAGEM E UNIDADES

Suportar:

```
25%
20 m/s
9,8 m/s²
3 cm²
```

Unidades podem possuir expoentes.

O editor deverá separar semanticamente valor matemático de unidade quando a atividade exigir análise dimensional.

---

## 32.A18 ÂNGULOS

Suportar:

```
30°
π/6 rad
```

O símbolo de grau deverá ser tratado como unidade/indicador de ângulo, não como expoente comum.

---

## 32.A19 TRIGONOMETRIA

Templates simples:

```
sin(x)
cos(x)
tan(x)
```

Inversas:

```
sin⁻¹(x)
cos⁻¹(x)
tan⁻¹(x)
```

A interface e o conteúdo deverão deixar claro quando `sin⁻¹` representa função inversa, evitando confusão com `1/sin(x)`.

---

## 32.A20 LIMITES

Template visual:

```
lim  f(x)
x→a
```

Slots:

- variável;
- valor de aproximação;
- direção lateral opcional;
- expressão.

Exemplo lateral:

```
lim   f(x)
x→2⁺
```

e:

```
lim   f(x)
x→2⁻
```

O subbloco `x→a` deverá ser tocável como uma região.

---

## 32.A21 INFINITO

`∞` poderá aparecer em:

- limites;
- intervalos;
- comportamento assintótico.

Seu uso será liberado junto com o conteúdo relevante.

---

## 32.A22 DERIVADA EM NOTAÇÃO DE LAGRANGE

Suportar:

```
f'(x)
f''(x)
```

e ordens maiores de forma legível.

---

## 32.A23 DERIVADA EM NOTAÇÃO DE LEIBNIZ

Template:

```
dy
──
dx
```

e:

```
d
── f(x)
dx
```

A fração de Leibniz não deverá ser tratada apenas como fração numérica comum, embora compartilhe componentes visuais.

Também suportar segunda derivada:

```
d²y
───
dx²
```

---

## 32.A24 AVALIAÇÃO DA DERIVADA EM UM PONTO

Suportar formas como:

```
f'(2)
```

e, futuramente se necessário:

```
dy
── │
dx │x=2
```

A segunda forma poderá ser extensão caso complique o MVP.

---

## 32.A25 INTEGRAIS INDEFINIDAS

Template:

```
∫ f(x) dx
```

Slots principais:

- integrando;
- diferencial/variável.

O cursor deverá permitir entrar no integrando e depois sair para o diferencial de modo previsível.

---

## 32.A26 INTEGRAIS DEFINIDAS

Template:

```
 b
 ∫ f(x) dx
 a
```

Slots:

- limite inferior;
- limite superior;
- integrando;
- variável de integração.

Percurso de foco poderá ser:

1. limite inferior;
2. limite superior;
3. integrando;
4. variável;
5. sair.

O usuário deverá poder tocar diretamente em qualquer slot.

---

## 32.A27 BARRA DE AVALIAÇÃO DE ANTIDERIVADA

Para o Teorema Fundamental do Cálculo:

```
[F(x)]ₐᵇ
```

ou notação equivalente adotada pelo curso.

Slots inferior e superior reutilizam o sistema de subscrito/sobrescrito.

---

## 32.A28 SOMATÓRIO

Necessário para somas de Riemann.

Template:

```
 n
 Σ expressão
i=1
```

Slots:

- índice/condição inferior;
- limite superior;
- termo.

Assim como integral, deverá possuir navegação vertical previsível.

---

## 32.A29 DELTA E VARIAÇÃO

Suportar:

```
Δx
Δy
Δy/Δx
```

Essas estruturas aparecem antes de derivada e deverão ser introduzidas em taxa média de variação.

---

## 32.A30 COORDENADAS E PARES ORDENADOS

Template:

```
(x, y)
```

e valores:

```
(2, -3)
```

O editor deverá distinguir par ordenado de simples agrupamento quando o contexto exigir.

---

## 32.A31 SISTEMAS DE EQUAÇÕES

Template vertical:

```
⎧ 2x + y = 5
⎨
⎩ x - y = 1
```

Cada equação é uma linha estruturada dentro de um único sistema.

No mobile:

- foco por equação;
- chave preservada;
- botão para adicionar/remover equação quando permitido.

---

## 32.A32 MATRIZES NÃO SÃO REQUISITO DO ESCOPO INICIAL

A arquitetura poderá futuramente suportar grades/matrizes, mas isso não deverá aumentar o custo do MVP antes de haver currículo que as utilize.

---

## 32.A33 TABELAS MATEMÁTICAS

Algumas atividades utilizarão tabelas de valores:

```
x | f(x)
--|-----
1 | 2
2 | 4
3 | 8
```

A tabela deverá ser componente próprio, não uma expressão improvisada.

Será especialmente útil para:

- funções;
- aproximação de limites;
- padrões;
- dados experimentais.

---

## 32.A34 GRÁFICOS COMO OBJETO VINCULADO

O gráfico não é parte textual da expressão.

Ele deverá ser um objeto matemático vinculado a:

- função;
- tabela;
- pontos;
- atividade.

O aluno poderá alternar entre representação algébrica e gráfica sem perder a expressão original.

---

## 32.A35 EXPRESSÕES SOB ANOTAÇÕES E DESTAQUES

O professor/sistema poderá realçar partes de uma expressão sem modificar sua estrutura.

Exemplo pedagógico:

```
3(x + 2)
  └───┘
   grupo
```

Esses realces deverão ser overlays visuais, não caracteres inseridos na matemática.

---

## 32.A36 ALINHAMENTO POR OPERADOR

Além do sinal `=`, o editor poderá oferecer alinhamento visual apropriado para:

- `=`;
- `≈`;
- `→`;
- desigualdades;
- etapas de derivação/integração.

O alinhamento deve seguir a estrutura da resolução e nunca alterar o conteúdo.

---

## 32.A37 TEMPLATE REGISTRY

A implementação deverá possuir um **registro central de templates matemáticos**.

Conceitualmente:

```
template_id
nome
curriculum_skills
visual_structure
slots
default_focus_order
keyboard_tools
linear_serialization
accessible_description
tutorial_id
validation_support
```

Exemplos de IDs:

```
MATH_FRACTION
MATH_POWER
MATH_NTH_ROOT
MATH_LOG_BASE
MATH_LIMIT
MATH_DERIVATIVE_LEIBNIZ
MATH_INTEGRAL_DEFINITE
MATH_SUMMATION
MATH_PIECEWISE
```

Isso impedirá que cada tela implemente sua própria versão da mesma notação.

---

## 32.A38 REUTILIZAÇÃO DE PRIMITIVAS

Estruturas complexas deverão ser construídas a partir de primitivas reutilizáveis.

Exemplo:

Integral definida usa:

- operador;
- sobrescrito;
- subscrito;
- expressão;
- identificador de variável.

Logaritmo usa:

- operador;
- subscrito;
- argumento.

Raiz n-ésima usa:

- índice;
- contêiner de radicando.

Isso reduz inconsistência visual e de navegação.

---

## 32.A39 ORDEM DE FOCO DEVE SER TESTADA, NÃO PRESUMIDA

A ordem ideal de entrada pode variar entre estruturas.

Portanto os protótipos deverão testar com usuários:

- base primeiro ou argumento primeiro em logaritmo;
- limites primeiro ou integrando primeiro na integral;
- condição ou expressão primeiro em função por partes.

O template terá uma ordem padrão, mas o toque direto sempre permite acessar outro slot.

---

## 32.A40 O TECLADO DEVE MOSTRAR A ESTRUTURA, NÃO CÓDIGO

O botão de logaritmo com base deverá parecer algo próximo de:

`logₐ( )`

e não:

`log_base()`.

O botão de integral definida deverá representar visualmente limites superior/inferior.

O aluno aprende a notação matemática, não sintaxe de programação.

---

## 32.A41 VARIAÇÕES DE NOTAÇÃO ACEITAS

Quando houver mais de uma notação matemática padrão, o motor poderá aceitar múltiplas formas.

Exemplos:

```
√x
x^(1/2)
```

quando equivalentes no contexto adequado.

```
f'(x)
dy/dx
```

quando ambas representam a derivada apropriada.

O conteúdo pode ensinar uma forma preferencial sem declarar a outra incorreta.

---

## 32.A42 FORMA PREFERENCIAL PEDAGÓGICA

Atividades poderão indicar uma notação desejada.

Exemplo:

> Escreva a derivada usando notação de Leibniz.

Nesse caso:

`f'(x)`

pode estar matematicamente correto como ideia, mas não satisfaz o objetivo de notação da atividade.

A lógica segue a mesma separação entre validade matemática e aderência pedagógica definida no motor.

---

## 32.A43 TEMPLATES E NÍVEIS DE EXPERIÊNCIA

### Iniciante

- slots mais visíveis;
- labels temporários;
- preview;
- botão “Próximo”;
- ajuda de estrutura.

### Intermediário

- realce menor;
- navegação rápida;
- previews reduzidos.

### Experiente

- inserção imediata;
- atalhos;
- mínimo de elementos auxiliares.

A expressão final renderizada deve ser igual nos três modos.

---

## 32.A44 NOTAÇÃO NOVA EXIGE TUTORIAL DE INTERFACE

Sempre que uma habilidade introduzir uma estrutura visual inédita, seu módulo deverá declarar:

```
requires_editor_tutorial: true
editor_template_id: ...
```

Exemplo:

primeiro módulo de logaritmos:

`MATH_LOG_BASE`

primeiro módulo de integrais definidas:

`MATH_INTEGRAL_DEFINITE`.

Depois de demonstrada familiaridade, o tutorial não precisa reaparecer.

---

## 32.A45 MATRIZ CURRÍCULO ↔ NOTAÇÃO

Deverá existir uma matriz rastreável:

```
habilidade curricular
        ↓
notações exigidas
        ↓
templates do editor
        ↓
tutorial de interface
        ↓
testes de usabilidade
```

Exemplo:

```
PC-LOG-02
  ├── MATH_LOG_BASE
  └── MATH_POWER

C1-LIM-02
  └── MATH_LIMIT

C1-TFC-04
  ├── MATH_INTEGRAL_DEFINITE
  └── MATH_EVALUATION_BAR
```

Nenhuma habilidade poderá ser publicada com dependência de template inexistente.

---

## 32.A46 TESTES DE COMPOSIÇÃO

Não basta testar cada símbolo isoladamente.

O editor deverá ser testado com composições reais.

Exemplos obrigatórios:

```
log₂(x² + 1)
```

```
       log₂(x)
lim    ───────
x→1     x - 1
```

```
  3
  ∫ (x² + 1) dx
  0
```

```
        1
       ───
        x
f(x) = e
```

e expressões aninhadas relevantes ao currículo.

---

## 32.A47 CRITÉRIO DE COMPLETUDE DO EDITOR

Antes de um bloco curricular ser considerado implementável, deverá existir uma lista completa das notações necessárias naquele bloco.

Exemplo:

### Logaritmos

- `log`;
- base em subscrito;
- argumento;
- potência;
- igualdade;
- domínio/inequação.

### Limites

- `lim`;
- subscrito `x→a`;
- laterais;
- infinito;
- fração;
- fatoração;
- raiz.

### Integrais

- integral;
- limites;
- diferencial;
- potência;
- funções;
- avaliação por extremos.

Esse inventário será obrigatório no planejamento técnico.

---

## 32.A48 PRINCÍPIO UNIVERSAL DE NOTAÇÃO

Sempre que uma notação matemática possuir significado espacial, o Eixo deverá preservar esse significado visualmente.

A interface deverá perguntar:

> “Como isso é escrito e lido em matemática?”

antes de perguntar:

> “Como é mais fácil armazenar isso no software?”

A representação interna pode ser linear/estruturada.

A representação para o aluno deve continuar matemática.

---


# 33. ACESSIBILIDADE

Considerar desde o início:

- ajuste de tamanho;
- contraste;
- modo claro/escuro;
- áreas de toque grandes;
- descrição textual de gráficos;
- leitores de tela quando possível;
- redução de animações;
- nunca depender apenas de cor.

Indicadores, por exemplo:

- `✓` válido;
- `!` atenção;
- `×` inválido;
- `○` não verificado.

---

# 34. MOTOR INTERNO VS FERRAMENTAS DO ALUNO

O backend/motor matemático poderá possuir capacidades poderosas, como:

- simplificação simbólica;
- resolução de equações;
- derivação;
- integração;
- equivalência;
- análise de domínio.

Essas capacidades existem para compreender e avaliar o estudante.

Elas não devem ser automaticamente oferecidas como botões de “resolver”.

O Caderno não deverá virar um CAS que faz o trabalho do aluno.

---

# 35. EXEMPLOS DE RESOLUÇÃO ACEITA

## Equação

```
4(x - 3) = 20
4x - 12 = 20
4x = 32
x = 8
```

## Fração

Forma curta:

```
x/3 = 6
x = 18
```

Forma detalhada:

```
x/3 = 6
3·x/3 = 6·3
x = 18
```

Ambas podem ser corretas conforme o nível de detalhamento da atividade.

## Função

```
f(x) = 2x + 3
f(4) = 2(4) + 3
f(4) = 8 + 3
f(4) = 11
```

## Derivada

Em domínio:

```
f(x) = 3x² + 5x - 4
f'(x) = 6x + 5
```

Em aprendizado inicial, pode ser exigido desenvolvimento intermediário.

---

# 36. CRITÉRIOS DE SUCESSO DO NÚCLEO

## Editor

Um aluno deve conseguir escrever confortavelmente em um celular:

- aritmética;
- frações;
- expoentes;
- raízes;
- equações;
- inequações;
- funções;
- trigonometria;
- limites;
- derivadas;
- integrais.

## Rascunho

Deve ser possível abrir, realizar um cálculo auxiliar e voltar à resolução em poucos segundos sem perder contexto.

## Teclado progressivo

Um usuário que nunca usou calculadora científica deve chegar ao final de Pré-Cálculo entendendo as ferramentas apresentadas.

---

# 37. REGRA DE DESIGN PARA NOVAS FERRAMENTAS

Antes de considerar uma ferramenta aprendida, responder:

1. O aluno sabe o que o símbolo significa?
2. Sabe quando utilizá-lo?
3. Sabe inseri-lo no aplicativo?
4. Consegue utilizá-lo sem ajuda depois?

Se alguma resposta for não, a ferramenta ainda não foi aprendida.

---

# 38. PRINCÍPIO FINAL DO CADERNO

A interface deve transmitir:

> “Eu estou resolvendo matemática.”

e não:

> “Estou preenchendo campos que o aplicativo preparou para mim.”

---

# 39. DECISÕES TÉCNICAS AINDA NÃO FECHADAS

Ainda NÃO escolher definitivamente:

- Flutter;
- React Native;
- Godot;
- framework web;
- motor simbólico;
- banco de dados;
- backend;
- mecanismo de gráficos;
- reconhecimento manuscrito;
- provedor/modelo de IA futuro, caso o módulo opcional venha a ser ativado.

Decisão já fechada: **o MVP não usará IA em runtime e deverá ser completo sem IA**.

A tecnologia deverá ser escolhida depois que os requisitos do produto estiverem suficientemente fechados.

---

# 39.A MÓDULO FUTURO DE IA — ESPECIFICADO, FORA DO MVP

## 39.A1 DECISÃO DE PRODUTO

O MVP do Eixo deverá ser **completamente funcional sem qualquer API de IA em runtime**.

Isso inclui, sem IA:

- editor matemático;
- Caderno;
- Rascunho;
- Quadros;
- validação matemática;
- classificação de erros suportados;
- dicas determinísticas;
- currículo;
- banco de atividades;
- geração paramétrica;
- adaptação;
- sistema de domínio;
- gráficos e visualizações;
- gamificação;
- progresso.

Nenhum usuário deverá precisar fornecer chave de API.

Nenhuma funcionalidade essencial poderá parar de funcionar pela indisponibilidade de um provedor de IA.

---

## 39.A2 PRINCÍPIO DE DEPENDÊNCIA ZERO

A arquitetura deverá respeitar:

```
Eixo Core
   ↓
funciona sozinho

IA futura
   ↓
camada opcional
```

A dependência deve ser unidirecional:

```
IA pode usar dados estruturados do Eixo
```

mas:

```
Eixo Core não depende da IA
```

---

## 39.A3 CASOS DE USO FUTUROS

### Tutor explicativo

A partir de um diagnóstico já produzido pelo motor:

> Explique este erro de outra forma.

### Perguntas conceituais

Exemplo:

> Por que o sinal da inequação inverte?

### Exemplos personalizados

Gerar um exemplo adicional alinhado à habilidade atual.

### Reformulação pedagógica

Explicar em linguagem mais simples, mais formal ou por analogia.

### Análise de justificativas textuais

Complementarmente, nunca como autoridade matemática única.

### Assistência interna de produção

- criação de contextos;
- propostas de blueprints;
- rascunhos de dicas;
- revisão de linguagem;
- classificação inicial.

---

## 39.A4 IA NÃO DECIDE CORREÇÃO MATEMÁTICA

Fluxo permitido:

```
Motor determinístico
      ↓
ERRO_REGRA_CADEIA_INCOMPLETA
      ↓
IA
      ↓
explicação personalizada
```

Fluxo proibido como autoridade final:

```
resolução do aluno
      ↓
IA "acha" que está certa
      ↓
nota
```

A IA poderá sugerir, mas o veredito matemático deverá continuar baseado em motor verificável ou revisão humana.

---

## 39.A5 CONTRATO DE CONTEXTO PARA IA

Se implementado, o módulo receberá contexto estruturado mínimo.

Exemplo conceitual:

```
skill_id
activity_id
mode
student_level
math_expression
validated_steps
error_codes
hint_level
editor_context
language
```

Evitar enviar histórico desnecessário.

---

## 39.A6 PRIVACIDADE POR PADRÃO

O módulo futuro deverá minimizar dados enviados a terceiros.

Preferir:

- expressão atual;
- código de erro;
- habilidade;
- contexto pedagógico estritamente necessário.

Evitar enviar:

- perfil completo;
- histórico inteiro;
- identificadores pessoais;
- rascunhos não relacionados.

A política final dependerá da arquitetura e dos provedores escolhidos.

---

## 39.A7 CAMADA DE ABSTRAÇÃO DE PROVEDOR

A aplicação não deverá acoplar suas telas diretamente a um provedor específico.

Conceitualmente:

```
AI Tutor Interface
       ↓
AI Gateway
       ↓
Provider Adapter
       ├── provedor A
       ├── provedor B
       └── modelo local futuro
```

Isso permitirá trocar fornecedor sem reescrever a experiência pedagógica.

---

## 39.A8 FEATURE FLAG

Toda funcionalidade de IA deverá poder ser:

- desativada globalmente;
- desativada por ambiente;
- desativada por região/conta;
- ocultada no MVP.

Exemplo conceitual:

```
AI_TUTOR_ENABLED=false
```

O aplicativo deve continuar íntegro com a flag desligada.

---

## 39.A9 FALLBACK OBRIGATÓRIO

Toda ação futura de IA deverá possuir fallback determinístico.

Exemplo:

**Explicar de outra forma**

Se IA indisponível:

> mostrar explicação pedagógica cadastrada para o código de erro.

Nunca exibir:

> “Você não pode continuar porque a IA está indisponível.”

---

## 39.A10 CUSTO E RATE LIMIT

Se ativada futuramente, IA deverá possuir:

- orçamento por usuário/período;
- limites;
- cache quando seguro;
- proteção contra loops;
- observabilidade de custo.

Chamadas não deverão ocorrer a cada tecla ou linha.

---

## 39.A11 IA NÃO FICA NO APK COM SEGREDO

Caso use API comercial:

```
App
 ↓
Backend/Gateway do Eixo
 ↓
Provedor
```

Chaves secretas não deverão ser distribuídas no cliente.

---

## 39.A12 MODERAÇÃO E SEGURANÇA

Um tutor de linguagem natural precisará de:

- política de conteúdo;
- limites de escopo;
- tratamento para menores, se aplicável;
- proteção contra prompt injection;
- prevenção de vazamento de sistema/dados;
- logs apropriados sem coleta excessiva.

---

## 39.A13 TESTES DO MÓDULO FUTURO

Antes de ativação:

- respostas matematicamente consistentes com o diagnóstico;
- não contradizer o motor;
- não revelar resposta quando não permitido;
- respeitar nível de dica;
- respeitar modo prova;
- funcionar com provedor indisponível;
- funcionar com timeout;
- funcionar com saída inválida;
- não quebrar o fluxo offline básico.

---

## 39.A14 MODO PROVA

Por padrão, IA deverá ficar desativada em avaliações que proíbem ajuda.

O contrato da atividade poderá controlar isso explicitamente.

---

## 39.A15 DADOS DE TREINO / MELHORIA

O Eixo não deverá presumir que conversas ou dados educacionais podem ser enviados para treinamento de terceiros.

Qualquer uso desse tipo exigirá política explícita, consentimento adequado e análise de privacidade.

---

## 39.A16 CRITÉRIO PARA ATIVAR IA PÓS-MVP

Só considerar IA em produção quando o núcleo sem IA estiver validado e houver evidência de que a IA melhora algo específico.

Pergunta obrigatória:

> Qual problema pedagógico real esta chamada de IA resolve melhor do que a solução determinística?

Se não houver resposta clara, não adicionar.

---

## 39.A17 PRINCÍPIO FINAL

A IA será:

> **amplificador de explicação e personalização**

e não:

> **fundação necessária para o Eixo funcionar**.

---


# 40. ESCRITA À MÃO — DIREÇÃO ATUAL

Reconhecimento manuscrito poderá existir futuramente como modalidade opcional.

Não deverá ser requisito do MVP.

Motivo: não misturar erro de reconhecimento de caligrafia com erro matemático.

Se implementado:

1. usuário escreve;
2. sistema converte;
3. sistema mostra a expressão reconhecida;
4. usuário confirma;
5. só então a expressão entra no Caderno.

---

# 41. REGRA PARA IMPLEMENTAÇÃO

**Não iniciar implementação do aplicativo enquanto este documento ainda estiver em fase de definição estrutural.**

O objetivo desta etapa é produzir uma especificação suficientemente completa para que o agente de desenvolvimento possa implementar sem precisar inventar requisitos essenciais.

Quando a especificação for considerada pronta, ela deverá incluir, além deste conteúdo:

- motor matemático/pedagógico detalhado;
- árvore curricular completa;
- UX/telas principais;
- sistema de domínio;
- banco de questões;
- gamificação;
- arquitetura técnica;
- persistência;
- offline/online;
- segurança e privacidade;
- acessibilidade;
- MVP;
- roadmap;
- critérios de aceite;
- estratégia de testes;
- instruções explícitas para agentes/Codex.

---

# 42. PRÓXIMOS BLOCOS DE ESPECIFICAÇÃO

Blocos estruturais já definidos em nível inicial:

- Caderno Matemático, Teclado e Rascunho;
- sistema de Quadros de Trabalho;
- Motor Matemático e Pedagógico;
- validação de transformações e equivalência;
- árvore curricular Matemática Básica → Pré-Cálculo → Cálculo I;
- Sistema de Domínio e Aprendizagem Adaptativa;
- UX matemática mobile e editor 2D estruturado;
- catálogo universal de templates/notação matemática;
- rascunho espacial e navegação entre Quadros;
- estrutura de módulos, aulas e mapa de conhecimento;
- fluxo inicial de navegação do aplicativo (onboarding, início, aula, atividade, conclusão e continuidade);
- banco de questões, blueprints paramétricos e seleção adaptativa;
- política de proveniência, licenças e conteúdo externo.

Prioridade atual:

1. gamificação e camada lúdica integrada à matemática;
2. perfil, progresso, histórico e Livro Matemático;
3. arquitetura técnica e escolha de tecnologias;
4. persistência, sincronização e funcionamento offline/online;
5. segurança, privacidade e telemetria pedagógica;
6. definição formal do MVP;
7. critérios de aceite e estratégia de testes;
8. roadmap;
9. instruções finais para Codex/agentes e início da implementação.

---

# 43. STATUS

Este documento é a **fonte principal de verdade do projeto Eixo**.

Toda decisão relevante tomada durante o planejamento deverá ser incorporada aqui ou referenciada por este documento antes do início da implementação.
