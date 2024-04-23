import express from 'express';
const router = express.Router();
import validationMiddleware from '../middlewares/validationMiddleware.js';
import userValidationSchema from '../modules/user/user.validation.js';
import login from '../modules/user/user.controller.js'


// Define a test route
router.post('/login',login);

export default router;
