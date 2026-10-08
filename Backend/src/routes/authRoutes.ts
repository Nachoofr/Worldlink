import { Router } from "express";
import authController from "../controller/authController.js";

const router = Router();

router.post("/createUser", (req, res) => authController.createUser(req,res));

export default router;