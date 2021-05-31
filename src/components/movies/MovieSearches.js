import { useContext } from "react";
import { MoviesContext } from "App";
import Loader from "./Loader";
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
    isPendingAll,
    errorMessageAll,
    hasErrorAll,
    pages,
  } = props;

  return (
    <>
      {hasErrorAll && <h1 className="submsg error">{errorMessageAll}</h1>}
      {!hasErrorAll && isPendingAll && <Loader />}
      {!hasErrorAll && !isPendingAll && matchMovies.length > 0 && (
        <>
          <PaginationSearch
            moviesPage={searchMoviesPage}
            setMoviesPage={setSearchMoviesPage}
            totalPages={pages}
          />
          <MovieListToggles
            moviesCount={searchMovies.length}
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
      )}
      {matchMovies.length === 0 && (
        <h1 className="submsg">No match searchMovies from search result</h1>
      )}
    </>
  );
};

export default MovieSearches;
