import trackerImg from "../../assets/tracker1.png";
import AgeAnswer from "../AgeAnswer/AgeAnswer";
import "./Age.scss";

export default function Age({setAge}) {
  return (
    <section className="age">
      <article className="tracker">
        <img src={trackerImg} alt="" className="tracker__img" />
        <div className="tracker__labels">
          <p className="tracker__label tracker__label--active">Age</p>
          <p className="tracker__label">Interests</p>
          <p className="tracker__label">Piece Count</p>
          <p className="tracker__label">Price range</p>
        </div>
      </article>
      <section className="age__questions">
        <h1 className="age__title">How old are they?</h1>
        <AgeAnswer img ageRange="1.5+" setAge={setAge} />
      </section>
    </section>
  );
}
