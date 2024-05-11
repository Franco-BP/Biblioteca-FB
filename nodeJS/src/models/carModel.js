const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
const PersonModel = require('./personModel.js');

class CarModel extends Model {};

CarModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING
    },
    productionYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Car',
    tableName: 'car'

  }
)

CarModel.belongsTo(PersonModel, { foreignKey: 'personId' });

module.exports = CarModel;