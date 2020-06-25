const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/repaso_node';

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Could not connect to DB');
    console.log(err.message);
  });
