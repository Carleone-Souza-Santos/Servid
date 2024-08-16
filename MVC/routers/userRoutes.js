// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.listUsers);
router.post('/add', userController.createUser);

module.exports = router;