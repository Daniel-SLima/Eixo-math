# Eixo Math — Design System Base

**Status:** baseline visual para implementação  
**Objetivo:** fornecer consistência suficiente para o Codex implementar sem inventar estilo.

---

# 1. DIREÇÃO

Palavras-chave:

- geométrico;
- moderno;
- limpo;
- matemático;
- tecnológico sem parecer corporativo;
- maduro o suficiente para adolescentes e adultos;
- acolhedor sem infantilização.

---

# 2. PRINCÍPIO VISUAL

A matemática é o elemento mais importante da tela.

As ilustrações geradas mais elaboradas (onboarding, mundos, desafios, estados vazios e ambientação) são referências visuais para a composição, não planos de fundo obrigatórios nem telas prontas. A interface final deve permanecer limpa, com superfícies simples e espaço para conteúdo, controles e matemática reais. Logo e ícones simples podem ser avaliados como assets de uso direto, conforme o contexto. A aprovação visual de um PNG não aprova automaticamente seu uso como fundo de tela.

Hierarquia:

1. expressão/conteúdo;
2. ação atual;
3. contexto;
4. gamificação.

Nunca o contrário.

---

# 3. PALETA BASE

Tokens iniciais.

## Light

```
--bg:             #F8FAFC
--surface:        #FFFFFF
--surface-soft:   #F1F5F9
--text:           #0F172A
--text-muted:     #475569
--border:         #CBD5E1

--primary:        #4F46E5
--primary-soft:   #EEF2FF
--secondary:      #0891B2

--success:        #15803D
--warning:        #B45309
--danger:         #B91C1C
--info:           #0369A1
```

## Dark

```
--bg:             #0B1120
--surface:        #111827
--surface-soft:   #1E293B
--text:           #F8FAFC
--text-muted:     #CBD5E1
--border:         #334155

--primary:        #818CF8
--primary-soft:   #1E1B4B
--secondary:      #22D3EE

--success:        #4ADE80
--warning:        #FBBF24
--danger:         #F87171
--info:           #38BDF8
```

Valores finais deverão passar por verificação de contraste.

---

# 4. COR NÃO É ÚNICO SINAL

Estados matemáticos:

```
✓ válido
! atenção
× inválido
○ não verificado
```

Cor complementa símbolo/texto.

---

# 5. TIPOGRAFIA

## UI

Preferir fonte sans de alta legibilidade, com fallback de sistema.

Baseline:

