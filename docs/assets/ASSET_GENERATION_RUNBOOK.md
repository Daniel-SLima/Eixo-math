# Eixo Math — Runbook Local para Geração de Imagens e Áudio com Codex

Este guia é para o momento em que você criar uma pasta no computador, puxar o projeto do GitHub e quiser deixar o Codex organizar/trabalhar nos assets.

---

# 1. PRÉ-REQUISITOS

No computador:

- Git instalado;
- Codex CLI instalado e autenticado;
- acesso ao repositório `Daniel-SLima/Eixo-math`;
- modelo configurado como **GPT-6 Sol / medium** para esta tarefa;
- ferramentas de geração de imagem/áudio conectadas ao Codex, caso você queira geração binária automática.

Importante:

o Codex pode organizar e validar os assets mesmo que não possua um gerador de mídia conectado.

Ele não deve fabricar arquivos falsos.

---

# 2. PRIMEIRA VEZ — CLONAR O REPOSITÓRIO

No PowerShell:

```powershell
cd C:\Users\Usuario\Documents
git clone https://github.com/Daniel-SLima/Eixo-math.git 0-AppMath
cd 0-AppMath
```

Confirme:

```powershell
git status
```

Esperado:

```
On branch main
nothing to commit, working tree clean
```

---

# 3. SE A PASTA JÁ EXISTIR

Entre nela:

```powershell
cd "C:\caminho\para\Eixo-math"
```

Atualize:

```powershell
git pull origin main
```

Depois:

```powershell
git status
```

Se houver arquivos modificados por você, não peça ao Codex para resetá-los.

---

# 4. ABRIR O CODEX NA PASTA

Na raiz do projeto:

```powershell
codex
```

Confirme no Codex que o diretório atual é o repositório `Eixo-math`.

---

# 5. MODELO

Configuração recomendada:

```
GPT-6 Sol
medium
```

Não aumentar automaticamente acima disso.

---

# 6. PROMPT A UTILIZAR

Abra:

```
docs/assets/CODEX_ASSET_GENERATION_PROMPT.md
```

Copie somente a seção:

```
PROMPT PARA COLAR NO CODEX
```

e envie para o Codex.

Esse prompt:

- não autoriza desenvolvimento do app;
- cria a estrutura de assets;
- verifica ferramentas disponíveis;
- gera imagens quando possível;
- gera SFX quando possível;
- valida dimensões/formato;
- atualiza progresso;
- não usa API paga automaticamente;
- não altera `IMPLEMENTATION_AUTHORIZED=false`.

---

# 7. DOCUMENTOS QUE O CODEX USARÁ

```
docs/assets/ASSET_PIPELINE.md
docs/assets/IMAGE_ASSET_PROMPTS.md
docs/assets/SFX_ASSET_PROMPTS.md
docs/assets/ASSET_MANIFEST.csv
docs/assets/CODEX_ASSET_GENERATION_PROMPT.md
docs/design/DESIGN_SYSTEM.md
```

O manifest é a checklist.

---

# 8. O QUE DEVE ACONTECER

O Codex primeiro:

1. lê documentação;
2. verifica Git;
3. descobre capacidades de mídia;
4. cria estrutura `assets/`;
5. cria `ASSET_GENERATION_PROGRESS.md`;
6. trabalha lote por lote.

---

# 9. SE O CODEX TIVER GERAÇÃO DE IMAGENS

Ele deverá gerar em:

```
assets/generated/images/
```

Nunca diretamente em `approved/`.

Depois você revisa candidatos.

---

# 10. SE O CODEX NÃO TIVER GERAÇÃO DE IMAGENS

Ele deverá registrar:

```
IMAGE_GENERATION_BLOCKED
```

e continuar:

- pastas;
- checklist;
- prompts;
- validadores.

Nesse caso você pode gerar as imagens em outro ambiente usando os prompts e depois colocar os arquivos nas pastas indicadas.

---

# 11. SE O CODEX TIVER GERAÇÃO DE ÁUDIO

Ele deverá gerar em:

