import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TEAM_INFO = [
  {
    fio: "Надежда Лобачева",
    task: "Писала server-deck, client-login, seeders в БД и client-teamInfo. И там и там посидела, что-то поделала",
    image: "/Nadia.jpg",
  },
  {
    fio: "Андрей Иванов aka Тимлид",
    task: "Организовал работу команды: прописал структуру папок и поставил задачи каждому. Писал server-user и client-home. Собирал все комиты и правил их. Наш главный бэк",
    image: "/Andrey.jpg",
  },
  {
    fio: "Евгений Нагнибеда",
    task: "Писал server-card, client-register, client-home и client-game. Наш главный фронт",
    image: "/Zhenya.jpg",
  },
];

export default function TeamInfoPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 16,
        marginTop: 25,
      }}
    >
      <h2>Реактивные Орлы</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        {TEAM_INFO.map((info) => (
          <MemberCard info={info} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ info }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={info.image}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title>{info.fio}</Card.Title>
        <Card.Text>{info.task}</Card.Text>
      </Card.Body>
    </Card>
  );
}
