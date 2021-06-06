import { useContext } from "react";
import { MoviesContext } from "App";
import PaginationSearch from "./PaginationSearch";
import MovieList from "./MovieList";
import MovieListToggles from "./MovieListToggles";

const MovieSearches = ({ props }) => {
  const { matchMovies, viewType } = useContext(MoviesContext);
  const {
    searchMovies,
    setSearchMovies,
    searchMoviesPage,
    setSearchMoviesPage,
    pages,
  } = props;

  return (
    <>
      {matchMovies.length > 0 ? (
        <>
          <PaginationSearch
            moviesPage={searchMoviesPage}
            setMoviesPage={setSearchMoviesPage}
            totalPages={pages}
          />
          <MovieListToggles
            moviesCount={searchMovies && searchMovies.length}
            viewType={viewType}
            movies={searchMovies}
            setMovies={setSearchMovies}
          />
          <MovieList
            movies={searchMovies}
            moviesPage={searchMoviesPage}
            viewType={viewType}
          />
        </>
      ) : (
        <h1 className="submsg">No match searchMovies from search result</h1>
      )}
    </>
  );
};

export default MovieSearches;
