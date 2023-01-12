'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Beer.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    type: DataTypes.STRING,
    country: DataTypes.STRING,
    description: DataTypes.TEXT,
    note: DataTypes.INTEGER,
    alc_degree: DataTypes.FLOAT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Beer',
  });
  return Beer;
};