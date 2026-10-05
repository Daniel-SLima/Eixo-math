# P0 — feedback de uso no celular

Após testar no Samsung SM-S911B, o proprietário confirmou que o editor funcionava, mas mostrou duas capturas em que a matriz ficava pequena ou parcialmente oculta pelo teclado. Também apontou excesso de informação e rolagem na tela e preferiu símbolos, ou símbolos com nomes curtos, para os comandos. A direção visual continua sendo limpa, com a matemática como conteúdo principal.

## Ajuste na prova técnica

- Tocar em um campo no mobile abre uma área dedicada à expressão ativa acima do teclado; há botões para trocar de linha e concluir a edição.
- Zoom da fórmula por botões, de 70% a 180%. Fórmulas grandes ainda podem exigir rolagem horizontal dentro do campo; gesto de pinça não foi implementado nesta prova.
- Templates próximos dos campos, com símbolos e nomes curtos; no modo dedicado aparecem apenas os símbolos. Foi acrescentado um template de matriz 2×2.
- MathJSON e gráfico ficam recolhidos em “Mostrar detalhes técnicos” no mobile. O desktop continua mostrando a inspeção.
- Em paisagem, o teclado MathLive é reduzido e a barra de templates própria é ocultada enquanto o campo está em foco para reservar altura à fórmula. Os templates voltam ao concluir a edição.

## Verificação

- Typecheck, lint, testes e build web passaram; o APK debug foi compilado e instalado no emulador Android.
- A matriz 2×2 foi inserida e vista no modo dedicado com o teclado aberto. Os controles de zoom foram observados em 70%, 100% e 145%; “Concluir” fechou o teclado e voltou aos dois campos.
- [Retrato](P0_MOBILE_EDITOR_PORTRAIT.png) e [paisagem](P0_MOBILE_EDITOR_LANDSCAPE.png) no emulador.
- O APK revisado foi instalado com `adb install -r` no Samsung SM-S911B em 2026-10-05. O rascunho existente (`5·5−5 → 20`) permaneceu, e a área dedicada abriu com o teclado e os controles visíveis. [Captura no aparelho](P0_MOBILE_EDITOR_PHONE.png).

## Ainda necessário

- Medir conforto real de toque, foco, seleção e navegação com fórmulas aninhadas nesta versão revisada. Capturas e toques automatizados não aprovam a usabilidade.
- Definir e testar o teclado progressivo definitivo na fase P3, inclusive matriz, entrada de números, acessibilidade e telas menores. Este ajuste não transforma a prova P0 na interface final.
