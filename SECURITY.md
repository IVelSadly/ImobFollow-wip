# Guia de Segurança - ImobFollow

## 📋 Auditoria de Segurança

Este repositório foi auditado para garantir que está seguro para ser tornado público.

### ✅ Checklist de Segurança

#### Código
- [x] Sem credenciais hardcoded (API keys, passwords, tokens)
- [x] Uso correto de variáveis de ambiente
- [x] Sem URLs de produção hardcoded
- [x] Sem informações de usuários ou dados sensíveis

#### Arquivos de Configuração
- [x] `.gitignore` configurado corretamente
- [x] Arquivos `.env.example` criados para documentação
- [x] Arquivos `.env` não commitados (incluídos no `.gitignore`)
- [x] Sem arquivos `.pem`, `.key` ou certificados

#### Git History
- [x] Histórico verificado - sem secrets commitados anteriormente
- [x] Sem arquivos sensíveis em commits antigos

## 🔐 Boas Práticas Implementadas

### 1. Variáveis de Ambiente

**Backend** (`backend/.env`):
```bash
MONGO_URL=mongodb://localhost:27017
DB_NAME=imobfollow
CORS_ORIGINS=http://localhost:3000
```

**Frontend** (`frontend/.env`):
```bash
REACT_APP_BACKEND_URL=http://localhost:8000
```

### 2. Arquivos Protegidos no .gitignore

```
*.env
*.env.*
*token.json*
*credentials.json*
*.pem
*.key
```

### 3. CORS Configurável

O backend usa variável de ambiente para CORS:
```python
allow_origins=os.environ.get('CORS_ORIGINS', '*').split(',')
```

## 🚨 Antes de Fazer Deploy

### Produção - Checklist

1. **MongoDB**
   - [ ] Use MongoDB Atlas ou serviço gerenciado
   - [ ] Configure autenticação forte
   - [ ] Use SSL/TLS para conexões
   - [ ] Configure IP whitelist

2. **Variáveis de Ambiente**
   - [ ] Configure `MONGO_URL` com credenciais de produção
   - [ ] Configure `CORS_ORIGINS` com domínios de produção
   - [ ] Use secrets management (GitHub Secrets, Vercel Env, etc.)

3. **Backend**
   - [ ] Configure HTTPS
   - [ ] Adicione rate limiting
   - [ ] Configure logs apropriados
   - [ ] Use autenticação JWT se necessário

4. **Frontend**
   - [ ] Configure `REACT_APP_BACKEND_URL` para produção
   - [ ] Build otimizado (`npm run build`)
   - [ ] Configure HTTPS
   - [ ] Use CDN para assets estáticos

## 📝 Configurando Secrets no GitHub

Para CI/CD, configure as seguintes secrets no repositório:

1. Vá em `Settings` > `Secrets and variables` > `Actions`
2. Adicione:
   - `MONGO_URL` - URL do MongoDB de produção
   - `DB_NAME` - Nome do banco de dados
   - Outras credenciais necessárias

## 🌐 Deploy Recomendado

### Backend
- **Railway**: Suporte nativo para Python, fácil deploy
- **Heroku**: Plataforma tradicional, muito estável
- **Google Cloud Run**: Serverless, escalável

### Frontend
- **Vercel**: Otimizado para React, deploy automático
- **Netlify**: Excelente para sites estáticos
- **GitHub Pages**: Gratuito, ideal para landing pages

## 🔍 Monitoramento

Recomendações para produção:
- Configure alertas de erro
- Use Sentry ou similar para tracking de erros
- Configure logs estruturados
- Monitore performance da API
- Configure backups do MongoDB

## 📞 Reportar Vulnerabilidades

Se você encontrar alguma vulnerabilidade de segurança:
1. **NÃO** abra uma issue pública
2. Entre em contato diretamente via email (adicione seu email aqui)
3. Descreva o problema em detalhes
4. Aguarde resposta antes de divulgar publicamente

---

**Última auditoria:** 2026-02-05
**Status:** ✅ APROVADO PARA PÚBLICO