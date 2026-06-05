const mongoose=require("mongoose");

const dataSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    taskStatus:{
        type:String,
        default:"Pending"
    }
},{timestamps:true});
const data=mongoose.model("data",dataSchema);
module.exports=data;