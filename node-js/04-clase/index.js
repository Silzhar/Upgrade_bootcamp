const express = require('express');

require('./config/db');

const server = express();

const userRouter = require('./routes/user.route');

// Middleware.
server.use('/api/users', userRouter);

PORT = 3000;
server.listen(PORT, () => {
    ('Server in http://localhost:${PORT}');
});
