const express = require('express');

const Pet = require('../models/Pet');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json('Bienvenid@ a nuestra api de mascotas!');
});

// Este endpoint es /api/pets/all y se trae todas las mascotas de la DB
router.get('/all', async (req, res) => {
  // Conseguimos el query parameter con req.query de ?species=dog
  const species = req.query.species;

  // Filtramos por el campo species usando el valor de la query
  const queryOptions = species ? { species: species } : {}

  // Traemos todas las mascotas de la DB
  const pets = await Pet.find(queryOptions);
  return res.status(200).json(pets);
});

// Buscamos una mascota dada su ID /api/pets/1234abcd...
router.get('/:id', async (req, res) => {
  // Recojo el parámetro de la ruta con req.params
  const id = req.params.id;

  try {
    // Si la id es una válida de MongoDB, se encuentra el documento y se envía el cliente
    const petById = await Pet.findById(id);
    return res.status(200).json(petById);
  } catch (err) {
    // Como todos los errores de JS tienen err.message, lo envío de respuesta
    // para saber qué error ha ocurrido
    return res.status(500).json(err.message);
  }

  // Esto es exactamente lo mismo pero con then/catch y no con async/await
  // Pet.findById(id)
  //   .then((petById) => {
  //     return res.status(200).json(petById);
  //   })
  //   .catch((err) => {
  //     return res.status(500).json(err.message);
  //   });
});

module.exports = router;
