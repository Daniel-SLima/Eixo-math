# Eixo Math — Segurança, Privacidade e Telemetria Pedagógica

**Status:** especificação inicial  
**Princípio:** coletar o mínimo necessário para ensinar, sincronizar e melhorar o produto.

---

# 1. PRIVACY BY DESIGN

O Eixo deverá partir da pergunta:

> precisamos realmente armazenar este dado?

e não:

> já que conseguimos coletar, por que não coletar?

Dados acadêmicos, resoluções e dificuldades podem ser sensíveis no contexto educacional.

---

# 2. CATEGORIAS DE DADOS

## Necessários localmente

- progresso;
- domínio;
- tentativas;
- Caderno;
- Rascunho;
- preferências;
- content packs.

## Necessários para conta/sync

- identificador de usuário;
- dados mínimos de autenticação;
- objetos acadêmicos sincronizados;
- checkpoints/revisions.

## Opcionais de analytics

- eventos de produto agregáveis;
- erros técnicos;
- desempenho/performance;
- indicadores de qualidade de conteúdo.

Analytics não deve ser requisito para estudar.

---

# 3. DADOS QUE NÃO DEVEM VIRAR TELEMETRIA POR PADRÃO

Não enviar automaticamente para analytics:

- conteúdo completo do Rascunho;
- cada tecla digitada;
- texto integral de anotações;
- resolução completa de toda questão;
- histórico completo do aluno;
- dados pessoais não necessários.

Quando uma informação detalhada for necessária para debugging, usar fluxo específico e transparente.

---

# 4. EVENTOS DE TELEMETRIA COM ALLOWLIST

Eventos devem ser definidos previamente.

Exemplo:

```
lesson_started
lesson_completed
activity_completed
hint_used
editor_template_tutorial_completed
content_pack_download_failed
sync_failed
math_validation_unproven
```

Cada evento declara explicitamente campos permitidos.

Não permitir payload arbitrário vindo da tela.

---

# 5. SEPARAÇÃO ENTRE ANALYTICS E REGISTRO ACADÊMICO

```
Academic Data
≠
Analytics Events
```

Progresso e evidências possuem banco/modelo próprio.

Analytics serve para responder perguntas de produto, não como fonte oficial de domínio.

Falha de analytics nunca pode alterar progresso.

---

# 6. IDENTIFICADORES PSEUDÔNIMOS

Analytics deverá preferir identificadores pseudônimos.

Evitar incluir:

- email;
- nome;
- telefone;

em eventos de uso.

Quando correlação com conta for necessária, utilizar ID interno.

---

# 7. ANALYTICS NÃO ESSENCIAL

Telemetria não essencial deverá poder ser:

- desligada;
- limitada por configuração/região;
- omitida em builds específicos.

O núcleo não quebra.

---

# 8. SEM VENDA DE DADOS

O modelo do produto não deverá depender de vender:

- histórico;
- perfil educacional;
- dificuldades;
- comportamento de estudo.

Publicidade comportamental baseada em dificuldades educacionais não faz parte da direção do Eixo.

---

# 9. PERFIL PRIVADO POR PADRÃO

Progresso acadêmico é privado.

Recursos sociais futuros deverão compartilhar somente o necessário e mediante ação clara.

Nunca tornar público automaticamente:

- lacunas;
- erros;
- resoluções;
- Livro pessoal;
- histórico.

---

# 10. MENORES DE IDADE

O público-alvo primário do MVP foi definido como **14+**, incluindo adolescentes e adultos.

Como parte desse público ainda pode ser menor de idade, a arquitetura deverá assumir uso por adolescentes de 14–17 anos.

Antes do lançamento público, validar juridicamente:

- requisitos de consentimento aplicáveis;
- política de conta para menores;
- controles parentais quando legalmente necessários;
- termos e política de privacidade apropriados;
- requisitos específicos das lojas e regiões de distribuição.

Não adicionar coleta extensa que torne essa adaptação difícil depois.

---

# 11. MINIMIZAÇÃO DE DADOS DE PERFIL

MVP não precisa solicitar:

- data completa de nascimento;
- endereço;
- escola;
- telefone;
- gênero;

a menos que uma função aprovada realmente exija.

Para personalização, preferir dados funcionais como:

- objetivo de estudo;
- idioma;
- preferências de acessibilidade.

---

