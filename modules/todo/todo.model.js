import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  priority: { type: String, required: true, enum: ["HIGH", "MEDIUM", "LOW"] },
  status: { type: String, required: true, enum: ["TODO", "IN-PROGRESS", "REVIEW", "COMPLETED"] }
});

const Todo = mongoose.model('Todo', todoSchema); // Use singular 'Todo' for model name

export default Todo;
