// Operators used to compose SQL querys are included in the following way:
// const { Op } = require('sequelize')

const PersonModel = require('../models/personModel.js');

async function createPerson(data) {
  const { name, contactNumber } = data;
  try {
    const newPerson = await PersonModel.create({
      name, contactNumber
    });
    return newPerson;
  } catch (error) {
    throw new Error(`Error al crear la persona con Nombre: ${name} y Contacto: ${contactNumber}.`);
  };
};

async function getAllPeople() {
  try {
    const people = await PersonModel.findAll({
      order: [['name', 'ASC']],
    });
    return people;
  } catch (error) {
    throw new Error ('Error al obtener las personas en la Base de Datos.');
  }
}

async function getPersonById(data) {
  const { id } = data;
  try {
    const person = await PersonModel.findByPk(id);
    return person;
  } catch (error) {
    throw new Error(`Error al obtener la persona con el id: ${id}`);
  };
}

module.exports = {
  createPerson,
  getAllPeople,
  getPersonById
};