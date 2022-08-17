import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import internal from "../services/internal";
import "../styles/BookInfo.css";
import UserRating from "./UserRating";

const BookInfo = () => {
  const [book, setBook] = useState({});
  const params = useParams();
  useEffect(() => {
    internal.getById(params.id).then((res) => setBook(res));
  }, [params.id]);

  return (
    <div className="book-info-site">
      <div className="book-view">
        <div className="gallery-box">
          <img src={book.img} alt="" />
        </div>

        <div className="book-info">
          <div className="book-info-title">{book.title}</div>
          <div className="book-info-author">
            {book.authors
              ? book.authors?.map((x, idx) => <div key={idx}>{x}</div>)
              : ""}
          </div>
        </div>
      </div>
      <div className="book-description">
        <h1>DESCRIPTION</h1>
        <p>{book.description}</p>
      </div>

      <div className="bibliography">
        <h1>Bibliographic information</h1>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <td>Authors</td>
              <td>
                {book.authors
                  ? book.authors?.map((x, idx) => (
                      <div key={idx}>
                        <Link to="/">{x}</Link>
                      </div>
                    ))
                  : ""}
              </td>
            </tr>
            {book.categories && (
              <tr>
                <td>Categories</td>
                <td>
                  {book.categories
                    ? book.categories?.map((x, idx) => (
                        <div key={idx}>
                          <Link to="/">{x.toUpperCase()}</Link>
                        </div>
                      ))
                    : ""}
                </td>
              </tr>
            )}
            {book.publisher && (
              <tr>
                <td>Publisher</td>
                <td>{book.publisher}</td>
              </tr>
            )}
            {book.publishedDate && (
              <tr>
                <td>Published date</td>
                <td>{book.publishedDate}</td>
              </tr>
            )}
            {book.pageCount && (
              <tr>
                <td>Length</td>
                <td>{book.pageCount}</td>
              </tr>
            )}
            {book.language && (
              <tr>
                <td>Language</td>
                <td>{book.language}</td>
              </tr>
            )}
            <tr>
              <td>ISBN</td>
              <td>{book.isbn}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1>User ratings</h1>
        <UserRating arr={book.rating || []} />
      </div>
    </div>
  );
};

export default BookInfo;
