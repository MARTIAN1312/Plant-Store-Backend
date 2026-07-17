import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const userSchema = new Schema({
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    email:{type:String, required:true, unique:true},
    review:{type:String},
    password:{type:String, required:true},
    OTP:{type:Number},
    role:{ 
        type:String,
        enum:['user', 'admin'],
        default:'user'
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {timestamps: true})

const User =  model('User', userSchema);
export default User;