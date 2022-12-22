const express=require('express')
const { addProd } = require('../controllers/productControllers')
const router=express.Router()
//addProduct
/**
 * @method POST /product/add
 * @description add new product
 * @acces public
 */
router.post('/add',addProd)




module.exports=router