import isAllowed from "./hoc/isAllowed";
import Auth from "../contexts/Auth";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import internal_api from "../services/internal";
import "../styles/MyBooks.css";
import { ratingCalc } from "../utils/ratingCalc";
import MyVote from "./MyVote";

const MyBooks = () => {
  const auth = useContext(Auth);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    internal_api.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  let arr1 = [];
  arr1 = books.filter((x) => auth?.user?.booksRead.includes(x.id));

  return arr1.map((book) => (
    <div className="mybooks" key={book.id}>
      <div className="img">
        <img src={book.img} alt="NO IMG" />
      </div>

      <NavLink to={"/info/" + book.id} className="title">
        <h1>{book?.title}</h1>
      </NavLink>

      <div>{ratingCalc?.averageRating(book?.rating).toFixed(2)}</div>

      <div className="vote">
        <MyVote idUser={auth?.user?.id} idBook={book?.id} size="30" />
      </div>
      <div>
        <NavLink to={"/myreview/" + book.id}>Write a review</NavLink>
      </div>
    </div>
  ));
};

export default isAllowed(MyBooks);
