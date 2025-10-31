import React from "react";
import { useState, useEffect } from "react";
import DeckWidgets from "../../widgets/DeckWidgets/DeckWidgets";

export default function DeckPage() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/decks");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setDecks(result);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching decks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDecks();
  }, []);

  if (loading) return <div>Загрузка колод...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      {decks.length > 0 ? (
        decks.map((deck) => <DeckWidgets key={deck.id} deck={deck} />)
      ) : (
        <div>Колоды не найдены</div>
      )}
    </div>
  );
}
