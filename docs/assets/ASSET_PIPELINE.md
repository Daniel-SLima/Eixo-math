# Eixo Math — Pipeline de Assets Visuais e Sonoros

**Status:** especificação pronta para produção de assets  
**Escopo:** MVP + preparação de identidade visual  
**Regra:** assets não podem introduzir informação matemática errada nem substituir UI matemática real.

---

# 1. OBJETIVO

Este documento define como produzir, revisar, nomear, armazenar e integrar imagens e efeitos sonoros do Eixo.

O pipeline foi pensado para permitir que um agente como o Codex trabalhe dentro de uma cópia local do repositório sem precisar inventar:

- nomes de arquivos;
- proporções;
- estilo;
- pastas;
- prioridade;
- critérios de aprovação;
- política de geração por IA;
- formatos finais.

Documentos complementares:

- `docs/assets/IMAGE_ASSET_PROMPTS.md`
- `docs/assets/SFX_ASSET_PROMPTS.md`
- `docs/assets/ASSET_MANIFEST.csv`
- `docs/assets/CODEX_ASSET_GENERATION_PROMPT.md`

---

# 2. PRINCÍPIO CENTRAL

A IA visual/sonora é ferramenta de produção.

Ela não deve determinar a matemática nem o comportamento da interface.

## Não usar imagem gerada para

- fórmulas que o usuário precisa ler;
- símbolos matemáticos funcionais;
- botões do teclado matemático;
- ícones de navegação críticos;
- estados válido/inválido;
- gráficos que precisam representar dados exatos;
- screenshots de tutorial do editor.

Esses elementos devem ser renderizados pelo próprio aplicativo.

## Usar geração de imagem para

- key art;
- banners;
- ambientação;
- onboarding conceitual;
- empty states;
- fundos;
- decoração;
- conceitos de marca;
- ilustrações sem informação matemática exata.

---

# 3. REGRA SOBRE FÓRMULAS EM IMAGENS

**Não pedir ao gerador para desenhar fórmulas legíveis.**

Modelos de imagem podem distorcer:

- números;
- operadores;
- expoentes;
- frações;
- letras;
- símbolos.

Se uma ilustração precisar sugerir matemática, usar:

- curvas;
- pontos;
- eixos abstratos;
- linhas;
- grades;
- formas geométricas;
- estruturas inspiradas em gráficos.

A fórmula real será sobreposta pela UI do app.

---

# 4. DIREÇÃO VISUAL

O Eixo deverá parecer:

- geométrico;
- moderno;
- limpo;
- maduro;
- tecnológico de forma leve;
- educativo sem aparência escolar infantil;
- coerente com construção, conexão e descoberta.

Evitar:

- mascote infantil obrigatório;
- excesso de neon;
- fantasia medieval;
- estética de cassino;
- fundo poluído;
- texto gerado dentro de ilustrações;
- excesso de partículas.

---

# 5. FAMÍLIAS VISUAIS

## Brand

Arquivos de identidade e conceito.

## Onboarding

Ilustrações que explicam a proposta do produto.

## Worlds

Banners das grandes regiões curriculares.

## Challenges

Key arts dos Desafios-Marco.

## Empty states

Ilustrações de estados sem conteúdo/sem conexão.

## Decorative

Elementos abstratos reutilizáveis.

## UI/vector

Elementos funcionais criados manualmente ou programaticamente.

---

# 6. FAMÍLIAS SONORAS

## UI

Toques e transições discretas.

## Math feedback

Passo válido, atenção, inválido e não comprovado.

## Progression

Desbloqueio, marco e conclusão.

## System

Sync, offline e retorno de conexão.

Sons não podem ser:

- altos;
- longos;
- agressivos;
- infantis;
- necessários para compreender estado.

Todo estado sonoro também precisa possuir representação visual.

---

# 7. ESTRUTURA DE PASTAS LOCAL

Na etapa de geração de assets, criar:

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

Depois que o app existir, os assets aprovados de runtime poderão ser copiados/otimizados para:

```
apps/eixo/public/assets/
├── images/
└── audio/
```

---

# 8. NÃO MISTURAR GENERATED E APPROVED

Um arquivo recém-gerado começa em:

`assets/generated/`

Somente depois de revisão passa para:

`assets/approved/`

O app de produção não deve depender diretamente de `generated/`.

