const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../database/dataProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productosControllers =
{
    carrito: (req, res) => {
        res.render('products/carrito');
    },
    detalleProducto: (req, res) => {
		const {id} = req.params;
		db.Zapatilla.findByPk(
			id
		).then((productSelected) => {
			console.log(productSelected)
			return res.render('products/detalleProducto', {productSelected : productSelected})
		})
	},
    listadoProducto: (req, res) => {
        res.render('products/listadoProducto', {p: productos});
    }, 

    creacionProducto: (req, res) => {
		db.Marca.findAll()
		.then((allMarcas) =>{
			res.render('products/creacionProducto', {allMarcas: allMarcas})
		})
        /* res.render('products/creacionProducto'); */
    },

    crear: (req, res) => {
		const {modelo, talle, precio, descripcion, descuento} = req.body

		
		let date = new Date();
		db.Zapatilla.create({
			modelo,
			talle,
			precio,
			descuento,
			fechaCreacion: date.toISOString(),
			descripcion,
			stock:  true,
			imagen: req.files[0].filename,
			marcaFK: 1
		}).then((productCreated)=>{
			res.redirect('/');
		})  
	},

    editarProducto: (req, res) => {
		const {id} = req.params
		db.Zapatilla.findByPk(
			id
		).then((productEdit => {
			res.render('products/editarProducto', {productEdit : productEdit});
		}))
	},

    guardarEdicion: (req, res) => {
	   const {modelo, talle, precio, descripcion, descuento} = req.body
	   let date = new Date();
		db.Zapatilla.update({
			modelo,
			talle,
			precio,
			descuento,
			fechaCreacion: date.toISOString(),
			descripcion,
			stock:  true,
			imagen: req.files[0].filename,
			marcaFK: 1
		},{
			where: {
				id : req.params.id
			}
		}).then((productEdited)=>{
			 res.redirect('/');
		})
    },  
	agregarMarca: (req, res) => {
		res.render("products/crearMarca");
	},
	guardarNuevaMarca: (req, res) => {
		db.Marca.findOne({
			where: {
				nombreMarca: req.body.nombreMarca
			}
		}).then((nuevaMarca) =>{
			if(nuevaMarca){
				return res.render('products/creacionProducto', {
					errors: {
						marca: {
							msg: 'Esta marca ya existe.'
						}
					}
				})
			} else {
				db.Marca.create({
					nombreMarca: req.body.nombreMarca
				}).then((marcaCreada) =>{
					db.Marca.findAll()
					.then((allMarcas) =>{
						res.render('products/creacionProducto', {allMarcas: allMarcas})
				})
				})
			}
		})
	},
	listaMarcas: (req, res) => {
		db.Marca.findAll()
		.then((allMarcas) =>{
			res.render('products/creacionProducto', {allMarcas: allMarcas})
		})
	},

    eliminarProducto:(req, res) => {

		let idProductoSeleccionado = req.params.id;

		let products2 = productos.filter(function(element){
			return element.id!=idProductoSeleccionado;
		})

		db.zapatilla.destroy({
			where: {
				id: products2
			}
		}).then((resultado)=>{
			{}
		})

	    res.redirect('/');


    },
}

module.exports = productosControllers
