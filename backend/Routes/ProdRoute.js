import express from "express";
const router = express.Router();
import { getProductDetails } from "../Controllers/ProdController.js";

router.get("/products/:category", getProductDetails);

export default router;
