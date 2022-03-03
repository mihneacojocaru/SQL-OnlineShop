const express = require('express');
const {sequelize} = require('../models');
const { QueryTypes } = require('sequelize');

// const{User,Post} = require('../models');
const {Products} = require('../models/');

const productsRoute = express.Router();

function asyncHandler(callBack){
    return async (req,res,next) => {
        try {
            await callBack(req,res,next);
        } catch (error) {
            next(error);
        }
    }
}

//--- Products

productsRoute.get('/products', asyncHandler(async(req,res,next)=>{
    const products = await Products.findAll();
    return res.status(200).json(products);
}));

productsRoute.post('/products', asyncHandler(async(req,res,next)=>{
    const {product_name,image_url,price,stock} = req.body;
    const newProduct = await Products.create({product_name,image_url,price,stock});
    return res.status(200).json(newProduct);
}));

module.exports = productsRoute;