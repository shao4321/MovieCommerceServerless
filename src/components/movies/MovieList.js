import { CSSTransition, TransitionGroup } from "react-transition-group";
import GridMovies from "./GridMovies";
import ListMovies from "./ListMovies";

const MovieList = (props) => {
  const { movies, moviesPage, viewType } = props;

  return (
    <TransitionGroup
      className={`movies-container ${viewType === "grid" ? "grid" : "list"}`}
    >
      {movies.map((movie) => (
        <CSSTransition
          key={movie.id}
          timeout={350}
          classNames="movie-banner"
          unmountOnExit
        >
          {viewType === "grid" ? (
            <GridMovies movie={movie} moviesPage={moviesPage} />
          ) : (
            <ListMovies movie={movie} moviesPage={moviesPage} />
          )}
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default MovieList;
