import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const PrivetRoute = ({ children }) => {
  console.log(children);
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
};

export default PrivetRoute;
