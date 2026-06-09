const express=require("express");
const{createTask, fetchTask, updateTask, fetchUpdatingTask, deleteTask, handleStatus, filterTask}=require("../controller/data_controller");
const { isUserExist } = require("../middleware");
const router=express.Router();

router.get("/fetchingTask",isUserExist,fetchTask);
router.post("/createTask",isUserExist,createTask);
router.post("/editTask/:id",fetchUpdatingTask);
router.put("/updateTask/:id",isUserExist,updateTask);
router.delete("/deleteTask/:id",isUserExist,deleteTask);
router.post("/handleStatus/:id",isUserExist,handleStatus);
router.post("/filterTask",filterTask);
module.exports=router;