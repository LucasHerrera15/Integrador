//Rutas
const mainRoutes = require('./src/routes/mainRoutes');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const productosRoutes = require('./src/routes/productosRoutes');
const apiRoutes = require('./src/routes/apiRoutes');


                
const express = require('express');
const path = require('path');
const session = require('express-session');
const {body, validationResult} = require('express-validator')
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const cookies = require('cookie-parser');

const app = express();

const publicPath = path.resolve(__dirname, './public');
const viewsPath = path.resolve(__dirname, './views');
app.use(express.static(publicPath) );
app.use(express.static(viewsPath) );

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());  

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({
    secret:"deluxeSneakersGrupo3",
    resave: false,
    saveUninitialized: false
}));
app.use(cookies());

// Middlewares de app
const userLogedNavbar = require('./src/middlewares/userLogedNavBar');
app.use(userLogedNavbar);


// Rutas 
app.use('/', mainRoutes);
app.use('/users', usuariosRoutes);
app.use('/products', productosRoutes);
app.use('/api', apiRoutes)

// Puerto
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})