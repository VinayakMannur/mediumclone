const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());

// app.get('/',(req,res)=>{
//     res.json({'dass':"kjasd"})
// })

app.listen(process.env.PORT || 5000,()=>{
    console.log('Connected');
})
