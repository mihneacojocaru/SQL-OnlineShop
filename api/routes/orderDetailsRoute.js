const express = require('express');
const {sequelize} = require('../models');
const { QueryTypes } = require('sequelize');

// const{User,Post} = require('../models');
const {OrderDetails,Products} = require('../models');

const orderDetailsRoute = express.Router();

function asyncHandler(callBack){
    return async (req,res,next) => {
        try {
            await callBack(req,res,next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = orderDetailsRoute;

orderDetailsRoute.get('/orderDetails', asyncHandler(async(req,res,next)=>{
    const orderDetails = await OrderDetails.findAll();
    return res.status(200).json(orderDetails);
}));

orderDetailsRoute.post('/orderDetails', asyncHandler(async(req,res,next)=>{
    const orderDetail = req.body;
    const product = await Products.findByPk(orderDetail.product_id);
    orderDetail.price = orderDetail.quantity * product.price;
    const newOrderDetail = await OrderDetails.create(orderDetail);
    return res.status(200).json(newOrderDetail);
}));