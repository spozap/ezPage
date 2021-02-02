const controller = require('../controllers/userController');

module.exports = app => {

    const router = require('express').Router()

    router.post('/',controller.create)

    app.use('/users',router);

}