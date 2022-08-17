import { useContext } from "react";
import Auth from "../../contexts/Auth";

const isAllowed = (WrappedComponent) => {
  const Component = (props) => {
    const auth = useContext(Auth);
    if (!auth.isLoggedIn) {
      return <h1 className="err">Log in first!</h1>;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return Component;
};

export default isAllowed;
