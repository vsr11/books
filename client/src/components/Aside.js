import { categories } from "../utils/categories";
import { NavLink, Link, useSearchParams } from "react-router-dom";
import "../styles/Aside.css";

const Aside = () => {
  let activeClassName = "active";

  const [q] = useSearchParams();
  const sort = q.get("sort");

  let isActive1 = sort === "sortCount";
  let isActive2 = sort === "sortAv";

  return (
    <div className="aside">
      <div className="categories">
        <h2>CATEGORIES</h2>
        <div className="item-categories">
          <ul>
            {categories.map((x, idx) => (
              <li key={idx}>
                <NavLink to={`/categories/${x}`}>{x}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sort">
        <h1>Rating</h1>
        <ul>
          <li>
            <Link
              to="?sort=sortCount"
              className={isActive1 ? activeClassName : ""}
            >
              Most read books
            </Link>
          </li>

          <li>
            <Link
              to="?sort=sortAv"
              className={isActive2 ? activeClassName : ""}
            >
              Highest rated books
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
