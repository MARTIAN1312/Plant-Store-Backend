const getOtp = async(req,res)=>{
  try{
    const {email} = req.body
    const user = await User.findOne({email})

    if(!user){
      return res.status(404).json({message:"user not found"})
    }
    const OTP = Math.floor(1000 + Math.random() *9000)
    res.status(200).json({message:"OTP generated succesfully", OTP})
  }catch(error){
    res.status(500).json({message:"Internal Server Error"})
  }
}

export {
    getOtp
}