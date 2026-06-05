const Data=require("../models/dataSchema.js");
const ExpressError = require("../utils/ExpressError.js");
module.exports.fetchTask=async(req,res,next)=>{
    const fetchedData=await Data.find();
    if(!fetchedData) return next(new ExpressError(400,"Their is no Task remains or created!"));
    return res.json({success:true,fetchedData});
}
module.exports.createTask=async(req,res,next)=>{
    const {task}=req.body;
    if(!task) return next(new ExpressError(400,"Task is required"));
    const newTask=await Data.create({
        task,
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
    const {id}=req.params;
    const task=await Data.findById(id);
    if(!task) return next(new ExpressError(404,"Page not found"));
    const updatedTask=Object.assign(task,req.body);
    await updatedTask.save();
    return res.json({success:true,message:"Updated successfully",updatedTask});
}
module.exports.deleteTask=async(req,res,next)=>{
    const {id}=req.params;
    const deletedTask=await Data.findByIdAndDelete(id);
    if(!deletedTask) return next(new ExpressError(404,"Task doesn't exist"));
    return res.json({success:true,message:"Deleted successfully",deletedTask});
}
module.exports.handleStatus=async(req,res)=>{
    const {id}=req.params;
    const task=await Data.findById(id);
    if(!task) return next(new ExpressError(400,"Task not found"));
    if(task.taskStatus==="Pending") task.taskStatus="Completed";
    else task.taskStatus="Pending";
    await task.save();
    return res.json({success:true,message:"Status changed",task});
}