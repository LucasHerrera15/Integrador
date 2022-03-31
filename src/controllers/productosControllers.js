const fs = require('fs');
const path = require('path');
/* const db = require('../database/models'); */

const productsFilePath = path.join(__dirname, '../database/dataProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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

    creacionProducto: (req, res) => {
        res.render('products/creacionProducto');
    },

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

		fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,' '));

		res.redirect('/');
	},

    editarProducto: (req, res) => {
        let idProductoSeleccionado = req.params.id;
		/* let productoSeleccionado;

		for (let p of productos){

			if(p.id==idProductoSeleccionado){
				productoSeleccionado=p;
				break;
			}
		} */
		res.render('products/editarProducto',{idProductoSeleccionado});
		console.log(idProductoSeleccionado)
    },

    guardarEdicion: (req, res) => {
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

    eliminarProducto:(req, res) => {

		let idProductoSeleccionado = req.params.id;

		let products2 = productos.filter(function(element){
			return element.id!=idProductoSeleccionado;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(products2,null,' '));

	    res.redirect('/');


    },
	
    updateProducto: (req, res) => {
        res.render('products/updateProducto');
    },

}

module.exports = productosControllers
