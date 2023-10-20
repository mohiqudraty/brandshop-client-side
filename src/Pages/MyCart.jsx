import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { AuthContext } from "../Providers/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const [myCart, setMycart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/carts/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMycart(data);
      });
  }, [email]);

  return (
    <div className="my-10">
      <h2 className="text-center text-4xl font-bold mb-10">My Cart</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {myCart.map((cart) => (
          <CartCard
            key={cart._id}
            cart={cart}
            myCart={myCart}
            setMycart={setMycart}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
