import trackerImg from "../../assets/tracker1.png";
import AgeAnswer from "../AgeAnswer/AgeAnswer";
import one from "../../assets/images/1.png";
import four from "../../assets/images/4.png";
import six from "../../assets/images/6.png";
import nine from "../../assets/images/9.png";
import onethree from "../../assets/images/13.png";
import oneeight from "../../assets/images/18.png";
import "./Age.scss";

export default function Age({ setAge }) {
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
      <div className="age__positioning">
      <section className="age__questions">
        <h1 className="age__title">How old are they?</h1>
        <div className="age__questions-half">
          <AgeAnswer img={one} ageRange="1.5 and up" setAge={setAge} />
          <AgeAnswer img={four} ageRange="Four and up" setAge={setAge} />
          <AgeAnswer img={six} ageRange="6 and up" setAge={setAge} />
        </div>
        <div className="age__questions-half">
          <AgeAnswer img={nine} ageRange="9 and up" setAge={setAge} />
          <AgeAnswer img={onethree} ageRange="13 and up" setAge={setAge} />
          <AgeAnswer img={oneeight} ageRange="18 and up" setAge={setAge} />
        </div>
      </section>
      </div>
    </section>
  );
}