`approved/` registra a aprovação visual do candidato. Para ilustrações elaboradas, isso significa referência de estilo e composição; não determina que o arquivo seja exibido integralmente no app. Em especial, nomes como `background`, `overlay`, `banner` e `splash` descrevem a intenção original de geração, não uma obrigação de usar imagem como fundo. A decisão de integração visual deve respeitar o Design System: interface limpa e matemática em primeiro plano. Logo e ícones simples podem ser avaliados para uso direto.

---

# 9. CONVENÇÃO DE NOMES

Usar:

```
categoria_nome_descritivo[_variante].ext
```

Exemplos:

```
brand_app_icon_main.png
onboarding_math_journey.png
world_functions_banner.png
challenge_limit_point_keyart.png
empty_offline_mode.png

ui_tap_soft.wav
feedback_step_valid.wav
progress_tool_unlock.wav
system_sync_complete.wav
```

Regras:

- snake_case;
- ASCII;
- sem espaços;
- nomes em inglês para consistência técnica;
- sem `final_final_v2`;
- variações usam `_v01`, `_v02` somente enquanto estão em generated.

---

# 10. IMAGENS — FORMATOS

## Fonte gerada

Preferir:

- PNG de alta resolução;
- transparência quando especificada.

## Runtime

Avaliar:

- WebP para ilustrações;
- PNG para transparência/compatibilidade específica;
- SVG somente quando criado/revisado como vetor real.

Não converter automaticamente arte raster gerada para SVG apenas para chamar de vetor.

---

# 11. IMAGENS — TAMANHOS-BASE

## 1:1

`1024 × 1024`

Uso:

- conceito de ícone;
- badges conceituais;
- elementos decorativos.

## 4:3

`1600 × 1200`

Uso:

- empty states.

## 4:5

`1600 × 2000`

Uso:

- onboarding.

## 16:9

`1920 × 1080`

Uso:

- banners;
- desafios;
- mundos.

## 9:16

`1440 × 2560`

Uso:

- splash/hero portrait.

---

# 12. SAFE AREA

Banners e splash devem manter elementos importantes longe das bordas.

Regra inicial:

- reservar aproximadamente 10–15% das bordas;
- evitar rosto/objeto crítico atrás de barras/status;
- deixar áreas de respiro para texto real da UI.

---

# 13. SONS — FORMATO DE PRODUÇÃO

Fonte master:

```
WAV
48 kHz
24-bit
mono ou stereo conforme necessidade
```

Para runtime, preferir export compacto e amplamente compatível.

Baseline:

```
MP3
44.1/48 kHz
96–160 kbps
```

SFX muito curtos devem permanecer pequenos.

Manter o WAV master fora do bundle final se não for necessário.

---

# 14. SONS — DURAÇÃO

## UI tap

50–120 ms.

## Feedback matemático

100–350 ms.

## Unlock

400–900 ms.

## Milestone/challenge complete

800–1800 ms.

Evitar SFX longos em ações frequentes.

---

# 15. SONS — MIX

Direção:

- suave;
- limpa;
- sem distorção;
- sem graves excessivos;
- sem sustos;
- sem voz;
- sem loops em ações comuns.

Peak seguro:

aproximadamente abaixo de -3 dBFS no master.

O volume final será controlado pelo app.

---

# 16. CONFIGURAÇÕES DE ÁUDIO NO APP

Configurações previstas:

```
Sons da interface       on/off
Sons de progresso       on/off
Volume de efeitos       0–100
```

No MVP, pode ser simplificado para:

```
Efeitos sonoros         on/off
```

Configuração padrão:

**ligado, em volume discreto**.

---

# 17. HAPTICS

Haptic feedback pode existir futuramente para:

- confirmação;
- erro;
- desbloqueio.

Não deve ser obrigatório.

Respeitar configurações do sistema e acessibilidade.

---

# 18. PRIORIDADE DE PRODUÇÃO

## Lote A — identidade

- app icon concept;
- logo mark concept;
- splash;
- onboarding 1–3.

## Lote B — mundos

- Fundamentos;
- Álgebra;
- Funções;
- Limites.

## Lote C — desafios

- Equilíbrio;
- Conectar dois pontos;
- Falha no ponto.

## Lote D — empty states

- histórico;
- favoritos;
- offline.

## Lote E — decoração

- pack geométrico;
- background do mapa;
- texturas leves.

