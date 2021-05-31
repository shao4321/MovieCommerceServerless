import "App.css";
import { useState, useRef, createContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "components/home";
import About from "components/about";
import Movies from "components/movies";
import Contact from "components/contact";
import MovieContent from "components/movies/MovieContent";
import useFetch from "components/hooks_functions/useFetch";
import useScroll from "components/hooks_functions/useScroll";
import Cart from "components/cart";
import useFetchAll from "components/hooks_functions/useFetchAll";
import fetchStorage from "components/hooks_functions/fetchStorage";

// Current data base has 20 pages of movie lists
const url = "http://localhost:5000/movieList";
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

  // Fetch Movies
  const {
    datas: allMovies,
    genres,
    ...allMovieStatus
  } = useFetchAll(url, totalPages);
  const {
    data: movies,
    setData: setMovies,
    ...movieStatus
  } = useFetch(url, moviesPage);

  const [input, setInput] = useState("");
  const [matchMovies, setMatchMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState(new Set());

  const props = {
    movieStatus,
    allMovieStatus,
    url,
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
