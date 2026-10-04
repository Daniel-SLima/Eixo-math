# MASTER GDD / PRODUCT SPEC — Eixo Math

**Versão de especificação:** 0.2 em construção  
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
