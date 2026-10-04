# Eixo Math — Android APK, Assinatura e Atualizações

**Status:** decisão obrigatória antes do primeiro APK persistente  
**Objetivo:** permitir instalar novas versões por cima da versão anterior sem desinstalar o app e sem perder dados locais.

---

# 1. REGRA DE ATUALIZAÇÃO DO ANDROID

Para um novo APK atualizar o app já instalado, manter:

1. o mesmo `applicationId`/package ID;
2. a mesma chave/certificado de assinatura;
3. um `versionCode` adequado para atualização;
4. compatibilidade de instalação do Android.

Se o certificado de assinatura for diferente, uma atualização direta normalmente não será aceita como a mesma aplicação.

---

# 2. NÃO É UM “NÚMERO SECRETO”

O conjunto crítico é:

- arquivo keystore `.jks`/`.keystore`;
- alias da chave;
- senha do keystore;
- senha da chave/alias.

Esse material é privado.

Nunca:

- commitar no Git;
- colocar no README;
- colocar em prompt;
- imprimir em log;
- enviar junto com o APK;
- mandar pelo WhatsApp.

---

# 3. APPLICATION ID

Antes do primeiro APK que desejamos manter atualizável, escolher um ID estável.

Baseline proposta:

```
com.daniellima.eixomath
```

Pode ser alterado antes do primeiro build assinado persistente.

Depois que o app estiver sendo usado com dados locais, mudar o application ID cria outra identidade de app e não deve ser feito sem migração planejada.

---

# 4. VERSIONAMENTO

Usar dois conceitos:

## versionName

Visível ao usuário.

Exemplo:

```
0.1.0
0.1.1
0.2.0
```

## versionCode

Inteiro usado pelo Android.

Exemplo:

```
1
2
3
4
```

Cada APK distribuído como atualização deve avançar o `versionCode`.

---

# 5. ESTRATÉGIA RECOMENDADA PARA TESTES INTERNOS

Desde o primeiro APK que Daniel pretende manter instalado e atualizar:

- usar um **keystore persistente de teste/release interno**;
- não depender exclusivamente do debug keystore automático;
- assinar todos os APKs distribuídos manualmente com a mesma chave;
- incrementar versionCode a cada pacote de distribuição.

Assim:

```
eixo-0.1.0-vc1.apk
↓
eixo-0.1.1-vc2.apk
↓
eixo-0.2.0-vc3.apk
```

o segundo/terceiro APK pode atualizar o anterior.

---

# 6. LOCAL SEGURO PARA O KEYSTORE

Não salvar dentro do repositório.

Sugestão Windows:

```
C:\Users\Usuario\.eixo\signing\eixo-internal.jks
```

O repositório fica em:

```
C:\Users\Usuario\Documents\0-AppMath
```

Manter essas áreas separadas.

---

# 7. BACKUP DA CHAVE

A chave deve ter pelo menos um backup seguro fora do PC principal.

Sugestão:

- cópia criptografada em armazenamento externo;
- senhas no gerenciador de senhas;
- certificado/fingerprint documentado;
- nunca guardar arquivo e senhas publicamente juntos.

Perder a chave de assinatura auto-gerenciada pode impedir atualizações futuras fora de mecanismos de recuperação fornecidos por lojas.

---

# 8. SEGREDOS NO BUILD

O código deve ler credenciais de assinatura de variáveis locais/seguras.

Exemplo conceitual:

```
EIXO_KEYSTORE_PATH
EIXO_KEYSTORE_PASSWORD
EIXO_KEY_ALIAS
EIXO_KEY_PASSWORD
```

Não hardcode os valores.

Arquivos locais de configuração com segredo, se usados, entram no `.gitignore`.

---

# 9. CODEX E SEGREDOS

O Codex pode:

- configurar Gradle/Capacitor para ler variáveis;
- criar documentação;
- verificar ausência de secrets no Git;
- executar build quando as variáveis já estiverem fornecidas no ambiente.

O Codex não deve:

- inventar senha;
- imprimir senha;
- commitar keystore;
- subir chave para GitHub;
- copiar segredos para documentação;
- enviar keystore para serviços externos.

