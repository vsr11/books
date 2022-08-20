import internal from "../services/internal";
import { ratingCalc } from "../utils/ratingCalc";
import Stars from "./Stars";
import "../styles/UserRating.css";
import RatingList from "./RatingList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserRating = (props) => {
  const [all, setAll] = useState([]);
  const [user, setUser] = useState([]);
  const arr = props.arr;
  const br = ["#f7a309", "#f7a309", "#f7a309", "#f7a309", "##f7a309"];
  const [star, setStar] = useState(0);

  const url = useParams();
  useEffect(() => {
    internal.getAll("votes").then((res) => {
      setAll(res);
    });
    internal.getAll("users").then((res) => {
      setUser(res);
    });
  }, []);

  let new1 = all.filter(
    (vote) => vote.book_id === url.id && vote.rating === star
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
          {[0, 1, 2, 3, 4].map((x) => {
            return (
              <div key={x}>
                <div className="user-rating-list" key={x}>
                  <button
                    type="button"
                    onClick={() => {
                      setStar(5 - x);
                    }}
                  >
                    {5 - x} <i className="fa-solid fa-star"></i>
                  </button>
                  <RatingList
                    key={x}
                    bgcolor={br[x]}
                    completed={Math.round(
                      (arr[x] * 100) / ratingCalc.ratingCount(arr)
                    )}
                  />
                  <span>( {arr[x]} )</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rating-info">
        <h1>Ratings & Reviews</h1>

        {new1.map((x) =>
          x.rating !== 0 ? (
            <div key="x.id" className="rating-item">
              <div>
                <b> {user?.find((el) => el?.id === x?.user_id)?.name}</b>
              </div>
              <div>
                <b>Rating: </b>
                {[1, 2, 3, 4, 5].map((x) => {
                  return x <= star ? (
                    <i className="fa-star fa-solid"></i>
                  ) : (
                    <i className="fa-star fa-regular"></i>
                  );
                })}
                <div>
                  <div>
                    <b>Review: </b>
                    {x.review !== "" ? x.review : "No reviews yet!"}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};
export default UserRating;
