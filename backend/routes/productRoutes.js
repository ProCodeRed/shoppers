import express from "express";
const router = express.Router();
import Product from '../models/productModal.js'
import asyncHandler from 'express-async-handler'


// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler( async (req, res) => {
    const products = await Product.find({}) // find all 
    res.json(products) // convert into json content type
 }))

// @desc Fetch Single product
// @route GET /api/products/:id
// @access Public
 router.get('/:id', asyncHandler( async (req, res) => {
//    const product = products.find((p) => p._id === req.params.id)
    const product = await Product.findById(req.params.id)

    // checking if product is avalible
    // product ? res.json(product) : res.status(404).json({message: 'Product not found'})


    // using this as we have created custom middleware for error
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
   
 }))




export default router