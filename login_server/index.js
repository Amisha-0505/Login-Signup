const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const morgan=require("morgan");
const userRouter=require("./route/userRouter");
const cors=require("cors");
const app=express();

dotenv.config({path:'.env'});
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.db)
.then(()=>{
    console.log('db connected successfully');
})
.catch((err)=>{
    console.log('err'+err);
})

app.use('/',userRouter);

const port = process.env.PORT || 9000 

app.listen(Port,()=>{console.log(`Your server is running at a port ${port}`)})