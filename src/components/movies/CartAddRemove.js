import { useState, useContext } from "react";
import { MoviesContext } from "App";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { CSSTransition } from "react-transition-group";

const CartAddRemove = ({ props }) => {
  const { showCartIcon, movie } = props;

  const { cartMovies, setCartMovies } = useContext(MoviesContext);

  const [movieInCart, setMovieInCart] = useState(
    cartMovies.find(({ id }) => id === movie.id)
  );

  const addMovieToCart = () => {
    let updatedCartMovies;
    updatedCartMovies = [...cartMovies, movie];
    setCartMovies(updatedCartMovies);
    sessionStorage.setItem("cartMovies", JSON.stringify(updatedCartMovies));
    setMovieInCart(true);
  };

  const removeMovieFromCart = () => {
    let updatedCartMovies;
    updatedCartMovies = cartMovies.filter(({ id }) => id !== movie.id);
    setCartMovies(updatedCartMovies);
    sessionStorage.setItem("cartMovies", JSON.stringify(updatedCartMovies));
    setMovieInCart(false);
  };
  return (
    <CSSTransition
      in={showCartIcon}
      timeout={350}
      classNames="movie-cart-btn"
      unmountOnExit
      appear
    >
      {movieInCart ? (
        <RemoveShoppingCartIcon
          className="movie-cart-btn"
          onClick={removeMovieFromCart}
        />
      ) : (
        <AddShoppingCartIcon
          className="movie-cart-btn"
          onClick={addMovieToCart}
        />
      )}
    </CSSTransition>
  );
};

export default CartAddRemove;
