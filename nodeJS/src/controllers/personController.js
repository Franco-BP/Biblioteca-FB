const PersonService = require('../services/personService');

// Controller returns HTTP response status codes. Reference to all of them:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Controller to get all people in the DataBase.
// Needs no body.
async function getAllPeople(req, res) {
  try {
    const people = await PersonService.getAllPeople();
    if(people.length > 0){
      return res.status(200).json(people);
    } else {
      return res.status(204).json({ message: 'No people found.' });
    }
  } catch (error) {
      return res.status(404).json({ message: 'Error when obtaining the people.', error: error.message });
  }
}


// Controller to get a person by its id.
// Takes 'personId' in the body.
async function getPersonById(req, res) {
  const personId = req.body;
  try {
    const person = await PersonService.getPersonById(personId);
    if (person) {
      return res.status(200).json(person);
    } else {
      return res.status(204).json({ message: 'No se encontró ninguna perosna con ese ID.' });
    }
  } catch (error) {
      return res.status(404).json({ message: 'Error al obtener la persona', error: error.message });
  }
}

// Controller to create a new entry of a person.
// Takes 'name' and 'contactNumber' in the body.
async function createPerson(req, res) {
    try {
      const { name, contactNumber } = req.body;

      // Calls the Service to create the person.
      const newPerson = await PersonService.createPerson({
        name, contactNumber
      });
  
      if (newPerson) {
        return res.status(201).json(newPerson);
      }
    } catch (error) {
      res.status(400).json({ error: 'Error al crear la persona', error: error.message });
    }
  }

module.exports = {
  getAllPeople,
  getPersonById,
  createPerson,
};