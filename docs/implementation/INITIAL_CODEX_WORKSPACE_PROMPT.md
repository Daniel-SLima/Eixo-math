# Prompt Inicial do Codex — Workspace Local Eixo Math

**Pasta local oficial:**

```
C:\Users\Usuario\Documents\0-AppMath
```

**Repositório:**

```
https://github.com/Daniel-SLima/Eixo-math.git
```

**Modelo padrão:**

```
GPT-6 Sol
reasoning_effort: medium
```

Este prompt é para a primeira sessão do Codex no computador.

---

## PROMPT PARA ENVIAR AO CODEX

Quero que você prepare e assuma este workspace local do projeto **Eixo Math**:

```
C:\Users\Usuario\Documents\0-AppMath
```

Repositório oficial:

```
https://github.com/Daniel-SLima/Eixo-math.git
```

Use **GPT-6 Sol com reasoning effort medium** como configuração padrão. Não altere automaticamente para modelo ou esforço acima disso.

### REGRA PRINCIPAL

O projeto ainda está em:

```
SPEC_STATUS=REVIEW_READY
IMPLEMENTATION_AUTHORIZED=false
```

Portanto:

**NÃO comece a implementar o aplicativo.**
**NÃO inicie React/Capacitor/P0 ainda.**
**NÃO mude IMPLEMENTATION_AUTHORIZED.**

Nesta primeira sessão, seu trabalho é preparar corretamente o workspace, sincronizar a documentação, organizar o pipeline de assets e executar tudo que estiver autorizado sem iniciar código do app.

---

### 1. PREPARE A PASTA

Verifique se:

```
C:\Users\Usuario\Documents\0-AppMath
```

existe.

#### Se a pasta não existir ou estiver vazia

Clone:

```
git clone https://github.com/Daniel-SLima/Eixo-math.git "C:\Users\Usuario\Documents\0-AppMath"
```

Entre nela.

#### Se já for o repositório Eixo-math

Não clone novamente.

Execute:

```
git status
git remote -v
git pull origin main
```

#### Se houver arquivos locais modificados

Não faça:

- reset --hard;
- checkout destrutivo;
- clean;
- sobrescrita.

Preserve tudo e reporte o estado.

#### Se a pasta existir mas não for o repositório correto

Não apague nada.
Pare apenas essa etapa e explique a colisão encontrada.

---

### 2. CONFIRME O REPOSITÓRIO

Verifique:

- branch atual;
- remote origin;
- status;
- último commit;
- estrutura de docs.

Confirme que está trabalhando em:

```
Daniel-SLima/Eixo-math
```

---

### 3. LEIA A DOCUMENTAÇÃO OBRIGATÓRIA

Leia antes de agir:

1. `MASTER_GDD_SPEC.md`
2. `docs/SPEC_AUDIT_REPORT.md`
3. `docs/SPEC_REVIEW_CHECKLIST.md`
4. `docs/product/MVP_SCOPE.md`
5. `docs/product/PRODUCT_DECISIONS.md`
6. `docs/content/MVP_CURRICULUM_DETAIL.md`
7. `docs/pedagogy/MVP_MASTERY_CRITERIA.md`
8. `docs/design/DESIGN_SYSTEM.md`
9. `docs/architecture/TECH_STACK.md`
10. `docs/architecture/DATA_MODEL_V1.md`
11. `docs/architecture/DATA_SYNC_OFFLINE.md`
12. `docs/architecture/SECURITY_PRIVACY_TELEMETRY.md`
13. `docs/architecture/ANDROID_DISTRIBUTION_SIGNING.md`
14. `docs/quality/TEST_STRATEGY.md`
15. `docs/implementation/ROADMAP.md`
16. `docs/implementation/CODEX_HANDOFF.md`
17. `docs/assets/ASSET_PIPELINE.md`
18. `docs/assets/IMAGE_ASSET_PROMPTS.md`
19. `docs/assets/SFX_ASSET_PROMPTS.md`
20. `docs/assets/ASSET_MANIFEST.csv`
21. `docs/assets/CODEX_ASSET_GENERATION_PROMPT.md`
22. `docs/assets/ASSET_GENERATION_RUNBOOK.md`

Não pule diretamente para execução.

---

### 4. FAÇA UMA CHECAGEM DE CONSISTÊNCIA LOCAL

Depois da leitura:

- confirme que os arquivos existem;
- verifique links/caminhos quebrados;
- procure referências a documentos inexistentes;
- confirme os estados:
  - `SPEC_STATUS=REVIEW_READY`
  - `IMPLEMENTATION_AUTHORIZED=false`;
- confirme que o modelo padrão documentado é GPT-6 Sol / medium.

Se encontrar divergência documental pequena:

- corrija documentação;
- não altere requisitos de produto sem necessidade.

Se encontrar divergência de produto real:

