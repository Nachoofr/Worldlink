import User, { UserAttributes } from "../model/user.js";

class UserRepo {
  async createUser(data: UserAttributes) {
    return await User.create(data);
  }

  async findUserByUsername(username: string) {
    return await User.findOne({ where: { username } });
  }
}

export default new UserRepo();
