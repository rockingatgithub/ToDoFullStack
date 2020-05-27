const express = require('express');
const path = require('path');
// const ejsLint = require('ejs-lint');
const port = 8000;


const db = require('./config/mongoose');
const Tasks = require('./models/tasks');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use('/', require('./routes'));

app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));

app.get('/', function(req, res){
    return res.render('home',{
        title: 'todoapp'
    });

})

app.get('/practice', function(req, res){
    return res.render('practice', {
        title:'iam back'
    })
})

app.post('/add-task', function(req, res){
    // console.log(req.body);
    Tasks.create({
        task_title : req.body.task_title,
        task_description: req.body.task_description,
        task_date: req.body.task_date,
        task_category: req.body.task_category
    }, function(err, newTask){
        if(err){
            console.log('error in creating a task', err);
            return;
        }
        return res.redirect('back');
    }
    )
    // return res.redirect('/practice');
})

app.get('/task_list_page', function(req, res){

    //tasks to be fetched from databse...
    Tasks.find({},function(err, tasks_db){
        if(err)
        {
            console.log('error in fetching data from database');
            return;
        }
    return res.render('task_list', {
        title: 'your_tasks',
        tasks: tasks_db
    });
    })
})

app.get('/delete_task', function(req, res){
    let id = req.query.id;
    Tasks.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in delting task');
            return;
        }
        return res.redirect('back');
    });
});

app.post('/delete-multiple-tasks/', function(req, res){
    
    var elearr =req.body.task_item;
    if(elearr)   //check is there is a task or not..
    {
        elearr.forEach(element => {
            Tasks.findByIdAndDelete(element, function(err){
                if(err){
                    console.log('error in deleting task');
                    return;
                }
            })
        });
    }
    return res.redirect('back');
});

app.listen(port, function(err){
   if(err){ console.log("error in runnng the server");}
    console.log("server is up");
}
)