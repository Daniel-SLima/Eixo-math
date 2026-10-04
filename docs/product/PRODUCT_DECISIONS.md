# Eixo Math — Fechamento de Decisões de Produto

**Status:** decisões-base para congelamento da especificação  
**Objetivo:** eliminar ambiguidades que poderiam ser inventadas durante implementação.

---

# 1. PÚBLICO-ALVO PRIMÁRIO

O MVP será desenhado principalmente para:

- adolescentes a partir de aproximadamente 14 anos;
- estudantes do Ensino Médio;
- alunos em preparação para disciplinas de graduação;
- adultos reconstruindo base matemática.

O produto não deverá possuir estética infantil.

Usuários mais novos poderão futuramente utilizar conteúdos adequados, mas o MVP não será projetado como produto infantil.

Antes de lançamento público, requisitos legais de idade/consentimento deverão ser revisados.

---

# 2. IDIOMA

MVP:

**pt-BR**.

A arquitetura deverá permitir localização futura.

Textos de conteúdo não deverão ficar hardcoded em componentes quando fizer sentido estruturá-los.

---

# 3. TOM DE VOZ

O Eixo deverá ser:

- claro;
- acolhedor;
- direto;
- respeitoso;
- não infantilizado;
- não excessivamente formal.

Evitar:

- “Parabéns!!! Você é um gênio!”;
- linguagem punitiva;
- tom condescendente.

Preferir:

> Este passo preserva a igualdade.

> A resposta está correta, mas esta atividade quer praticar fatoração.

---

# 4. DIREÇÃO VISUAL

Direção inicial:

**geométrica, moderna, limpa e levemente tecnológica**.

A camada lúdica deverá lembrar:

- construção;
- conexões;
- eixos;
- mapas;
- estruturas;
- movimento.

Evitar aparência:

- infantil;
- cassino;
- RPG medieval obrigatório;
- interface de calculadora científica cinza;
- excesso de partículas/recompensas.

---

# 5. IDENTIDADE DO MUNDO

A narrativa será leve e opcional.

O mundo visual pode utilizar:

- regiões conectadas;
- estruturas incompletas;
- laboratórios;
- mecanismos;
- caminhos geométricos.

Não exigir personagem principal ou mascote para o MVP.

---

# 6. TEMA CLARO/ESCURO

Ambos deverão existir.

Preferência inicial pode seguir sistema operacional.

Usuário poderá alterar manualmente.

---

# 7. CONTA

Decisão:

**conta não é obrigatória para começar.**

Fluxo:

```
abrir
→ estudar como visitante
→ opcionalmente criar conta
→ sincronizar
```

Recursos futuros que exigem identidade, como desafios entre amigos, poderão exigir conta.

---

# 8. MONETIZAÇÃO DO MVP

MVP não deverá possuir:

- anúncios;
- publicidade comportamental;
- venda de respostas;
- paywall durante erro;
- moeda comprável.

Modelo de negócio será decidido após validação do produto.

---

# 9. PROFESSOR / SALA DE AULA

Fora do MVP.

Arquitetura não deve impedir futuro:

- professor;
- turma;
- lista;
- acompanhamento;
- conteúdo atribuído.

Mas não construir agora.

---

# 10. ANOTAÇÕES

Anotações livres no Caderno:

- não são validadas matematicamente;
- não contam negativamente;
- não são obrigatórias.

Quando uma atividade pedir justificativa textual, ela usa um tipo específico:

```
JUSTIFICATION
```

com contrato/rubrica própria.

---

# 11. CALCULADORA

Política é definida pela atividade.

Usuário não pode habilitar calculadora em avaliação que explicitamente a proíbe.

Tipos:

- NONE;
- BASIC;
- SCIENTIFIC;
- FULL.

O Teclado Matemático continua disponível independentemente da calculadora, conforme conteúdo ensinado.

---

# 12. VARIÁVEIS NO TECLADO

O teclado deverá priorizar variáveis relevantes ao contexto.

Exemplo:

atividade usa `x` e `y`:

```
[x] [y]
```

Também haverá acesso progressivo a letras adicionais quando necessário.

Não mostrar alfabeto inteiro constantemente no nível inicial.

---

# 13. LETRAS GREGAS

Introduzidas apenas quando necessárias.

Exemplos:

- `π`;
- `θ`;
- outras futuramente.

Não criar painel enorme antes do currículo exigir.

---

# 14. ALINHAMENTO

Alinhamento automático por operador será ativado quando melhora leitura.

Preferência:

- `=`;
- `≈`;
- relações equivalentes.

Usuário não precisa configurar manualmente em exercícios comuns.

---

# 15. ORIENTAÇÃO DE TELA

Portrait é experiência principal no celular.

Landscape é suportado e pode oferecer layout ampliado.

Não obrigar rotação para resolver notação avançada.

---

# 16. TABLET

Layout responsivo aproveita espaço extra.

Não é necessário criar aplicação separada.

---

# 17. NOTIFICAÇÕES

Não são requisito do MVP.

Se futuramente existirem:

- opt-in;
- sem culpa;
- sem spam;
- relacionadas a estudo/revisão útil.

---

# 18. STREAK

Não é sistema central do MVP.

Pode existir futuramente como registro positivo, mas sem:

- perda punitiva;
- pressão;
- bloqueio.

---

# 19. XP

