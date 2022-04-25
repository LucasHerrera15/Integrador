const db = require('../database/models');


const mainControllers =
{
    index: (req, res) => {
        
        db.Zapatilla.findAll(
        ).then((productIndex) => {
         res.render('index', {productIndex: productIndex})   
        })
        
    }
}

module.exports = mainControllers