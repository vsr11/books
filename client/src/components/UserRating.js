import { ratingCalc } from "../utils/ratingCalc";
import Stars from "./Stars";
import "../styles/UserRating.css";
import RatingList from "./RatingList";

const UserRating = (props) => {
  const arr = props.arr;
  const br = ["red", "blue", "green", "#4809f7", "#04AA6D"];
  return (
    <div className="user-rating">
      <div className="user-rating-left">
        {arr ? ratingCalc.averageRating(arr).toFixed(2) : ""}
        / 5
        <Stars arr={arr} starpx="40" />
        <div>{ratingCalc.ratingCount(arr)} review</div>
      </div>
      <div className="user-rating-right">
        {[0, 1, 2, 3, 4].map((x, idx) => {
          return (
            <div className="user-rating-list" key={idx}>
              <span>
                {5 - x} <i className="fa-solid fa-star"></i>
              </span>
              <RatingList
                key={idx}
                bgcolor={br[x]}
                completed={Math.round(
                  (arr[x] * 100) / ratingCalc.ratingCount(arr)
                )}
              />
              <span>( {arr[x]} )</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserRating;
