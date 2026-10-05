# P2 — primeiro corte do Math Core

**Estado:** desenho de implementação para o primeiro corte; o gate P2 exige cobertura curricular mais ampla.

## Objetivo

Criar `packages/math-core` independente de React, com contrato próprio para validar transições matemáticas. O primeiro corte cobre equivalência exata de expressões polinomiais com coeficientes inteiros sobre os reais. Equações, inequações, frações, funções e restrições de domínio continuam como `NAO_COMPROVADO` até terem regras e testes específicos.

## Decisão técnica

O pacote recebe LaTeX e um contexto explícito. O Compute Engine converte a entrada em MathJSON; o Eixo interpreta apenas uma árvore polinomial limitada e compara os coeficientes inteiros de cada monômio. A API devolve status, códigos de transformação/erro, condições e snapshots MathJSON. Nenhum código pedagógico é concedido apenas por equivalência.

Não usar `isIdenticallyEqual()` como prova neste corte: a [documentação do Compute Engine](https://mathlive.io/compute-engine/guides/symbolic-computing/) informa que esse método pode usar amostragem numérica. O resultado `INVALIDO` só será emitido quando os dois polinômios forem interpretados completamente e seus coeficientes diferirem. Entradas fora da gramática coberta retornam `NAO_COMPROVADO`.

## Contrato inicial

`validateStep({ beforeLatex, afterLatex, context: { kind: 'EXPRESSION', numberSet: 'REAL' } })` retorna:

- `status`: `VALIDO | INVALIDO | NAO_COMPROVADO`;
- `transformationCodes`, `conceptsUsed`, `errorCodes`, `conditions`: listas estruturadas;
- `beforeMathJson`, `afterMathJson` quando a análise sintática funcionar.

Outros contextos devem devolver `NAO_COMPROVADO`, nunca reaproveitar a comparação de expressões para equações. O pacote limita comprimento, grau e quantidade de termos para evitar travar a edição.

## Ordem de implementação

1. Criar o contrato do pacote e testes de distributiva positiva/negativa, polinômios diferentes, fração com domínio, equação e entrada inválida.
2. Implementar leitura segura da árvore MathJSON e normalização polinomial exata.
3. Ligar o adaptador da prova P0 ao pacote sem mudar o texto ou o estado do rascunho.
4. Rodar testes unitários, propriedade distributiva, Playwright, build e CI.

## Limites e próximos cortes

O primeiro corte não fecha P2. Depois dele, implementar domínio de expressões racionais, conjunto-solução de equações, transformações condicionais, detecção de estratégia e contrato pedagógico com fixtures curriculares. Cada família exige testes válidos, inválidos e de borda antes de aparecer como veredito ao aluno.
