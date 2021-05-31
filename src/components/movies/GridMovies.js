import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "App";
import CartAddRemove from "./CartAddRemove";

const GridMovies = ({ movie }) => {
  const { openedMovies, setOpenedMovies } = useContext(MoviesContext);
  const handleOpenedMovies = () => {
    const updatedMovies = [...openedMovies, movie];
    setOpenedMovies(updatedMovies);
    sessionStorage.setItem("openedMovies", JSON.stringify(updatedMovies));
  };
  const [showCartIcon, setShowCartIcon] = useState(false);

  const props = { showCartIcon, movie };

  return (
    <div
      className="movie-banner-container"
      onMouseEnter={() => setShowCartIcon(true)}
      onMouseLeave={() => setShowCartIcon(false)}
    >
      <Link
        to={`/movies/${movie.id}`}
        onClick={handleOpenedMovies}
        className="movie-banner"
      >
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
        <center className="movie-title">{movie.title}</center>
      </Link>
      <CartAddRemove props={props} />
    </div>
  );
};

export default GridMovies;
