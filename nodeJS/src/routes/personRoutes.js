const { Router } = require('express');
const router = Router();

const PersonController = require('../controllers/personController');

// Sets a relative route for an endpoint.
router.get('/person/getAll', PersonController.getAllPeople);

router.get('/person/getById', PersonController.getPersonById);

router.post('/person/create', PersonController.createPerson);


module.exports = router;