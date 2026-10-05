# P0 — prova técnica do editor e motor

**Estado:** editor aprovado pelo proprietário em 2026-10-05 para continuidade do roadmap. A prova automatizada no Android real passou. O desempenho em aparelho intermediário permanece como risco de validação.

O feedback do proprietário sobre matriz, espaço para edição e excesso de informação no mobile está registrado em [P0_MOBILE_UX_FEEDBACK.md](P0_MOBILE_UX_FEEDBACK.md). A versão revisada foi verificada no emulador e instalada no aparelho real em 2026-10-05, preservando o rascunho. Após avaliá-la, o proprietário liberou a continuidade em 2026-10-05.

Android Studio, SDK API 36 e o emulador foram instalados em 2026-10-04 após o proprietário concluir o Setup Wizard e aceitar as licenças. A prova roda no emulador Android 17/API 37 e foi instalada em um Samsung SM-S911B com Android 16/API 36 em 2026-10-04.

## Entregas implementadas

- Aplicação React/TypeScript/Vite em `apps/eixo`, empacotável pelo Capacitor Android.
- Dois campos MathLive 2D e teclado de templates: fração, potência, raiz, log com base, limite, derivada e integral definida.
- Navegação para o próximo placeholder e exclusão no campo ativo.
- Conversão da expressão LaTeX do MathLive para MathJSON com Compute Engine.
- Comparação exata limitada a polinômios inteiros sobre os reais, agora feita pelo primeiro corte do `packages/math-core`. Divisão, funções e casos com condições de domínio retornam `NAO_COMPROVADO`; potências polinomiais de expoente inteiro positivo até grau 4 são aceitas.
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
- No Samsung SM-S911B, o app abriu em tela vertical, carregou o exemplo e retornou `VALIDO`. Após desligar temporariamente Wi-Fi e dados móveis, o app reabriu e validou a expressão sem rede; ambas as conexões foram restauradas ao estado anterior. [Captura no aparelho real sem rede](P0_ANDROID_PHONE_OFFLINE.png).
- No mesmo aparelho, a integral definida exibiu os três placeholders, `Próximo espaço` moveu a seleção para o placeholder seguinte, e o rascunho sobreviveu a force-stop/reabertura e a `adb install -r` com o mesmo APK debug. A inspeção MathJSON também apareceu na tela.
- O Android reportou `TotalTime` de 1388 ms na primeira abertura e 592/556 ms em duas reaberturas. Esses valores medem a Activity, não o tempo até toda a interface estar interativa, e o aparelho testado não representa desempenho de entrada.

## Decisão do gate e risco pendente

- O proprietário aprovou a ergonomia atual para avançar no roadmap. Essa aprovação não declara a interface final; o teclado progressivo e os testes de usabilidade seguem na fase P3.
- Ainda é necessário medir carregamento e resposta em um Android intermediário antes de declarar o desempenho representativo para o público-alvo. Esse risco acompanha P3/P14 e não deve ser descrito como teste concluído.

Na fase de distribuição, testar atualização assinada com uma chave persistente: `adb install -r` só verificou continuidade com a assinatura debug local. As regras de domínio e contratos pedagógicos serão tratadas no Math Core em P2.

O proprietário autorizou a continuidade do roadmap após avaliar a versão no aparelho. Os gates seguintes continuam obrigatórios.

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
