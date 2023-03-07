import Joi from 'joi';

const createTodo = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(20).max(100).required(),
});

const updateTodo = Joi.object({
    name: Joi.string().min(3).max(30),
    description: Joi.string().min(20).max(100),
});

export const validateSchemas = {
    createTodo,
    updateTodo,
}