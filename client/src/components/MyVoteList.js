import isAllowed from "./hoc/isAllowed";
import internal_api from "../services/internal";
import Auth from "../contexts/Auth";
import { useContext, useEffect, useState } from "react";
import internal from "../services/internal";
import "../styles/MyVoteList.css";

const MyVoteList = () => {
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
    <div className="myvotelist">
      {[5, 4, 3, 2, 1].map((x) => (
        <div key={x}>
          <div className="vote-stars">{x} stars</div>
          {all
            .filter(
              (item) => item?.rating === x && item?.user_id === auth?.user?.id
            )
            .map((y, idy) => {
              return (
                <div key={idy} className="vote-book">
                  {books?.find((x) => x?.id === y?.book_id)?.title}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default isAllowed(MyVoteList);
