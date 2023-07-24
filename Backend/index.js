const express= require('express');
const App = express();
const cors= require('cors');

const pool= require('./db');




// Middleware
App.use(cors());
App.use(express.json());

App.listen(5000, ()=>{
    console.log("server has started on port 5000");
});