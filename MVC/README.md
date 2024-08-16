# Projeto MVC com EJS

## Estrutura do Projeto

- **`app.js`**: Configura o servidor Express, define a view engine (EJS) e configura as rotas.
- **`routes/userRoutes.js`**: Define as rotas da aplicação e as vincula aos métodos do controller.
- **`controllers/userController.js`**: Contém a lógica para manipular as requisições e respostas relacionadas aos usuários.
- **`models/userModel.js`**: Manipula os dados dos usuários e fornece as funções para acesso e modificação desses dados.
- **`public/css/styles.css`**: Contém o CSS para estilização da aplicação.
- **`views/`**: Contém os arquivos de visualização (templates) em EJS.


## Descrição das Funcionalidades

- **`app.js`**: Configura o Express e o EJS como o mecanismo de visualização. Define middleware e rotas.
- **`routes/userRoutes.js`**: Define rotas para listar e adicionar usuários.
- **`controllers/userController.js`**: Funções para listar e criar usuários.
- **`models/userModel.js`**: Funções para manipular dados de usuários.
- **`public/css/styles.css`**: Estilos básicos para a aplicação.


Instalação das Dependências:

Navegue até o diretório do projeto.
Execute o comando npm install para instalar todas as dependências necessárias.

Execução da Aplicação:

No diretório do projeto, execute node app.js para iniciar o servidor.
Acesse a aplicação em http://localhost:4000/users

Tecnologias Utilizadas
Node.js
Express
EJS
CSS

instalar dependências:
npm install
Iniciar o servidor:
node app.js