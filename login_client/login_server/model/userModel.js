const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')

const userScheme=new mongoose.Schema(
    {
        fname:String,
        lname:String,
        email:String,
        password:String,
    }
)

userScheme.pre('save',async function(next){
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
  
    this.passwordConfirm = undefined;
})

const Signup=mongoose.model('Signup',userScheme);
module.exports=Signup;