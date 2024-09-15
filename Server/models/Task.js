const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TaskSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.models.Task || model("Task", TaskSchema);