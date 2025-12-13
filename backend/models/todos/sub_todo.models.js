import mongoose from 'mongoose';
const subTodoSchema = new mongoose.Schema({
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
        ref: 'User',
        required: true
    },
}, { timestamps: true });

export const subTodo = mongoose.model('subTodo', subTodoSchema);