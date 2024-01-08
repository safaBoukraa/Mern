const mongoose=require('mongoose')

const ProductSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"{PATH} is required"],
        minLength:[2,"{PATH} should be at least 2 characters"]
    },
    price:{
        type:Number,
        required:[true,"{PATH} is required"],
    },
    description:{
        type:String,
        required:[true,"{PATH} is required"],
        minLength:[5,"{PATH} should be at least 5 characters"]
    }
},{timeStamps:true})

const Product = mongoose.model("Products",ProductSchema);
module.exports = Product