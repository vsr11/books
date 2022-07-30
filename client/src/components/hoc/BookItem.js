import "../../styles/BookItem.css";
import WrappedView from "./WrappedView";

const BookItem = (props) => (
  <WrappedView
    id={props.id}
    img={props.img}
    title={props.title}
    rating={props.rating}
    classdiv="book-item"
  />
);
export default BookItem;
