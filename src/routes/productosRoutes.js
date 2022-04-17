const productosControllers = require('./../controllers/productosControllers');
const loginToCreate = require('../middlewares/loginToCreate');

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images/products'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) { 
        console.log(file)         // request, archivo y callback que almacena archivo en destino
     const imagenproducto = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imagenproducto);         
    }
});

const upload = multer({ storage: multerDiskStorage });

router.get('/', productosControllers.listadoProducto);

router.get('/carrito', productosControllers.carrito);

router.get('/detalleProducto/:id', productosControllers.detalleProducto);

router.get('/listadoProducto', productosControllers.listadoProducto);

router.get('/creacionProducto', loginToCreate, productosControllers.creacionProducto);

router.post('/creacionProducto', upload.array('productFile') ,productosControllers.crear); 

router.get('/edit/:id', productosControllers.editarProducto);
router.put('/edit/:id', upload.array('productFile'), productosControllers.guardarEdicion);

router.get('/crearMarca', productosControllers.agregarMarca);
router.post('/crearMarca', productosControllers.guardarNuevaMarca);

router.get('/obtenerMarcas', productosControllers.listaMarcas);

router.delete('/:id', productosControllers.eliminarProducto);


module.exports = router;