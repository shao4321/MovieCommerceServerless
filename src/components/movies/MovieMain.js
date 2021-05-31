import { useContext } from "react";
import { MoviesContext } from "App";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import MovieListToggles from "./MovieListToggles";

const MovieMain = () => {
  const { movies, setMovies, moviesPage, setMoviesPage, totalPages, viewType } =
    useContext(MoviesContext);

  return (
    <>
      <Pagination
        moviesPage={moviesPage}
        setMoviesPage={setMoviesPage}
        totalPages={totalPages}
      />
      <MovieListToggles
        moviesCount={movies.length}
        viewType={viewType}
        movies={movies}
        setMovies={setMovies}
      />
      <MovieList movies={movies} moviesPage={moviesPage} viewType={viewType} />
    </>
  );
};

export default MovieMain;
