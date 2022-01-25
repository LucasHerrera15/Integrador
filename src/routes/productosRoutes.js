const productosControllers = require('./../controllers/productosControllers');

const express = require('express');
const router = express.Router();



router.get('/carrito', productosControllers.carrito);
router.get('/detalleProducto/:id', productosControllers.detalleProducto);
router.get('/listadoProducto', productosControllers.listadoProducto);
router.get('/creacionProducto', productosControllers.creacionProducto);
router.get('/:id/edit'), productosControllers.editarProducto);
router.put('/:id'), productosControllers.updateProducto);
router.delete('/:id'), productosControllers.eliminarProducto);



module.exports = router;