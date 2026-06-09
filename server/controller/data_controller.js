const Data=require("../models/dataSchema.js");
const ExpressError = require("../utils/ExpressError.js");
const mongoose=require("mongoose");
module.exports.fetchTask=async(req,res,next)=>{
    const {userId}=req.user;
    const fetchedData=await Data.find({relatedUser:new mongoose.Types.ObjectId(userId)});
    if(!fetchedData) return next(new ExpressError(400,"Task is Empty!"));
    return res.json({success:true,fetchedData});
}
module.exports.createTask=async(req,res,next)=>{
    const {userId}=req.user;
    const {title,description}=req.body;
    if(!title || !description) return next(new ExpressError(401,"Field is missing"));
    const newTask=await Data.create({
        title,
        description,
        relatedUser:new mongoose.Types.ObjectId(userId),
    })
    return res.json({success:true,message:"Task added successfully",newTask});
}
module.exports.fetchUpdatingTask=async(req,res)=>{
    const {id}=req.params;
    const task=await Data.findById(id);
    if(!task) return next(new ExpressError(400,"Page not found"));
    return res.json({success:true,task});
}
module.exports.updateTask=async(req,res,next)=>{
    const {userId}=req.user;
    const {id}=req.params;
    const task=await Data.findById(id);
    if(!task) return next(new ExpressError(404,"Page not found"));
    if(task.relatedUser.toString()!==userId) return next(new ExpressError(403,"Permission denied"));
    const updatedTask=Object.assign(task,req.body);
    await updatedTask.save();
    return res.json({success:true,message:"Updated successfully"});
}
module.exports.deleteTask=async(req,res,next)=>{
    const {userId}=req.user;
    const {id}=req.params;
    const task=await Data.findById(id);
    if(!task) return next(new ExpressError(404,"Task not present"));
    if(task.relatedUser.toString()!==userId) return next(new ExpressError(403,"permission denied"));
    const deletedTask=await Data.findByIdAndDelete(id);
    return res.json({success:true,message:"Deleted successfully",deletedTask});
}
module.exports.handleStatus=async(req,res,next)=>{
    const {userId}=req.user;
    const {id}=req.params;
    const task=await Data.findById(id);
    if(!task) return next(new ExpressError(400,"Task not found"));
    if(task.relatedUser.toString()!==userId) return next(new ExpressError(403,"Permission denied"));
    if(task.taskStatus==="Pending") task.taskStatus="Completed";
    else task.taskStatus="Pending";
    await task.save();
    return res.json({success:true,message:"Status changed",task});
}
module.exports.filterTask=async(req,res,next)=>{
    const {search}=req.query;
    if(!search?.trim()) return next(new ExpressError(400,"search is required"));
    const matchedTask=await Data.find({
        $or:[
            {title:{$regex:search,$options:"i"}},
            {description:{$regex:search,$options:"i"}},
            {taskStatus:{$regex:search,$options:"i"}},
    ]})
    if(!matchedTask) return next(new ExpressError(400,"Seach not found"));
    return res.json({success:true,matchedTask});
}