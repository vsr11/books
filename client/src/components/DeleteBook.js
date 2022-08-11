import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import internal_api from "../services/internal";

const DeleteBook = () => {
  const params = useParams();
  const [book, setBook] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    internal_api.findBookById(params?.id).then((res) => setBook(res[0]));
  }, [params.id]);

  const onDeleteHandler = (e) => {
    e.preventDefault();
    let res = window.confirm(`Delete book "${book?.title}"?`);
    if (res) {
      internal_api.deleteBook(book.id).then(navigate("/"));
    }
  };

  return (
    book && (
      <>
        <div>{book?.title}</div>
        <button onClick={onDeleteHandler}>Delete</button>
      </>
    )
  );
};

export default DeleteBook;
