import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BookItem from "./hoc/BookItem";
import BookItemList from "./hoc/BookItemList";
import internal from "../services/internal";
import "../styles/Main.css";
import "../utils/ratingCalc";
import { ratingCalc } from "../utils/ratingCalc";

const Default = (props) => {
  const [books, setBooks] = useState([]);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  let title1 = "";
  let info1 = () => null;

  useEffect(() => {
    internal.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  if (sort === "sortCount") {
    books.sort((item1, item2) => {
      return (
        ratingCalc.ratingCount(item2.rating) -
        ratingCalc.ratingCount(item1.rating)
      );
    });
    title1 = "Most read books";
    info1 = (x) => ratingCalc.ratingCount(x.rating) + "   votes";
  }

  if (sort === "sortAv") {
    books.sort((item1, item2) => {
      return (
        ratingCalc.averageRating(item2.rating) -
        ratingCalc.averageRating(item1.rating)
      );
    });

    title1 = "Highest rated books";
    info1 = (x) => "rating : " + ratingCalc.averageRating(x.rating);
  }

  return (
    <>
      <div id="main">
        <div className="title">{title1}</div>
        {books?.map((x) => (
          <div key={x.id} className="book">
            <div className="info">{info1(x)}</div>
            {props.view === "list" ? (
              <BookItemList key={x.id} {...x} />
            ) : (
              <BookItem key={x.id} {...x} />
            )}
          </div>
        ))}
        <Link
          to="/"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <div className="to-top">
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Default;
