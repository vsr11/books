import { ratingCalc } from "../utils/ratingCalc";
import "../styles/Stars.css";

const Stars = (props) => {
  const [arr, s] = [props.arr, Number(props.starpx)];
  return (
    <div>
      <span
        className="rating-box"
        style={{
          width: (s + 1) * 5 + 1 || 0,
          height: s + 1,
          backgroundSize: s + 1,
        }}
      >
        <span
          className="rating"
          style={{
            width:
              ((arr ? ratingCalc.averageRating(arr).toFixed(2) : 0) *
                ((s + 1) * 5 + 1)) /
                5 || 0,
            height: s + 1,
            backgroundSize: s + 1,
          }}
        ></span>
      </span>
    </div>
  );
};

export default Stars;
