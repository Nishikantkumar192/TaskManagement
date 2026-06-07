const ExpressError = require("../utils/ExpressError");
const bcrypt=require("bcryptjs")
const User=require("../models/userSchema.js");
const jwt=require("jsonwebtoken");

module.exports.registerUser=async(req,res,next)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password) return next(new ExpressError(401,"Missing credentials"));
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({
        username,
        email,
        password:hashedPassword
    })
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:false,
        maxAge:7*24*60*60*1000,
    })
    return res.json({success:true,message:"Register successfully",user});
}