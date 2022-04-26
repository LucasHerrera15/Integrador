const productosControllers = require('./../controllers/productosControllers');
//middlewares
const loginToCreate = require('../middlewares/loginToCreate');
const uploadFile = require('../middlewares/imageVerificacionProduct');
const validateCreateProduct = require('../middlewares/createProductVerificator')
const sharp = require('sharp');

const express = require('express');
const router = express.Router();



router.get('/', productosControllers.listadoProducto);

router.get('/carrito',loginToCreate, productosControllers.carrito);

router.post('/carrito', loginToCreate, productosControllers.carrito);

router.get('/detalleProducto/:id', productosControllers.detalleProducto);

router.get('/listadoProducto', productosControllers.listadoProducto);

router.get('/creacionProducto', loginToCreate, productosControllers.creacionProducto);

router.post('/creacionProducto', validateCreateProduct, uploadFile.single('productFile'),/* (req,res)=>{
    sharp('/images/products/productFile').resize(200,200)
    .jpeg({quality : 50}).toFile('/images/products/productFile');
}, */ productosControllers.crear); 

router.get('/edit/:id', productosControllers.editarProducto);
router.put('/edit/:id', uploadFile.single('productFile'),/* (req,res)=>{
    sharp(__dirname + '/images/products/productFile').resize(200,200)
    .jpeg({quality : 50}).toFile(__dirname + '/images/products/productFile');}, */productosControllers.guardarEdicion);

router.get('/crearMarca', productosControllers.agregarMarca);
router.post('/crearMarca', productosControllers.guardarNuevaMarca);

router.get('/obtenerMarcas', productosControllers.listaMarcas);

router.delete('/:id', productosControllers.eliminarProducto);

router.post('/search', productosControllers.search)


module.exports = router;