import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { todos } from '../model/todo';
import { TodoPatch, TodoPost } from '../model/types';
import { validateSchemas } from '../utils/validation';

export const getAllTodos = (req: Request, res: Response) => {
    const allTodos = Array.from(todos.values());
    res.json(allTodos);
};

export const getSpecificTodo = (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = todos.get(id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
}

export const addTodo = async (req: Request, res: Response) => {
    const { error, value } = validateSchemas.createTodo.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details, message: error.message });
    }

    const { name, description } = value as TodoPost;
    if (!req.body.name || !req.body.description) {
        return res.status(400).json({ message: 'Invalid request' });
    }
    const newId = uuidv4();
    const newTodo = { id: newId, name, description, updated_at: new Date(), created_at: new Date() };
    todos.set(newId, newTodo);
    res.json({ message: 'Todo created successfully', data: newTodo });
};

export const updateTodo = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    const updatedTodo = todos.get(id);
    if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    const { error, value } = validateSchemas.updateTodo.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details, message: error.message });
    }

    const { name, description } = value as TodoPatch;
    if (!name && !description) {
        return res.status(400).json({ message: 'Missing body parameters' });
    }
    if (name) {
        updatedTodo.name = name;
    }
    if (description) {
        updatedTodo.description = description;
    }

    updatedTodo.updated_at = new Date();

    res.json({ message: 'Todo updated successfully', data: updatedTodo });
};

export const deleteTodo = async (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = todos.get(id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todos.delete(id);
    res.json({ message: 'Todo deleted successfully' });
}
