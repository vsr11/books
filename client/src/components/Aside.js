import { categories } from "../utils/categories";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
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
      <NavLink to="/sort1">Most read books</NavLink>
      <NavLink to="/sort2">Highest rated books</NavLink>
    </div>
  );
};
export default Aside;
