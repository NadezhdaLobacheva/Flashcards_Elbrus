import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import imagecat from "../../public/imagecat.jpeg";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <h1 className="main-title">
          🧠 Добро пожаловать в<span className="title-accent"> CardMaster</span>
        </h1>

        <p className="subtitle">
          Интеллектуальная битва разума • Тренировка памяти • Развитие мышления
        </p>

        <div className="main-content">
          <div className="text-content">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Развитие памяти</h3>
                <p>Тренируйте кратковременную и долговременную память</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Скорость реакции</h3>
                <p>Улучшайте когнитивные способности и скорость мышления</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Соревнование</h3>
                <p>Бросьте вызов друзьям и поднимитесь в рейтинге</p>
              </div>
            </div>

            <div className="action-buttons">
              <Link to="/game" className="btn-primary">
                🎮 Начать играть
              </Link>
              <Link to="/deck" className="btn-secondary">
                🃏 Мои колоды
              </Link>
            </div>
          </div>

          <div className="image-container">
            <img
              src={imagecat}
              alt="Мозг - символ интеллекта"
              className="brain-image"
            />
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Игроков</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Колод</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Улучшение памяти</div>
          </div>
        </div>
      </div>
    </div>
  );
}
