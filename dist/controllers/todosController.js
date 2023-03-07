"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getSpecificTodo = exports.getAllTodos = void 0;
const uuid_1 = require("uuid");
const todo_1 = require("../model/todo");
const validation_1 = require("../utils/validation");
const getAllTodos = (req, res) => {
    const allTodos = Array.from(todo_1.todos.values());
    res.json(allTodos);
};
exports.getAllTodos = getAllTodos;
const getSpecificTodo = (req, res) => {
    const id = req.params.id;
    const todo = todo_1.todos.get(id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
};
exports.getSpecificTodo = getSpecificTodo;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = validation_1.validateSchemas.createTodo.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details, message: error.message });
    }
    const { name, description } = value;
    if (!req.body.name || !req.body.description) {
        return res.status(400).json({ message: 'Invalid request' });
    }
    const newId = (0, uuid_1.v4)();
    const newTodo = { id: newId, name, description, updated_at: new Date(), created_at: new Date() };
    todo_1.todos.set(newId, newTodo);
    res.json({ message: 'Todo created successfully', data: newTodo });
});
exports.addTodo = addTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedTodo = todo_1.todos.get(id);
    if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    const { error, value } = validation_1.validateSchemas.updateTodo.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details, message: error.message });
    }
    const { name, description } = value;
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
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const todo = todo_1.todos.get(id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todo_1.todos.delete(id);
    res.json({ message: 'Todo deleted successfully' });
});
exports.deleteTodo = deleteTodo;
