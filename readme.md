<h1 align="center" style="color:white;">🚀 API REST com Node.js, Express e Prisma 🚀</h1>

<div align="center">
  <p>
      Este projeto foi desenvolvido como parte de um trabalho acadêmico e demonstra a criação de uma API simples utilizando Node.js, Express, Prisma e SQLite. Realizando operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) em um banco de dados SQLite.
  </p>
</div>

<h2 align="left">💻 Tecnologias</h2>
<div align="left"> 
    <a href="#">
        <img src="https://skillicons.dev/icons?i=nodejs,express,prisma,sqlite&theme=dark" alt="Tecnologias Utilizadas" />
    </a> 
</div>

<h2 align="left">📦 Instalação</h2>

1. Clone o repositório:

   ```bash
   git clone https://github.com/joao-victor-fonseca/api-rest-node-prisma-sqlite.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd api-rest-node-prisma-sqlite
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure o banco de dados com Prisma:

   - Se ainda não tiver o banco de dados criado, rode a migration:

   ```bash
   npx prisma migrate dev
   ```

5. Rode o servidor:
   ```bash
   npm start
   ```

Agora, a API estará rodando em `http://localhost:3000`.

<h2 align="left">🔧 Endpoints</h2>

- **GET** `/api/itens`: Retorna todos os itens cadastrados.
- **POST** `/api/itens`: Cria um novo item.
- **PUT** `/api/itens/:id`: Atualiza um item existente.
- **DELETE** `/api/itens/:id`: Deleta um item.

<h2 align="left">🌐 Teste da API</h2>

Você pode testar os endpoints utilizando o [Insomnia](https://insomnia.rest/) ou qualquer outra ferramenta de API. Basta configurar as rotas para os métodos GET, POST, PUT e DELETE e observar o retorno dos dados.

<h2 align="left">👨‍💻 Autor</h2>

<p align="center"> <a href="https://github.com/joao-victor-fonseca" target="_blank"> <img style="border-radius:50%" src="https://avatars.githubusercontent.com/u/84512746?v=4" width="100px;" alt="João Victor Fonseca Assis" /> <br /> <sub><b>João Victor Fonseca Assis</b></sub> </a> </p> <p align="center"> Desenvolvido com ❤️ por <b>João Victor Fonseca Assis</b>. Entre em contato para mais informações ou colaborações! </p>
