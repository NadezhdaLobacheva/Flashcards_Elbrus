import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to={"/"} className="nav-link">
            Главная
          </NavLink>
        </Navbar.Brand>
        <Nav className="mx-auto">
          <NavLink to={"/game"} className="nav-link">
            Игра
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
