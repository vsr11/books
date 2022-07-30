import { Link } from "react-router-dom";

function WrappedView(props) {
  return (
    <div className={props.classdiv}>
      <div className="img">
        <Link to={"/info/" + props.id}>
          <img src={props.img} alt="NO IMG" />
        </Link>
      </div>

      <div className="title">
        <Link to={"/info/" + props.id}>{props.title}</Link>
      </div>
    </div>
  );
}

export default WrappedView;
