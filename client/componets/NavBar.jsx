import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand-logo">
          <NavLink to={"/"} className="nav-brand-link">
            🎮 CardMaster
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/game"} className={({ isActive }) => `nav-link-custom ${isActive ? "nav-link-active" : ""}`}>
              🎯 Играть
            </NavLink>
            <NavLink
              to={"/mydeck"}
              className={({ isActive }) => `nav-link-custom ${isActive ? "nav-link-active" : ""}`}
            >
              🃏 Мои колоды
            </NavLink>
            <NavLink
              to={"/profile"}
              className={({ isActive }) => `nav-link-custom ${isActive ? "nav-link-active" : ""}`}
            >
              👤 Профиль
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
