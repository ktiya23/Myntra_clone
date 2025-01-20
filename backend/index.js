import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import AuthRouter from "./Routes/AuthRouter.js"; 
const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors({
    origin:["https://deploy-mern-1whq.vercal.app"],
    methods:["POST" , "GET"],
    credentials: true
}));
app.use("/auth", AuthRouter);
app.use("/api" , Pro)

Connection();

app.listen(PORT, () => console.log("server is running...."));
