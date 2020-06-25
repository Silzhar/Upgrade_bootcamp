const express = require('express');

// Requiero el archivo de la configuración de la DB y lo lanzo
require('./config/db'); 
// Requerimos e importamos el router para nuestros endpoints
const petsRouter = require('./routes/pets.routes');

const server = express();

// Middlewares, routes, config...
// Hacemos que /api/pets utilice el archivo pets.routes
server.use('/api/pets', petsRouter);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
