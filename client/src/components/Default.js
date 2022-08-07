import { Component } from "react";
import { Link } from "react-router-dom";
import BookItem from "./hoc/BookItem";
import internal from "../services/internal";
import "../styles/Main.css";

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    internal.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    const arrBooks = this.state.books;
    return (
      <div id="site">
        <div id="main">
          {arrBooks?.map((x) => (
            <BookItem key={x.id} {...x} />
          ))}
          <Link
            to="/"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <div className="to-top">
              <i className="fa-solid fa-arrow-up"></i>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Default;
