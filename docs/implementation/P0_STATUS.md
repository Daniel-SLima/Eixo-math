# P0 — prova técnica do editor e motor

**Estado:** em andamento. O gate P0 ainda não foi aprovado.

Android Studio e as ferramentas de linha de comando foram instalados em 2026-10-04. Os componentes do SDK e o emulador dependem da aceitação das licenças pelo proprietário no Setup Wizard; ainda não há evidência de teste Android.

## Entregas implementadas

- Aplicação React/TypeScript/Vite em `apps/eixo`, empacotável pelo Capacitor Android.
- Dois campos MathLive 2D e teclado de templates: fração, potência, raiz, log com base, limite, derivada e integral definida.
- Navegação para o próximo placeholder e exclusão no campo ativo.
- Conversão da expressão LaTeX do MathLive para MathJSON com Compute Engine.
- Comparação simbólica determinística limitada, nesta prova, a expressões aritméticas/polinomiais simples. Expressões com divisão, potência ou função retornam `NAO_COMPROVADO` até existir análise de domínio e regras do Math Core.
- Rascunho local das duas linhas com restauração após reiniciar a página; falhas de armazenamento são exibidas.
- Gráfico Mafs de referência. Dependências e fontes MathLive são locais ao bundle, sem CDN.
- Projeto Android gerado com `applicationId=com.daniellima.eixomath`, `versionCode=1`, `versionName=0.1.0`. Nenhum keystore ou segredo no repositório.

## Verificação realizada

- `pnpm --filter eixo test`: 6 testes passaram.
- `pnpm --filter eixo build`: TypeScript e build Vite passaram.
- Navegador local: exemplo `2(x+3) → 2x+6` validado; inserção de fração e restauração do rascunho após recarregar observadas.
- `pnpm exec cap add android` e `pnpm exec cap sync android` concluíram. É necessário sincronizar novamente após novas mudanças web.

## Gate ainda pendente

1. Compilar e executar em emulador e, idealmente, aparelho Android intermediário.
2. Testar foco, teclado, seleção, placeholders, fórmulas longas e desempenho no Android.
3. Testar sem rede após instalar o app e após encerrar/reabrir o processo.
4. Confirmar que dados locais sobrevivem ao encerramento e a uma atualização assinada com a mesma chave (quando existir keystore persistente).
5. Revisar regras de domínio e contratos do Math Core antes de ampliar a validação matemática.

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
