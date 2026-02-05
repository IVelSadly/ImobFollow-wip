# Como Tornar o Repositório Público e Habilitar GitHub Pages

## 🔓 Tornando o Repositório Público

1. **Acesse as Configurações do Repositório**
   - Vá para: https://github.com/IVelSadly/ImobFollow-wip
   - Clique em **Settings** (última opção no menu superior)

2. **Navegue até a Seção de Visibilidade**
   - Role até o final da página
   - Procure a seção **"Danger Zone"**

3. **Altere a Visibilidade**
   - Clique em **"Change visibility"**
   - Selecione **"Make public"**
   - Digite o nome do repositório para confirmar: `IVelSadly/ImobFollow-wip`
   - Clique em **"I understand, make this repository public"**

⚠️ **ATENÇÃO:** Uma vez público, qualquer pessoa poderá ver o código. Certifique-se de que:
- Não há arquivos `.env` commitados
- Não há credenciais no código
- Não há tokens ou API keys expostos

## 📄 Habilitando GitHub Pages

### Opção 1: Deploy Automático da Branch Main

1. **Acesse as Configurações**
   - No repositório, clique em **Settings**
   - No menu lateral, clique em **Pages**

2. **Configure a Source**
   - Em "Build and deployment"
   - **Source:** Selecione "Deploy from a branch"
   - **Branch:** Selecione `main` (ou a branch desejada)
   - **Folder:** Selecione `/ (root)` ou `/docs`
   - Clique em **Save**

3. **Aguarde o Deploy**
   - O GitHub Actions irá fazer o build automaticamente
   - Em alguns minutos, seu site estará disponível em:
     ```
     https://ivelsadly.github.io/ImobFollow-wip/
     ```

### Opção 2: Deploy com GitHub Actions (Recomendado para React)

Para aplicações React, é melhor usar GitHub Actions:

1. **Crie o arquivo de workflow** `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: frontend/package-lock.json
      
      - name: Install dependencies
        working-directory: frontend
        run: npm ci
      
      - name: Build
        working-directory: frontend
        env:
          REACT_APP_BACKEND_URL: ${{ secrets.REACT_APP_BACKEND_URL }}
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: frontend/build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. **Configure GitHub Pages**
   - Settings > Pages
   - Source: **GitHub Actions**
   - Salve

3. **Configure Secrets**
   - Settings > Secrets and variables > Actions
   - Adicione: `REACT_APP_BACKEND_URL` com a URL do seu backend de produção

4. **Faça um commit**
   - O workflow será executado automaticamente
   - Seu site será publicado em `https://ivelsadly.github.io/ImobFollow-wip/`

## 🔗 Configurando Domínio Customizado (Opcional)

1. **Adicione um arquivo CNAME**
   - Crie `frontend/public/CNAME` com seu domínio:
     ```
     imobfollow.com
     ```

2. **Configure DNS**
   - Adicione um registro CNAME:
     ```
     www.imobfollow.com -> ivelsadly.github.io
     ```
   - Ou registros A para apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Configure no GitHub**
   - Settings > Pages > Custom domain
   - Digite seu domínio
   - Marque "Enforce HTTPS"

## ✅ Verificação

Após tornar público e habilitar Pages:

1. Acesse o repositório e confirme que o ícone de cadeado sumiu
2. Acesse `https://ivelsadly.github.io/ImobFollow-wip/` e verifique o site
3. Teste todas as funcionalidades
4. Monitore o Actions tab para ver os builds

## 🚨 Troubleshooting

### Problema: 404 após deploy
**Solução:** Configure `homepage` no `package.json`:
```json
"homepage": "https://ivelsadly.github.io/ImobFollow-wip"
```

### Problema: Assets não carregam
**Solução:** Use paths relativos no código ou configure `PUBLIC_URL`:
```bash
PUBLIC_URL=https://ivelsadly.github.io/ImobFollow-wip npm run build
```

### Problema: API não conecta
**Solução:** Configure CORS no backend para permitir origem do GitHub Pages:
```python
allow_origins=['https://ivelsadly.github.io']
```

---

**Importante:** Este é um repositório de exemplo. Em produção, use domínio próprio e infraestrutura adequada.