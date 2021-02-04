const controller = require('../controllers/userController');

module.exports = app => {

    const router = require('express').Router()

    /**
     * @swagger
     *  /users:
     *    post:
     *     summary: Creates a user.
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
     *      '201':
     *        description: user created
     *      '500':
     *        description: server problem
     */
    router.post('/',controller.create)

    /**
     * @swagger
     * /users/{_id}:
     *  get:
     *   summary: Get a user by ID
     *   parameters:
     *    - in: path
     *      name: _id
     *      schema:
     *       type: string
     *      required: true
     *      description: ID of the User
     *   responses:
     *    '200':
     *      description: User found
     *    '404':
     *      description: User not found
     *    '500':
     *      description: ObjectID not valid
     */
    router.get('/:id',controller.findOne)

    /**
     * @swagger
     * /users:
     *  get:
     *   summary: Returns all users
     *   responses:
     *    '200':
     *      description: Returns all the users
     *    '500':
     *      description: server problem
     */
    router.get('/',controller.findAll)

    app.use('/users',router);

}