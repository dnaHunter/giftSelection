import "./Tracker.scss";

export default function Tracker({ position }) {
  return (
    <article className="tracker">
      <div className="tracker__bar">
        <div
          className={
            position >= 1
              ? "tracker__bubble tracker__bubble--active"
              : "tracker__bubble"
          }
        ></div>
        <div
          className={
            position >= 2
              ? "tracker__bubble tracker__bubble--active"
              : "tracker__bubble"
          }
        ></div>
        <div
          className={
            position >= 3
              ? "tracker__bubble tracker__bubble--active"
              : "tracker__bubble"
          }
        ></div>
        <div
          className={
            position >= 4
              ? "tracker__bubble tracker__bubble--active"
              : "tracker__bubble"
          }
        ></div>
      </div>
      
      <div className="tracker__names">
        <p
          className={
            position >= 1
              ? "tracker__name tracker__name--active"
              : "tracker__name"
          }
        >
          Age
        </p>
        <p
          className={
            position >= 1
              ? "tracker__name tracker__name--active"
              : "tracker__name"
          }
        >
          Interests
        </p>
        <p
          className={
            position >= 1
              ? "tracker__name tracker__name--active"
              : "tracker__name"
          }
        >
          Piece Count
        </p>
        <p
          className={
            position >= 1
              ? "tracker__name tracker__name--active"
              : "tracker__name"
          }
        >
          Price range
        </p>
      </div>
    </article>
  );
}
