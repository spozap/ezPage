const controller = require('../controllers/userController');

module.exports = app => {

    const router = require('express').Router()

    router.get('/',(req,res) => {
        res.send('Get user endpoint');
    })

    app.use('/users',router);

}