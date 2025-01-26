const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
let todos=[]
const cookieParser= require('cookie-parser');
const cors= require('cors');

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
app.get('/', (req, res) => {
    fs.readFile('todo.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Reset the api first');
            res.send('Reset the api first');
            return;
        }
        res.send(JSON.parse(data));
        console.log(JSON.parse(data));
      });
});
app.post('/', (req, res) => {
    fs.readFile('todo.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Reset the api first');
            res.send('Reset the api first');
            return;
        }
        todos=JSON.parse(data)
        if(!todos.filter(e=>e.Task===req.body.todo.trim()).length){
            todos.push({"Task":req.body.todo.trim()})
            fs.writeFile('todo.json', JSON.stringify(todos), (err) => {
                if (err) throw err;
            });
            res.send('Todo Added Successfully');
        }else{
            res.send('Todo Already Exists');
        }
    });
});
app.delete('/', (req, res) => {
    fs.readFile('todo.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Reset the api first');
            res.send('Reset the api first');
            return;
        }
        todos=JSON.parse(data)
        console.log(todos.filter(e=>e.Task===req.body.todo.trim()).length);
        
        if(todos.filter(e=>e.Task===req.body.todo.trim()).length){
            fs.writeFile('todo.json', JSON.stringify(todos.filter(e=>e.Task!==req.body.todo.trim())), (err) => {
                if (err) throw err;
            });
            res.send('Todo Deleted Successfully');
        }else{
            res.send('No Such Todo Exists');
        }
    });
});
app.put('/', (req, res) => {
    fs.readFile('todo.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Reset the api first');
            res.send('Reset the api first');
            return;
        }
        todos=JSON.parse(data)
        
        if(!todos.filter(e=>e.Task===req.body.newtodo.trim()).length){
            if(todos.filter(e=>e.Task===req.body.todo.trim()).length){
                todos.push({"Task":req.body.newtodo.trim()})
                fs.writeFile('todo.json', JSON.stringify(todos.filter(e=>e.Task!==req.body.todo.trim())), (err) => {
                    if (err) throw err;
                });
                res.send('Todo Update Successfully');
            }else{
                res.send('No Such Todo Exists');
            }
        }else{
            res.send('Todo Already Exists');
        }
    });
});
app.get('/reset', (req, res) => {
    fs.writeFile('todo.json', '[]', (err) => {
        if (err) throw err;
        console.log('Todos Resets Successfully');
    });
    res.send('Todos Resets Successfully');
});

app.listen(port, () => console.log('> Server is up and running on port: ' + port));