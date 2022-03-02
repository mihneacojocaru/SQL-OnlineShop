'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetails.init({
    order_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type:DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    quantity: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    createdAt: false,
    updatedAt: false,
  });

  OrderDetails.associate=(models)=>{
    OrderDetails.belongsTo(models.Orders,{
      as:'order_details_id',
      foreignKey:{
        fieldName:'order_id',
        allowNull:false
      },
      onDelete:'Cascade'
    })
    OrderDetails.belongsTo(models.Products,{
      foreignKey:{
        fieldName:'product_id',
        allowNull:false
      },
      onDelete:'Cascade'
    })
    
  }

  return OrderDetails;
};