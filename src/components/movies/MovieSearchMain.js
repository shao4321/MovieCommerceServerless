import React from "react";
import MovieSearches from "./MovieSearches";
import { useState, useContext, useEffect } from "react";
import { MoviesContext } from "App";

const MovieSearchMain = ({ searchVal }) => {
  const { allMovies, totalPages, setMatchMovies } = useContext(MoviesContext);

  const [searchMoviesPage, setSearchMoviesPage] = useState(1);
  const [searchMovies, setSearchMovies] = useState([]);

  const [splitMovies, setSplitMovies] = useState({});
  const [pages, setPages] = useState(null);
  const moviesPerPage = 18;

  // Split the movies into assigned movies per page
  const splitMoviesPage = (matchArr, moviesPerPage) => {
    const splittedPages = {};
    let idx = 0;
    let pageNum = 1;
    while (idx + moviesPerPage < matchArr.length) {
      splittedPages[pageNum] = matchArr.slice(idx, idx + moviesPerPage);
      idx += moviesPerPage;
      pageNum++;
    }
    splittedPages[pageNum] = matchArr.slice(idx, matchArr.length);
    setPages(pageNum);
    return splittedPages;
  };

  // Set searched and matched movies from all the splitted movies on page change
  useEffect(() => {
    setSearchMovies(splitMovies[searchMoviesPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMoviesPage, splitMovies]);

  // Filter and set the searched and matched movies then split it
  useEffect(() => {
    let currMatches = [];
    if (typeof allMovies !== "undefined") {
      for (let i = 1; i <= totalPages; i++) {
        const matchList = allMovies[`movieList${i}`].filter((movie) =>
          movie.title.toLowerCase().startsWith(searchVal.toLowerCase())
        );
        if (matchList) {
          currMatches = [...currMatches, ...matchList];
        }
      }
      setMatchMovies(currMatches);
    }

    // Set the split matched movies after searched and assigned
    setSplitMovies(splitMoviesPage(currMatches, moviesPerPage));

    // Set the first page of matched movies
    setSearchMovies(currMatches.slice(0, moviesPerPage));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal]);

  const props = {
    pages,
    searchMoviesPage,
    setSearchMoviesPage,
    searchMovies,
    setSearchMovies,
  };

  return <MovieSearches props={props} />;
};

export default MovieSearchMain;
