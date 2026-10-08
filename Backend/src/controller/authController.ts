import { UserAttributes } from "../model/user.js";
import { Request, Response } from "express";
import authService from "../service/authService.js";

class AuthController {
  async createUser(req: Request, res: Response) {
    try {
      console.log("Controller started");

      console.log("Request body:", req.body);
      const data = req.body;

      const user = await authService.registerUser(data);

      res.status(201).json({
        message: "User created",
        user,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new AuthController();
