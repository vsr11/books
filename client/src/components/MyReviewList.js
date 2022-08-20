import isAllowed from "./hoc/isAllowed";
import internal_api from "../services/internal";
import Auth from "../contexts/Auth";
import { useContext, useEffect, useState } from "react";
import internal from "../services/internal";
import "../styles/MyVoteList.css";

const MyRatingList = () => {
  const auth = useContext(Auth);
  const [books, setBooks] = useState([]);
  const [all, setAll] = useState([]);
  useEffect(() => {
    internal_api.getAll().then((books) => {
      setBooks(books);
    });

    internal.getAll("votes").then((res) => {
      setAll(res);
    });
  }, []);
  return (
    <div className="myreviewlist">
      {all
        .filter((item) => item?.user_id === auth?.user?.id)
        .map((x, idx) => (
          <div key={idx}>
            <div className="vote-stars">
              {books?.find((y) => y?.id === x?.book_id)?.title}
            </div>
            <div className="vote-book">{x?.review || "No review yet."}</div>
          </div>
        ))}
    </div>
  );
};
export default isAllowed(MyRatingList);
