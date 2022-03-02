const express = require('express');
const {sequelize} = require('../models');
const { QueryTypes } = require('sequelize');

// const{User,Post} = require('../models');
const {Customers,Products,Orders,OrderDetails} = require('../models/');

const appRoute = express.Router();

function asyncHandler(callBack){
    return async (req,res,next) => {
        try {
            await callBack(req,res,next);
        } catch (error) {
            next(error);
        }
    }
}

//--- Customers

appRoute.get('/customers', asyncHandler(async (req,res,next)=>{
    const customers = await Customers.findAll();
    return res.status(200).json(customers);
}));

appRoute.post('/customers', asyncHandler(async(req,res,next)=>{
     const {full_name,email,password,billing_address,default_shipping_address,country,phone} = req.body;
     const createCustomer = await Customers.create({full_name,email,password,billing_address,default_shipping_address,country,phone});
     return res.status(200).json(createCustomer);
}));

module.exports = appRoute;

//--- Products

appRoute.get('/products', asyncHandler(async(req,res,next)=>{
    const products = await Products.findAll();
    return res.status(200).json(products);
}));

appRoute.post('/products', asyncHandler(async(req,res,next)=>{
    const {product_name,image_url,price,stock} = req.body;
    const newProduct = await Products.create({product_name,image_url,price,stock});
    return res.status(200).json(newProduct);
}));

//--- Orders

appRoute.get('/orders', asyncHandler(async(req,res,next)=>{
    const orders = await Orders.findAll();
    return res.status(200).json(orders);
}));

appRoute.post('/orders', asyncHandler(async(req,res,next)=>{
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

//--- Order Details

appRoute.post('/orderDetails', asyncHandler(async(req,res,next)=>{
    const orderDetail = req.body;
    const product = await Products.findByPk(orderDetail.product_id);
    orderDetail.price = orderDetail.quantity * product.price;
    const newOrderDetail = await OrderDetails.create(orderDetail);
    return res.status(200).json(newOrderDetail);
}));
