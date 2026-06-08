const express=require("express");
const { registerUser, isLoggedIn, Logout, login } = require("../controller/auth_controller");
const { isUserExist } = require("../middleware");
const router=express.Router();

router.post("/register",registerUser);
router.post("/log-in",login);
router.get("/isLoggedIn",isUserExist,isLoggedIn);
router.get("/logout",Logout);
module.exports=router;