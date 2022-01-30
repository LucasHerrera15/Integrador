const productosControllers = require('./../controllers/productosControllers');

const express = require('express');
const router = express.Router();


router.get('/', productosControllers.listadoProducto);
router.get('/carrito', productosControllers.carrito);
router.get('/detalleProducto', productosControllers.detalleProducto);
router.get('/listadoProducto', productosControllers.listadoProducto);
router.get('/creacionProducto', productosControllers.creacionProducto);
//Editar productos
router.get('/edit/:id', productosControllers.editarProducto);
router.put('/edit/:id', productosControllers.updateProducto);


router.delete('/:id', productosControllers.eliminarProducto);



module.exports = router;