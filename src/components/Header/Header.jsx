import { Link } from "react-router-dom";
import "./Header.scss";
import left from "../../assets/Icons/left-arrow.svg";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import heart from "../../assets/heart_icon.svg";
import bag from "../../assets/bag_icon.svg";

export default function Header() {
  return (
    <section className="top">
      <section className="header">
        <nav className="header__left">
          <Link to="/" className="header__link-logo">
            <img src={logo} alt="" className="header__logo" />
          </Link>
          <Link className="header__nav-link">SHOP</Link>
          <Link className="header__nav-link">DISCOVER</Link>
          <Link className="header__nav-link">HELP</Link>
        </nav>
        <nav className="header__right">
          <Link className="header__link-logo">
            <img src={search} alt="" className="header__icon" />
          </Link>
          <Link className="header__link-logo">
            <img src={heart} alt="" className="header__icon" />
          </Link>
          <Link className="header__link-logo">
            <img src={bag} alt="" className="header__icon" />

          </Link>
        </nav>
      </section>
      <article className="pathTrace">
        <Link className="pathTrace__link">
          <p className="pathTrace__text">Home</p>
          <img src={left} alt="" className="pathTrace__left" />
        </Link>
        <Link className="pathTrace__link">
          <p className="pathTrace__text">LEGO Gift ideas</p>
          <img src={left} alt="" className="pathTrace__left" />
        </Link>
        <Link to="/" className="pathTrace__link">
          <p className="pathTrace__text">Gift Finder</p>
        </Link>
      </article>
    </section>
  );
}
