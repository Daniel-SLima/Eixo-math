# MASTER GDD / PRODUCT SPEC — Eixo Math

**Versão de especificação:** 0.6 em construção  
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

Blocos estruturais já definidos em nível inicial:

- Caderno Matemático, Teclado e Rascunho;
- sistema de Quadros de Trabalho;
- Motor Matemático e Pedagógico;
- validação de transformações e equivalência;
- árvore curricular Matemática Básica → Pré-Cálculo → Cálculo I;
- Sistema de Domínio e Aprendizagem Adaptativa.

Prioridade atual:

1. UX completa e fluxo de navegação do aplicativo;
2. estrutura de módulos, aulas e mapa de conhecimento;
3. sistema de banco/importação/seleção de questões;
4. gamificação e camada lúdica integrada à matemática;
5. perfil, progresso, histórico e Livro Matemático;
6. arquitetura técnica e escolha de tecnologias;
7. persistência, sincronização e funcionamento offline/online;
8. segurança, privacidade e telemetria pedagógica;
9. definição formal do MVP;
10. critérios de aceite e estratégia de testes;
11. roadmap;
12. instruções finais para Codex/agentes e início da implementação.

---

# 43. STATUS

Este documento é a **fonte principal de verdade do projeto Eixo**.

Toda decisão relevante tomada durante o planejamento deverá ser incorporada aqui ou referenciada por este documento antes do início da implementação.
