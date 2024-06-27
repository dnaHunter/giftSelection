import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <nav className="header__left">
        <Link className="header__link-logo">
          <img src="https://placehold.co/50" alt="" className="header__logo" />
        </Link>
        <Link className="header__nav-link">SHOP</Link>
        <Link className="header__nav-link">DISCOVER</Link>
        <Link className="header__nav-link">HELP</Link>
      </nav>
      <nav className="header__right">
        <Link className="header__link-logo">
          <img src="https://placehold.co/30" alt="" className="header__icon" />
        </Link>
        <Link className="header__link-logo">
          <img src="https://placehold.co/30" alt="" className="header__icon" />
        </Link>
        <Link className="header__link-logo">
          <img src="https://placehold.co/30" alt="" className="header__icon" />
        </Link>
      </nav>
    </section>
  );
}
