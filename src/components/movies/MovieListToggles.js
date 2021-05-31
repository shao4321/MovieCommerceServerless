import { useState, useContext } from "react";
import { MoviesContext } from "App";
import GridOnIcon from "@material-ui/icons/GridOn";
import ViewListIcon from "@material-ui/icons/ViewList";
import { sortAZ, sortZA, sortRandom } from "components/hooks_functions/sort";
import SortControl from "./SortControl";
import FilterControls from "./FilterControls";

const MovieListToggles = (props) => {
  const { moviesCount, viewType, movies, setMovies } = props;
  const { setViewType, selectedGenres, setSelectedGenres, genres } =
    useContext(MoviesContext);
  const [sortType, setSortType] = useState();

  const handleGridView = () => {
    setViewType("grid");
    sessionStorage.setItem("viewType", "grid");
  };

  const handleListView = () => {
    setViewType("list");
    sessionStorage.setItem("viewType", "list");
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
    e.target.value === "AZ"
      ? sortAZ(movies, setMovies)
      : e.target.value === "ZA"
      ? sortZA(movies, setMovies)
      : sortRandom(movies, setMovies);
  };

  return (
    <div className="movieTogglesMain">
      <div className="movieToggles">
        <div className="viewToggleBtns">
          <GridOnIcon
            onClick={handleGridView}
            className={`${viewType === "grid" && "viewActive"}`}
          />
          <ViewListIcon
            onClick={handleListView}
            className={`${viewType === "list" && "viewActive"}`}
          />
        </div>
        <p className="movieCnt">{moviesCount} Movies Found</p>
        <SortControl sortType={sortType} handleSort={handleSort} />
      </div>
      <FilterControls
        genres={genres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        movies={movies}
        setMovies={setMovies}
      />
    </div>
  );
};

export default MovieListToggles;
