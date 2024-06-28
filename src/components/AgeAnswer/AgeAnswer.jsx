import { useNavigate } from "react-router-dom";
import "./AgeAnswer.scss";

export default function AgeAnswer({ img, ageRange, setAge }) {
  const nav = useNavigate();
  function handleClick(event) {
    setAge(ageRange);
    nav("/giftFinder/theme");
  }

  return (
    <article onClick={handleClick} className="answer">
      <img src={img} alt="" className="answer__img" />
      <p className="answer__range">{ageRange}</p>
    </article>
  );
}
