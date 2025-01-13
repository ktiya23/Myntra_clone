import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";

const app = express()

dotenv.config();
const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD)
app.listen(8000,()=>console.log("server is running...."));