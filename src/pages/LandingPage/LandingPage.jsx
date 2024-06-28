import { Link } from "react-router-dom";
import "./LandingPage.scss";
import figure from "../../assets/landing-figure.png";

export default function LandingPage() {
  return (
    <section className="landing">
      <article className="landing__content">
        <h1 className="landing__title">Looking for the perfect gift?</h1>
        <h2 className="landing__subtitle">We’ve got you covered.</h2>
        <Link to="/giftFinder/age" className="landing__start">
          START NOW
        </Link>
      </article>

      <img src={figure} alt="" className="landing__figure" />
    </section>
  );
}
