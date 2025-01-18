import userModel from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Signup Controller
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User already exists, you can log in.", success: false });
        }

        // Create a new user and hash the password
        const newUser = new userModel({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();

        res.status(201).json({ message: "Signup successful", success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

// Login Controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "Auth failed: email or password is wrong", success: false });
        }

        // Verify the password
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) {
            return res.status(403).json({ message: "Auth failed: email or password is wrong", success: false });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};
