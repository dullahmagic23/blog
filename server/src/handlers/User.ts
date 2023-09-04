import { create } from "domain"
import prisma from "../../db"
import { comparePasswords, createJWT } from "../modules/auth"

export const createUser = async (req,res)=>{
    const user = await prisma.user.create({
        data:{
            name: req.body.name,
            username: req.body.username,
            password:req.body.password,
            updatedAt: new Date()
        }
    })
    const token = await createJWT(user)
    res.json({
        data:{
            token:token
        }
    })
}

export const login = async (req,res)=>{
    const user = await prisma.user.findUnique({
        where:{
            username: req.user.username
        }
    })

    const isValid = await comparePasswords(req.user.passord, user.password);
    if(!isValid){
        res.status(422)
        res.json({
            data:{
                message: "Unprocessable entity"
            }
        })
    } 
  const token = createJWT(user)
  res.status(200)
  res.json({
    token:token
  })
}