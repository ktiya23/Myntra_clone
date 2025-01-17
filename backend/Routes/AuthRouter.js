import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
    res.send("Login Success");
});

router.post("/signup", (req, res) => {
    res.send("Signup Success");
});

export default router;  
