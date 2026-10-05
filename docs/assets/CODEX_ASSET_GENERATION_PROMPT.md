# Prompt Mestre — Codex para Geração e Organização de Assets do Eixo

Copie o bloco abaixo e envie ao Codex **na raiz do repositório local `Eixo-math`**.

> Este prompt autoriza exclusivamente trabalho de assets e documentação relacionada.  
> Ele **não autoriza iniciar a implementação do aplicativo** enquanto `IMPLEMENTATION_AUTHORIZED=false`.

---

## PROMPT PARA COLAR NO CODEX

Você está trabalhando no repositório **Eixo-math**.

Configuração desejada do modelo:

```
GPT-6 Sol
reasoning_effort: medium
```

Não selecione automaticamente modelo ou nível acima disso.

### MISSÃO

Prepare, gere quando as ferramentas disponíveis permitirem, organize, valide e documente todos os **assets visuais e efeitos sonoros do MVP do Eixo**, seguindo rigorosamente a documentação do repositório.

**NÃO implemente o aplicativo.**
**NÃO inicie P0.**
**NÃO crie telas React.**
**NÃO altere Math Core.**

Seu escopo nesta execução é exclusivamente:

- imagens;
- efeitos sonoros;
- estrutura de pastas de assets;
- validação técnica desses arquivos;
- relatórios;
- documentação de progresso.

---

### 1. LEITURA OBRIGATÓRIA

Leia antes de fazer qualquer alteração:

1. `MASTER_GDD_SPEC.md`
2. `docs/design/DESIGN_SYSTEM.md`
3. `docs/assets/ASSET_PIPELINE.md`
4. `docs/assets/IMAGE_ASSET_PROMPTS.md`
5. `docs/assets/SFX_ASSET_PROMPTS.md`
6. `docs/assets/ASSET_MANIFEST.csv`
7. `docs/product/PRODUCT_DECISIONS.md`
8. `docs/implementation/CODEX_HANDOFF.md`

Considere `ASSET_MANIFEST.csv` a checklist de arquivos.

---

### 2. CONFIRME O ESTADO DO REPOSITÓRIO

Antes de alterar arquivos:

- verifique `git status`;
- não apague modificações existentes do usuário;
- não sobrescreva arquivo não relacionado;
- não faça reset destrutivo;
- não remova assets existentes.

Se houver alterações locais, preserve-as.

---

### 3. CRIE A ESTRUTURA

Se ainda não existir, crie:

```
assets/
├── source/
│   ├── images/
│   │   ├── brand/
│   │   ├── onboarding/
│   │   ├── worlds/
│   │   ├── challenges/
│   │   ├── empty/
│   │   ├── decorative/
│   │   └── badges/
│   └── audio/
│       ├── ui/
│       ├── feedback/
│       ├── progression/
│       └── system/
│
├── generated/
│   ├── images/
│   └── audio/
│
├── approved/
│   ├── images/
│   └── audio/
│
└── rejected/
    ├── images/
    └── audio/
```

Crie também na raiz:

`ASSET_GENERATION_PROGRESS.md`

Não mova arquivos para `approved/` apenas porque foram gerados.

---

### 4. DESCUBRA SUAS CAPACIDADES

Antes da geração, descubra quais ferramentas estão realmente disponíveis no seu ambiente para:

- geração de imagem;
- geração de áudio/SFX;
- inspeção de imagem;
- inspeção/conversão de áudio;
- leitura de dimensões/metadados.

#### REGRA CRÍTICA

Não finja ter gerado um arquivo se não possuir ferramenta capaz de produzi-lo.

Não crie um arquivo vazio com extensão `.png` ou `.wav`.

Não transforme um prompt textual em um arquivo binário falso.

---

### 5. SE HOUVER FERRAMENTA DE GERAÇÃO DE IMAGEM

Gere os assets descritos em:

`docs/assets/IMAGE_ASSET_PROMPTS.md`

Siga os batches na ordem documentada.

Para cada asset:

1. use o prompt específico;
2. preserve a direção visual comum;
3. gere no máximo 3 candidatos quando necessário;
4. salve inicialmente em `assets/generated/images/<categoria>/`;
5. use sufixos temporários:
   - `_v01`
   - `_v02`
   - `_v03`
6. inspecione visualmente se sua ferramenta permitir;
7. confira:
   - tamanho;
   - proporção;
   - transparência;
   - ausência de watermark;
   - ausência de texto/fórmula corrompida;
   - consistência de estilo;
8. selecione o melhor candidato;
9. registre decisão no progresso.

Não grave fórmulas legíveis nas imagens.

A UI real será responsável por matemática exata.

---

### 6. SE NÃO HOUVER FERRAMENTA DE IMAGEM

Não pare todo o trabalho.

Faça:

- estrutura de pastas;
- checklist;
- validação do manifest;
- relatório dos assets pendentes;
- prepare uma seção `IMAGE_GENERATION_BLOCKED` no progresso explicando exatamente qual capacidade falta.

Não use API externa paga sem autorização explícita do proprietário.

---

### 7. SE HOUVER FERRAMENTA DE GERAÇÃO DE ÁUDIO

Gere os SFX descritos em:

`docs/assets/SFX_ASSET_PROMPTS.md`

Para cada som:

1. gere no máximo 3 variações;
2. salve master em WAV quando possível;
3. use o nome definido pelo manifest;
4. valide:
   - duração;
   - sample rate;
   - clipping;
   - silêncio excessivo;
   - ausência de voz;
