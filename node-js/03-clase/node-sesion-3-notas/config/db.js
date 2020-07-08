const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/node_session_3';

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.error('Could not connect to the database!');
  });
