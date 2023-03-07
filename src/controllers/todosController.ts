import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { todos } from '../model/todo';
import { TodoItem } from '../model/types';

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
    console.log(req.body)
    const { name, description } = req.body as TodoItem;
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
    const { name, description } = req.body as TodoItem;
    if (!name && !description) {
        return res.status(400).json({ message: 'Missing body parameters' });
    }
    const updatedTodo = todos.get(id);
    if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
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
        return res.status(404).json({message: 'Todo not found'});
    }
    todos.delete(id);
    res.json({message: 'Todo deleted successfully'});
}
