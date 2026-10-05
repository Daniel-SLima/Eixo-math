# P1 — fundação do repositório

**Estado:** implementação local verificada; aguarda a primeira execução remota da CI para fechar o gate. O proprietário aprovou a continuidade após avaliar o editor P0 em 2026-10-05.

## Implementado

- Workspace pnpm com app `apps/eixo` e lockfile.
- Comando raiz `pnpm run check` para typecheck, lint, testes unitários, build web e Playwright.
- Workflow GitHub Actions que instala o Chromium do Playwright e executa esse comando em pull requests e pushes para `main` ou `codex/**`. A execução remota ainda não foi observada porque não houve push.
- Vitest e `fast-check` no app; uma propriedade curta verifica a distributividade para coeficientes inteiros positivos no comparador limitado do P0.
- Playwright verifica o primeiro fluxo web estável: carregar exemplo, validar equivalência, restaurar o rascunho após recarga e usar a área de edição com zoom em largura de celular. Os dois testes passaram localmente em 2026-10-05.

## Pendente

- Definir e criar os pacotes base conforme as interfaces forem implementadas, começando pelo Math Core em P2; não criar pacotes vazios.
- Testes de integração mais amplos, validação de conteúdo e build Android no pipeline quando as fases correspondentes estiverem implementadas.
- ADRs para decisões técnicas novas e não registradas na especificação.
- Confirmar o workflow em uma execução real de CI antes de fechar o gate P1.
