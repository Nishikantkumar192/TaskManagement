const express=require("express");
const{createTask, fetchTask, updateTask, fetchUpdatingTask, deleteTask, handleStatus, filterTask}=require("../controller/data_controller");
const { isUserExist } = require("../middleware");
const router=express.Router();

router.get("/fetchingTask",isUserExist,fetchTask);
router.post("/createTask",isUserExist,createTask);
router.post("/editTask/:id",fetchUpdatingTask);
router.put("/updateTask/:id",updateTask);
router.delete("/deleteTask/:id",deleteTask);
router.get("/handleStatus/:id",handleStatus);
router.post("/filterTask",filterTask);
module.exports=router;