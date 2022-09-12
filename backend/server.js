 import express from 'express';
 import dotenv  from 'dotenv';
 import products from './data/products.js';
 import connectDB from './config/db.js'


dotenv.config();
const PORT = process.env.PORT || 5000
const mode = process.env.NODE_ENV
const app = express();
connectDB();

 app.get('/', (req, res) => {
    res.send('API is running')
 })

 app.get('/api/products', (req, res) => {
    res.json(products) // convert into json content type
 })

//  GET req product by id
 app.get('/api/products/:id', (req, res) => {
   const product = products.find((p) => p._id === req.params.id)
   res.json(product)
 })

 app.listen(PORT, console.log(`Server running in ${mode} mode on port ${PORT}`))