```
font-family:
Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Se Inter não for empacotada, usar stack de sistema.

## Matemática

Usar renderer/fontes fornecidas/compatíveis com MathLive.

Não substituir fórmulas por fonte de UI.

---

# 6. ESCALA TIPOGRÁFICA

```
xs:   12
sm:   14
base: 16
lg:   18
xl:   22
2xl:  28
3xl:  36
```

Fórmulas podem ultrapassar essa escala de acordo com estrutura.

---

# 7. SPACING

Base 4px.

```
1 = 4
2 = 8
3 = 12
4 = 16
5 = 20
6 = 24
8 = 32
10 = 40
12 = 48
```

---

# 8. RAIO

```
sm: 8px
md: 12px
lg: 16px
xl: 24px
```

Evitar estética excessivamente “bubble”.

---

# 9. TOUCH TARGET

Mínimo recomendado:

```
44 × 44 px
```

Regiões matemáticas visualmente menores recebem hit area invisível ampliada.

---

# 10. ELEVAÇÃO

Usar com moderação.

- cards principais: sombra leve;
- overlays/bottom sheets: média;
- editor: preferir borda/fundo, não sombra pesada.

---

# 11. BOTÕES

## Primary

Ação principal da tela.

Exemplo:

**Continuar**

## Secondary

Ação alternativa.

## Ghost

Ações contextuais.

## Danger

Exclusão/limpar.

Nunca usar mais de uma primary dominante na mesma região.

---

# 12. ÍCONES

Estilo:

- outline;
- simples;
- geométrico.

Ícone sempre acompanhado de label quando a função não for óbvia.

---

# 13. HOME

Prioridade visual:

1. Continuar;
2. próximo recomendado;
3. revisão;
4. mapa;
5. atalhos.

Não colocar métricas decorativas acima da ação principal.

---

# 14. MAPA

Visual:

- conexões suaves;
- nós claros;
- zoom por nível;
- estado por forma + símbolo + cor.

Evitar aparência de árvore tecnológica ilegível.

---

# 15. CADERNO

Fundo deve lembrar superfície de trabalho, não folha pautada obrigatória.

Elementos:

- número/handle da linha discreto;
- expressão dominante;
- estado à direita;
- espaçamento suficiente entre etapas;
- alinhamento automático quando aplicável.

---

# 16. LINHA ATIVA

Indicadores discretos:

- borda esquerda;
- realce de fundo;
- cursor/slot.

Não transformar cada linha em card pesado.

---

# 17. SLOTS

Slot vazio:

- placeholder leve;
- forma coerente;
- contorno apenas quando foco/ajuda.

Slot ativo:

- realce primary-soft;
- cursor claro.

---

# 18. TECLADO

Altura deve preservar contexto.

Categorias:

- básico;
- álgebra;
- funções;
- trig;
- cálculo.

Barra estrutural fixa.

Botões de template mostram notação real.

---

# 19. RASCUNHO

Aparência mais livre.

- canvas/surface;
- grid muito sutil opcional;
- blocos com borda leve somente em foco/seleção.

---

# 20. QUADROS

Indicador:

```
1 / 3
● ○ ○
```

Em muitos quadros:

seletor/lista.

Transição lateral curta.

---

# 21. FEEDBACK

## Correto

```
✓ Passo válido
```

Mensagem curta.

## Incorreto

```
× Este passo não preserva a igualdade.
```

Ação:

**Entender**

## Não comprovado

```
○ Não consegui verificar esta transformação.
```

Ação:

**Mostrar etapa intermediária**

---

# 22. GAMIFICAÇÃO

Usar ambientação nas bordas da experiência.

Durante resolução:

- reduzir elementos decorativos;
- foco em matemática.

Após marco:

- animação/transformação visual maior.

---

# 23. MOVIMENTO

Duração base:

```
fast:   120ms
normal: 200ms
slow:   320ms
```

Evitar transições longas.

Reduce motion remove deslocamentos amplos.

---

# 24. RESPONSIVIDADE

Breakpoints serão definidos tecnicamente, mas comportamento:

## celular portrait

um painel principal.

## celular landscape

mais contexto horizontal.

## tablet

painéis simultâneos.

## web desktop

não esticar conteúdo matemático indefinidamente; usar largura de leitura.

---

# 25. BOTTOM SHEETS

Adequados para:

- Rascunho rápido;
- dicas;
- seletor de Quadros;
- detalhes de ferramenta.

Não esconder resolução inteira sem necessidade.

---

# 26. MODAIS

Usar apenas quando decisão bloqueia fluxo.

Evitar tutorial em sequência de modais.

---

# 27. EMPTY STATES

Sempre orientar próxima ação.

Exemplo:

> Você ainda não salvou nenhuma resolução favorita.

[Explorar seu histórico]

---

# 28. ERROS TÉCNICOS

Tom:

> Não foi possível sincronizar agora. Seu trabalho continua salvo neste aparelho.

Evitar códigos técnicos sem opção de detalhes.

---

# 29. DESIGN DA MATEMÁTICA

Fórmulas precisam de:

- espaço;
- contraste;
- escala;
- alinhamento.

Não comprimir para caber em cards.

---

# 30. GRÁFICOS

- eixos legíveis;
- grid moderado;
- labels;
- interação touch;
- não depender apenas de cor;
- manter relação com expressão.

---

# 31. ACESSIBILIDADE

Design tokens devem suportar:

- contraste;
- font scaling;
- reduce motion;
- touch targets;
- focus visible.

---

# 32. COMPONENTES BASE

```
Button
IconButton
Card
BottomSheet
Dialog
Tabs
ProgressState
SkillNode
LessonCard
MathField
MathLine
MathKeyboard
BoardSwitcher
HintPanel
FeedbackBanner
GraphPanel
ToolChip
BookEntry
```

---

# 33. NÃO FAZER

- glassmorphism pesado;
- neon excessivo;
- texto pequeno;
- ícones sem significado;
- gamificação ocupando tela do Caderno;
- cores diferentes para cada assunto sem sistema;
- fórmulas como imagens;
- sombra em tudo.

---

# 34. BRANDING

Nome Eixo.

Logo e ícone finais serão criados depois.

A implementação deve usar tokens para permitir trocar branding sem refatorar componentes.

---

# 35. PRINCÍPIO FINAL

> A interface deve desaparecer enquanto a matemática permanece clara.
