import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <div className="font-openSans">
      {/* navbar */}
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>
      {/* outlet */}
      <Outlet />
    </div>
  );
};

export default Root;
