import mongoose from "mongoose";

const User = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const Users =  new mongoose.model('User',User) 

export default Users;