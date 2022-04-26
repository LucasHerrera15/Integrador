const productosControllers = require('./../controllers/productosControllers');
//middlewares
const loginToCreate = require('../middlewares/loginToCreate');
const uploadFile = require('../middlewares/imageVerificacionProduct');
const validateCreateProduct = require('../middlewares/createProductVerificator')


const express = require('express');
const router = express.Router();



router.get('/', productosControllers.listadoProducto);

router.get('/usuarioProductos',loginToCreate, productosControllers.usuarioProductos)

router.get('/carrito',loginToCreate, productosControllers.carrito);
router.post('/carrito', loginToCreate, productosControllers.carrito);
router.delete('/eliminarCarrito/:id', productosControllers.eliminarCarrito);

router.get('/detalleProducto/:id', productosControllers.detalleProducto);

router.get('/listadoProducto', productosControllers.listadoProducto);

router.get('/creacionProducto', loginToCreate, productosControllers.creacionProducto);
router.post('/creacionProducto', validateCreateProduct, uploadFile.single('productFile'), productosControllers.crear); 

router.get('/edit/:id', productosControllers.editarProducto);
router.put('/edit/:id', uploadFile.single('productFile'), productosControllers.guardarEdicion);

router.get('/crearMarca', productosControllers.agregarMarca);
router.post('/crearMarca', productosControllers.guardarNuevaMarca);
router.get('/obtenerMarcas', productosControllers.listaMarcas);

router.delete('/eliminarProducto/:id', productosControllers.eliminarProducto);

router.post('/search', productosControllers.search)


module.exports = router;