const mainRoutes = require('./src/routes/mainRoutes');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const productosRoutes = require('./src/routes/productosRoutes');
const bodyParser = require('body-parser')


const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')
const {body, validationResult} = require('express-validator')
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE



const publicPath = path.resolve(__dirname, './public');
const viewsPath = path.resolve(__dirname, './views');
app.use(express.static(publicPath) );
app.use(express.static(viewsPath) );
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(session({
    secret:"deluxeSneakersGrupo3",
    resave: false,
    saveUninitialized: false
}));

// Middlewares de app
const usuarioLogeadoNavbar = require('./src/middlewares/usuarioLogeadoNavbar');
app.use(usuarioLogeadoNavbar);

app.use(bodyParser.urlencoded({ extended: false }))

// Rutas 
app.use('/', mainRoutes);
app.use('/users', usuariosRoutes);
app.use('/products', productosRoutes);

// Puerto
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})