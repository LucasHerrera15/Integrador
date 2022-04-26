const path = require('path');


const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images/users'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) { 
        console.log(file)         // request, archivo y callback que almacena archivo en destino
     const imagenusers = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imagenusers);         
    }
});

const fileFilter = (req, file, cb) => {
    if(((file.mimetype).includes('jpeg')) || ((file.mimetype).includes('png')) || ((file.mimetype).includes('jpg'))){
        cb(null, true);
    } else{
        cb(null, true);
    }

};

const limits = {
    fileSize: 1024 * 1024 * 2,
    fieldNameSize: 200
}

const uploadFile = multer({storage: multerDiskStorage, fileFilter:fileFilter, limits:limits})

module.exports = uploadFile