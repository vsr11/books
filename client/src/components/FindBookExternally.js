import { Navigate } from "react-router-dom";
import internal_api from "../services/internal";
import external_api from "../services/external";
import { useState } from "react";

const FindBookExternally = () => {
  const [, setBook] = useState({});
  const navigate = Navigate();

  const findBookExternallySubmitHandler = (e) => {
    e.preventDefault();
    let isbn = e.target.isbn.value;
    external_api
      .getByIsbn(isbn)
      .then((dataObj) =>
        Promise.resolve(external_api.extactBookData(dataObj, { isbn }))
      )
      .then((res) => internal_api.addBook(res))
      .then((res) => setBook(res))
      .then(navigate("/"));
  };

  return (
    <>
      <legend>Find book from Google Books via ISBN</legend>

      <form id="external" onSubmit={findBookExternallySubmitHandler}>
        <input type="text" name="isbn" />
        <input type="submit" value="Find book in Google Books" />
        <input type="reset" value="Reset" />
      </form>
    </>
  );
};

export default FindBookExternally;
