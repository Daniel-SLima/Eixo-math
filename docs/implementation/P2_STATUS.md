# P2 — Eixo Math Core

**Estado:** em andamento. A validação de expressões está integrada ao app; o gate curricular do P2 permanece aberto.

## Cortes implementados

- `packages/math-core` independente de React, com contrato de contexto e resultado estruturado.
- Equivalência exata de polinômios com coeficientes racionais sobre os reais, até grau 4 e 128 termos. Frações são aceitas quando o denominador escrito é um inteiro constante não nulo. Coeficientes de monômios iguais retornam `VALIDO`; coeficientes diferentes retornam `INVALIDO`.
- Entradas vazias, equações fora do corte linear, inequações, frações com denominador variável ou zero, funções e casos que exigem análise de domínio retornam `NAO_COMPROVADO`. O expoente zero também é conservadoramente adiado porque a normalização pode apagar a condição de base zero.
- O app P0 passou a usar esse contrato para validar as duas linhas. O veredito não concede domínio curricular, estratégia ou conceitos usados.
- O núcleo compara conjuntos solução de equações lineares univariadas quando o contexto declara a variável. Diferencia solução racional única, nenhuma solução e todos os reais. Equações quadráticas e casos com outras variáveis não resolvidas seguem `NAO_COMPROVADO`. A interface P0 ainda solicita apenas comparação de expressões.
- Testes unitários do pacote cobrem distributiva assinada, coeficientes racionais, equações lineares, diferenças exatas, casos sem prova e propriedades com coeficientes inteiros. O fluxo web continua coberto por Playwright.

## Verificação local

- `pnpm run check` em 2026-10-05 após o terceiro corte: typecheck, lint, 30 testes unitários, build web e 2 testes Playwright passaram. As propriedades verificam distributiva inteira, soma de coeficientes racionais e solução de equações lineares.
- `pnpm exec cap sync android` e `gradlew assembleDebug --offline` concluíram com sucesso após o segundo corte. O APK revisado foi instalado no emulador Android; no primeiro corte, `2(x+3) → 2x+6` retornou `VALIDO` com o novo pacote. [Captura](P2_ANDROID_EMULATOR.png). O aparelho físico não estava conectado nesta verificação; o APK revisado ainda precisa de teste de uso nele.

## Próximos cortes necessários para fechar P2

1. Representar restrições de domínio de expressões racionais, raízes e logaritmos antes de ampliar os vereditos.
2. Ampliar a comparação de equações além do caso linear univariado e classificar transformações que preservam, ampliam ou restringem soluções.
3. Detectar estratégias e erros matemáticos com códigos estáveis; separar correção matemática do contrato pedagógico.
4. Criar fixtures para as transformações do currículo MVP e testes de propriedade, sinais, zero, domínio e contraexemplos.
5. Medir o impacto no Android e manter operações pesadas fora da interação do editor quando necessário.

O desenho e os limites deste corte estão em [P2_MATH_CORE_SLICE.md](P2_MATH_CORE_SLICE.md).
