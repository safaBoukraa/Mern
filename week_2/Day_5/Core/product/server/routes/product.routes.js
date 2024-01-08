const productController = require('../controllers/product.controllers')

module.exports = app=>{
    app.get('/api/products',productController.getAll)
    app.get('/api/products/:id',productController.getOne)
    app.post('/api/products',productController.createProduct)
    app.put('/api/products/:id',productController.update)
    app.delete('/api/products/:id',productController.delete)
}