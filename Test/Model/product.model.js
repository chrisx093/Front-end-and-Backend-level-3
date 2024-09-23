const mongoose = require ("mongoose")
const productSchema = mongoose.Schema({
    productName : {type:String, required:true},
    productPrice:{type:Number, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    dateAdded:{type:String, default:Date.now()}
})
const productModel = mongoose.model("products_collection", productSchema)

module.exports = productModel