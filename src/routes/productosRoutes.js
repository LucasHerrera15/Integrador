const productosControllers = require('./../controllers/productosControllers');

const express = require('express');
const router = express.Router();



router.get('/productos/carrito', productosControllers.carrito);
router.get('/productos/detalleProducto', productosControllers.detalleProducto);
router.get('/productos/listadoProducto', productosControllers.listadoProducto);



module.exports = router;