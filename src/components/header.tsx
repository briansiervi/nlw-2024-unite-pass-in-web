import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={nlwUniteIcon}></img>

      <nav className="flex items-center gap-5 p-2">
        <NavLink title="Eventos" href="/eventos">
          Eventos
        </NavLink>
        <NavLink href="/participantes" selected>
          Participantes
        </NavLink>
      </nav>
    </div>
  );
}
