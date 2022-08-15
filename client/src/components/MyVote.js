import { useEffect, useState } from "react";
import internal_api from "../services/internal";
import { Rating } from "react-simple-star-rating";

const MyVote = ({ idUser, idBook, size }) => {
  const [rating, setRating] = useState(0);
  const [bookrat, setBookrat] = useState([0, 0, 0, 0, 0]);
  const [vote, setVote] = useState({});

  useEffect(() => {
    internal_api.getById(idBook).then((res) => {
      setBookrat(res.rating);
    });
    internal_api.getVote(idUser, idBook).then((res) => {
      setVote(res[0]);
    });
  }, [idBook, idUser]);

  const handleRating = (rate) => {
    setRating(rate);
    bookrat[5 - rate / 20] = bookrat[5 - rate / 20] + 1;
    console.log(vote.rating);
    if (vote.rating > 0) {
      bookrat[5 - vote.rating] = bookrat[5 - vote.rating] - 1;
    }
    console.log(bookrat);
    internal_api.updateVote(vote.id, rate / 20);
    internal_api.updateBook(idBook, { rating: bookrat });
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
export default MyVote;
