# P1 — fundação do repositório

**Estado:** iniciado enquanto a avaliação humana do editor P0 está pendente. O gate P1 ainda não foi aprovado.

## Implementado

- Workspace pnpm com app `apps/eixo` e lockfile.
- Comando raiz `pnpm run check` para typecheck, lint, testes e build web.
- Workflow GitHub Actions que executa esse comando em pull requests e pushes para `main` ou `codex/**`. A execução remota ainda não foi observada porque não houve push.
- Vitest e `fast-check` no app; uma propriedade curta verifica a distributividade para coeficientes inteiros positivos no comparador limitado do P0.

## Pendente

- Definir e criar os pacotes base conforme as interfaces forem implementadas, começando pelo Math Core em P2; não criar pacotes vazios.
- Playwright para o primeiro fluxo web estável, com teste que observe editor, validação e restauração.
- Testes de integração mais amplos, validação de conteúdo e build Android no pipeline quando as fases correspondentes estiverem implementadas.
- ADRs para decisões técnicas novas e não registradas na especificação.
- Confirmar o workflow em uma execução real de CI antes de fechar o gate P1.
