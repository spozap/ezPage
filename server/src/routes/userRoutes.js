const controller = require('../controllers/userController');

module.exports = app => {

    const router = require('express').Router()

    /**
     * @swagger
     * paths:
     *  /users:
     *   post:
     *    summary: Creates a user
     *    requestBody:
     *     required: true
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        properties:
     *         username:
     *          type: string
     *         password:
     *          type: string
     *    responses:
     *     201:
     *      description: created
     */
    router.post('/',controller.create)

    app.use('/users',router);

}