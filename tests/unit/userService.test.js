const userService = require("../../src/services/userService");

test("deve adicionar um novo usuário", () => {
  const usuario = { nome: "Hernandes" };
  const resultado = userService.addUsuario(usuario);
  expect(resultado.nome).toBe("Hernandes");
});
