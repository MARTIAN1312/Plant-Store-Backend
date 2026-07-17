import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './models/user_model.js'
import Product from './models/products_models.js'
import generateAuthToken from './Application/auth.js'
import authorization from './Middleware/Authentication.js'
import { getOtp } from './controllers/getOTP.js'
import { submitOTP } from './controllers/submitOTP.js'
import { signup } from './controllers/signup.js'
import { login } from './controllers/login.js'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//getOTP controller
app.get('/getOTP', getOtp)
//submitOTP controller
app.post('/submitOTP',submitOTP)
//signup controller
app.post('/signup',signup)
//login controller
app.post('/login',login)
//connect to database
async function connectDB(){
  try{
    await mongoose.connect('mongodb://localhost:27017/e-commerce')  
    
    app.listen(port, ()=>{
      console.log(`Server is running on port ${port}`)
    })
}
catch(error){
  console.error('Error connecting to MongoDB:', error)
}}
