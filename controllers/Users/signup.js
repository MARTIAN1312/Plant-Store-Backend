
const signup = async (req, res) => {
    try{
        
        const data = {...req.body} //spread operator

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        data.password = hashedPassword
        const user = new User(data)
        console.log(user, 'user')
        const authToken = generateAuthToken(user)
        const savedUser = await user.save();
        res.status(201).json({message: "Signup successfull",authToken});

    } catch(error){
        return res.status(500).json({message: "Error updating user", error: error.message})
    }
}
export { signup }