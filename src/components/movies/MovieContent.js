import Footer from "components/Footer";
import Navigation from "components/navigation";
import MovieContentDetails from "./MovieContentDetails";
import setPageDetails from "../hooks_functions/setPageDetails";
import { useContext } from "react";
import { MoviesContext } from "App";

const MovieContent = () => {
  const links = setPageDetails("movies");
  const { openedMovies, input, matchMovies } = useContext(MoviesContext);

  return (
    <>
      <Navigation links={links} />
      <MovieContentDetails movies={input ? matchMovies : openedMovies} />
      <Footer />
    </>
  );
};

export default MovieContent;
