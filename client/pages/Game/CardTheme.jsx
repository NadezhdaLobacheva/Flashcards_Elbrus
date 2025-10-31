import "./CardTheme.css";

export default function CardTheme({ theme, handleTheme }) {
  let img = "";

  switch (theme.title) {
    case "TOMAS WORLD":
      img = "/tomas.jpg";
      break;
    case "КиноМания":
      img = "/pepe.jpg";
      break;
    case "Россия":
      img = "/imagecat.jpg";
      break;
    default:
      img = "";
  }

  return (
    <div className="theme-card" onClick={() => handleTheme(theme)}>
      <div className="card-image-container">
        <img src={img} alt={theme.title} className="card-image" />
        <div className="card-overlay"></div>
        <div className="card-glow"></div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{theme.title}</h3>
        <div className="card-stats">
          <span className="stat">🃏 {theme.cardCount || 50} карточек</span>
          <span className="stat">⭐ {theme.difficulty || "Средняя"}</span>
        </div>

        <button className="select-button">
          <span className="button-text">Выбрать тему</span>
          <span className="button-icon">🎯</span>
          <div className="button-glow"></div>
        </button>
      </div>

      <div className="card-corner">
        <div className="corner-icon">✨</div>
      </div>
    </div>
  );
}
