# P2 — Eixo Math Core

**Estado:** em andamento. O primeiro corte está integrado ao app; o gate curricular do P2 permanece aberto.

## Primeiro corte implementado

- `packages/math-core` independente de React, com contrato de contexto e resultado estruturado.
- Equivalência exata de polinômios com coeficientes inteiros sobre os reais, até grau 4 e 128 termos. Coeficientes de monômios iguais retornam `VALIDO`; coeficientes diferentes retornam `INVALIDO`.
- Entradas vazias, equações, inequações, frações, funções e casos que exigem análise de domínio retornam `NAO_COMPROVADO`. O expoente zero também é conservadoramente adiado porque a normalização pode apagar a condição de base zero.
- O app P0 passou a usar esse contrato para validar as duas linhas. O veredito não concede domínio curricular, estratégia ou conceitos usados.
- Testes unitários do pacote cobrem distributiva assinada, diferenças exatas, casos sem prova e propriedade com coeficientes inteiros. O fluxo web continua coberto por Playwright.

## Verificação local

- `pnpm run check` em 2026-10-05: typecheck, lint, 15 testes unitários, build web e 2 testes Playwright passaram.
- `pnpm exec cap sync android` e `gradlew assembleDebug --offline` concluíram com sucesso. O APK revisado foi instalado no emulador Android, onde `2(x+3) → 2x+6` retornou `VALIDO` com o novo pacote. [Captura](P2_ANDROID_EMULATOR.png). O aparelho físico não estava conectado nesta verificação; o APK revisado ainda precisa de teste de uso nele.

## Próximos cortes necessários para fechar P2

1. Representar restrições de domínio de expressões racionais, raízes e logaritmos antes de ampliar os vereditos.
2. Comparar equações por conjunto-solução e classificar transformações que preservam, ampliam ou restringem soluções.
3. Detectar estratégias e erros matemáticos com códigos estáveis; separar correção matemática do contrato pedagógico.
4. Criar fixtures para as transformações do currículo MVP e testes de propriedade, sinais, zero, domínio e contraexemplos.
5. Medir o impacto no Android e manter operações pesadas fora da interação do editor quando necessário.

O desenho e os limites deste corte estão em [P2_MATH_CORE_SLICE.md](P2_MATH_CORE_SLICE.md).
