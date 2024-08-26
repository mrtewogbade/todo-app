import { NextFunction, Request, Response } from 'express';
import Todo from '../models/todo.model';
import catchAsync from '../errors/catchAsync';
import AppResponse from '../helpers/AppResponse';

export const getTodos = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todos = await Todo.find();
        AppResponse(res, 'Todos fetched successfully', 200, todos);
    }catch(error){
        AppResponse(res, 'Error fetching todos', 500);
    }
})


export const getTodo = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (todo) {
            AppResponse(res, 'Todo fetched successfully', 200, todo);
        } else {
            AppResponse(res, 'Todo not found', 404);
        }
    } catch (error) {
        AppResponse(res, 'Error fetching todo', 500);
    }
})
 export const createTodo = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title } = req.body;
        const file = req.file ? req.file.filename : undefined;
        const newTodo = new Todo({ title, file });
        const savedTodo = await newTodo.save();
        AppResponse(res, 'Todo created successfully', 201, savedTodo);
    } catch (error) {
        AppResponse(res, 'Error creating todo', 500);
    }
 })

 export const createTextTodo = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { title } = req.body;
        const newTodo = new Todo({
            title,
        });
        const savedTodo = await newTodo.save();
        AppResponse(res, 'Todo created successfully', 201, savedTodo);
    } catch (error) {
        AppResponse(res, 'Error creating todo', 500);
    }

 })

 export const updatedTodo = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, completed } = req.body;
                const file = req.file ? req.file.filename : undefined;
                const updatedTodo = await Todo.findByIdAndUpdate(
                    req.params.id,
                    { title, completed, file },
                    { new: true }
                );

                if (updatedTodo) {
                    AppResponse(res, 'Todo updated successfully', 200, updatedTodo);
                } else {
                    AppResponse(res, 'Todo not found', 404);
                }

    }catch(error){
        AppResponse(res, 'Error updating todo', 500);
    }
 });

 export const deleteTodo = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (deletedTodo) {
            AppResponse(res, 'Todo deleted successfully', 204);
        } else {
            AppResponse(res, 'Todo not found', 404);
        }
    } catch (error) {
        AppResponse(res, 'Error deleting todo', 500);
    }
 })
