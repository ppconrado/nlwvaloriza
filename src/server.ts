import express from "express";

// @types/express
const app = express();

/*
 * GET    => Buscar uma informacao
 * POST   => Inserir (Criar) uma informacao
 * PUT    => Alterar uma informacao
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação especifica
 */

app.get("/test", (request, response) => {
  // Request  => Entrando
  // Response => Saindo
  return response.send("Ola Jose");
});

app.post("/test-post", (request, response) => {
  return response.send("Metodo POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