A criação/guarda da credencial é responsabilidade do proprietário.

---

# 10. PRIMEIRO APK

Quando P0 estiver autorizado:

```
React/Vite
↓
Capacitor Android
↓
configuração de package ID
↓
configuração de assinatura
↓
versionCode = 1
↓
APK assinado
```

Arquivo sugerido:

```
EixoMath-0.1.0-vc1.apk
```

---

# 11. PRÓXIMO APK

Exemplo:

```
versionName = 0.1.1
versionCode = 2
```

Assinar com a mesma chave.

Arquivo:

```
EixoMath-0.1.1-vc2.apk
```

Ao abrir o novo APK no mesmo Android:

```
Atualizar aplicativo
```

em vez de exigir uma instalação separada, desde que identidade/assinatura sejam compatíveis.

---

# 12. DADOS LOCAIS

Uma atualização normal do app preserva os dados privados da aplicação.

Isso é crucial para:

- progresso;
- Caderno;
- Rascunho;
- preferências;
- content packs.

Migrações de schema continuam obrigatórias quando o formato do banco mudar.

---

# 13. APK VIA WHATSAPP

Para testes internos, o APK pode ser transferido como arquivo/documento por meios como:

- WhatsApp;
- Google Drive;
- USB;
- Telegram;
- link privado;
- ADB/Android Studio.

O Android pode exigir que o usuário permita a instalação de apps desconhecidos para o aplicativo usado para abrir o APK.

Nunca enviar junto:

- keystore;
- senha;
- arquivo de secrets.

Somente o APK assinado.

---

# 14. DEBUG APK VS APK ASSINADO PERSISTENTE

## Debug APK

Bom para desenvolvimento rápido e instalação por Android Studio/ADB.

Risco:

debug keys podem variar por máquina/ambiente.

## APK interno assinado

Recomendado para builds que Daniel pretende:

- guardar;
- enviar;
- instalar manualmente;
- atualizar sobre a mesma instalação durante o projeto.

---

# 15. PLAY STORE FUTURA

Para publicação oficial, utilizar:

- AAB;
- Google Play App Signing;
- estratégia de upload/app signing definida no momento da publicação.

Não mudar silenciosamente a identidade de assinatura usada na distribuição manual sem planejar a transição.

---

# 16. BUILD COM CAPACITOR

Capacitor suporta build de Android e pode produzir APK/AAB assinado quando configurado.

O pipeline final poderá oferecer comandos como:

```
npm run build
npx cap sync android
npx cap build android
```

Scripts próprios poderão padronizar:

```
npm run android:apk
```

somente depois de P0.

---

# 17. NOMENCLATURA DOS ARQUIVOS

Sugestão:

```
EixoMath-<versionName>-vc<versionCode>-internal.apk
```

Exemplo:

```
EixoMath-0.3.2-vc14-internal.apk
```

Isso evita confusão entre builds enviados por mensagem.

---

# 18. CHECKLIST DE RELEASE INTERNO

Antes de enviar um APK:

- [ ] applicationId correto;
- [ ] versionName atualizado;
- [ ] versionCode incrementado;
- [ ] assinatura usando o keystore persistente;
- [ ] release/internal build concluído;
- [ ] APK instala sobre versão anterior;
- [ ] dados permanecem;
- [ ] migração testada;
- [ ] APK não contém secrets;
- [ ] nome do arquivo identifica versão;
- [ ] checksum opcional registrado.

---

# 19. TESTE OBRIGATÓRIO DE UPDATE NO P0

Criar dois APKs de teste:

## APK A

```
versionCode=1
```

Instalar e criar dados locais.

## APK B

```
versionCode=2
```

Mesma assinatura/applicationId.

Instalar por cima do APK A.

Confirmar:

- não precisou desinstalar;
- dados anteriores continuam;
- versão mudou;
- app abre normalmente.

Esse teste entra no gate do P0.

---

# 20. REGRA FINAL

> O APK pode ser compartilhado livremente para instalação; a chave que permite criar atualizações legítimas nunca deve sair do controle do proprietário.
