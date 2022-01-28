const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productosbase.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");






const productosControllers =
{
    carrito: (req, res) => {
        res.render('products/carrito');
    },
    detalleProducto: (req, res) => {
        res.render('products/detalleProducto');
    },

    listadoProducto: (req, res) => {
        res.render('products/listadoProducto', {p: products});
    },
    creacionProducto: (req, res) => {
        res.render('products/creacionProducto');
    },
    editarProducto: (req, res) => {
        res.render('products/editarProducto');
    },
    eliminarProducto: (req, res) => {
        res.render('products/eliminarProducto');
    },
    updateProducto: (req, res) => {
        res.render('products/updateProducto');
    },

}

module.exports = productosControllers
