const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
    return res.redirect('/practice');
})

app.get('/task_list_page', function(req, res){
    return res.render('task_list', {
        title: 'your_tasks',
        
    });
})

app.get('/delete_multiple_tasks', function(req, res){
    
})

app.listen(port, function(err){
   if(err){ console.log("error in runnng the server");}
    console.log("server is up");
}
)