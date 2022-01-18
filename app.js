const mainRoutes = require('./src/routes/mainRoutes');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const productosRoutes = require('./src/routes/productosRoutes');


const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
const viewsPath = path.resolve(__dirname, './views');
app.use(express.static(publicPath) );
app.use(express.static(viewsPath) );
app.set('view engine', 'ejs');
app.set('views', './src/views');


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})
app.use('/', mainRoutes);
app.use('/users', usuariosRoutes);
app.use('/products', productosRoutes);
