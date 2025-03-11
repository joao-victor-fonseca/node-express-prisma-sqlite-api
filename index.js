// Importando as dependências
const express = require("express");
const { PrismaClient } = require("@prisma/client");

// Inicializando o app e o Prisma
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rota para criar um novo item
app.post("/items", async (req, res) => {
  const { name } = req.body;
  const item = await prisma.item.create({ data: { name } });
  res.json(item);
});

// Rota para listar todos os itens
app.get("/items", async (req, res) => {
  const items = await prisma.item.findMany();
  res.json(items);
});

// Rota para buscar um item por ID
app.get("/items/:id", async (req, res) => {
  const { id } = req.params;
  const item = await prisma.item.findUnique({ where: { id: Number(id) } });
  res.json(item);
});

// Rota para atualizar um item
app.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedItem = await prisma.item.update({
    where: { id: Number(id) },
    data: { name },
  });
  res.json(updatedItem);
});

// Rota para deletar um item
app.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.item.delete({ where: { id: Number(id) } });
  res.json({ message: "Item deletado com sucesso" });
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
