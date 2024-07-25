import Logo from '../assets/Imagens/Logo.png'
import "./menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <nav className="menu-desktop">
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Projeto</a>
          </li>
          <li>
            <a href="">Contatos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
