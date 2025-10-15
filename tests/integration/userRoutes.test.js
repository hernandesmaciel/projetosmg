const request = require("supertest");
const app = require("../../src/app");

describe("Rotas de Usuário", () => {
  it("GET /users deve retornar lista dos usuários", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
  });
});
