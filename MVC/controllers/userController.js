
const userModel = require('../models/userModel');

const listUsers = (req, res) => {
  const users = userModel.getAllBancDados();
  res.render('users', { users });
}

const createUser = (req, res) => {
  const { name, age } = req.body;
  userModel.addUserBancDados(name, parseInt(age));
  res.redirect('/users');
}

module.exports = { listUsers, createUser };
