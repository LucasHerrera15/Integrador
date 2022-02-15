// Importados
const mainRoutes = require('./src/routes/mainRoutes');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const productosRoutes = require('./src/routes/productosRoutes');

// 
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-sesion')

const publicPath = path.resolve(__dirname, './public');
const viewsPath = path.resolve(__dirname, './views');
app.use(express.static(publicPath) );
app.use(express.static(viewsPath) );
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(session({secret:"deluxeSneakers"}));


app.use('/', mainRoutes);
app.use('/users', usuariosRoutes);
app.use('/products', productosRoutes);


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})