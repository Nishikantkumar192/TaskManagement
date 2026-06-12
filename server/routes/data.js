const express=require("express");
const{createTask, fetchTask, updateTask, fetchUpdatingTask, deleteTask, handleStatus, filterTask}=require("../controller/data_controller");
const { isUserExist } = require("../middleware");
const router=express.Router();
const joiSchema=require("../utils/joiSchema.js");
const ExpressError = require("../utils/ExpressError.js");

const validateListing=(req,res,next)=>{
    const {error}=joiSchema.validate(req.body);
    const errMsg=error?.details.map((el)=>el.message).join(",");
    if(errMsg) return next(new ExpressError(400,errMsg));
    else return next();
}
router.get("/fetchingTask",isUserExist,fetchTask);
router.post("/createTask",validateListing,isUserExist,createTask);
router.post("/editTask/:id",fetchUpdatingTask);
router.put("/updateTask/:id",validateListing,isUserExist,updateTask);
router.delete("/deleteTask/:id",isUserExist,deleteTask);
router.post("/handleStatus/:id",isUserExist,handleStatus);
router.post("/filterTask",filterTask);
module.exports=router;