const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main-controller');

router.get('/', mainController.getTodos);

router.post('/', mainController.postTodo);

router.delete('/', mainController.deleteTodo);

module.exports = router;