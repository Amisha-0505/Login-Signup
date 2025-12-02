const jwt=require('jsonwebtoken');
const User=require('./../model/userModel');
const bcrypt=require('bcryptjs');

const jwt_sign=(id)=>{
    return (token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_END,
      }));
}

exports.Signup=async(req,res)=>{
    const { fname, lname, email,password}=req.body;
    try{
        await User.create({
            fname, 
            lname, 
            email,
            password,
        });
        res.send({status:"Ok"});
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            status:'fail',
            messege:err
        })
    }
}

exports.Login=async(req,res)=>{
    try{
        const { email,password}=req.body;
        const user=await User.findOne({
            email,
        });
        if(!user){
            return  res.status(404).json({
                status:'fail',
                messege:"Not found"
            })
        }
        const correct=await bcrypt.compare(password,user.password)
        if(!correct){
            return res.status(400).json({
                status:'fail',
                messege:"Incorrect email and password"
            })
        }
        const token=jwt_sign(user._id);
        
        res.status(200).json({
            status: 'sucess',
            message: 'sucessfully logged in',
            token,
          });
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            status:'fail',
            messege:err
        })
    }
}


