import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Button, FormControlLabel, Checkbox } from "@material-ui/core";

const FilterControls = ({
  genres,
  selectedGenres,
  setSelectedGenres,
  movies,
  setMovies,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [initMovies, setInitMovies] = useState(movies);

  useEffect(() => {
    // To check that the filtered list of movies does not belong to a new list of movies
    // Only set new initMovies when page changes
    if (!initMovies.includes(movies[0]) && movies.length !== 0) {
      setInitMovies(movies);
      setSelectedGenres(new Set());
      setShowDropdown(false);
    }
  }, [movies]);

  useEffect(() => {
    selectedGenres.size === 0
      ? setMovies(initMovies)
      : setMovies(
          initMovies.filter((movie) => {
            if (movie.genres) {
              for (let genre of movie.genres) {
                if (selectedGenres.has(genre)) return true;
              }
            }
            return false;
          })
        );
  }, [selectedGenres]);

  const handleChange = (e) => {
    const currSelGenres = new Set([...selectedGenres]);
    if (e.target.checked) {
      currSelGenres.add(e.target.value);
      setSelectedGenres(currSelGenres);
    } else {
      currSelGenres.delete(e.target.value);
      setSelectedGenres(currSelGenres);
    }
  };

  return (
    <div className="dropdown-box">
      <Button
        className="dropbtn"
        color="primary"
        fullWidth
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {`${showDropdown ? "Hide" : "Show"} Filter Genres`}
      </Button>
      <CSSTransition
        in={showDropdown}
        timeout={350}
        classNames="dropdown-box-inner"
        unmountOnExit
        appear
      >
        <div className="dropdown-box-inner">
          <div className="dropdown-group">
            {[...genres].map((genre, id) => (
              <FormControlLabel
                key={id}
                control={
                  <Checkbox
                    checked={selectedGenres.has(genre)}
                    onChange={handleChange}
                    color="default"
                  />
                }
                label={genre}
                className="filter-labels"
                value={genre}
              />
            ))}
          </div>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => setSelectedGenres(new Set())}
          >
            clear filters
          </Button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default FilterControls;
