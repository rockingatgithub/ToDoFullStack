const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task_title : {
    type: String,
    required: true
    },
    task_date : {
        type: Date,
        default: Date.now,
        required: true
    },
    task_description:{
        type: String,
        required: true
    },
    task_category:{
        type: Array
    }
});

const Task_List = mongoose.model('Task_List', taskSchema);

module.exports = Task_List;