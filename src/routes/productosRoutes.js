const productosControllers = require('./../controllers/productosControllers');

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images/products'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imagenproducto = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imagenproducto);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });

router.get('/', productosControllers.listadoProducto);

router.get('/carrito', productosControllers.carrito);

router.get('/detalleProducto/:id', productosControllers.detalleProducto);

router.get('/listadoProducto', productosControllers.listadoProducto);

router.get('/creacionProducto', productosControllers.creacionProducto);
router.post('/creacionProducto', uploadFile.single('imagenproducto') ,productosControllers.crear); 

router.get('/edit/:id', productosControllers.editarProducto);
router.put('/edit/:id', productosControllers.guardarEdicion);

router.delete('/:id', productosControllers.eliminarProducto);



module.exports = router;