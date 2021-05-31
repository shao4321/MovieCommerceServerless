import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const CartButtons = ({ setCartMovies }) => {
  const history = useHistory();

  const handleClearCart = () => {
    setCartMovies([]);
    sessionStorage.removeItem("cartMovies");
  };

  return (
    <div className="cart-buttons">
      <Button
        variant="outlined"
        color="primary"
        className="button"
        onClick={() => history.push("/movies")}
      >
        Continue Browsing
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        className="button"
        onClick={handleClearCart}
      >
        clear shopping cart
      </Button>
    </div>
  );
};

export default CartButtons;
