const submitOTP = async (req, res)=>{
    try{
        const {id, OTP} =req.body;
        const user = await User.findById(id)

        if(!user){
           return res.status(404).json({message:"User not found"})
        }
        
       
        if(user.OTP==OTP){
             const authToken = generateAuthToken(user)
           return res.status(200).json({message: "otp verified successfully", authToken})
        }else{
            return res.status(401).json({message:"Invalid OTP"})
        }
    }catch(error){
       return res.status(500).json({message:"Internal Server Error", error:error.message})
    }
}

export { submitOTP }