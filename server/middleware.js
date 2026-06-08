const ExpressError = require("./utils/ExpressError");
const jwt=require("jsonwebtoken");

module.exports.isUserExist=(req,res,next)=>{
    const {userToken}=req.cookies;
    try{
        if(!userToken) return next(new ExpressError(403,"unAuthorized user login yourself"));
        const decodeToken=jwt.verify(userToken,process.env.JWT_SECRET);
        if(!decodeToken.id) return next(new ExpressError(403,"unAuthorized user"));
        req.user={userId:decodeToken.id}
        return next();
    }catch(err){
        console.log(err);
    }
}