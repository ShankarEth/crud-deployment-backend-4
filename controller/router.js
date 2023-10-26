
const express = require("express");
const studentRoute = express.Router();
const studentSchema = require("../model/schema");
const mongoose = require("mongoose");

studentRoute.post("/create-student",(req,res)=>{
    console.log("Post method");
    studentSchema.create(req.body,(err,data)=>{
        if(err){
            res.json(err);
        }
        else {
            console.log("hi");
            res.json(data);
        }
    })
})

studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else 
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

// studentRoute.get("/update-student/:id",(req,res)=>{})
// studentRoute.put("/update-student/:id",(req,res)=>{})

//http://localhost:4000/students/update-student/ and PUT method
module.exports = studentRoute;

//http://localhost:4000/students/  -> All the records
//http://localhost:4000/students/udpdate-student/6530c2094ccab194f8dcc3f1 -> Ravi
/*
[{"_id":"6530b8284ccab194f8dcc3b7","name":"Praveen","email":"praveen@gmail.com","__v":0},
{"_id":"6530b8c34ccab194f8dcc3bc","name":"Lokesh","email":"Lokesh@gmail.com","rollno":3,"__v":0},
{"_id":"6530c2094ccab194f8dcc3f1","name":"Ravikumar","email":"Ravikumar@gmail.com","rollno":4,"__v":0}]
*/