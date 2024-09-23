// imports
const express = require ("express")
const app = express()
const port = 5000
const mongoose = require ("mongoose")
require ("dotenv").config()



// Connect to MongoDB
// URI = uniform Resources Identifier


const cors = require ("cors")
const productModel = require("./Model/product.model")
const ProductRouter = require ("./routes/product.route")

// Middleware
app.use (express.json({limit: "100mb"}))
app.use (express.urlencoded({extended:true, limit: "100mb"}))
app.use(cors())
app.use ("/product", ProductRouter)
const URI = process.env.MONGO_DB_URI
mongoose.connect(URI)

.then(()=>{
    console.log("Mongo DB is connected")
})
.catch((err)=>{
    console.log ("An error occured oo")
})



// app.put("/editproduct", (req,res)=>{
//     productModel.updateOne()
//     .then((products)=>{
        // console.log(products)
//     })

// })

// app.delete("/deleteproduct", (req,res)=>{
//     productModel.deleteOne()
//     .then((products)=>{
//         console.log(products)
//     })
// })

app.listen(port, (err)=>{
    if (err){
        console.log ("Server is not running")
    }else {
        console.log("server is running")
    }
})