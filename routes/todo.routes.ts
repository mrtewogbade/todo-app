import express, { Router } from 'express';
import { getTodos, getTodo, createTodo, updatedTodo, deleteTodo, createTextTodo } from '../controller/todo.controller'
import upload from '../middleware/upload';

const router: Router = express.Router();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/create-todo', upload.single('file'), createTodo);
router.put('/:id', upload.single('file'), updatedTodo);
router.delete('/:id', deleteTodo);
router.post('/create-text-todo', createTextTodo);

export default router;