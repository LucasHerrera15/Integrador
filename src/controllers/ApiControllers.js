const db = require('../database/models');

const apiController = {
    usersList: (req, res) => {
        db.Usuario.findAll()
        .then(users => {
            return res.json({
                total: users.length,
                data: users
            })
            }
        )},
    user: (req, res) => {
        db.Usuario.findByPk(req.params.id)
        .then(user => {
            return res.json({
                data: user
            })
        })
    },
    productsList: (req, res) => {
        db.Zapatilla.findAll()
        .then(products => {
            return res.json({
                total: products.length,
                data: products
            })
            }
        )},
        product: (req, res) => {
            db.Zapatilla.findByPk(req.params.id)
            .then(product => {
                return res.json({
                    data: product
                })
            })
        }
}
module.exports = apiController;