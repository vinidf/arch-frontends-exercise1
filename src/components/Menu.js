import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink to="/#blog-section-anchor">Blog</NavLink>
      <NavLink to="/#about-section-anchor">Sobre</NavLink>
      <NavLink to="/#">Descrição</NavLink>
    </nav>
  );
}

export default Menu;
