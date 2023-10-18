import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("logout success");
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addproduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/mycart"}>My Cart</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>{" "}
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-center md:navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex gap-1 items-center ml-2 md:ml-0">
          <img
            className="h-8 sm:h-12 w-8 sm:w-12"
            src="https://i.ibb.co/1bCWhZT/brand-shop-bd-logo.png"
            alt=""
          />
          <h2 className="text-xl sm:text-3xl font-black">Brand Shop BD</h2>
        </div>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {user && (
        <div className="navbar-end">
          <p className="ml-2">{user?.displayName && user.displayName}</p>
          <div className=" p-1 rounded-full ring-2 ring-gray-300 duration-1000 hover:ring-gray-700 dark:ring-gray-500">
            {user?.photoURL ? (
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt="Bordered avatar"
              />
            ) : (
              <CgProfile className="w-10 h-10"></CgProfile>
            )}
          </div>
          <button
            onClick={handleLogOut}
            className="btn ml-2 text-white hover:text-black  bg-blue-600 sm:text-white  btn-sm sm:btn sm:bg-blue-600"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
