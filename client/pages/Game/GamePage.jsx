import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import GameWidget from "./GameWidget";
import CardTheme from "./CardTheme";

export default function GamePage() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [theme, setTheme] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:3000/api/decks");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        setDecks(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTheme = (theme) => {
    setTheme(theme);
  };

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
        marginTop: 50,
      }}
    >
      {theme?.title ? (
        <GameWidget theme={theme} />
      ) : (
        decks.map((theme) => {
          return (
            <CardTheme
              key={theme.title}
              theme={theme}
              handleTheme={handleTheme}
            />
          );
        })
      )}
    </div>
  );
}
