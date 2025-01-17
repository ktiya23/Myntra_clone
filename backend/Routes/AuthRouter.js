import express from "express";
import signupValidation from ("../Middlewares/AuthValidation")
import signup from "../Controllers/AuthController";
const router = express.Router();

router.post("/login", (req, res) => {
    res.send("Login Success");
});

router.post("/signup", signupValidation,signup );

export default router;  
