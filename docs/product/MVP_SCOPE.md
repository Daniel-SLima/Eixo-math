# Eixo Math — Definição Formal do MVP

**Objetivo do MVP:** provar que o núcleo do Eixo funciona como produto educacional real — escrever matemática confortavelmente, validar raciocínio, ensinar de forma adaptativa e operar offline — sem depender de IA.

---

# 1. O QUE “MVP” SIGNIFICA NESTE PROJETO

O MVP não será a versão final com todo o currículo Matemática Básica → Pré-Cálculo → Cálculo I.

Ele será uma **versão de produto completa no fluxo**, com conteúdo suficiente para validar a proposta central.

Diferença:

```
MVP
= sistemas centrais completos + currículo vertical coerente

v1.0 curricular
= expansão até cobrir todo o escopo inicial
  Matemática Básica → Pré-Cálculo → Cálculo I
```

Isso evita passar meses criando centenas de aulas antes de descobrir se o editor matemático central é confortável.

---

# 2. FASE ANTERIOR AO MVP — PROVA TÉCNICA

Antes do MVP:

**P0 — Math Editor / Engine Spike**

Deve provar:

- MathLive em Capacitor;
- teclado customizado;
- fração;
- potência;
- raiz;
- log com base;
- limite;
- derivada;
- integral;
- slots;
- cursor;
- MathJSON;
- autosave;
- offline;
- Compute Engine;
- validação simples;
- gráfico Mafs;
- Android real.

P0 não precisa possuir produto bonito.

Se P0 falhar, não continuar a aplicação completa antes de revisar arquitetura.

---

# 3. PLATAFORMAS DO MVP

## Obrigatórias

- Android;
- web para desenvolvimento/testes e acesso básico.

## Compatibilidade arquitetural

- iOS.

Publicação iOS não é requisito de aceite do primeiro MVP se infraestrutura/dispositivo não estiver disponível.

---

# 4. IA

```
AI_TUTOR_ENABLED=false
```

MVP não possui:

- chat IA;
- correção por LLM;
- geração online por IA;
- chave de API do usuário.

Todo núcleo é determinístico.

---

# 5. CONTA

MVP deve permitir **Modo Visitante local**.

Conta/sincronização em nuvem não é necessária para provar o núcleo.

A infraestrutura pode ser adicionada durante o MVP se estiver estável, porém:

> falha ou ausência de conta não pode impedir aceitação do MVP educacional.

---

# 6. FLUXO DE PRODUTO OBRIGATÓRIO

```
primeira abertura
↓
onboarding curto
↓
tutorial básico do editor
↓
objetivo/nivelamento simplificado
↓
Home
↓
Mapa
↓
Módulo
↓
Aula
↓
Caderno
↓
Rascunho/Quadros
↓
feedback
↓
domínio/progresso
↓
Livro Matemático
↓
continuar depois
```

---

# 7. CURRÍCULO PÚBLICO DO MVP

O conteúdo deverá formar uma rota coerente e sem saltos pedagógicos.

## Bloco A — Fundamentos

1. operações e ordem;
2. números negativos;
3. frações;
4. potências;
5. raízes.

## Bloco B — Álgebra

6. variável/expressão;
7. termos semelhantes;
8. distributiva;
9. igualdade;
10. equações lineares;
11. verificação de solução.

## Bloco C — Representação e funções

12. plano cartesiano;
13. função e notação `f(x)`;
14. avaliação de função;
15. função linear;
16. inclinação;
17. gráficos lineares.

## Bloco D — Ponte para Pré-Cálculo

18. produtos notáveis básicos;
19. diferença de quadrados;
20. fatoração simples;
21. função racional;
22. restrição de domínio.

## Bloco E — Demonstração do diferencial do Eixo

23. ideia intuitiva de limite;
24. limite por gráfico/tabela;
25. limite algébrico simples com fatoração.

Esse ponto mostra como uma habilidade antiga retorna em conteúdo avançado.

