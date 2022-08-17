import internal from "../services/internal";
import { ratingCalc } from "../utils/ratingCalc";
import Stars from "./Stars";
import "../styles/UserRating.css";
import RatingList from "./RatingList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserRating = (props) => {
  const [all, setAll] = useState([]);
  const arr = props.arr;
  const bookId = props.book_id;
  const br = ["red", "blue", "green", "#4809f7", "#04AA6D"];
  const [star, setStar] = useState(0);

  useEffect(() => {
    internal.getAll("votes").then((res) => {
      setAll(res);
    });
  }, []);
  let new1 = all.filter(
    (vote) => vote.book_id === bookId && vote.rating === star
  );

  return (
    <>
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
              <>
                <div className="user-rating-list" key={idx}>
                  <button
                    type="button"
                    onClick={() => {
                      setStar(5 - x);
                    }}
                  >
                    {5 - x} <i className="fa-solid fa-star"></i>
                  </button>
                  <RatingList
                    key={idx}
                    bgcolor={br[x]}
                    completed={Math.round(
                      (arr[x] * 100) / ratingCalc.ratingCount(arr)
                    )}
                  />
                  <span>( {arr[x]} )</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="rating-info">{new1.map((x) => x.rating)}</div>
    </>
  );
};
export default UserRating;
