import express from "express"
import router from "./router";
import morgan from "morgan";
import { protect } from './modules/auth';
import { createUser, login } from "./handlers/User";
import {body,validationResult} from "express-validator"
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api",protect,router);

app.post("/login", body("username").notEmpty(),login,(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(422)
        res.json({
            errors: errors.array()
        })
    }
})
app.post("/register",createUser)
export default app;