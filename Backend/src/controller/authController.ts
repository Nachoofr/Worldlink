import { UserAttributes } from "../model/user.js";
import { Request, Response } from "express";
import authService from "../service/authService.js";

class AuthController {
  async createUser(req: Request, res: Response) {
    try {
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

  async loginUser(req: Request, res: Response){
    try {
        const username = req.body.username;
        const password = req.body.password;
        const token = await authService.loginUser(username, password)
        res.status(200).json({message: "Login Successful", token})
        
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
  }
}

export default new AuthController();
