"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
const defaultTodo = {
    id: '1',
    name: 'Todo 1',
    description: 'Todo 1 description',
    updated_at: new Date(),
    created_at: new Date()
};
exports.todos = new Map([
    ['1', defaultTodo]
]);
