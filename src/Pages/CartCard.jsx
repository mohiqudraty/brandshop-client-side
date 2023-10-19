const CartCard = () => {
  return (
    <div className="bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/VDwKLDn/Sony-WH-1000-XM5.png"
          className="w-60 h-60 object-cover rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">Headphone 233</h1>
          <p className="py-4">price 3879</p>
          <div>
            <button className="btn ">Delete</button>
            <button className="btn ">Update</button>
          </div>

          <button className="btn btn-primary">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
