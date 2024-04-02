import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={nlwUniteIcon}></img>

      <nav className="flex items-center gap-5 p-2">
        <NavLink title="Eventos" href="/eventos" selected={false}>
          Eventos
        </NavLink>
        <NavLink href="/participantes" selected={true}>
          Participantes
        </NavLink>
      </nav>
    </div>
  );
}
