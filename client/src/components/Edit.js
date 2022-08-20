import internal_api from "../services/internal";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Edit.css";

const Edit = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    internal_api.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return books?.map((book) => (
    <div className="edit" key={book.id}>
      <NavLink to={"/info/" + book.id}>
        <h2>{book.title}</h2>
      </NavLink>
      <NavLink to={"/edit/" + book.id}>Edit</NavLink>
      <NavLink to={"/delete/" + book.id}>Delete</NavLink>
    </div>
  ));
};
export default Edit;
