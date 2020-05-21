//  Para llamar solo a propiedad Router sin importar todo express
//  La otra manera seria importar todo express y llamar a Router .
//  const express = require('express');
//  const router = express.Router();

const {Router} = require('express');
const fs = require('fs');
const path = require('path');
const router = Router();
const filePath = path.join(__dirname, '../movies.json');

router.get('/', (req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err){
            return res.status(500).send(err.message);
        } else {
            const movies = JSON.parse(data);
            return res.status(200).send(movies);
        }
    });
});

router.get('/:movieId',  (req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err){
            return res.status(500).send(err.message);
        } else {
            const movies = JSON.parse(data);
            const moviesById = movies.find(mov => {
                return mov.id.toString() === req.params.movieId.toString();
            })
            return res.status(200).send(moviesById);
        }
    });
});

module.exports = router;