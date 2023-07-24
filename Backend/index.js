const express= require('express');
const App = express();
const cors= require('cors');

const pool= require('./db');

// Middleware
App.use(cors());
App.use(express.json());

// ROUTES

// Create a todo
App.post("/todos", async(req,res)=>{
    try {
        // console.log(req.body);
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ", [description]);
         res.json(newTodo.rows[0]);
    } catch (err){
        console.log(err.message);
    }
});

//get all todo
App.get('/todos', async(req,res)=>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows)
    } catch (err){
        console.log(err.message);
    }
})
// get a todo
App.get("/todos/:id", async(req,res)=>{
    try {
       console.log(req.params); 
    } catch (err){
        console.error(err.message);
    }
})
// update a todo

// delete a todo

App.listen(5000, ()=>{
    console.log("server has started on port 5000");
});