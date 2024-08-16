
const userModel = require('../models/userModel');

function listUsers(req, res) {
  const users = userModel.getAllBancDados();
  res.render('users', { users });
}

function createUser(req, res) {
  const { name, age } = req.body;
  userModel.addUserBancDados(name, parseInt(age));
  res.redirect('/users');
}

module.exports = { listUsers, createUser };
