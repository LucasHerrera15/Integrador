const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
const viewsPath = path.resolve(__dirname, './views');
app.use(express.static(publicPath) );
app.use(express.static(viewsPath) );


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
app.get('/producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/producto.html'))
});
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registro.html'))
});