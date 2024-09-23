const ProductModel = require ("../Model/product.model")
const cloudinary = require ("cloudinary").v2;
const dotenv = require("dotenv")
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CloudName,
    api_key:process.env.CloudAPI,
    api_secret:process.env.CloudSecret,
})

const fetchAllProduct = (req,res)=>{
    ProductModel.find()
    .then((products)=>{
        console.log(products)
    })
} 
 const createProduct = (req,res)=>{
    console.log(req.body)
    let form = new ProductModel(req.body)
    form.save()
    .then(()=>{
        console.log("saved succesfully")
        res.send({status:true, message:"Data saved succesfully"})
    })
    .catch((err)=>{
        console.log("not saved", err)
        res.send({status:false, message:"Data not saved"})
    })
}

const uploadImage = (req,res) =>{
    let media = req.body.media

    cloudinary.uploader.upload(media, (error,result)=>{
        let mediaUrl = result.secure_url
        res.send({mediaUrl:mediaUrl})
    })
}

module.exports = {fetchAllProduct, createProduct, uploadImage}