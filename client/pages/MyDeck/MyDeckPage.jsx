import "./MyDeckPage.css";

export default function MyDeckPage() {
  return (
    <button className="add-deck-button">
      <span className="button-text">Добавить колоду</span>
      <span className="button-icon">+</span>
      <div className="button-glow"></div>
    </button>
  );
}
