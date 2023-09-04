import { create } from "domain"
import prisma from "../../db"
import { comparePasswords, createJWT, hashPassword } from "../modules/auth"
import { log } from "console"

export const createUser = async (req,res,)=>{
    try{
        const user = await prisma.user.create({
            data:{
                name:req.body.name,
                username:req.body.username,
                password:await hashPassword(req.body.password),
                updatedAt: new Date()
            }
        });
        const token = createJWT(user);
        await res.json(token);
    } catch(e){
        res.json({
            e
        })
    }
}

export const login = async (req, res)=>{
    const user = await prisma.user.findUnique({
        where:{
            username: req.body.username
        }
    })
    if (!user){
        res.status(422);
        await res.json({
            message: "Invalid username or password"
        })
        return;
    }
    const isValid = await comparePasswords(req.body.password,user.password);
    if (!isValid){
        res.status(422);
        await res.json({
            message: "Invalid username or password"
        })
        return;
    }
    const token = createJWT(user);
    await res.json({token})
}