const express=require('express');

const userController=require('./../controller/userController');

const router=express.Router();

router
    .route('/register')
    .post(userController.Signup);
    
router
    .route('/login')
    .post(userController.Login);
module.exports=router;       