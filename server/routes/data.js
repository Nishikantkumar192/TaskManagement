const express=require("express");
const{createTask, fetchTask, updateTask, fetchUpdatingTask, deleteTask, handleStatus}=require("../controller/data_controller");
const router=express.Router();

router.get("/fetchingTask",fetchTask);
router.post("/createTask",createTask);
router.post("/fetchUpdatingTask/:id",fetchUpdatingTask);
router.put("/updateTask/:id",updateTask);
router.delete("/deleteTask/:id",deleteTask);
router.get("/handleStatus/:id",handleStatus);
module.exports=router;