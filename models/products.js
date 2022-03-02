'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    product_name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type:DataTypes.STRING,
      allowNull: false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    createdAt: false,
    updatedAt: false,
  });
  return Products;
};