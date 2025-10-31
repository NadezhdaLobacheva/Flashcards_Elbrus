"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Round, {
        foreignKey: "userId",
        as: "rounds",
      });
    }
    toJSON() {
      //Это переопределение метода toJSON() у модели Sequelize. Идея простая: не выпускать чувствительные поля.
      const values = { ...this.get() }; // берём все поля экземпляра как обычный объект
      delete values.passwordHash;
      delete values.refreshTokenHash;
      return values;
    }

    static validateEmail(email) {
      //  ДЛЯ РЕГИСТРАЦИИ (Ввод данных)
      const emailPattern = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/;
      return emailPattern.test(email);
    }

    static validatePassword(password) {
      //  ДЛЯ РЕГИСТРАЦИИ (Ввод данных)
      const isValidLength = password.length >= 8;

      if (!isValidLength) {
        return false;
      }
      return true;
    }

    static validateSignUpData({ name, email, password }) {
      if (
        !name ||
        typeof name !== "string" ||
        name.trim().length === 0
      ) {
        return {
          isValid: false,
          error: "поле name не должно быть пустым",
        };
      }

      if (
        !email ||
        typeof email !== "string" ||
        email.trim().length === 0 ||
        !this.validateEmail(email)
      ) {
        return {
          isValid: false,
          error: "email должен быть валидным",
        };
      }

      if (
        !password ||
        typeof password !== "string" ||
        password.trim().length === 0 ||
        !this.validatePassword(password) //проверяет есть ли там условия пароля
      ) {
        return {
          isValid: false,
          error:
            "Пароль не должен быть пустым, не должен быть короче 8 символов",
        };
      }

      return {
        isValid: true,
        error: null,
      };
    }

    static validateSignInData({ email, password }) {
      if (!email || typeof email !== "string" || email.trim().length === 0) {
        return {
          isValid: false,
          error: "Email не должен быть пустым",
        };
      }
      if (
        !password ||
        typeof password !== "string" ||
        password.trim().length === 0
      ) {
        return {
          isValid: false,
          error: "Пароль не должен быть пустым",
        };
      }

      return {
        isValid: true,
        error: null,
      };
    }
  }

  User.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      passwordHash: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (newUser) => {
          const hashedPassword = await bcrypt.hash(newUser.passwordHash, 10);
          newUser.passwordHash = hashedPassword;

          newUser.email = newUser.email.trim().toLowerCase();
          newUser.name = newUser.name.trim().toLowerCase();
        },

        afterCreate: (newUser) => {
          const rawUser = newUser.get();
          delete rawUser.passwordHash;
          return rawUser;
        },
      },
    }
  );
  return User;
};