# 12. AUTENTICAÇÃO

Se Supabase Auth for utilizado:

- tokens de usuário;
- RLS;
- sessões seguras;
- métodos de login aprovados.

Service role/segredos administrativos nunca entram no cliente.

---

# 13. STORAGE DE CREDENCIAIS

No mobile, tokens sensíveis deverão utilizar armazenamento seguro da plataforma.

Não persistir secrets em:

- source code;
- localStorage;
- logs;
- content packs.

---

# 14. ROW LEVEL SECURITY

Tabelas privadas deverão possuir RLS antes de uso real.

Teste obrigatório:

- usuário A não lê usuário B;
- usuário A não altera usuário B;
- conteúdo público tem política própria;
- endpoints privilegiados exigem função/role adequada.

---

# 15. EDGE FUNCTIONS

Operações que exigem privilégio deverão passar por backend.

Exemplos futuros:

- merge especial de conta;
- challenge social;
- operações administrativas;
- webhooks;
- IA futura.

Validar autenticação e autorização no servidor.

---

# 16. CONTENT PACKS NÃO CONTÊM CÓDIGO EXECUTÁVEL

Content packs devem ser dados declarativos.

Preferir:

- JSON;
- assets;
- configurações permitidas.

Não permitir JavaScript remoto arbitrário dentro de pack.

Isso reduz risco de supply-chain/content injection.

---

# 17. VALIDAÇÃO DE CONTENT PACK

Antes de instalar:

- versão;
- checksum;
- schema;
- tamanho;
- origem;
- compatibilidade.

Futuramente considerar assinatura criptográfica para distribuição pública.

---

# 18. SANITIZAÇÃO DE CONTEÚDO

Enunciados e conteúdo rico não podem executar HTML/JS arbitrário.

Se houver Markdown/HTML controlado:

- sanitizar;
- allowlist;
- CSP;
- evitar `dangerouslySetInnerHTML` sem pipeline seguro.

---

# 19. MATEMÁTICA NÃO É CÓDIGO

Expressions/MathJSON/LaTeX devem ser interpretados como dados.

Não usar:

- `eval`;
- `new Function`;
- execução dinâmica baseada em conteúdo.

Compute Engine deverá receber estruturas matemáticas, não scripts arbitrários.

---

# 20. WEBVIEW/CAPACITOR

Como a aplicação é web-first empacotada:

- configurar Content Security Policy;
- limitar navegação externa;
- não carregar scripts essenciais de CDNs em runtime;
- restringir bridges/plugins;
- validar links externos antes de abrir navegador.

---

# 21. DEPENDÊNCIAS

- lockfile versionado;
- auditoria de dependências;
- atualização controlada;
- testes antes de upgrade;
- alertas de vulnerabilidade.

MathLive/Compute Engine são dependências críticas e upgrades exigem regressão matemática/editor.

---

# 22. LOGS

Logs de produção devem evitar:

- expressão completa por padrão;
- email;
- token;
- Rascunho;
- payload de sync completo.

Usar IDs, códigos e metadados técnicos suficientes.

---

# 23. BUG REPORT EXPLÍCITO

Quando usuário escolher “Relatar problema”, pode ser oferecido:

> incluir dados técnicos desta atividade para ajudar na investigação?

Pacote possível:

- activity_id;
- seed;
- versões;
- error code;
- estado mínimo reproduzível.

Se incluir resolução, deixar isso claro.

---

# 24. CRASH REPORTING

Crash reports podem coletar:

- versão;
- plataforma;
- stack trace;
- módulo.

Sanitizar breadcrumbs para não carregar conteúdo acadêmico desnecessário.

---

# 25. RETENÇÃO

Definir políticas distintas:

## Conta

Enquanto necessária para serviço e conforme política.

## Tentativas/histórico

Retenção configurável/documentada.

## Analytics

Prazo limitado conforme finalidade.

## Logs técnicos

Curto prazo.

A política jurídica final será definida antes do lançamento.

---

# 26. EXCLUSÃO DE CONTA

Usuário com conta deverá possuir fluxo para solicitar/aplicar exclusão conforme requisitos legais.

Arquitetura deve conhecer:

- dados primários;
- referências;
- backups;
- analytics pseudonimizados;
- conteúdo público eventualmente criado.

---

# 27. EXPORTAÇÃO DE DADOS

