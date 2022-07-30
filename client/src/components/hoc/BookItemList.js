import "../../styles/BookItemList.css";
import WrappedView from "./WrappedView";

const BookItemList = (props) => (
  <WrappedView
    id={props.id}
    img={props.img}
    title={props.title}
    rating={props.rating}
    classdiv="book-item-list"
  />
);
export default BookItemList;
