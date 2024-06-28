import "./Theme.scss";
import trackerImg from "../../assets/tracker2.png";
import { Link } from "react-router-dom";

export default function Theme({ setTheme, theme }) {
  const themes = [
    { title: "Vehicles and Technology", subThemes: ["Space", "Vehicles"] },
    {
      title: "Entertainment and Leisure",
      subThemes: ["Gaming", "Sport", "Music"],
    },
    {
      title: "Real World Inspirations",
      subThemes: ["Buildings", "Real Life Heroes", "Travel"],
    },
    {
      title: "Characters and Stories",
      subThemes: ["Disney", "Fantasy", "Film and TV", "Ninjas", "Star Wars"],
    },
  ];

  function handleClick(event) {
    event.currentTarget.classList.add("themes__option--selected");
    setTheme([...theme, event.target.textContent]);
  }

  return (
    <section className="themes">
      <article className="tracker">
        <img src={trackerImg} alt="" className="tracker__img" />
        <div className="tracker__labels">
          <p className="tracker__label">Age</p>
          <p className="tracker__label tracker__label--active">Interests</p>
          <p className="tracker__label">Piece Count</p>
          <p className="tracker__label">Price range</p>
        </div>
      </article>

      <section className="themes__questions">
        <h1 className="themes__title">What are their interests?</h1>
        <h2 className="themes__subtitle">Select 2 or more</h2>
        <section className="themes__lists">
          {themes.map((theme) => {
            return (
              <article key={theme.title} className="themes__column">
                <h3 className="themes__option-title">{theme.title}</h3>
                {theme.subThemes.map((sub) => {
                  return (
                    <div
                      key={sub}
                      onClick={handleClick}
                      className="themes__option"
                    >
                      <p>{sub}</p>
                    </div>
                  );
                })}
              </article>
            );
          })}
        </section>
        <Link className="themes__finish">FINISH</Link>
      </section>
    </section>
  );
}
