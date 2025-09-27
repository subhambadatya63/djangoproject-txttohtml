import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app=express();
app.use(express.urlencoded())
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mykeeperAppDB",{useNewurlParser: true, useunifiedTopology: true}, ()=>console.log("DB connected"))
const keeperSchema = mongoose.Schema({
    title: String,
    description: String
})

const Keeper = new mongoose.model("Keeper",keeperSchema)


app.get("/api/getAll",(req,res)=>{
    
})

app.post("/api/addNew",(req,res)=>{
    const { title, description } = req.body
    const keeperObj = new Keeper({
        title: title,
        description: description
    })
    
})

app.get("/api/delete",(req,res)=>{
    
})

app.listen(5000,()=>{
    console.log("Backend created at port 5000");
})