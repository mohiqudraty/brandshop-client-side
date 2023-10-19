import PropTypes from "prop-types";

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  console.log(children);
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  if (!user) {
    return (
      <div className="w-10 mx-auto mt-20">
        <p>Loading...</p>
        <span className="loading loading-dots loading-lg text-center mt-4"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
};

export default PrivetRoute;

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
