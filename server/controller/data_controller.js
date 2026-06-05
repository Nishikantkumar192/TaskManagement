const Data=require("../models/dataSchema.js");
const ExpressError = require("../utils/ExpressError.js");
module.exports.fetchTask=async(req,res,next)=>{
    const fetchedData=await Data.find();
    if(!fetchedData) return next(new ExpressError(400,"Their is no Task remains or created!"));
    return res.json({success:true,fetchedData});
}
module.exports.createTask=async(req,res)=>{
    const {task}=req.body;
    const newData=await Data.create({
        task:task,
    })
    return res.json({success:true,message:"Task added successfully",newData});
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