import { TodoItem } from "./types";

const defaultTodo = {
    id: '1',
    name: 'Todo 1',
    description: 'Todo 1 description',
    updated_at: new Date(),
    created_at: new Date()
}

export const todos: Map<string, TodoItem> = new Map([
    ['1', defaultTodo]
])