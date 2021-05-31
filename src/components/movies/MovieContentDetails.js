import { useParams, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { MoviesContext } from "App";
import styled from "styled-components";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Background = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    background-image: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.527),
        rgba(0, 0, 0, 0.5)
      ),
      url(${(props) => props.posterUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const MovieContentDetails = ({ movies }) => {
  const { setCartMovies, cartMovies } = useContext(MoviesContext);
  const { id } = useParams();
  const history = useHistory();
  const [movie] = movies.filter((movie) => movie.id === id);
  const [addedToCart, setAddedToCart] = useState(
    cartMovies.filter((movie) => movie.id === id).length > 0
  );

  const toDateTime = (secs) => {
    var t = new Date(1970, 0, 1);
    t.setTime(secs * 1000);
    return t;
  };

  let movieDate, genres, mainTitle, ratings;
  if (movie) {
    movieDate = toDateTime(movie.release_date);
    movieDate = `${movieDate.getDate()}/${
      movieDate.getMonth() + 1
    }/${movieDate.getFullYear()}`;

    genres = movie.genres.reduce((str, genre) => str + ", " + genre, "");
    genres = genres.replace(",", "").trim();

    mainTitle = movie.title.split(":")[0];
    ratings = (movie.ratings * 10).toFixed(1);
  }

  const handleMovieToCart = () => {
    let updatedCartMovies;
    if (addedToCart) {
      // Remove from cart
      updatedCartMovies = cartMovies.filter((movie) => movie.id !== id);
      setCartMovies(updatedCartMovies);
    } else {
      // Add to cart
      updatedCartMovies = [...cartMovies, movie];
      setCartMovies(updatedCartMovies);
    }
    sessionStorage.setItem("cartMovies", JSON.stringify(updatedCartMovies));
    setAddedToCart(!addedToCart);
  };

  return (
    <>
      {movie && (
        <Background posterUrl={movie.poster}>
          <div className="movie-content-box">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-details">
              <h1 className="movie-title">{movie.title}</h1>
              <div className="ratings">
                <span
                  style={{ width: `${ratings}%` }}
                  className="ratings-rating"
                ></span>
              </div>
              <h4>{movieDate}</h4>
              <h5>{genres}</h5>
              <h2>${movie.price}</h2>

              <p className="movie-main-title">{mainTitle}</p>
              <h3 className="overview">Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div className="buttons">
              <a
                href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
                target="_blank"
                rel="noreferrer"
                className="trailer"
              >
                <PlayCircleFilledWhiteIcon />
                <span>Watch Trailer</span>
              </a>
              <Button
                variant="contained"
                color={`${addedToCart ? "secondary" : "primary"}`}
                className="cart-btn"
                startIcon={
                  addedToCart ? (
                    <RemoveShoppingCartIcon />
                  ) : (
                    <AddShoppingCartIcon />
                  )
                }
                onClick={handleMovieToCart}
              >
                {addedToCart ? "Remove from" : "Add to"} Cart
              </Button>
            </div>
            <ArrowBackIcon className="arrow" onClick={() => history.goBack()} />
          </div>
        </Background>
      )}
    </>
  );
};

export default MovieContentDetails;
