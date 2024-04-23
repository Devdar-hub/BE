import express from 'express';
const router = express.Router();
import validationMiddleware from '../middlewares/validationMiddleware.js';
import todoValidationSchema from '../modules/todo/todo.validation.js';
import {createTodo, fetchTodos, editTodos, deleteTodos} from '../modules/todo/todo.controller.js'



router.post('/create',validationMiddleware(todoValidationSchema),createTodo);
router.get('/fetch',fetchTodos);
router.patch('/update/:id',editTodos);
router.delete('/delete/:id',deleteTodos);

export default router;
