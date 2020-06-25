const mongoose = require('mongoose');

const Pet = require('../models/Pet');

const petsSeed = [
  {
    name: 'Curro',
    age: 4,
    species: 'dog',
  },
  {
    name: 'Risketo',
    age: 1,
    species: 'cat',
  },
  {
    name: 'Ringo',
    age: 7,
    species: 'dog',
    notes: 'Se comporta muy bien y juega mucho',
  },
  {
    name: 'Margarita',
    age: 4,
    species: 'turtle',
  },
];

const petInstances = petsSeed.map((pet) => {
  return new Pet(pet);
});

const DB_URL = 'mongodb://localhost:27017/node_session_3';

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to database!');

    // Busca todas las mascotas de la DB en colección pets
    const pets = await Pet.find(); 
    console.log('Estas son las mascotas de la DB:', pets);

    // Miramos si había mascotas, y en ese caso las eliminamos...
    if (pets.length) {
      console.log(
        'Como había mascotas previamente, vamos a hacer un drop para vaciar la DB...'
      );
      await Pet.collection.drop();
      console.log('Hemos vaciado la colección pets!');
    }

    // Guardamos las instancias de mascota que creamos previamente
    console.log('Guardamos las mascotas en la DB...');
    await Pet.insertMany(petInstances);
    console.log('Hemos insertado las mascotas!');
  })
  .catch((err) => {
    console.error(err.message);
    console.error('Could not connect to the database!');
  })
  .finally(() => {
    mongoose.disconnect();
  });
