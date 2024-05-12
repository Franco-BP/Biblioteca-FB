const CarService = require('../services/carService.js');

// Controller returns HTTP response status codes. Reference to all of them:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Controller to get all cars in the DataBase.
// Needs no body.
async function getAllCars(req, res) {
  try {
    const cars = await CarService.getAllCars();
    if(cars.length > 0){
      return res.status(200).json(cars);
    } else {
      return res.status(204).json({ message: 'No se encontraron autos.' });
    }
  } catch (error) {
      return res.status(404).json({ message: 'Error al obtener los autos.', error: error.message });
  }
}


// Controller to get a car by its id.
// Takes 'carId' in the body.
async function getCarById(req, res) {
  const carId = req.body;
  try {
    const car = await CarService.getCarById(carId);
    if (car) {
      return res.status(200).json(car);
    } else {
      return res.status(204).json({ message: `No se encontró ningun auto con el ID: ${carId}.` });
    }
  } catch (error) {
      return res.status(404).json({ message: 'Error al obtener el auto', error: error.message });
  }
}

// Controller to create a new entry of a car.
// Takes 'brand', 'model' and 'productionYear' in the body.
async function createCar(req, res) {
    try {
      const { brand, model, productionYear, personId } = req.body;

      // Calls the Service to create the car.
      const newCar = await CarService.createCar({
        brand, model, productionYear, personId
      });
  
      if (newCar) {
        return res.status(201).json(newCar);
      }
    } catch (error) {
      res.status(400).json({ error: 'Error al crear el auto.', error: error.message });
    }
  }

module.exports = {
  getAllCars,
  getCarById,
  createCar
};