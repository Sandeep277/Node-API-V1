const express = require('express')
const router = express.Router();

const {
    getProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')

// fetching data from the database
router.get('/', getProducts)
router.get('/:id', getOneProduct)


// update a product  
router.put('/:id', updateProduct)

//saving data to the database (post)
router.post('/', addProduct)

// delete 
router.delete('/:id', deleteProduct)


module.exports = router;