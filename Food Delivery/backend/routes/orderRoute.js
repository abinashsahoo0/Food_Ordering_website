import express from "express"
import { placeOrder, verifyOrder } from "../controllers/orderController.js"
import authMiddleware from "../middleware/auth.js"


const orderRouter=express.Router();


orderRouter.post("/place",authMiddleware,placeOrder)
verifyOrder.post("/verify",verifyOrder)

export default orderRouter;