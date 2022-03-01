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
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};