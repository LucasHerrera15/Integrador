const fs = require('fs');
const path = require('path');
const db = require('../database/models');
/* const sharp = require('sharp'); */
const { Console } = require('console');
const productsFilePath = path.join(__dirname, '../database/dataProductos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productosControllers =
{
    carrito: (req, res) => {
		if(req.body.productId){

			const id = req.body.productId;
			db.Zapatilla.findByPk(
				id
			).then((productSelected) =>{
				db.Carrito.create({
					usuarioFK: productSelected.usuarioFK,
					zapatillaFK: productSelected.id,
					modelo: productSelected.modelo,
					imagen: productSelected.imagen,
					precio: productSelected.precio, 
					talle: productSelected.talle,
					cantidad: 1
				}).then((carritoCreated) =>{
					const {id}= req.session.usuarioLogeado
					db.Carrito.findAll( 
						{where : { 
							usuarioFK : id
						}
					})
					.then((carritoFinished) =>{
						res.render('products/carrito', {carritoFinished: carritoFinished});	
					}); 
					})
				})
		} else {
			const {id}= req.session.usuarioLogeado
					db.Carrito.findAll( 
						{where : { 
							usuarioFK : id
						}
					})
					.then((carritoFinished) =>{
						res.render('products/carrito', {carritoFinished: carritoFinished});	
					}); 
		}
    },
	eliminarCarrito: (req, res) =>{
		const id = req.body.carritoId;
		db.Carrito.destroy({
			where : {
				id: id
			}
		}).then((carritoEliminado)=>{
			res.redirect('/')
		})
	},
    detalleProducto: (req, res) => {
		const {id} = req.params;
		db.Zapatilla.findByPk(
			id
		).then((productSelected) => {
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
    },

    crear: (req, res) => {
/* 		let errors = validationResult(req); */
		const {modelo, marca, talle, precio, descripcion, descuento} = req.body
		const {id}= req.session.usuarioLogeado
		let date = new Date();
		/* if(errors.isEmpty()){ */
			db.Zapatilla.create({
				modelo,
				talle,
				precio,
				descuento,
				fechaCreacion: date.toISOString(),
				descripcion,
				stock:  true,
				imagen: req.file.filename,
				marcaFK: marca,
				usuarioFK: id
			}).then((productCreated)=>{
				res.redirect('/');
			}) 
		/* } else {
			res.render('products/creacionProducto', {errors: errors.mapped(), old: req.body})
		} */
	},

    editarProducto: (req, res) => {
		const {id} = req.params
		db.Zapatilla.findByPk(
			id
		).then((productEdit => {
			db.Marca.findAll()
		.then((allMarcas) =>{
			res.render('products/editarProducto', {productEdit : productEdit, allMarcas : allMarcas});
			})
		}))
	},

    guardarEdicion: (req, res) => {
	   const {modelo,marca, talle, precio, descripcion, descuento} = req.body
	   let date = new Date();
		db.Zapatilla.update({
			modelo,
			talle,
			precio,
			descuento,
			fechaCreacion: date.toISOString(),
			descripcion,
			stock:  true,
			imagen: req.file.filename,
			marcaFK: marca
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
	usuarioProductos : (req, res) => {
		const {id} = req.session.usuarioLogeado;
		db.Zapatilla.findAll({
			where: {
				usuarioFK: id
			}
		})
		.then((usuarioProducts) => {
			res.render('products/usuarioProductos', {usuarioProducts: usuarioProducts})
		})
	},

    eliminarProducto:(req, res) => {
		const id = req.body.productId;
		db.Zapatilla.destroy({
			where : {
				id: id
			}
		}).then((productEliminado)=>{
			res.redirect('/')
		})
    },
	search:(req,res) =>{
		db.Zapatilla.findAll({
			where: {
				modelo: {
					[db.Sequelize.Op.like]: `%${req.body.buscar}%`
				}
			},
			order: [
				['modelo', 'DESC']
			]
		}).then((productSelected)=>{
		return res.render('products/productSearch', {productSelected : productSelected})
		})
	},
}


module.exports = productosControllers
