const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/dataProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
        let idProductoSeleccionado = req.params.id;
		let productoSeleccionado;

		for (let p of productos){

			if(p.id==idProductoSeleccionado){
				productoSeleccionado=p;
				break;
			}
		}
		res.render('editarProducto',{producto: productoSeleccionado});
    },
    guardarEdición: (req, res) => {
        let idProducto = req.params.id;
        let datos = req.body;

        for(let p of productos){
            if(p.id==idProducto){
				p.nombre = datos.nombre;
                p.descripcion = datos.descripcion;
                p.imagen = datos.imagen;
				p.precio = datos.precio;
                p.talle = datos.talle
				p.descuento = datos.descuento;
				p.estado = datos.estado
				break;
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,' '));

	    res.redirect('/detalleProducto');
    },    
    eliminarProducto: (req, res) => {
        res.render('products/eliminarProducto');
    },
    updateProducto: (req, res) => {
        res.render('products/updateProducto');
    },

}

module.exports = productosControllers
