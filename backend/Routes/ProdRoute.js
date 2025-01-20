import express from "express";
const router = express.Router()
const {getProductDetails} from "../Controllers/ProdController.js"
router.get("/products/:category",getProductDetails)