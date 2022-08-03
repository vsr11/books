import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import BookItem from "./hoc/BookItem";
import internal from "../services/internal";
import { categories } from "../utils/categories";
import "../styles/Main.css";

const Categories = () => {
  const params = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    internal.getByCategories("categories", params.category).then((books) => {
      setState(books);
    });
  }, [params.category]);

  return (
    <div id="site">
      <div className="categories">
        <h2>CATEGORIES</h2>
        <div className="item-categories">
          <ul>
            {categories.map((x) => (
              <li>
                <NavLink to={`/categories/${x}`}>{x}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="main">
        {state?.map((x) => (
          <BookItem key={x.id} {...x} />
        ))}
      </div>
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
  );
};

export default Categories;
