import UserRepo from "../repository/userRepo.js";
import { UserAttributes } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
  throw new Error("secret key not defined");
}

class AuthService {
  async registerUser(data: UserAttributes) {
    const existingUser = await UserRepo.findUserByUsername(data.username);

    if (existingUser) {
      throw new Error("User with this username already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    return await UserRepo.createUser(data);
  }

  async loginUser(username: string, password: string) {
    const user = await UserRepo.findUserByUsername(username);

    if (!user) {
      console.log("user not found");
      throw new Error("Invalid username or password");
    }

    const pwCheck = await bcrypt.compare(password, user.password);
    if (!pwCheck) {
      console.log("Password incorrect");
      throw new Error("Invalid username or passwrod");
    }

    if (!secretKey) {
      throw new Error("Secret key not defined");
    }
    const accessToken = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      secretKey,
      { expiresIn: "10m" },
    );

    return accessToken;
  }
}

export default new AuthService();
