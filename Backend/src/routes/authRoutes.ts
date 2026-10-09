import { Router } from "express";
import authController from "../controller/authController.js";

const router = Router();

router.post("/createUser", (req, res) => authController.createUser(req,res));
router.post("/login", (req,res) =>  authController.loginUser(req, res))

export default router;