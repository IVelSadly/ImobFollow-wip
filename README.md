# ImobFollow 🏠

**Transforme Leads Imobiliários em Vendas com IA**

ImobFollow é uma plataforma de infraestrutura de IA para imobiliárias que centraliza contatos, classifica leads automaticamente e faz follow-up inteligente.

## 🚀 Funcionalidades

- ✨ **Classificação Automática** - IA classifica leads por potencial de conversão
- 📬 **Inbox Unificado** - Centralize todos os seus contatos em um único lugar
- 🤖 **Follow-up Inteligente** - Automação de follow-up em 1, 3 e 7 dias
- 📊 **Dashboard Analítico** - Acompanhe métricas e conversões em tempo real

## 🛠️ Tecnologias

### Backend
- FastAPI (Python)
- MongoDB (Motor - driver assíncrono)
- Pydantic para validação de dados
- CORS configurável

### Frontend
- React.js
- Tailwind CSS
- Framer Motion para animações
- Axios para requisições HTTP
- React Router para navegação

## 📋 Pré-requisitos

- Python 3.8+
- Node.js 16+
- MongoDB 4.4+

## 🔧 Instalação e Configuração

### Backend

1. Navegue até o diretório backend:
```bash
cd backend
```

2. Crie um ambiente virtual Python:
```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=imobfollow
CORS_ORIGINS=http://localhost:3000
```

5. Execute o servidor:
```bash
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

O backend estará disponível em `http://localhost:8000`

### Frontend

1. Navegue até o diretório frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env`:
```
REACT_APP_BACKEND_URL=http://localhost:8000
```

4. Execute o servidor de desenvolvimento:
```bash
npm start
```

O frontend estará disponível em `http://localhost:3000`

## 🧪 Testes

### Backend
```bash
cd backend
pytest backend_test.py
```

### Frontend
```bash
cd frontend
npm test
```

## 📚 API Endpoints

### Waitlist
- `POST /api/waitlist` - Adicionar email à lista de espera
- `GET /api/waitlist/count` - Obter contagem de emails na lista

### Status
- `GET /api/` - Health check da API
- `POST /api/status` - Criar verificação de status
- `GET /api/status` - Listar verificações de status

## 🔒 Segurança

Este repositório foi auditado para garantir que não contém informações sensíveis:

- ✅ Sem credenciais hardcoded
- ✅ Variáveis de ambiente para configurações sensíveis
- ✅ `.gitignore` configurado para excluir arquivos sensíveis
- ✅ Sem tokens ou chaves de API no código

**Importante:** Sempre use arquivos `.env` para configurações sensíveis e nunca os commite no repositório.

## 🌐 Deploy

### Backend (Recomendações)
- Heroku
- Railway
- Google Cloud Run
- AWS Elastic Beanstalk

### Frontend (Recomendações)
- Vercel
- Netlify
- GitHub Pages (para sites estáticos)

### GitHub Pages (Configuração)

Para habilitar o GitHub Pages:

1. Vá nas configurações do repositório
2. Navegue até a seção "Pages"
3. Em "Source", selecione a branch que deseja usar (geralmente `main` ou `gh-pages`)
4. Clique em "Save"

**Nota:** GitHub Pages é ideal para sites estáticos. Para a aplicação React completa, recomendamos Vercel ou Netlify.

## 📝 Licença

Este projeto está em desenvolvimento. Entre em contato para informações sobre licenciamento.

## 👥 Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue para discutir mudanças maiores antes de enviar um pull request.

## 📧 Contato

Para mais informações, visite nossa página ou entre em contato através da lista de espera no site.

---

© 2026 ImobFollow. Infraestrutura de IA para Imobiliárias.
