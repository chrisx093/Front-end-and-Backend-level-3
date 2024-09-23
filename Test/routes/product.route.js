const express = require ("express")
const router = express.Router()
const ProductModel = require("../Model/product.model")
const { fetchAllProduct, createProduct, uploadImage } = require("../controller/product.controller")
fetchAllProduct

router.get("/allproduct", fetchAllProduct )

router.post("/createProduct", createProduct )
router.post ("/uploadImage", uploadImage)
module.exports = router