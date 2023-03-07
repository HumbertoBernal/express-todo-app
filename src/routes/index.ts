import express, { Router } from 'express';
import {
    addTodo,
    updateTodo,
    deleteTodo,
    getAllTodos,
    getSpecificTodo,
  } from '../controllers/todosController';

const router: Router = express.Router();

router.get('/', getAllTodos);
router.get('/:id', getSpecificTodo);
router.post('/', addTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
