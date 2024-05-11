const { Router } = require('express');
const router = Router();

const CarController = require('../controllers/carController.js');

// Sets a relative route for an endpoint.
router.get('/car/getAll', CarController.getAllCars);

router.get('/car/getById', CarController.getCarById);

router.get('/car/create', CarController.createCar);


module.exports = router;