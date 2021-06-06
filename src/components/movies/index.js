import { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import Navigation from "components/navigation";
import Footer from "components/Footer";
import MovieMain from "./MovieMain";
import MovieSearchMain from "./MovieSearchMain";
import { MoviesContext } from "App";
import setPageDetails from "components/hooks_functions/setPageDetails";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { animateScroll as scroll } from "react-scroll";

const useQuery = () => new URLSearchParams(useLocation().search);

const Movies = () => {
  const { atTop } = useContext(MoviesContext);
  const links = setPageDetails("movies");
  const searchVal = useQuery().get("search_query");
  const { scrollToTop, scrollToBottom } = scroll;

  return (
    <CSSTransition
      in={true}
      timeout={350}
      classNames="header"
      unmountOnExit
      appear
    >
      <div className="header">
        <Navigation links={links} />
        <div className="container-movies" name="top">
          {searchVal ? (
            <MovieSearchMain searchVal={searchVal} />
          ) : (
            <MovieMain />
          )}
        </div>
        {atTop ? (
          <ArrowDownwardIcon
            className="arrow"
            onClick={() => scrollToBottom()}
          />
        ) : (
          <ArrowUpwardIcon className="arrow" onClick={() => scrollToTop()} />
        )}
        <Footer />
      </div>
    </CSSTransition>
  );
};

export default Movies;
