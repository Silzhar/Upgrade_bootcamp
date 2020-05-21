const express = require('express');
const moviesRouter = require('./routes/movies');

// El server es instancia de express .
const server = express();
const PORT = 3000;


// Añadir a express con middleware (entry point o punto de entrada) .
server.use('/api/movies', moviesRouter);

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});


