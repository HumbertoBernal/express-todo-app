"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todosController_1 = require("../controllers/todosController");
const router = express_1.default.Router();
router.get('/', todosController_1.getAllTodos);
router.get('/:id', todosController_1.getSpecificTodo);
router.post('/', todosController_1.addTodo);
router.patch('/:id', todosController_1.updateTodo);
router.delete('/:id', todosController_1.deleteTodo);
exports.default = router;
