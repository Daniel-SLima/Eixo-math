# P0 — prova técnica do editor e motor

**Estado:** em andamento. O gate P0 ainda não foi aprovado.

Android Studio, SDK API 36 e o emulador foram instalados em 2026-10-04 após o proprietário concluir o Setup Wizard e aceitar as licenças. A prova roda no emulador Android 17/API 37, mas ainda precisa de avaliação em aparelho intermediário real.

## Entregas implementadas

- Aplicação React/TypeScript/Vite em `apps/eixo`, empacotável pelo Capacitor Android.
- Dois campos MathLive 2D e teclado de templates: fração, potência, raiz, log com base, limite, derivada e integral definida.
- Navegação para o próximo placeholder e exclusão no campo ativo.
- Conversão da expressão LaTeX do MathLive para MathJSON com Compute Engine.
- Comparação simbólica determinística limitada, nesta prova, a expressões aritméticas/polinomiais simples. Expressões com divisão, potência ou função retornam `NAO_COMPROVADO` até existir análise de domínio e regras do Math Core.
- Rascunho local das duas linhas, gravado a cada edição e restaurado após reiniciar a página; falhas de armazenamento são exibidas.
- Gráfico Mafs de referência. Dependências e fontes MathLive são locais ao bundle, sem CDN.
- Carregamento separado do motor simbólico, da inspeção MathJSON e do gráfico para reduzir o JavaScript inicial do editor.
- Projeto Android gerado com `applicationId=com.daniellima.eixomath`, `versionCode=1`, `versionName=0.1.0`. Nenhum keystore ou segredo no repositório.

## Verificação realizada

- `pnpm --filter eixo test`: 6 testes passaram.
- `pnpm --filter eixo build`: TypeScript e build Vite passaram.
- Navegador local: exemplo `2(x+3) → 2x+6` validado; inserção de fração e restauração do rascunho após recarregar observadas.
- `pnpm exec cap add android` e `pnpm exec cap sync android` concluíram. É necessário sincronizar novamente após novas mudanças web.
- `gradlew assembleDebug`: build Android concluído; APK de teste instalado no emulador `Medium_Phone_API_37.0`.
- No emulador, `2(x+3) → 2x+6` retornou `VALIDO`; a integral definida exibiu placeholders; o rascunho reapareceu após force-stop e reabertura com Wi-Fi e dados móveis desligados. A atualização do APK debug com `adb install -r` também preservou esse rascunho. O motor carregado separadamente continuou validando sem rede. [Captura do teste offline](P0_ANDROID_EMULATOR.png).
- Uma expressão longa fez a tela ultrapassar a largura do aparelho. O container do editor foi limitado à largura disponível, permitindo rolagem interna; a correção foi confirmada visualmente no emulador.

## Gate ainda pendente

1. Executar em aparelho Android intermediário real e avaliar conforto e desempenho; o emulador não substitui esse teste.
2. Testar foco, teclado, seleção, todos os templates e fórmulas longas com pessoas usando touch; inserção e exibição foram observadas no emulador, mas ainda não há teste de usabilidade.
3. Testar persistência após uma atualização assinada com uma chave persistente; `adb install -r` só verificou continuidade com a assinatura debug local.
4. Revisar regras de domínio e contratos do Math Core antes de ampliar a validação matemática.

Não avançar automaticamente para P2 ou telas finais só porque o build web passou. O roadmap completo continua sendo o objetivo, sujeito aos gates de cada fase.

## Comandos

```powershell
pnpm install
pnpm --filter eixo test
pnpm --filter eixo build
pnpm --filter eixo dev
cd apps/eixo
pnpm exec cap sync android
pnpm exec cap open android
```

Referências técnicas: [MathLive e React](https://mathlive.io/mathlive/guides/react/), [comandos MathLive](https://mathlive.io/mathfield/guides/commands/), [comparação do Compute Engine](https://mathlive.io/compute-engine/guides/symbolic-computing/), [Mafs](https://mafs.dev/guides/get-started/installation), [Capacitor Android](https://capacitorjs.com/docs/android).
