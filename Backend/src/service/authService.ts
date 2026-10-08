import UserRepo from "../repository/userRepo.js";
import { UserAttributes } from "../model/user.js";
import bcrypt from "bcrypt";

class AuthService {
  async registerUser(data: UserAttributes) {
    console.log("1. service started");
    const existingUser = await UserRepo.findUserByUsername(data.username);

    console.log("2. existing user check completed");

    if (existingUser) {
      throw new Error("User with this username already exists");
    }

    console.log("3. bcrypt started");
    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log("4. Pw hashed ");
    data.password = hashedPassword;

    console.log("5. creating user")
    return await UserRepo.createUser(data);
    console.log("6. user created")

  }
}

export default new AuthService();
