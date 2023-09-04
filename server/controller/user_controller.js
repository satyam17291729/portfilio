const User=require("../model/user");
module.exports.create=async function(req,res){
    const user_data=new User({
        name:req.body.namae,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    })
    console.log(req.body);
    try{
        const data=await user_data.save();
        return res.send(data);
    } catch(err){
        res.send({
            status:400,
            message:"something went wrong from server",
            error:err
        })
    }
    

}

