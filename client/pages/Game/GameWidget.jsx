import { useRef } from "react";
import { useEffect, useState } from "react";
import "./GameWidget.css";

export default function GameWidget({ theme, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestionIndex] = useState(1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/cards/`);
      const result = await response.json();
      setQuestions(result.filter((card) => card.deckId === theme.id));
    };

    fetchData();
  }, [theme]);

  const handleAnswer = () => {
    const correct =
      answer.toLowerCase() ===
      questions[currentQuestion - 1].answer.toLowerCase();
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setResult((prev) => prev + 1);
    }

    setTimeout(() => {
      setAnswer("");
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsCorrect(null);
      setShowFeedback(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && answer.length) {
      handleAnswer();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [answer, currentQuestion]);

  if (currentQuestion > questions.length) {
    return (
      <div className="game-completed">
        <div className="completion-container">
          <div className="completion-icon">🏆</div>
          <h1 className="completion-title">Игра завершена!</h1>
          <div className="result-display">
            <div className="score-circle">
              <span className="score-number">{result}</span>
              <span className="score-total">/{questions.length}</span>
            </div>
            <div className="score-percentage">
              {Math.round((result / questions.length) * 100)}% правильных
              ответов
            </div>
          </div>

          <div className="completion-actions">
            <button
              className="action-btn primary"
              onClick={() => window.location.reload()}
            >
              🔄 Играть снова
            </button>
            <button className="action-btn secondary" onClick={onBack}>
              ← Выбрать другую тему
            </button>
          </div>

          <div className="completion-stats">
            <div className="stat-item">
              <div className="stat-value">{result}</div>
              <div className="stat-label">Правильно</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{questions.length - result}</div>
              <div className="stat-label">Неправильно</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{questions.length}</div>
              <div className="stat-label">Всего вопросов</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game-widget">
      {/* Хедер игры */}
      <div className="game-header">
        <button className="back-button" onClick={onBack}>
          ← Назад
        </button>
        <div className="game-title">
          <span className="theme-icon">🎯</span>
          {theme.title}
        </div>
        <div className="game-stats">
          <div className="stat-badge">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{result}</span>
          </div>
          <div className="stat-badge">
            <span className="stat-icon">🎯</span>
            <span className="stat-value">
              {currentQuestion}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Прогресс бар */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Основной контент вопроса */}
      <div className="question-container">
        <div className="question-card">
          <div className="question-header">
            <div className="question-number">Вопрос #{currentQuestion}</div>
            <div className="question-difficulty">Сложность: 🟢 Легкая</div>
          </div>

          <div className="question-text">
            {questions[currentQuestion - 1]?.question}
          </div>

          {/* Фидбек */}
          {showFeedback && (
            <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
              <div className="feedback-icon">{isCorrect ? "✅" : "❌"}</div>
              <div className="feedback-text">
                {isCorrect
                  ? "Правильно!"
                  : `Правильный ответ: ${
                      questions[currentQuestion - 1]?.answer
                    }`}
              </div>
            </div>
          )}
        </div>

        {/* Поле ввода */}
        <div className="answer-section">
          <label htmlFor="answer-input" className="input-label">
            💭 Введите ваш ответ:
          </label>
          <div className="input-container">
            <input
              type="text"
              id="answer-input"
              className="answer-input"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              ref={inputRef}
              placeholder="Напишите ответ здесь..."
              disabled={showFeedback}
            />
            <div className="input-glow"></div>
          </div>

          <button
            onClick={handleAnswer}
            disabled={!answer.length || showFeedback}
            className="submit-button"
          >
            <span className="button-text">Ответить</span>
            <span className="button-icon">🚀</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>

      {/* Подсказки */}
      <div className="hints-section">
        <div className="hint-item">
          <span className="hint-icon">💡</span>
          Нажмите Enter для быстрого ответа
        </div>
        <div className="hint-item">
          <span className="hint-icon">⚡</span>
          Регистр не имеет значения
        </div>
      </div>
    </div>
  );
}
