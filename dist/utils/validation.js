"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchemas = void 0;
const joi_1 = __importDefault(require("joi"));
const createTodo = joi_1.default.object({
    name: joi_1.default.string().min(3).max(30).required(),
    description: joi_1.default.string().min(20).max(100).required(),
});
const updateTodo = joi_1.default.object({
    name: joi_1.default.string().min(3).max(30),
    description: joi_1.default.string().min(20).max(100),
});
exports.validateSchemas = {
    createTodo,
    updateTodo,
};