## Lote F — SFX essenciais

- tap;
- valid;
- invalid;
- attention;
- unproven;
- tool unlock;
- lesson complete;
- milestone;
- challenge complete;
- sync complete.

---

# 19. ASSETS FUNCIONAIS QUE DEVEM SER CRIADOS POR UI/CÓDIGO

Não gerar com IA como asset final:

- Home icons;
- Map navigation icons;
- undo;
- redo;
- delete;
- add line;
- board switcher;
- fraction key;
- power key;
- root key;
- log key;
- limit key;
- integral key;
- success/warning/error glyphs.

Usar:

- biblioteca de ícones consistente;
- SVG próprio;
- MathLive;
- CSS/HTML.

---

# 20. CRITÉRIO DE APROVAÇÃO DE IMAGEM

Uma imagem só passa para `approved` se:

- segue o estilo;
- não contém texto corrompido;
- não contém fórmula errada;
- funciona no crop previsto;
- possui resolução suficiente;
- não apresenta artefatos visuais;
- não parece infantil;
- não contém watermark;
- não depende de marca de terceiros;
- combina com as outras imagens da família.

---

# 21. CRITÉRIO DE APROVAÇÃO DE SFX

Um som só passa se:

- é curto;
- não é irritante após repetição;
- não assusta;
- não contém fala;
- diferencia estado sem exagero;
- não clipa;
- funciona em alto-falante de celular;
- não é necessário para compreender a UI;
- combina com a identidade do Eixo.

---

# 22. GERAÇÃO EM LOTES

Gerar uma família inteira com a mesma direção visual antes de passar à próxima.

Exemplo:

1. gerar todos os Worlds;
2. comparar;
3. selecionar/regerar inconsistentes;
4. aprovar família.

Isso é melhor do que gerar assets aleatórios isolados.

---

# 23. RELATÓRIO DO AGENTE

Após cada lote, registrar:

```
ASSET_GENERATION_PROGRESS.md
```

Formato:

```
## Batch: worlds

Generated
- assets/generated/images/worlds/world_fundamentals_banner_v01.png
- ...

Approved
- ...

Rejected
- filename — motivo
```

---

# 24. GIT

Assets aprovados podem ser versionados quando fizer sentido.

Evitar commitar:

- centenas de variações rejeitadas;
- masters enormes sem necessidade;
- arquivos temporários.

Se assets crescerem muito, avaliar Git LFS antes de expandir.

Não ativar Git LFS sem decisão explícita.

---

# 25. LICENÇA/ORIGEM

Para cada asset gerado por IA, manter metadado simples:

```
asset_id
generator/tool
date
prompt_reference
human_reviewed=true|false
```

Não incorporar imagens externas sem licença conhecida.

---

# 26. CODEX E GERAÇÃO

O Codex pode:

- criar pastas;
- ler manifests;
- organizar prompts;
- validar dimensões/formato;
- renomear;
- otimizar;
- gerar relatório;
- chamar ferramentas de geração se estiverem realmente disponíveis no ambiente.

O Codex **não deve fingir que gerou um PNG/WAV** se não possuir uma ferramenta capaz de produzir o arquivo.

Se uma capacidade estiver indisponível:

1. registrar o bloqueio;
2. deixar prompt pronto;
3. continuar tarefas organizacionais que não dependem dela.

---

# 27. APIS PAGAS

O agente não deve configurar ou consumir automaticamente API paga externa para geração de mídia sem autorização explícita.

Preferir ferramentas já disponíveis no ambiente do usuário.

---

# 28. NÃO INICIAR CÓDIGO DO APP DURANTE LOTE DE ASSETS

Quando o prompt de geração de assets estiver sendo executado, foco exclusivo:

- assets;
- organização;
- QA de mídia;
- documentação.

Não iniciar P0 ou implementar telas, salvo instrução posterior do proprietário.

---

# 29. DEFINIÇÃO DE DONE DO PACOTE DE ASSETS

O pacote fica pronto para implementação quando:

- manifest está completo;
- assets MVP essenciais estão approved;
- SFX essenciais estão approved;
- dimensões conferidas;
- nomes conferidos;
- nenhum texto/fórmula corrompida;
- relatório atualizado.

---

# 30. PRINCÍPIO FINAL

> O asset deve reforçar a experiência do Eixo sem competir com a matemática.
