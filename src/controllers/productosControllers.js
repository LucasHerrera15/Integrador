const productosControllers =
{
    carrito: (req, res) => {
        res.render('products/carrito');
    },
    detalleProducto: (req, res) => {
        res.render('products/detalleProducto');
    },

    listadoProducto: (req, res) => {
        res.render('products/listadoProducto');
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
