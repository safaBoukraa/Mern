const author= require("../models/author")

module.exports.getAll=(req,res)=>{
    author.find().sort({title:1}).then(allAuthors=>res.json(allAuthor)).catch(err=>res.json(err))
}

module.exports.getOne=(req,res)=>{
    author.findById({_id:req.params.id}).then(author=>res.json(author)).catch(err=>res.json(err))
}

module.exports.createAuthor=(req,res)=>{
    author.create(req.body).then(newAuthor=>res.json(newAuthor)).catch(err=>res.json(err))
}

module.exports.update=(req,res)=>{
    author.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true}).then(updatedAuthor=>res.json(updatedAuthor)).catch(err=>res.json(err))
}

module.exports.delete=(req,res)=>{
    author.deleteOne({_id:req.params.id}).then(result=>res.json(result)).catch(err=>res.json(err))
}