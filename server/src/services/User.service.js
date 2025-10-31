const { User } = require("../db/models");
const bcrypt = require("bcrypt");

class UserService {
  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUserById(id) {
    return await User.findByPk(id);
  }

  static async createUser(data) {
    return await User.create(data);
  }

  static async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(data);
  }

  static async deleteUser(id) {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.destroy();
  }
  
  static async getByEmail(email) {
  return await User.findOne({
    where: { email: String(email).trim().toLowerCase() },
  });
}


  static validateSignUpData({ email, name, password }) {
    if (!email || !name || !password) {
      return { isValid: false, error: "Все поля обязательны" };
    }

    if (!email.includes("@")) {
      return { isValid: false, error: "Некорректный email" };
    }

    if (password.length < 8) {
      return { isValid: false, error: "Пароль должен быть не менее 8 символов" };
    }

    return { isValid: true };
  }

  static validateSignInData({ email, password }) {
    if (!email || !password) {
      return { isValid: false, error: "Email и пароль обязательны" };
    }

    return { isValid: true };
  }

}
module.exports = UserService;
