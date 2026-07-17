import User from "../models/users.js"
import jwt from "jsonwebtoken"

const authorization = async(req, res ,next)=>{
    //next agle contoller pe bhej deta hai 
    try{
     const {auth_token} = req.headers
     if (!auth_token){
        return res.status(401).json({message:"Unauthorized"})
     }

     const data = jwt.verify(auth_token, "hello world")
     const user = await User.findById(data.id)

     if(!user){
        return res.status(401).json({message:"Unauthorized"})
     }

     req.user = user;
     next()
    }catch(error){
        if(error.name==="jsonWebTokenError"){
            return res.status(401).json({message: "Unauthorized"})
        }
        res.status(500).json({message: "Internal Server Error"})
    }
}
export default authorization