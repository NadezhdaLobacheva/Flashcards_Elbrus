import { useRef } from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function GameWidget({ theme }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestionIndex] = useState(1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(0);

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
    if (
      answer.toLowerCase() ===
      questions[currentQuestion - 1].answer.toLowerCase()
    ) {
      setResult((prev) => (prev += 1));
    }

    setAnswer("");
    setCurrentQuestionIndex((prev) => (prev += 1));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [answer]);

  if (currentQuestion > questions.length) {
    return (
      <div>
        <div>Игра завершена!</div>
        <div>
          Ваш результат: {result} / {questions.length}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div>Выбранная тема: {theme.title}</div>
      <div>Результат: {result}</div>
      <div>
        <>
          Вопрос: № {currentQuestion} / {questions.length}
        </>
      </div>
      <Card style={{ width: "40rem" }}>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card.Text>{questions[currentQuestion - 1]?.question}</Card.Text>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Form.Label htmlFor="input">Введите ответ:</Form.Label>
            <Form.Control
              type="text"
              id="input"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              ref={inputRef}
            />
            <Button
              onClick={handleAnswer}
              disabled={!answer.length}
              variant="dark"
            >
              Ответить
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
