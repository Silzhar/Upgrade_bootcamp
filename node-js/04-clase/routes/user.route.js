const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.get('/', async(res, req) => {
    try {
        const users = await User.find();
        return res.status(200).json({ data: users });
        
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
});

router.post('/',(req, res) => {
    const newUser = new User ({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
});

newUser.save().then(() => {

});

module.exports = router;
