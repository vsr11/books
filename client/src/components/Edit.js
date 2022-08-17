import internal_api from "../services/internal";
import { useState, useEffect } from "react";
import { categories } from "../utils/categories";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "../styles/Edit.css";

const Edit = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    internal_api.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return books.map((book) => (
    <div className="edit">
      <h1>{book.title}</h1>
      <NavLink to={"/edit/" + book.id}>Edit</NavLink>
      <NavLink to={"/delete/" + book.id}>Delete</NavLink>
    </div>
  ));
};
export default Edit;
