# MASTER GDD / PRODUCT SPEC — Eixo Math

**Versão de especificação:** 0.4 em construção  
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

# 25. SISTEMA DE DOMÍNIO

Não medir apenas quantidade de acertos.

Dimensões possíveis:

- cálculo;
- interpretação;
- representação;
- aplicação;
- transferência.

Um conteúdo só deve ser considerado realmente dominado após diferentes formas de uso.

---

# 26. DIAGNÓSTICO DE PRÉ-REQUISITOS

Quando ocorrerem erros recorrentes, o sistema deverá procurar a origem provável.

Exemplo:

```
lim x→2 (x² - 4)/(x - 2)
```

Se o aluno entende limite mas não consegue fatorar `x²-4`, recomendar revisão de diferença de quadrados em vez de repetir apenas limites.

---

# 27. CURRÍCULO INICIAL

## 27.1 Matemática Básica

Escopo inicial previsto:

- números naturais;
- inteiros;
- números negativos;
- operações;
- ordem das operações;
- divisibilidade;
- múltiplos e divisores;
- números primos;
- frações;
- decimais;
- porcentagens;
- razão e proporção;
- regra de três;
- potências;
- propriedades de potências;
- raízes;
- notação científica;
- expressões;
- introdução à álgebra;
- equações;
- geometria básica;
- áreas;
- perímetros;
- unidades de medida.

## 27.2 Pré-Cálculo

- manipulação algébrica;
- produtos notáveis;
- fatoração;
- equações;
- inequações;
- sistemas;
- valor absoluto;
- plano cartesiano;
- distância;
- funções;
- domínio e imagem;
- composição;
- função inversa;
- transformações de gráficos;
- funções lineares;
- quadráticas;
- polinomiais;
- racionais;
- exponenciais;
- logaritmos;
- trigonometria;
- círculo trigonométrico;
- seno, cosseno e tangente;
- identidades;
- equações trigonométricas;
- sequências.

## 27.3 Cálculo I

- introdução intuitiva a limites;
- cálculo de limites;
- limites laterais;
- limites infinitos;
- limites no infinito;
- continuidade;
- taxa de variação;
- reta tangente;
- definição de derivada;
- regras de derivação;
- produto;
- quociente;
- regra da cadeia;
- derivadas trigonométricas;
- exponenciais;
- logaritmos;
- derivação implícita;
- taxas relacionadas;
- máximos e mínimos;
- pontos críticos;
- otimização;
- análise de gráficos;
- antiderivadas;
- somas de Riemann;
- integral definida;
- integral indefinida;
- Teorema Fundamental do Cálculo.

A árvore curricular completa ainda será especificada em detalhe.

---

# 28. BANCO DE QUESTÕES

Questões devem existir separadas da lógica do aplicativo.

Metadados esperados incluem:

- ID;
- área;
- assunto;
- subassunto;
- dificuldade;
- pré-requisitos;
- tipo de atividade;
- nível de detalhamento;
- política de calculadora;
- resposta/relações matemáticas esperadas;
- erros comuns;
- dicas;
- recursos gráficos;
- dimensões de domínio avaliadas.

O sistema deverá selecionar exercícios de forma adaptativa, evitando repetição desnecessária.

---

# 29. FONTES DE CONTEÚDO E DIREITOS AUTORAIS

Há grande quantidade de material matemático existente, mas o projeto não deve copiar indiscriminadamente questões de livros comerciais protegidos por direitos autorais.

Priorizar:

- domínio público;
- recursos educacionais abertos;
- licenças permissivas;
- bancos próprios;
- exercícios próprios/adaptados;
- referências pedagógicas sem reprodução literal protegida.

Futuramente poderá existir importação de listas próprias de professores/usuários, sujeita a requisitos técnicos e legais.

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

# 32. UX MOBILE

Mobile é prioridade inicial.

Requisitos:

- alvos de toque confortáveis;
- fórmulas longas com rolagem adequada;
- teclado sem esconder toda a resolução;
- enunciado recolhível;
- rascunho de acesso rápido;
- manutenção do cursor/contexto ao alternar áreas.

## Paisagem

Pode exibir simultaneamente enunciado, resolução e rascunho.

## Tablet

Pode exibir simultaneamente enunciado, resolução, rascunho e gráfico.

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
- uso de IA em produção.

A tecnologia deverá ser escolhida depois que os requisitos do produto estiverem suficientemente fechados.

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

Prioridade atual:

1. Motor Matemático e Pedagógico;
2. validação de transformações;
3. equivalência matemática;
4. classificação de erros;
5. árvore completa Matemática Básica → Pré-Cálculo → Cálculo I;
6. sistema de domínio/adaptação;
7. UX restante;
8. arquitetura técnica;
9. definição do MVP;
10. plano de implementação.

---

# 43. STATUS

Este documento é a **fonte principal de verdade do projeto Eixo**.

Toda decisão relevante tomada durante o planejamento deverá ser incorporada aqui ou referenciada por este documento antes do início da implementação.
