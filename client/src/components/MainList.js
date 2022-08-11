import { useEffect, useState } from "react";
import "../styles/Main.css";
import BookItemList from "./hoc/BookItemList";
import internal from "../services/internal";

const MainList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    internal.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <div className="MainList">
      {books?.map((x) => (
        <BookItemList key={x.id} {...x} />
      ))}
    </div>
  );
};

export default MainList;