Pode existir em versão mínima como feedback de progresso lúdico.

Não decide domínio.

Não pode ser farmado infinitamente com exercícios triviais.

---

# 20. MOEDA

Fora do MVP.

---

# 21. AVATAR

Opcional/pós-MVP.

Perfil não depende de avatar.

---

# 22. SOCIAL

Fora do MVP.

Desafios entre amigos já estão registrados como pós-MVP.

---

# 23. RANKING

Sem ranking global no MVP.

Futuro desafio entre amigos pode mostrar resultado da partida, não necessariamente leaderboard permanente.

---

# 24. DIFICULDADE

Usuário não escolhe apenas “fácil/médio/difícil” no fluxo principal.

Sistema adapta.

Modo Prática poderá futuramente permitir:

- rápido;
- normal;
- desafio.

---

# 25. TEMPO

Atividades normais não são cronometradas.

Cronômetro somente quando fizer parte de um modo/desafio explicitamente escolhido.

Velocidade não define inteligência/domínio.

---

# 26. FEEDBACK

Feedback deve ser:

- específico;
- curto primeiro;
- expansível.

Exemplo:

> O sinal mudou incorretamente nesta etapa.

[Entender por quê]

---

# 27. RESPOSTA FINAL

Atividades não deverão exigir botão “Enviar” a cada linha.

Validação pode ocorrer por linha conforme modo.

Haverá ação de **Concluir atividade** quando necessário.

---

# 28. MODO APRENDIZADO

Feedback imediato.

---

# 29. MODO PRÁTICA

Feedback reduzido.

---

# 30. MODO DOMÍNIO

Pouca ajuda.

---

# 31. MODO PROVA

Sem feedback ao vivo.

---

# 32. CONTEÚDO FORA DO CORPUS

O Eixo não é um solver genérico de qualquer matemática no MVP.

Se usuário tenta notação/assunto não suportado no fluxo curricular:

> Este tipo de expressão ainda não é suportado nesta versão.

Não fingir suporte.

---

# 33. CADERNO LIVRE

Não é requisito do MVP.

Poderá ser adicionado depois como ambiente não vinculado a atividade.

---

# 34. EXPORTAÇÃO

Não é requisito do MVP.

Livro/Caderno podem ser exportados pós-MVP.

---

# 35. BACKUP LOCAL MANUAL

Não é requisito se autosave local for confiável.

Conta/sync futura fornece backup de nuvem.

---

# 36. CONTEÚDO INICIAL

O MVP utilizará conteúdo original do Eixo como padrão.

Materiais OER poderão complementar somente após licença/proveniência.

---

# 37. NOME

Nome de trabalho/produto:

**Eixo**

Repositório:

**Eixo-math**

Antes de publicação comercial, pesquisar:

- marca;
- lojas;
- domínio;
- conflitos de nome.

Essa verificação não bloqueia P0 técnico, mas bloqueia branding final público.

---

# 38. PLATAFORMA PRIORITÁRIA

Android primeiro.

Web como ambiente suportado.

iOS arquiteturalmente compatível, com publicação posterior se necessário.

---

# 39. ACESSO À INTERNET

Internet não é pré-requisito para estudar conteúdo já disponível localmente.

---

# 40. IA

MVP:

**nenhuma IA em runtime.**

Módulo futuro permanece documentado e desabilitado.

---


# 40.A SONS E ASSETS DE MÍDIA

## Sons

O MVP poderá utilizar pequenos efeitos sonoros discretos.

Direção:

- sutis;
- opcionais;
- sem voz;
- sem estética infantil;
- sem fanfarra frequente;
- sem substituir feedback visual.

Sons previstos:

- toque leve;
- passo válido;
- passo inválido;
- atenção;
- não comprovado;
- desbloqueio de ferramenta;
- conclusão de aula;
- conclusão de Desafio-Marco.

O usuário deverá conseguir desativar efeitos sonoros.

## Imagens

Assets gerados por IA poderão ser usados para:

- branding conceitual;
- onboarding;
- banners;
- desafios;
- empty states;
- decoração.

Não utilizar imagens geradas para matemática exata ou controles funcionais.

Documentação:

- `docs/assets/ASSET_PIPELINE.md`
- `docs/assets/IMAGE_ASSET_PROMPTS.md`
- `docs/assets/SFX_ASSET_PROMPTS.md`
- `docs/assets/ASSET_MANIFEST.csv`
- `docs/assets/CODEX_ASSET_GENERATION_PROMPT.md`
- `docs/assets/ASSET_GENERATION_RUNBOOK.md`

# 41. DECISÕES QUE NÃO BLOQUEIAM P0

Podem permanecer para depois do spike técnico:

- paleta final;
- logo final;
- ilustrações finais;
- monetização futura;
- professor;
- social;
- notificações;
- exportação.

---

# 42. DECISÕES QUE BLOQUEIAM IMPLEMENTAÇÃO DE PRODUTO APÓS P0

Antes de avançar do P0 para produto completo, confirmar:

- protótipo do editor aprovado;
- design system visual base;
- schema de dados v1;
- conteúdo MVP detalhado por aula;
- critérios de domínio por habilidade MVP.

---

# 43. PRINCÍPIO FINAL

Quando uma decisão não estiver documentada:

> não escolher silenciosamente a alternativa mais fácil.

Registrar antes de transformar em comportamento do produto.
