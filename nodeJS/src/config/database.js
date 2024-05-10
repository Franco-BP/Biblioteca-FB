// config/database.js
const { Sequelize } = require('sequelize');

// Configures the data for the DataBase connection. In this case PostgreSQL
const sequelize = new Sequelize('pruebamysql', 'root', '12345678', {
  host: 'localhost',
  port: '3306', 
  // DataBase in use.
  dialect: 'mysql',
  // Disables Sequelize logs.
  logging: false, 
  // Global parameters for Sequelize, applying to all models.
  define: {
    // Not adding TimeStamps by default.
    timestamps: false,
    // Sequelize transforms to camelCase as default. This enables snake_case
    underscored: true,
    // Avoids Sequelize utilizing plurals when transforming the modeling.
    freezeTableName: true,
  },
  // Avoids including the null values in the SQL queries (Creates/Updates).
  omitNull: true
});

// Connection to the DataBase.
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
})();

module.exports = sequelize;