```
assets/generated/audio/
```

Master preferencial:

```
WAV 48kHz / 24-bit
```

---

# 12. SE O CODEX NÃO TIVER GERAÇÃO DE ÁUDIO

Ele deverá registrar:

```
AUDIO_GENERATION_BLOCKED
```

Não criar WAV vazio.

Você poderá usar os prompts de:

```
docs/assets/SFX_ASSET_PROMPTS.md
```

em uma ferramenta de áudio compatível posteriormente.

---

# 13. REVISÃO HUMANA

Antes de mover para `approved/`, revise principalmente:

## Imagens

- ícone;
- logo;
- onboarding;
- mundos;
- desafios.

## Sons

- valid;
- invalid;
- tap;
- unlock;
- challenge complete.

Pergunta principal:

> Eu aguentaria ouvir/ver isso muitas vezes sem ficar irritado ou confuso?

---

# 14. APROVAR UM ASSET

Depois da revisão:

```
assets/generated/...
↓
assets/approved/...
```

Remover sufixo temporário:

```
_v01
```

Exemplo:

```
world_functions_banner_v02.png
↓
world_functions_banner.png
```

Atualize status no manifest/progresso.

---

# 15. ARQUIVOS REJEITADOS

Não é necessário versionar todas as tentativas ruins.

Se quiser preservar localmente:

```
assets/rejected/
```

Mas evite encher o Git com dezenas de arquivos inúteis.

---

# 16. GIT DEPOIS DOS ASSETS

Veja mudanças:

```powershell
git status
git diff
```

Assets binários não aparecem visualmente no diff, então confira nomes/pastas.

Se você quiser commitar manualmente:

```powershell
git add .
git commit -m "assets: add approved MVP media"
git push origin main
```

Só faça push quando estiver satisfeito com o lote.

---

# 17. NÃO COMEÇAR O APP NESSE MOMENTO

Mesmo com os assets prontos:

```
IMPLEMENTATION_AUTHORIZED=false
```

continua valendo.

O prompt de assets não é o prompt de implementação.

---

# 18. QUANDO A IMPLEMENTAÇÃO FOR AUTORIZADA

Depois da sua aprovação final da especificação, o projeto mudará para:

```
SPEC_STATUS=READY_FOR_IMPLEMENTATION
IMPLEMENTATION_AUTHORIZED=true
```

Então o Codex receberá outro prompt para iniciar:

```
P0 — prova técnica do editor
```

Não reutilizar o prompt de assets para isso.

---

# 19. COMO OS ASSETS ENTRARÃO NO APP

Quando o app existir:

```
assets/approved/
↓
otimização/export
↓
apps/eixo/public/assets/
```

O app nunca deverá referenciar candidatos em `generated/`.

---

# 20. APK DE TESTE FUTURO

Quando chegarmos ao P0/app Android:

```
React/Vite
↓
Capacitor
↓
Android project
↓
APK de debug/teste
↓
instalação no celular
```

O APK será usado para validar no aparelho real:

- MathLive;
- teclado;
- performance;
- offline;
- sons;
- imagens;
- layout.

Mais tarde, publicação em loja normalmente utiliza AAB.

---

# 21. CHECKLIST RÁPIDO

Antes de deixar o Codex trabalhando:

- [ ] repo atualizado;
- [ ] `git status` conferido;
- [ ] Codex aberto na raiz;
- [ ] GPT-6 Sol / medium;
- [ ] prompt correto copiado;
- [ ] implementação continua bloqueada;
- [ ] ferramentas de mídia disponíveis ou bloqueio esperado.

Depois:

- [ ] revisar `ASSET_GENERATION_PROGRESS.md`;
- [ ] revisar candidatos;
- [ ] aprovar/rejeitar;
- [ ] conferir manifest;
- [ ] commit/push se desejado.

---

# 22. PRINCÍPIO FINAL

Você deve conseguir clonar o projeto em um computador novo e, apenas com os documentos do GitHub, reconstruir o processo de geração dos assets sem depender de memória desta conversa.
