const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  species: { type: String, required: true },
  notes: { type: String },
});


// Crea la colección 'pet', lo crea en minúsculas .
const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;
