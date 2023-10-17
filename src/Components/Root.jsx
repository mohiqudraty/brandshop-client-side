import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <div className="font-openSans">
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>
      <h2>This is root components</h2>
      <Outlet />
    </div>
  );
};

export default Root;
