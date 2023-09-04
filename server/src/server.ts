import express from "express"
import router from "./router";
import morgan from "morgan";
import { protect } from './modules/auth';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post("/login",()=>{})
app.post("/register",()=>{})

app.use("/api",protect,router);
export default app;