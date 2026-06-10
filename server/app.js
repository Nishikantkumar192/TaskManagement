const dotenv=require("dotenv");
const path=require("path");
dotenv.config({path:path.resolve("./server/.env")});
const express=require("express");
const mongoose=require("mongoose");
const dataRouter=require("./routes/data.js");
const authRouter=require("./routes/auth_routes.js");
const port=process.env.PORT || 8080;
const app=express();
const cookieParser=require("cookie-parser");
const ExpressError = require("./utils/ExpressError.js");
const cookie=require("cookie");
const cors=require("cors");
const allowedOrigin="http://localhost:5173"
app.use(cors({origin:allowedOrigin,credentials:true}));
app.use(cookieParser());
app.use(express.json());


const dbUrl=process.env.MONGODB_URL;
main().then(()=>{
    console.log("Connected Successfully");
}).catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect(dbUrl);
}
app.listen(port,(req,res)=>{
    console.log(`app is listening through port: ${port}`);
})

app.use("/api/data",dataRouter);
app.use("/api/auth",authRouter);

app.use((req,res,next)=>{
    return next(new ExpressError(404,"Page not found"));
})
app.use((err,req,res,next)=>{
    const {status=500,message="server error"}=err;
    return res.status(status).json({success:false,message:message});
})
