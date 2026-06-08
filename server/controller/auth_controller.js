const ExpressError = require("../utils/ExpressError");
const bcrypt=require("bcryptjs")
const User=require("../models/userSchema.js");
const jwt=require("jsonwebtoken");

module.exports.registerUser=async(req,res,next)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password) return next(new ExpressError(401,"Missing credentials"));
    const isExist=await User.findOne({email});
    if(isExist) return next(new ExpressError(403,"Use another email"));
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({
        username,
        email,
        password:hashedPassword
    })
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.cookie("userToken",token,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        maxAge:7*24*60*60*1000,
    })
    return res.json({success:true,message:"Register successfully",user});
}
module.exports.login=async(req,res,next)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user) return next(new ExpressError(403,"Invalid credentials email"));
    const isMatched=await bcrypt.compare(password,user.password);
    if(!isMatched) return next(new ExpressError(403,"Invalid credentials"));
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
    res.cookie("userToken",token,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        maxAge:7*24*60*60*1000
    })
    return res.json({success:true,message:"Login successful",user});
}
module.exports.isLoggedIn=async(req,res,next)=>{
    const {userId}=req.user;
    const userInfo=await User.findById(userId);
    if(!userInfo) return next(new ExpressError(400,"user not found"));
    return res.json({success:true,userInfo});
}
module.exports.Logout=(req,res)=>{
    res.clearCookie("userToken",{
        httpOnly:true,
        secure:true,
        sameSite:"none",
    })
    return res.json({success:true,message:"Logout successfully"})
}