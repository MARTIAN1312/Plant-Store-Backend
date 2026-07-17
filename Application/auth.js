import jwt from 'jsonwebtoken';
const privateKey = "hello world"
const generateAuthToken = (user) =>{
    const data = {
        id:user.id,
        name:user.name
    }
    return jwt.sign(data, privateKey,{expiresIn:'1h'})

}

export default generateAuthToken;