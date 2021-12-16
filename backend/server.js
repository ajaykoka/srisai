// const express = require('express');
import express from'express';
//import dotenv from 'dotenv';

const app = express();

// const products= require('./data/products')
import products from './data/products.js'

app.get('/api/products', (req, res) => {
    res.json(products)

})
//Setting api for single product listing
app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p) => p._id === req.params.id)
    //checking id in url and matching with json-id
    res.json(product)
})

app.listen(5080,console.log('Server is running on port 5080'));