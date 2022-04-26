const productosControllers = require('./../controllers/productosControllers');
const loginToCreate = require('../middlewares/loginToCreate');

const express = require('express');
const router = express.Router();
const path = require('path');
const uploadFile = require('../middlewares/imageVerificacionProduct');

router.get('/', productosControllers.listadoProducto);

router.get('/carrito', productosControllers.carrito);

router.get('/detalleProducto/:id', productosControllers.detalleProducto);

router.get('/listadoProducto', productosControllers.listadoProducto);

router.get('/creacionProducto', loginToCreate, productosControllers.creacionProducto);

router.post('/creacionProducto', uploadFile.array('productFile') ,productosControllers.crear); 

router.get('/edit/:id', productosControllers.editarProducto);
router.put('/edit/:id', uploadFile.array('productFile'), productosControllers.guardarEdicion);

router.get('/crearMarca', productosControllers.agregarMarca);
router.post('/crearMarca', productosControllers.guardarNuevaMarca);

router.get('/obtenerMarcas', productosControllers.listaMarcas);

router.delete('/:id', productosControllers.eliminarProducto);

router.post('/search', productosControllers.search)


module.exports = router;