# Vegan Project

Este é um projeto desenvolvido para fornecer informações sobre veganismo utilizando uma API generativa do Google. O projeto é construído com React e Vite, oferecendo uma experiência rápida e interativa para os usuários.

## Tecnologias Utilizadas

- **Frontend**: 
  - [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
  - [Vite](https://vitejs.dev/) - Ferramenta de construção e desenvolvimento rápido para projetos front-end.
  - [React Router DOM](https://reactrouter.com/) - Biblioteca para roteamento em aplicativos React.

- **Backend**: 
  - [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript no lado do servidor.
  - [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) - Biblioteca para interação com a API generativa do Google.
  
- **Gerenciamento de Dependências**:
  - [Axios](https://axios-http.com/) - Cliente HTTP para fazer requisições.
  - [dotenv](https://www.npmjs.com/package/dotenv) - Carregamento de variáveis de ambiente a partir de um arquivo `.env`.

- **Linting e Qualidade de Código**:
  - [ESLint](https://eslint.org/) - Ferramenta de linting para identificar e corrigir problemas em JavaScript.
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - Plugin para linting em projetos React.
  - [@eslint/js](https://www.npmjs.com/package/@eslint/js) - Regras e configurações do ESLint.

## Estrutura do Projeto

```plaintext
veganbot-node/
├── api/
│   └── message.js           
├── src/
│   ├── App.jsx           
│   └── ChatBot.jsx        # Componente do ChatBot
├── .env                    # Variáveis de ambiente
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```


## Instalação
### Clone o repositório:
```bash
git clone https://github.com/millenxs/vegan-project.git
cd vegan-project

```

### Instale as dependências:
```bash
npm install

```

### Crie um arquivo .env na pasta backend e adicione sua chave API:
```plaintext
GOOGLE_GEMINI_API_KEY=SUACHAVEAQUI

```

## Scripts

- **Desenvolvimento**: Para iniciar o ambiente de desenvolvimento, use:
```bash
npm run dev

```
- **Construir**: Para construir o projeto para produção, use:
```bash
npm run build

```

- **Servir**: Para pré-visualizar a construção:
```bash
npm run serve

```

- **Backend**: Para rodar o backend:
```bash
npm run backend

```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

