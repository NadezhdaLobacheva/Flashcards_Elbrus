import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setStatus("✅ Успешный вход");
        localStorage.setItem("user", JSON.stringify(data.user));
        window.dispatchEvent(new Event("userChanged")); 

        navigate("/game"); 
      } else {
        const error = await response.json();
        setStatus(`❌ Ошибка: ${error.message}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Ошибка сети");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} method="post">
      <div className={styles["form-group"]}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className={styles.input}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          className={styles.input}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className={styles["submit-btn"]}>
        Войти
      </button>

      {status && <div className={styles.status}>{status}</div>}

      {user && (
        <div className={styles.userInfo}>
          <p>Добро пожаловать, {user.name}!</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      <div className={styles["login-link"]}>
        Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </div>
    </form>
  );
}
