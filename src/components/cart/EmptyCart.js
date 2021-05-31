import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="cart-wrapper-flex">
      <h1>Your Cart Is Empty</h1>
      <Link to="/movies" className="effectButton">
        Fill it
      </Link>
    </div>
  );
};

export default EmptyCart;
