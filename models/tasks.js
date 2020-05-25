const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task_title : {
    type: String,
    required: true
    },
    task_date : {
        type: Date,
        required: true
    },
    task_description:{
        type: String,
        required: false
    },
    task_category:{
        type: Array,
        required: false
    }
});

const Task_List = mongoose.model('Task_List', taskSchema);

module.exports = Task_List;