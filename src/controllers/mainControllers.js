const db = require('../database/models');


const mainControllers =
{
    index: (req, res) => {
        
        db.Zapatilla.findOne(
        ).then((productIndex) => {
         res.render('index', {productIndex: productIndex})   
        })
        
    }
}

module.exports = mainControllers