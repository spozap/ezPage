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

    /**
     * @swagger
     *  /auth/register:
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
     *        description: User registered
     *      '409':
     *        description: User already exists
     *      '400':
     *        description: Malformed request
     *      '500':
     *        description: Server problem
     */    
    router.post('/register',controller.register)

    app.use('/auth',router)
}