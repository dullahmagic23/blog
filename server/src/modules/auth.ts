import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id,
        username: user.username
    },process.env.JWT_SECRET)

    return token;
}

export const comparePasswords = (password,hash)=>{
    return bcrypt.compare(password,hash)
}

export const hashPassword = (password)=>{
    return bcrypt.hash(password,123);
}
export const protect = async (req,res, next)=>{
    const bearer = req.headers.authorization;
    if(!bearer){
        res.status(401)
        res.json({
            message: "Unauthorised"
        })
        return;
    }
    const[,token] = bearer.split(" ")
    if(!token){
        res.status(403)
        res.json({
            message: "Forbiden"
        })
        return;
    }
    try{
        const user = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next()
    }catch(e){
        res.status(422)
        res.json({
            message: "Invalid credentials"
        })
        return;
    }
}