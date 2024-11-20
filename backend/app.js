// Task1: initiate app and run server at 3000
const express = require("express");
const morgan = require("morgan")
require("./db/dbConnection");
require("dotenv").config();
var cors = require('cors');


const EmployeRoute=require('./route/employeeRoute')

// const employeModel = require('./model/employeModel')
require('dotenv').config();




const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/api',EmployeRoute);
const UserRoute = require('./route/userroutes')
app.use('/user',UserRoute)
app.listen(process.env.port ,()=>{

    console.log(`Listening to port ${process.env.port }`)
})


// const mongoose = require("mongoose")




// mongoose.connect(process.env.mongo_url).then(
//     ()=>{
//         console.log("db connected");
//     }
// ).catch(
// (err)=>{
// console.log(err);

// }
// );



//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







    
    

// //! dont delete this code. it connects the front end file.
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
// });



