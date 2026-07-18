import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/user_model.js";
import Product from "./models/products_models.js";
import generateAuthToken from "./Application/auth.js";
import authorization from "./Middleware/Authentication.js";
import { getOtp } from "./controllers/Users/getOTP.js";
import { submitOTP } from "./controllers/Users/submitOTP.js";
import { signup } from "./controllers/Users/signup.js";
import { login } from "./controllers/Users/login.js";
import cors from 'cors'

const app = express();
const port = 8000;

// Allow all origins (for development)
app.use(cors());

// Or allow specific origins and credentials (for production)
// app.use(cors({
//   origin: 'http://example.com',
//   credentials: true
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//getOTP controller
app.get("/getOTP", getOtp);
//submitOTP controller
app.post("/submitOTP", submitOTP);
//signup controller
app.post("/signup", signup);
//login controller
app.post("/login", login);
//connect to database
app.get("/products/:category", async (req, res) => {
  try {
    const category = req.params.category;
    console.log(category)
    const product = await Product.find({ category });
    res.status(200).json({ message: "The fetch was successful", product });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" , error:error.message });
  }
});
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/e-commerce");
    console.log("connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectDB()