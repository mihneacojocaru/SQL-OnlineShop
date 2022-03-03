const express = require('express');
  const cors = require('cors');
  const {sequelize} = require('./models');
  //const {appRoute, productsRoute} = require('./routes');

  const appRoute = require('./routes/appRoute.js');
  const productsRoute = require('./routes/productsRoute.js');
  const customersRoute = require('./routes/customersRoute.js');
  const ordersRoute = require('./routes/ordersRoute.js');
  const orderDetailsRoute = require('./routes/orderDetailsRoute.js');

  const app = express();

  const port = 3500;

  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  app.use(cors());

  
  app.use('/db/v1/onlineStore', appRoute);
  app.use('/db/v1/onlineStore', productsRoute);
  app.use('/db/v1/onlineStore', customersRoute);
  app.use('/db/v1/onlineStore', ordersRoute);
  app.use('/db/v1/onlineStore', orderDetailsRoute);

  app.use((errMsg,req,res,next)=>{
    const err = new Error(errMsg);
    err.status = 404;
    next(err);
  });

  app.use((errMsg,req,res,next)=>{
      res.status(errMsg.status || 500);
      res.json({
          error:{
              message:errMsg.message
          }
      })
  });

  app.listen({port}, async()=>{
    console.log(`Server up on http://localhost:${port}/`);
    await sequelize.sync();
    //await sequelize.sync({ force: true });
    console.log('Database Connected!');
  });