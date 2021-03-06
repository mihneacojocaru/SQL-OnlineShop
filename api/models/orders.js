'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Orders.init({
    customer_id: DataTypes.INTEGER,
    ammount: DataTypes.INTEGER,
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    createdAt: false,
    updatedAt: false,
  });

  Orders.associate = (models)=>{

    Orders.belongsTo(models.Customers,{
      as:'c_id',
      foreignKey:{
        fieldName:'customer_id',
        allowNull:false,
      },
      onDelete:'Cascade',
    })

    Orders.hasMany(models.OrderDetails,{
      foreignKey:{
        fieldName:'order_id'
      }
    });


  }

  return Orders;
};