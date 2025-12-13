import mongoose from 'mongoose';
import { subTodo } from './sub_todo.models';

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    compelete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    subTodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTodo"
    }]  //Array of sub-todos
}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);