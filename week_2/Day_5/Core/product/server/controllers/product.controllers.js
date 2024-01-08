const Product = require("../models/product")

module.exports.getAll=(req,res)=>{
    Product.find().sort({title:1}).then(allProducts=>res.json(allProducts)).catch(err=>res.json(err))
}

module.exports.getOne=(req,res)=>{
    Product.findById({_id:req.params.id}).then(product=>res.json(product)).catch(err=>res.json(err))
}

module.exports.createProduct=(req,res)=>{
    Product.create(req.body).then(newProduct=>res.json(newProduct)).catch(err=>res.json(err))
}

module.exports.update=(req,res)=>{
    Product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true}).then(updatedProduct=>res.json(updatedProduct)).catch(err=>res.json(err))
}

module.exports.delete=(req,res)=>{
    Product.deleteOne({_id:req.params.id}).then(result=>res.json(result)).catch(err=>res.json(err))
}