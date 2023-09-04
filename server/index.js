require('dotenv').config();
const express=require("express");
const app=express();
const cors=require("cors");
const port=8000;
require("./config/mongoose");
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended:true}));
app.use("/",require("./router/index"));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`app is running at port ${port}`);
    }
})