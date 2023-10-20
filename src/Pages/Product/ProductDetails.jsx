import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);

  const productDetails = useLoaderData();
  // console.log(productDetails);
  const { image, name, brandName, type, price, shortDescription, rating } =
    productDetails;

  const handleAddToCart = () => {
    console.log(productDetails);
    const {
      _id,
      image,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
    } = productDetails;

    const product = {
      _id,
      image,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
      email: user.email,
    };

    console.log(product);

    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Add To Cart Successful");
        }
      });
  };

  return (
    <div>
      <div className="card max-w-5xl  mx-auto bg-base-100 shadow-xl flex flex-col md:flex-row">
        <figure className="px-10 pt-10 md:w-2/3">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body justify-center ">
          <h2 className="card-title py-1">{name}</h2>

          <p>
            <span className="text-gray-900 font-medium">Brand: </span>{" "}
            {brandName}
          </p>
          <p>
            <span className="text-gray-900 font-medium">Type: </span> {type}
          </p>

          <div className="flex gap-2">
            <span className="text-gray-900 font-medium">Rating:</span>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p hidden className="text-gray-900 font-medium">
              {" "}
              {rating}
            </p>
          </div>

          <p>
            <span className="text-gray-900 font-medium">Price:</span> ${price}
          </p>

          <p>
            <span className="text-gray-900 font-medium">Description:</span>{" "}
            {shortDescription}
          </p>

          <div className="card-actions ">
            <button
              onClick={handleAddToCart}
              className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
