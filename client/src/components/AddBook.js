import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../utils/categories";

import internal from "../services/internal";
import external from "../services/external";

import "../styles/AddBook.css";

const AddBook = () => {
  const navigate = useNavigate();
  const [one, setOne] = useState({});
  const [isbn, setISBN] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    internal.getGeneric("id", one?.items?.[0].id).then(
      (res) => {
        setFlag(res.length !== 0);
      },
      [one]
    );
  });

  const onebook = external.extactBookData(one, { isbn });

  const FindBookHandle = function (e) {
    e.preventDefault();
    external
      .getByIsbn(e.currentTarget.parentNode.parentNode.isbn.value)
      .then((data) => setOne(data));
    setISBN(e.currentTarget.parentNode.parentNode.isbn.value);
  };

  const AddBookHandle = function (e) {
    e.preventDefault();
    let categories = [];
    for (let x of e.currentTarget.parentNode) {
      if (x.type === "checkbox" && x.checked) {
        categories.push(x.value);
      }
      onebook.categories = categories;
    }
    internal.addBook(onebook);

    setISBN("");
    setOne({});
    document.forms[0].reset();
  };

  return (
    <div className="addbook">
      <form className="find-form">
        <fieldset>
          <legend>SEARCH BOOK IN GOOGLE BOOKS</legend>
          <label htmlFor="isbn">Enter isbn:</label>
          <input id="isbn" type="text" name="isbn" />

          <input type="submit" value="Find book" onClick={FindBookHandle} />
          <input type="reset" value="Reset" />
        </fieldset>
      </form>

      {!onebook.id ? (
        isbn ? (
          <h1 className="err">ISBN not found</h1>
        ) : (
          ""
        )
      ) : flag ? (
        <h1 className="err">Book already in database!</h1>
      ) : (
        <form className="add-form">
          <h1>{onebook.title}</h1>

          <fieldset>
            <legend>CATEGORIES</legend>
            <div className="categories">
              {categories.map((x) => {
                return (
                  <div className="categories-item" key={x}>
                    <label htmlFor={x}>{x}</label>
                    <input type="checkbox" id={x} name="categories" value={x} />
                  </div>
                );
              })}
            </div>
          </fieldset>

          <input type="submit" value="Add book" onClick={AddBookHandle} />
        </form>
      )}

      <button
        type="button"
        onClick={() => {
          setISBN("");
          setOne({});
          document.forms[0].reset();
        }}
      >
        Find another book
      </button>
      <button type="button" onClick={() => navigate.push("/")}>
        Go back
      </button>
    </div>
  );
};

export default AddBook;
