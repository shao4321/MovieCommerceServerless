import "App.css";
import { useState, useRef, createContext, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "components/home";
import About from "components/about";
import Movies from "components/movies";
import Contact from "components/contact";
import MovieContent from "components/movies/MovieContent";
import useScroll from "components/hooks_functions/useScroll";
import Cart from "components/cart";
import fetchStorage from "components/hooks_functions/fetchStorage";
import { allMovies } from "data/movies.json";

// Current data base has 20 pages of movie lists
const totalPages = 20;

export const MoviesContext = createContext();

const App = () => {
  // Retreive datas from session storage if exist else set default
  const [moviesPage, setMoviesPage] = useState(fetchStorage("moviesPage", 1));
  const [cartMovies, setCartMovies] = useState(fetchStorage("cartMovies", []));
  const [openedMovies, setOpenedMovies] = useState(
    fetchStorage("openedMovies", [])
  );
  const [viewType, setViewType] = useState(fetchStorage("viewType", "grid"));

  // Set up Collapse Effect for Head Bar
  const headerBar = useRef(null);
  const [atTop, setAtTop] = useState(true);
  useScroll(headerBar, setAtTop);

  // Get all Movies and Genres
  const [movies, setMovies] = useState([]);
  const genres = Object.values(allMovies).reduce((set, movieList) => {
    for (let movie of movieList) {
      set = new Set([...set, ...new Set(movie["genres"])]);
    }
    return set;
  }, new Set());

  // Update Display Movies On every page change
  useEffect(() => {
    setMovies(allMovies[`movieList${moviesPage}`]);
  }, [moviesPage]);

  const [input, setInput] = useState("");
  const [matchMovies, setMatchMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState(new Set());

  const props = {
    totalPages,
    allMovies,
    genres,
    movies,
    setMovies,
    moviesPage,
    setMoviesPage,
    headerBar,
    cartMovies,
    setCartMovies,
    input,
    setInput,
    matchMovies,
    setMatchMovies,
    openedMovies,
    setOpenedMovies,
    selectedGenres,
    setSelectedGenres,
    viewType,
    setViewType,
    atTop,
    setAtTop,
  };

  return (
    <Router>
      <MoviesContext.Provider value={props}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" exact component={MovieContent} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </MoviesContext.Provider>
    </Router>
  );
};

export default App;
