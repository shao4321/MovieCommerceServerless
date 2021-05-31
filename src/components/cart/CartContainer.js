import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

const CartContainer = ({ movie, idx, cartMovies, setCartMovies }) => {
  const handleDeleteCartMovie = (id) => {
    let updatedCartMovies = cartMovies.filter((movie) => movie.id !== id);
    setCartMovies(updatedCartMovies);
    sessionStorage.setItem("cartMovies", JSON.stringify(updatedCartMovies));
  };

  return (
    <div className="cart-container">
      <span className="item-num">{idx + 1}</span>
      <img src={movie.poster} alt={movie.title} />
      <Link to={`/movies/${movie.id}`} className="cart-item-title">
        {movie.title}
      </Link>
      <span className="cart-item-price">${movie.price}</span>
      <DeleteIcon
        className="delete-icon"
        onClick={() => handleDeleteCartMovie(movie.id)}
      />
    </div>
  );
};

export default CartContainer;
