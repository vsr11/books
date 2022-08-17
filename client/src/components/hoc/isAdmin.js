import { useContext } from "react";
import Auth from "../../contexts/Auth";

const isAdmin = (WrappedComponent) => {
  const Component = (props) => {
    const auth = useContext(Auth);
    if (!auth.isAdmin) {
      return <h1 className="err">Only admin can do this!</h1>;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return Component;
};

export default isAdmin;
