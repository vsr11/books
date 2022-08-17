import { useEffect, useState } from "react";
import internal_api from "../services/internal";
import { Rating } from "react-simple-star-rating";
import isAllowed from "./hoc/isAllowed";

const MyVote = ({ idUser, idBook, size }) => {
  const [rating, setRating] = useState(0);
  const [bookRating, setBookRating] = useState([0, 0, 0, 0, 0]);
  const [vote, setVote] = useState({});

  useEffect(() => {
    internal_api.getById(idBook).then((res) => {
      setBookRating(res.rating);
    });
    internal_api.getVote(idUser, idBook).then((res) => {
      setVote(res[0]);
    });
  }, [idBook, idUser]);

  const handleRating = (rate) => {
    setRating(rate);
    bookRating[5 - rate / 20] = bookRating[5 - rate / 20] + 1;
    if (vote.rating > 0) {
      bookRating[5 - vote.rating] = bookRating[5 - vote.rating] - 1;
    }
    vote.rating = rate / 20;
    internal_api.updateVote(vote.id, vote.rating);
    internal_api.updateBook(idBook, { rating: bookRating });
  };

  return (
    <div>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        initialValue={vote.rating}
        size={size}
      />
    </div>
  );
};
export default isAllowed(MyVote);
