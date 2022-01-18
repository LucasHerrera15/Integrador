const productosControllers =
{
    carrito: (req, res) => {
        res.render('carrito');
    },

    
    detalleProducto: (req, res) => {
        res.render('detalleProducto');
    },

    listadoProducto: (req, res) => {
        res.render('listadoProducto');
    }
}

module.exports = productosControllers
