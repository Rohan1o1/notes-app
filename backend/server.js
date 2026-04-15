const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('app is running');
})

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})