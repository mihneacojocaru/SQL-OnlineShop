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

module.exports = appRoute;

//--- RAW Queries


appRoute.get('/updateId', asyncHandler(async(req,res,next)=>{
    const result = await sequelize.query("update Customers set id = 1000 where id = 1;");
    return res.status(200).json(result);
}));


appRoute.get('/updateProdId', asyncHandler(async(req,res,next)=>{
    const result = await sequelize.query("update Products set id = 3000 where id = 1;");
    return res.status(200).json(result);
}));

appRoute.get('/updateOrderId', asyncHandler(async(req,res,next)=>{
    const result = await sequelize.query("update Orders set id = 5000 where id = 1;");
    return res.status(200).json(result);
}));

appRoute.get('/updateOrderDetId', asyncHandler(async(req,res,next)=>{
    const result = await sequelize.query("update OrderDetails set id = 7000 where id = 1;");
    return res.status(200).json(result);
}));

