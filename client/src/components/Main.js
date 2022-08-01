import { Component } from "react";
import { Link } from "react-router-dom";
import BookItem from "./hoc/BookItem";
import internal from "../services/internal";
import { categories } from "../utils/categories";
import "../styles/Main.css";
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component {
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
    return (
      <>
        <Header />
        <div id="site">
          <div className="categories">
            <h2>CATEGORIES</h2>
            <div className="item-categories">
              <ul>
                {categories.map((x) => (
                  <li>
                    <Link to="/">{x}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="main">
            {this.state.books?.map((x) => (
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
        <Footer />
      </>
    );
  }
}
export default Main;
