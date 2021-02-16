const controller = require('../controllers/authController')

module.exports = app => {

    const router = require('express').Router()

    /**
     * @swagger
     *  /auth/login:
     *    post:
     *     summary: Validates a user and returns JWT token if user is valid
     *     requestBody:
     *      required: true
     *      content:
     *       application/json:
     *        schema:
     *         type: object
     *         properties:
     *          username:
     *           type: string
     *          password:
     *           type: string
     *     responses:
     *      '200':
     *        description: User validated OK
     *      '400':
     *        description: Malformed request
     *      '404':
     *        description: User not found
     *      '500':
     *        description: Server problem
     */
    router.post('/login',controller.login)

    app.use('/auth',router)
}