5. prefira sons sutis;
6. descarte sons agressivos ou infantis;
7. registre resultado.

Sons frequentes devem ser testados como sequência repetida para evitar fadiga.

---

### 8. SE NÃO HOUVER FERRAMENTA DE ÁUDIO

Não fabrique WAVs.

Registre:

```
AUDIO_GENERATION_BLOCKED
```

no relatório e mantenha todos os prompts prontos.

Você pode preparar conversões/validadores, mas não deve afirmar que o áudio foi produzido.

---

### 9. NÃO USE API PAGA AUTOMATICAMENTE

Não:

- compre créditos;
- configure chave de API;
- use conta externa;
- envie dados para serviço pago;

sem autorização explícita.

Se o ambiente já possuir uma ferramenta de mídia conectada e autorizada, pode utilizá-la.

---

### 10. VALIDAÇÃO TÉCNICA

Se houver ferramentas locais adequadas, crie um utilitário simples em:

`scripts/assets/`

para validar:

#### Imagens

- arquivo existe;
- extensão;
- largura;
- altura;
- proporção;
- alpha quando exigido.

#### Áudio

- arquivo existe;
- duração;
- codec/formato;
- sample rate;
- canais.

Use ferramentas existentes no ambiente.

Não adicione dependência pesada sem necessidade.

---

### 11. MANIFEST

Use:

`docs/assets/ASSET_MANIFEST.csv`

como fonte de verdade.

Para cada item, acompanhe status:

- `planned`
- `generated`
- `review_required`
- `approved`
- `rejected`
- `blocked`

Não altere especificações de tamanho/nome silenciosamente.

Se precisar mudar algo, documente o motivo.

---

### 12. HUMAN REVIEW

Mesmo que você consiga inspecionar os assets, mantenha uma lista clara de arquivos que precisam de aprovação humana.

Especialmente:

- app icon;
- logo;
- key arts;
- sons frequentes;
- sons de erro;
- sons de milestone.

Você pode recomendar aprovação, mas não esconda que é julgamento visual/sonoro.

---

### 13. ORDEM DE EXECUÇÃO

Execute:

#### Batch A — Brand
```
IMG-001
IMG-002
IMG-003
```

#### Batch B — Onboarding
```
IMG-010
IMG-011
IMG-012
```

#### Batch C — Worlds
```
IMG-020
IMG-021
IMG-022
IMG-023
```

#### Batch D — Challenges
```
IMG-030
IMG-031
IMG-032
```

#### Batch E — Empty
```
IMG-040
IMG-041
IMG-042
IMG-043
```

#### Batch F — Decorative/badge frames
```
IMG-050
IMG-051
IMG-052
IMG-060
IMG-061
```

#### Batch S1 — Essential SFX
```
SFX-001
SFX-010
SFX-011
SFX-012
SFX-013
SFX-020
SFX-021
SFX-024
```

#### Batch S2 — Secondary SFX
```
SFX-002
SFX-003
SFX-004
SFX-014
SFX-022
SFX-023
SFX-030
SFX-031
SFX-032
```

---

### 14. PROGRESS FILE

Atualize `ASSET_GENERATION_PROGRESS.md` continuamente.

Formato:

```
# Asset Generation Progress

## Environment
- image generation: available/unavailable
- audio generation: available/unavailable
- image inspection: ...
- audio inspection: ...

## Batch A — Brand

### Generated
- path
- path

### Selected
- path

### Review required
- path — motivo

### Rejected
- path — motivo

## Blockers
- ...

## Manifest summary
- planned:
- generated:
- approved:
- review_required:
- rejected:
- blocked:
```

---

### 15. NÃO IMPLEMENTE ELEMENTOS FUNCIONAIS COMO PNG

Não gere via IA:

- botões matemáticos;
- fração;
- raiz;
- integral;
- lim;
- gráficos reais;
- equações;
- cursor;
- check/error icons.

Esses itens serão renderizados programaticamente.

---

### 16. GIT

Depois de concluir um batch coerente:

- revise `git diff`;
- não inclua rejeitados grandes no Git sem necessidade;
- não faça push automaticamente se não estiver autorizado;
- commits sugeridos:

```
assets(brand): add generated brand candidates
assets(worlds): add world illustration candidates
assets(sfx): add essential interface sound candidates
docs(assets): update generation progress
```

Se a sessão possuir autorização explícita para push, use commits pequenos.

Caso contrário, deixe commits locais ou mudanças prontas conforme instrução do proprietário.

---

### 17. NÃO ALTERE O STATUS DE IMPLEMENTAÇÃO

Não mude:

```
IMPLEMENTATION_AUTHORIZED=false
```

por causa desta tarefa.

Geração de assets não é autorização para desenvolver o app.

---

### 18. RESULTADO FINAL

No final, entregue um relatório contendo:

1. assets efetivamente gerados;
2. assets bloqueados;
3. assets que exigem revisão humana;
4. pastas criadas;
5. validadores criados;
6. tamanho total;
7. próximos passos;
8. lista exata:
   `pasta/nome.ext`

Se nenhum gerador de mídia estiver disponível, o trabalho ainda deve terminar com:

- pipeline organizado;
- pastas;
- manifest validado;
- prompts prontos;
- relatório de bloqueio;

sem inventar arquivos.

---

### REGRA FINAL

O objetivo é sair com um pacote de mídia organizado e reproduzível, não apenas com muitas imagens/sons aleatórios.

Mantenha coerência visual/sonora e preserve a matemática para a interface real.
