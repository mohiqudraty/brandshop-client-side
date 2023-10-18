const AddProduct = () => {
  return (
    <form className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold text-center">Add Your Product</h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Img URL
          </label>
          <input
            type="text"
            placeholder="Type here Your Product Img URL"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