---

# 8. CONTEÚDOS NÃO PÚBLICOS DE TESTE

Mesmo que ainda não estejam em aulas do MVP, o laboratório técnico deve possuir fixtures/testes para:

- logaritmo;
- trigonometria;
- derivada;
- regra da cadeia;
- integral definida;
- somatório;
- função por partes.

Objetivo:

garantir que arquitetura/editor não precisem ser refeitos ao expandir currículo.

---

# 9. CADERNO MATEMÁTICO MVP

Obrigatório:

- múltiplas linhas;
- MathLive estruturado;
- duplicar linha;
- editar linha antiga;
- revalidar posteriores;
- alinhamento de equações;
- undo/redo;
- autosave;
- estados válido/inválido/não comprovado;
- nível de detalhe;
- feedback no primeiro erro relevante.

---

# 10. TEMPLATES MVP PUBLICAMENTE UTILIZADOS

- números;
- operadores;
- parênteses;
- fração;
- potência;
- raiz;
- igualdade;
- inequação básica;
- `f(x)`;
- coordenadas;
- limite.

Outros templates devem existir ao menos no P0/test harness.

---

# 11. TECLADO MVP

Progressivo.

Ferramentas aparecem apenas quando ensinadas.

Obrigatório:

- numérico;
- operações;
- variáveis;
- parênteses;
- fração;
- potência;
- raiz;
- funções;
- limite básico.

Navegação estrutural fixa:

- undo;
- redo;
- apagar;
- mover;
- próximo;
- sair da estrutura;
- nova linha.

---

# 12. RASCUNHO MVP

Obrigatório:

- abrir rapidamente;
- bloco matemático;
- múltiplos blocos;
- movimentação espacial básica;
- salvar;
- retornar mantendo contexto;
- enviar bloco ao Caderno.

Setas/desenho livre avançado não são requisito.

---

# 13. QUADROS MVP

- criar;
- renomear;
- trocar;
- duplicar;
- lista de quadros;
- animação lateral;
- preservar cursor/scroll;
- tipos Resolução e Rascunho.

---

# 14. MOTOR MATEMÁTICO MVP

Suporte confiável para o currículo publicado.

Obrigatório:

- aritmética;
- frações básicas;
- simplificação;
- distributiva;
- termos semelhantes;
- equações lineares;
- potências/raízes básicas;
- fatoração definida no escopo;
- funções lineares;
- domínio racional básico;
- limites publicados.

Não tentar “entender toda matemática” no MVP.

---

# 15. ERROS MVP

Cobertura mínima:

- aritmético;
- sinal;
- distributiva parcial/incorreta;
- operação só em um lado;
- divisão inválida;
- termos semelhantes;
- solução incompleta;
- fatoração;
- cancelamento inválido;
- domínio;
- solução perdida nos casos publicados.

---

# 16. CAMINHOS ALTERNATIVOS

MVP precisa demonstrar já a filosofia principal:

- aceitar caminhos matematicamente válidos;
- distinguir estratégia;
- diferenciar correto/alinhado de correto/fora do objetivo.

Isso não pode ser deixado para depois.

---

# 17. BANCO DE QUESTÕES MVP

Para cada habilidade publicada:

- questões fixas de referência;
- pelo menos um blueprint quando adequado;
- seed reproduzível;
- solução verificável;
- hint ladder;
- erros comuns;
- dificuldade básica.

---

# 18. SISTEMA ADAPTATIVO MVP

Versão simples e explicável.

Deve:

- registrar evidências;
- considerar ajuda;
- reconhecer autocorreção;
- evitar repetição excessiva;
- recomendar revisão de pré-requisito;
- encerrar prática quando evidência suficiente.

Não precisa usar modelos estatísticos complexos.

---

# 19. MAPA DE CONHECIMENTO MVP

Obrigatório:

- visão da rota;
- estado dos nós;
- pré-requisitos;
- bloqueio explicável;
- próximo recomendado;
- acesso ao conteúdo dominado.

