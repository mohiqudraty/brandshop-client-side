const AddProduct = () => {
  return (
    <form className="container mx-auto my-8 px-4">
      <h2 className="text-4xl font-bold text-center">Add Your Product</h2>
      <div className="max-w-5xl mx-auto  my-6 grid gap-10 sm:grid-cols-2 ">
        {/*  input for Product Img URL */}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Img URL
          </label>
          <input
            type="text"
            name="productImg"
            placeholder="Type here Your Product Img URL"
            className="input input-bordered input-group w-full "
          />
        </div>
        {/*  input for Name */}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="input input-bordered input-group w-full "
          />
        </div>
        {/*  input for Brand Name */}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Brand Name
          </label>
          <input
            type="text"
            name="brand"
            placeholder="Brand Name"
            className="input input-bordered input-group w-full "
          />
        </div>
        {/*  input for Type */}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type
          </label>
          <input
            type="text"
            name="type"
            placeholder="Phone, Computer, Headphone, etc"
            className="input input-bordered input-group w-full "
          />
        </div>
        {/*  input Price */}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered input-group w-full "
          />
        </div>
        {/*  input for Short description */}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Short Description
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Short Description"
            className="input input-bordered input-group w-full "
          />
        </div>
        {/*  input for Rating */}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5) Number"
            className="input input-bordered input-group w-full "
          />
        </div>
      </div>

      <button
        type="submit"
        className="text-white block mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
