import express from "express";
import { loginValidation, signupValidation } from "../Middlewares/AuthValidation.js";
import {signup , login} from "../Controllers/AuthController.js";
const router = express.Router();



router.post("/signup", signupValidation,signup );
router.post("/login", loginValidation, login );

export default router;  
