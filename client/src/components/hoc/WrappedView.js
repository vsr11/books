import { Link } from "react-router-dom";
import Stars from "../Stars";
import Auth from "../../contexts/Auth";
import { useContext, useState } from "react";
import internal_api from "../../services/internal";

function WrappedView(props) {
  const auth = useContext(Auth);
  const [flag, SetFlag] = useState(false);
  // const [arr, setArr] = useState(auth.isLoggedIn ? auth.user.booksRead : []);

  const onReadHendler = () => {
    auth.user.booksRead.push(props.id);
    SetFlag(!flag);
    internal_api.addRead(auth.user.id, auth.user.booksRead);
    internal_api.doVote(auth.user.id, props.id);
  };

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
      <div>
        <Stars arr={props.rating || []} starpx="22" />
      </div>
      {auth?.isLoggedIn ? (
        auth.user.booksRead.includes(props.id) ? (
          <span className="button">Read</span>
        ) : (
          <button type="button" onClick={onReadHendler}>
            Read
          </button>
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default WrappedView;
