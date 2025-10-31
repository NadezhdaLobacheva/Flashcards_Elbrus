import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

export default function RegisterPage() {
  const [name, setname] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [status, setStatus] = useState(null);  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus(`✅ Добро пожаловать, ${data.user.name}!`);
        navigate("/login");
      } else {
        let errorMessage = "Неизвестная ошибка";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = response.statusText;
        }
        setStatus(`❌ Ошибка: ${errorMessage}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Ошибка сети");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          className="input"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          className="input"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Зарегистрироваться
      </button>

      {status && <div className="status-message">{status}</div>}

      <div className="login-link">
        Уже есть аккаунт? <a href="/login">Войти</a>
      </div>
    </form>
  );
}
