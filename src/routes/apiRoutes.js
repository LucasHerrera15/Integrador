const apiControllers = require('./../controllers/ApiControllers');

const express = require('express');
const router = express.Router();

router.get('/listaUsuarios', apiControllers.usersList);

router.get('/listaUsuarios/:id', apiControllers.user);

router.get('/listaProductos', apiControllers.productsList);

router.get('/listaProductos/:id', apiControllers.product);

router.get('/listaEmail', apiControllers.emails);

module.exports = router;