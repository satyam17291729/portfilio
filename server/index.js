const express=require("express");
const app=express();
const port=8000;

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`app is running at port ${port}`);
    }
})