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
    }
}

module.exports = productosControllers
