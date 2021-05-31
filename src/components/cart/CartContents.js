import { MoviesContext } from "App";
import { useContext } from "react";
import CartDetails from "./CartDetails";
import EmptyCart from "./EmptyCart";

const CartContents = () => {
  const { cartMovies } = useContext(MoviesContext);

  return (
    <div className="cartMain">
      {cartMovies.length === 0 ? <EmptyCart /> : <CartDetails />}
    </div>
  );
};

export default CartContents;
