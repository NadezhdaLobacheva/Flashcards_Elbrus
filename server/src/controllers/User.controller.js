const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../services/User.service");
const { User } = require("../db/models");
const generateJWTTokens = require("../utils/generateJWTTokens");
const cookieConfig = require("../config/cookieConfig");

class UserController {
  static async getAllUser(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("UserController.getAllUser error:", error);
      res.status(500).json({ message: "Ошибка получения пользователей" });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }
      res.json(user);
    } catch (error) {
      console.error("UserController.getUserById error:", error);
      res.status(500).json({ message: "Ошибка получения пользователя" });
    }
  }

  static async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error("UserController.createUser error:", error);
      res.status(500).json({ message: "Ошибка создания пользователя" });
    }
  }

  static async updateUser(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }
      await user.update(req.body);
      res.json(user);
    } catch (error) {
      console.error("UserController.updateUser error:", error);
      res.status(500).json({ message: "Ошибка обновления пользователя" });
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }
      await user.destroy();
      res.json({ message: "Пользователь удалён" });
    } catch (error) {
      console.error("UserController.deleteUser error:", error);
      res.status(500).json({ message: "Ошибка удаления пользователя" });
    }
  }

  static async refreshTokens(req, res) {
    try {
      const { refreshToken } = req.cookies;

      if (!refreshToken) {
        return res.status(401).json({ message: "Нет токена" });
      }

      const { user } = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);

      const userInDb = await UserService.getUserById(user.id);
      if (!userInDb) {
        res.clearCookie("refreshToken");
        return res.status(401).json({ message: "Пользователь не найден" });
      }

      const safeUser = userInDb.toJSON();
      const { accessToken, refreshToken: newRefreshToken } = generateJWTTokens({ user: safeUser });

      return res
        .status(201)
        .cookie("refreshToken", newRefreshToken, cookieConfig)
        .json({ user: safeUser, accessToken });
    } catch (error) {
      console.error("UserController.refreshTokens error:", error);
      res.status(401).json({ message: "Ошибка обновления токенов" });
    }
  }

  static async signUp(req, res) {
    const { email, name, password } = req.body;

    const { isValid, error } = UserService.validateSignUpData({ email, name, password });
    if (!isValid) {
      return res.status(400).json({ message: error });
    }

    const normalizedEmail = email.toLowerCase();

    try {
      const userFound = await UserService.getByEmail(normalizedEmail);

      if (userFound) {
        return res.status(400).json({ message: "Пользователь с таким email уже существует" });
      }

      const newUser = await UserService.createUser({
        email: normalizedEmail,
        name,
        passwordHash: password,
      });

      const safeUser = newUser.toJSON();
      const { accessToken, refreshToken } = generateJWTTokens({ user: safeUser });

      return res
        .status(201)
        .cookie("refreshToken", refreshToken, cookieConfig)
        .json({ user: safeUser, accessToken });
    } catch (error) {
      console.error("UserController.signUp error:", error);
      res.status(500).json({ message: "Ошибка регистрации" });
    }
  }

  static async signIn(req, res) {
    const { email, password } = req.body;

    const { isValid, error } = UserService.validateSignInData({ email, password });
    if (!isValid) {
      return res.status(400).json({ message: error });
    }

    try {
      const userFound = await UserService.getByEmail(email.toLowerCase());

      if (!userFound || !userFound.passwordHash) {
        return res.status(400).json({ message: "Неверные email или пароль" });
      }

      const isPasswordValid = await bcrypt.compare(password, userFound.passwordHash);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Неверный пароль" });
      }

      const safeUser = userFound.toJSON();
      const { accessToken, refreshToken } = generateJWTTokens({ user: safeUser });

      return res
        .status(200)
        .cookie("refreshToken", refreshToken, cookieConfig)
        .json({ user: safeUser, accessToken });
    } catch (error) {
      console.error("UserController.signIn error:", error);
      res.status(500).json({ message: "Ошибка входа" });
    }
  }

  static signOut(req, res) {
    try {
      res.clearCookie("refreshToken").json({ message: "Успешный выход" });
    } catch (error) {
      console.error("UserController.signOut error:", error);
      res.status(500).json({ message: "Ошибка выхода" });
    }
  }
}

module.exports = UserController;
