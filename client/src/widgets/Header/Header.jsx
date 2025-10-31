import "./Header.css";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink className="navlink" to="/">
          Главная
        </NavLink>
        <NavLink className="navlink" to="/deck">
          Колода
        </NavLink>
        <NavLink className="navlink" to="/profile">
          Профиль
        </NavLink>
      </nav>
    </header>
  );
}
