const express = require('express');
const {sequelize} = require('../models');
const { QueryTypes } = require('sequelize');

// const{User,Post} = require('../models');
const {Customers} = require('../models/');

const customersRoute = express.Router();

function asyncHandler(callBack){
    return async (req,res,next) => {
        try {
            await callBack(req,res,next);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = customersRoute;

customersRoute.get('/customers', asyncHandler(async (req,res,next)=>{
    const customers = await Customers.findAll();
    return res.status(200).json(customers);
}));

customersRoute.post('/customers', asyncHandler(async(req,res,next)=>{
     const {full_name,email,password,billing_address,default_shipping_address,country,phone} = req.body;
     const createCustomer = await Customers.create({full_name,email,password,billing_address,default_shipping_address,country,phone});
     return res.status(200).json(createCustomer);
}));

//--- Authentification check

customersRoute.post('/customers/login', asyncHandler(async (req,res,next)=>{
    const {username, password} = req.body;
    const customer = await Customers.findOne({ where: { email: username, password: password } });
    if (customer === null) {
        return res.status(404).json('[]');    
    }else{ 
        let obj = {}
        obj.id = customer.id;
        obj.customer = customer.full_name;
        return res.status(200).json(obj);
    }
}));