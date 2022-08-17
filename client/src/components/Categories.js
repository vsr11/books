import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookItem from "./hoc/BookItem";
import BookItemList from "./hoc/BookItemList";
import internal from "../services/internal";
import "../styles/Main.css";
import { useSearchParams } from "react-router-dom";
import { ratingCalc } from "../utils/ratingCalc";

const Categories = (props) => {
  const params = useParams();
  let [searchParams] = useSearchParams();
  let sort = searchParams.get("sort");
  const [state, setState] = useState([]);
  let title1 = "";
  let info1 = (x) => null;

  useEffect(() => {
    internal.getByCategories("categories", params.category).then((books) => {
      setState(books);
    });
  }, [params]);

  if (sort === "sortCount") {
    state.sort((item1, item2) => {
      return (
        ratingCalc.ratingCount(item2.rating) -
        ratingCalc.ratingCount(item1.rating)
      );
    });
    title1 = "Most read ";
    info1 = (x) => ratingCalc.ratingCount(x.rating) + "   votes";
  }

  if (sort === "sortAv") {
    state.sort((item1, item2) => {
      return (
        ratingCalc.averageRating(item2.rating) -
        ratingCalc.averageRating(item1.rating)
      );
    });
    title1 = "Highest rated ";
    info1 = (x) => "rating : " + ratingCalc.averageRating(x.rating);
  }

  return (
    <div id="site">
      <div id="main">
        <div className="title">
          {title1} {params.category} {title1 ? "books" : ""}
        </div>
        {state.length === 0 ? (
          <div className="title">No books yet</div>
        ) : (
          state?.map((x) => (
            <div key={x.id}>
              <div className="info">{info1(x)}</div>
              {/* <BookItem key={x.id} {...x} /> */}
              {props.view === "list" ? (
                <BookItemList key={x.id} {...x} />
              ) : (
                <BookItem key={x.id} {...x} />
              )}
            </div>
          ))
        )}
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
    </div>
  );
};

export default Categories;
