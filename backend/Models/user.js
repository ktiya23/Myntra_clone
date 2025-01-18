const Schema = mongoose.Schema
import Joi from "joi"
import mongoose from "mongoose"

const UserSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    }
})

const userModel = mongoose.model("users" , UserSchema)

export default mongoose.model('User', UserSchema);
