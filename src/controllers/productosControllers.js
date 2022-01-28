const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../database/dataProductos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");






const productosControllers =
{
    carrito: (req, res) => {
        res.render('products/carrito');
    },
    detalleProducto: (req, res) => {
        let idProductoSeleccionado = req.params.id;
		let productoSeleccionado;

		for (let p of productos){

			if(p.id==idProductoSeleccionado){
				productoSeleccionado=p;
				break;
			}
		}
        res.render('products/detalleProducto', {productos: productoSeleccionado});
    },

    listadoProducto: (req, res) => {
        res.render('products/listadoProducto', {p: productos});
    },
    // Crear Producto pagina
    creacionProducto: (req, res) => {
        res.render('products/creacionProducto');
    },
    // Crear Producto
    crear: (req, res) => {
		
		let nuevoID=(productos[productos.length-1].id)+1 
		
		let productoNuevo = {
			id: nuevoID,
			name: req.body.producto,
			description: req.body.descripcion,
			price: req.body.precio,
			discount: req.body.descuento,
            talle: req.body.talle,
			image: req.file.filename,
			category: "En stock"		
		}
		productos.push(productoNuevo)

		fs.writeFileSync(productosFilePath, JSON.stringify(productos,null,' '));

		res.redirect('/');
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
