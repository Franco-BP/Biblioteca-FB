const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class PersonModel extends Model {};

PersonModel.init(
  {
    // Model for the 'Person' table.
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING, 
    },
    contactNumber: {
      type: DataTypes.STRING,
    },
    // Example of the use of 'NOW' DataType
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    modelName: 'Person', // Nombre del modelo
    tableName: 'person', // Nombre de la tabla en la base de datos
  }
)

module.exports = PersonModel;