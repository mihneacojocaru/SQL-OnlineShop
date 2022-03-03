const express = require('express');
const {sequelize} = require('../models');
const { QueryTypes } = require('sequelize');

// const{User,Post} = require('../models');
const {Orders,Customers} = require('../models');

const ordersRoute = express.Router();

function asyncHandler(callBack){
    return async (req,res,next) => {
        try {
            await callBack(req,res,next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ordersRoute;

ordersRoute.get('/orders', asyncHandler(async(req,res,next)=>{
    const orders = await Orders.findAll();
    return res.status(200).json(orders);
}));

ordersRoute.post('/orders', asyncHandler(async(req,res,next)=>{
    const {customer_id} = req.body;
    const customer = await Customers.findByPk(customer_id);
    const item = {};
    item.customer_id = customer_id;
    item.ammount = req.body.ammount;
    item.shipping_address = customer.default_shipping_address;
    item.order_address = customer.billing_address;
    item.order_email = customer.email;
    item.order_status = req.body.order_status;
    const newOrder = await Orders.create(item);
    return res.status(200).json(newOrder);
}));