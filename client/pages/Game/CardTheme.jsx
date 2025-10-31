import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardTheme({ theme, handleTheme }) {
  let img = "";

  switch (theme.title) {
    case "Мир Гарри Поттера":
      img = "/harrypotter.png";
      break;
    case "КиноМания":
      img = "/movies.jpg";
      break;

    case "Россия":
      img = "/russia.jpg";
      break;

    default:
      img = "";
  }

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={img}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card.Title>{theme.title}</Card.Title>
        <Button onClick={() => handleTheme(theme)} variant="dark">
          Выбрать
        </Button>
      </Card.Body>
    </Card>
  );
}