- registre no relatório;
- não invente decisão.

---

### 5. PREPARE O PIPELINE DE ASSETS

Siga integralmente:

```
docs/assets/CODEX_ASSET_GENERATION_PROMPT.md
```

Crie, quando necessário:

```
assets/
├── source/
├── generated/
├── approved/
└── rejected/
```

e:

```
ASSET_GENERATION_PROGRESS.md
```

---

### 6. DESCUBRA AS FERRAMENTAS DISPONÍVEIS

Verifique se seu ambiente tem capacidade real de:

- gerar imagens;
- gerar áudio/SFX;
- inspecionar imagens;
- ler dimensões;
- analisar arquivos de áudio;
- converter/otimizar mídia.

Não presuma capacidades.

#### Se imagem estiver disponível

Execute os batches documentados.

#### Se imagem não estiver disponível

Registre:

```
IMAGE_GENERATION_BLOCKED
```

e continue organização/validação.

#### Se áudio estiver disponível

Execute os batches SFX.

#### Se áudio não estiver disponível

Registre:

```
AUDIO_GENERATION_BLOCKED
```

Não crie arquivos falsos.

---

### 7. NÃO USE API PAGA SEM AUTORIZAÇÃO

Não configure nem consuma automaticamente:

- OpenAI API;
- ElevenLabs;
- Stability;
- Replicate;
- serviços pagos de mídia;

ou qualquer outra API cobrada.

Ferramentas já conectadas/autorizadas no ambiente podem ser usadas.

---

### 8. PREPARE VALIDADORES DE ASSETS SE FOR ÚTIL

Você pode criar scripts em:

```
scripts/assets/
```

somente para:

- conferir dimensões;
- ratio;
- formato;
- alpha;
- duração;
- sample rate;
- tamanho;
- manifest.

Isso não é implementação do aplicativo e está autorizado.

Mantenha scripts simples.

---

### 9. APK E ASSINATURA — APENAS PREPARAÇÃO DOCUMENTAL

Leia:

```
docs/architecture/ANDROID_DISTRIBUTION_SIGNING.md
```

Não gere o Android project ainda.

Não crie APK ainda.

Não crie ou exponha passwords.

Confirme apenas que a estratégia está documentada para:

- package/application ID estável;
- versionCode crescente;
- keystore persistente;
- atualização sem desinstalar;
- preservação dos dados locais.

Nunca commite:

- `.jks`;
- `.keystore`;
- passwords;
- secrets.

---

### 10. GIT

Durante esta sessão:

- pode criar commits locais pequenos e coerentes para documentação/assets;
- não reescreva histórico;
- não force push;
- não faça push automaticamente sem autorização explícita nesta conversa/sessão.

Sugestões:

```
docs(assets): prepare local asset workflow
assets(brand): add reviewed brand candidates
assets(sfx): add reviewed essential sound candidates
```

---

### 11. MANTENHA PROGRESSO VISÍVEL

Atualize:

```
ASSET_GENERATION_PROGRESS.md
```

Inclua:

- ferramentas detectadas;
- arquivos criados;
- arquivos gerados;
- bloqueios;
- assets para revisão humana;
- assets aprovados;
- assets rejeitados;
- tamanho total;
- próximos passos.

---

### 12. NÃO FIQUE PARANDO A CADA PEQUENA ETAPA

Trabalhe lote por lote.

Não peça confirmação para:

- criar pastas documentadas;
- validar manifest;
- executar checagens seguras;
- gerar candidatos de assets quando a ferramenta já está autorizada;
- atualizar o arquivo de progresso.

Pare apenas diante de:

- decisão de produto não documentada;
- risco destrutivo;
- segredo necessário;
- ferramenta paga não autorizada;
- conflito local que possa apagar trabalho.

---

### 13. NÃO INICIE IMPLEMENTAÇÃO

Mesmo se terminar os assets rapidamente, não avance sozinho para:

- React;
- Vite;
- Capacitor;
- MathLive;
- Supabase;
- Math Core.

O próximo estágio exige autorização explícita do proprietário.

---

### 14. RELATÓRIO FINAL DESTA PRIMEIRA SESSÃO

Ao concluir tudo que puder fazer com segurança, responda com:

1. estado do Git;
2. último commit;
3. arquivos/documentos lidos;
4. ferramentas de imagem detectadas;
5. ferramentas de áudio detectadas;
6. estrutura criada;
7. assets gerados;
8. assets bloqueados;
9. assets aguardando revisão;
10. scripts criados;
11. commits locais realizados;
12. mudanças não commitadas;
13. bloqueadores;
14. lista exata de arquivos no formato:

```
pasta/nome.ext
```

15. próximo passo recomendado.

### REGRA FINAL

Trate o GitHub e a documentação do projeto como fonte de verdade.

Não dependa de contexto de conversas anteriores que não esteja registrado no repositório.