---

# 20. GAMIFICAÇÃO MVP

Versão leve.

Obrigatório:

- progresso visual do mapa/mundo;
- desbloqueio de ferramentas;
- marcos;
- pelo menos **2 Desafios-Marco**.

Sugestões:

### Desafio 1 — Inclinação/Conexão

Aplicar função linear/inclinação para construir ligação visual.

### Desafio 2 — Instabilidade no ponto

Aplicar fatoração + limite para resolver um mecanismo com descontinuidade removível.

Não incluir economia complexa.

---

# 21. LABORATÓRIO MVP

Obrigatório:

- plano cartesiano;
- plot de função linear;
- manipulação de parâmetro;
- comparação visual;
- visualização de limite usada no conteúdo.

---

# 22. PERFIL/PROGRESSO MVP

- objetivo;
- trilha;
- habilidades;
- estados;
- marcos;
- revisão recomendada;
- Caixa de Ferramentas.

---

# 23. LIVRO MATEMÁTICO MVP

- entradas automáticas dos conceitos publicados;
- definição;
- significado;
- exemplo;
- ferramenta;
- conexão com mapa;
- pelo menos uma resolução pessoal favorita.

Busca avançada/exportação ficam depois.

---

# 24. OFFLINE MVP

Depois da instalação/conteúdo local:

- aula;
- Caderno;
- Rascunho;
- motor;
- gráfico;
- progresso;
- Livro;

devem funcionar em modo avião.

---

# 25. CLOUD/SYNC

Não é gate do MVP central.

Se implementado:

- deve ser opcional;
- não quebrar local-first;
- não bloquear estudo.

A arquitetura já está definida para incluí-lo.

---

# 26. ACESSIBILIDADE MVP

Obrigatório:

- contraste;
- dark/light;
- tamanho de texto;
- touch targets;
- não depender só de cor;
- reduzir movimento;
- foco coerente;
- descrições básicas de gráficos;
- editor utilizável com suporte de acessibilidade oferecido por MathLive e complementos do Eixo.

---

# 27. NÃO ENTRA NO MVP

- IA em runtime;
- tutor de IA;
- multiplayer;
- Bluetooth;
- amigos;
- ranking global;
- chat;
- professor/importação de PDF;
- escrita manual/OCR;
- reconhecimento de stylus;
- Cálculo I completo;
- Pré-Cálculo completo;
- exportação PDF do Livro;
- monetização complexa;
- marketplace;
- notificações sofisticadas;
- criação pública de conteúdo por usuários.

---

# 28. QUALIDADE MÍNIMA

MVP não significa “aceitar UX ruim”.

Especialmente:

- editor;
- teclado;
- salvamento;
- validação;

precisam ser confiáveis.

É preferível menos currículo e núcleo sólido a muito currículo sobre editor desconfortável.

---

# 29. CRITÉRIO DE SUCESSO DO MVP

O MVP é aprovado quando uma pessoa consegue:

1. instalar/abrir;
2. aprender a usar editor sem treinamento externo;
3. estudar uma habilidade;
4. resolver no Caderno;
5. usar Rascunho/Quadros;
6. receber feedback correto;
7. ter caminho alternativo reconhecido;
8. avançar adaptativamente;
9. visualizar consequência matemática;
10. fechar e voltar sem perder trabalho;
11. estudar offline;
12. compreender progresso;
13. concluir um Desafio-Marco.

---

# 30. CAMINHO APÓS MVP

## Expansão 1

Completar Matemática Básica restante.

## Expansão 2

Completar Pré-Cálculo.

## Expansão 3

Completar Cálculo I.

## v1.0 curricular

Rota integral:

```
Matemática Básica
→ Pré-Cálculo
→ Cálculo I
```

com cobertura pedagógica e do motor.

---

# 31. PRINCÍPIO FINAL

> **O MVP precisa provar o método do Eixo, não provar que conseguimos escrever milhares de aulas.**
