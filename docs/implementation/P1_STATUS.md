# P1 — fundação do repositório

**Estado:** gate aprovado em 2026-10-05. A verificação local e a primeira execução remota da CI passaram. O proprietário aprovou a continuidade após avaliar o editor P0.

## Implementado

- Workspace pnpm com app `apps/eixo` e lockfile.
- Comando raiz `pnpm run check` para typecheck, lint, testes unitários, build web e Playwright.
- Workflow GitHub Actions que instala o Chromium do Playwright e executa esse comando em pull requests e pushes para `main` ou `codex/**`. A [primeira execução remota](https://github.com/Daniel-SLima/Eixo-math/actions/runs/37368697409) passou após o push da branch `codex/p0-editor-proof`.
- Vitest e `fast-check` no app; uma propriedade curta verifica a distributividade para coeficientes inteiros positivos no comparador limitado do P0.
- Playwright verifica o primeiro fluxo web estável: carregar exemplo, validar equivalência, restaurar o rascunho após recarga e usar a área de edição com zoom em largura de celular. Os dois testes passaram localmente em 2026-10-05.

## Pendente

- Definir e criar os pacotes base conforme as interfaces forem implementadas, começando pelo Math Core em P2; não criar pacotes vazios.
- Testes de integração mais amplos, validação de conteúdo e build Android no pipeline quando as fases correspondentes estiverem implementadas.
- ADRs para decisões técnicas novas e não registradas na especificação.
