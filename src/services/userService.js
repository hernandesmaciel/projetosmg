let usuarios = [{ id: 1, nome: "Hernandes" }];

exports.getUsuarios = () => usuarios;

exports.addUsuario = (novoUsuario) => {
  const novo = { id: usuarios.length + 1, ...novoUsuario };
  usuarios.push(novo);
  return novo;
};
