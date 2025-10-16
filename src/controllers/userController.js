const userService = require("../services/userService");

exports.listarUsuarios = (req, res) => {
  const usuarios = userService.getUsuarios();
  res.json(usuarios);
};

exports.criarUsuario = (req, res) => {
  const novo = userService.addUsuario(req.body);
  res.status(201).json(novo);
};
