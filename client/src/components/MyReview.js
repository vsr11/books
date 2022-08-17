import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Auth from "../contexts/Auth";
import internal_api from "../services/internal";
import "../styles/MyReview.css";
import isAllowed from "./hoc/isAllowed";
import Stars from "./Stars";

const MyReview = () => {
  const [vote, setVote] = useState({});
  const [book, setBook] = useState({});
  const auth = useContext(Auth);
  const url = useParams();
  const book_id = url.book_id;
  const navigate = useNavigate();
  let arr = [0, 0, 0, 0, 0];
  arr[5 - vote.rating] = 1;

  useEffect(() => {
    internal_api.getVote(auth.user.id, book_id).then((res) => setVote(res[0]));
    internal_api.getById(book_id).then((res) => setBook(res));
  }, [book_id, auth.user.id]);

  const myReviewSubmitHandle = (e) => {
    e.preventDefault();
    console.log(22, vote);
    let comment = document.forms[0].comment.value;
    internal_api
      .updateVote(vote.id, vote.rating, comment)
      .then(navigate("/mybooks"));
  };
  return (
    <div className="review">
      <div className="bookinfo">
        <img src={book.img} alt="" />
        <div>
          <div className="title">{book.title}</div>
          <div>by {book.authors}</div>
        </div>
      </div>
      <div>
        Your Rating: <Stars arr={arr} starpx="40" />
      </div>
      <div>
        <b>{auth.user.name}</b>, write your review:
      </div>

      <form onSubmit={myReviewSubmitHandle}>
        {/* <label htmlFor="comment">Write your review:</label> */}
        <textarea
          name="comment"
          defaultValue={vote?.comment}
          cols="50"
          rows="5"
        ></textarea>
        <div>
          <input type="submit" value="Edit" />
          <input
            type="button"
            value="Go Home"
            onClick={() => {
              window.scroll(0, 0);
              navigate("/mybooks");
              return;
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default isAllowed(MyReview);
