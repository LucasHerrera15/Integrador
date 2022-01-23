const productosControllers = require('./../controllers/productosControllers');

const express = require('express');
const router = express.Router();



router.get('/carrito', productosControllers.carrito);
router.get('/detalleProducto', productosControllers.detalleProducto);
router.get('/listadoProducto', productosControllers.listadoProducto);
router.get('/creacionProducto', productosControllers.creacionProducto);



module.exports = router;