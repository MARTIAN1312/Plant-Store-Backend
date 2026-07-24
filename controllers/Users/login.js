import User from "../../models/user_model.js"
import bcrypt from "bcrypt"
import generateAuthToken from "../../Application/auth.js"

const login = async (req, res) => {
    try{
        const {email, password} = req.body
        console.log(req.body)
        const user = await User.findOne({email})
        console.log(user, 'user')
        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const authToken = generateAuthToken(user)
             return res.status(200).json({message: "login successfull", authToken});
        }else{
            return res.status(500).json({message: "Wrong password"})
        }


    } catch(error){
        return res.status(500).json({message: "Error updating user", error: error.message})
    }
}

export { login }