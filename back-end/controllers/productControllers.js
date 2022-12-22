const productModel=require('../model/productModel')


//addProdut

const addProd=async(req,res)=>{
    try {
        const prod=new productModel({...req.body})
        const existProduct= await productModel.findOne({title:prod.title})
       if (existProduct) {
        return res.status(400).send({msg:"produit deja exist"})
       }
       await prod.save() 
        res.send(prod)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }

}

module.exports={addProd}