Planejar capacidade futura de exportar dados pessoais/acadêmicos.

Formato pode incluir:

- progresso;
- histórico;
- Livro;
- resoluções salvas.

Não precisa ser UI completa do MVP se requisitos legais permitirem outro fluxo.

---

# 28. TELEMETRIA PEDAGÓGICA

Quando coletada, deve responder perguntas como:

- qual conteúdo gera mais `NAO_COMPROVADO`?
- qual tutorial de editor falha mais?
- qual blueprint tem abandono anormal?
- quais dicas são usadas?
- onde a dificuldade parece mal calibrada?

Não usar para rotular aluno externamente.

---

# 29. MÉTRICAS DE QUALIDADE DO EDITOR

Eventos agregáveis:

- template inserido;
- tutorial de template concluído;
- erro de estrutura;
- uso de “sair do bloco”;
- undo após inserção.

Evitar armazenar a fórmula completa em analytics.

---

# 30. MÉTRICAS DE QUALIDADE DO MOTOR

Exemplos:

```
validation_valid
validation_invalid
validation_unproven
error_code
skill_id
engine_version
```

Sem necessidade de incluir expressão bruta na maioria dos casos.

---

# 31. MÉTRICAS DE CONTEÚDO

- activity_id;
- blueprint_id;
- difficulty;
- completion;
- hint_level;
- abandon;
- report_problem.

A seed pode ser armazenada em registro acadêmico/diagnóstico, mas não precisa estar em todo analytics externo.

---

# 32. CONSENTIMENTO E CONFIGURAÇÃO

Quando aplicável, usuário deverá poder controlar analytics não essenciais.

Mudança de preferência deve produzir efeito sem reinstalar.

---

# 33. IA FUTURA

Antes de enviar dado a provedor de IA:

- minimizar;
- remover identificadores;
- aplicar política específica;
- comunicar uso;
- verificar retenção/treino do provedor;
- respeitar idade/região.

IA não está ativa no MVP.

---

# 34. SOCIAL/MULTIPLAYER FUTURO

Dados sociais ficam em domínio separado.

Privacidade deve definir:

- quem pode convidar;
- quem pode encontrar;
- bloqueio;
- relatório;
- presença;
- nomes/apelidos.

Não expor desempenho detalhado sem escolha.

---

# 35. BLUETOOTH FUTURO

Conexão de proximidade exigirá:

- permissões explícitas;
- descoberta controlada;
- autenticação/pareamento da sessão;
- payload mínimo;
- expiração da sessão.

Não faz parte do MVP.

---

# 36. AMEAÇAS PRINCIPAIS

## Conta

- takeover;
- token theft.

## Sync

- acesso cruzado;
- alteração de progresso alheio;
- replay de operação.

## Conteúdo

- pack adulterado;
- XSS;
- payload malicioso.

## Cliente

- secret embutido;
- bridge/plugin abusado.

## Backend

- endpoint privilegiado mal autorizado;
- exposição por RLS incorreta.

## Futuro social

- spam;
- assédio;
- enumeração de usuários.

---

# 37. TESTES DE SEGURANÇA

Obrigatórios:

- políticas RLS;
- auth inválida;
- IDOR;
- content pack inválido;
- XSS em conteúdo;
- payload MathJSON malformado;
- sync replay/idempotência;
- usuário A tentando acessar objeto B;
- logout/troca de conta;
- logs sem tokens.

---

# 38. AMBIENTES

Separar:

- development;
- test;
- staging;
- production.

Não usar banco de produção em testes automatizados.

---

# 39. SEGREDOS

Secrets somente em:

- secret manager;
- CI secrets;
- backend.

Nunca commitados.

---

# 40. TELEMETRIA EM DESENVOLVIMENTO

Builds de desenvolvimento podem ter diagnostics adicionais, mas:

- explicitamente separados;
- nunca enviados acidentalmente à produção.

---

# 41. PRINCÍPIO DE SEGURANÇA PEDAGÓGICA

Integridade do aprendizado também é requisito de segurança.

O sistema não deve:

- atribuir progresso ao usuário errado;
- perder Caderno;
- misturar contas;
- aceitar content pack corrompido;
- alterar domínio por evento duplicado.

---

# 42. PRINCÍPIO FINAL

> **Dados educacionais existem para beneficiar o aluno e operar o Eixo; não para maximizar coleta.**
