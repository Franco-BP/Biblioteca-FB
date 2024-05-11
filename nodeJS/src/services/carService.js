// Operators used to compose SQL querys are included in the following way:
// const { Op } = require('sequelize')

const CarModel = require('../models/carModel.js');

async function createCar(data) {
  const { brand, model, productionYear } = data;
  try {
    const newCar = await CarModel.create({
      brand, model, productionYear
    });
    return newCar;
  } catch (error) {
    throw new Error(`Error al crear el auto con Marca: ${brand}, Modelo: ${model} y Año: ${productionYear}.`);
  };
};

async function getAllCars() {
  try {
    const cars = await CarModel.findAll({
      order: [['brand', 'ASC']],
    });
    return cars;
  } catch (error) {
    throw new Error ('Error al obtener los autos en la Base de Datos.');
  }
}

async function getCarById(data) {
  const { carId } = data;
  try {
    const car = await CarModel.findByPk(carId);
    return car;
  } catch (error) {
    throw new Error(`Error al obtener el auto con el id: ${carId}`);
  };
}

module.exports = {
  createCar,
  getAllCars,
  getCarById
};