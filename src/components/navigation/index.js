import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import NavToggler from "./NavToggler";
import NavLinks from "./NavLinks";
import { CSSTransition } from "react-transition-group";
import { MoviesContext } from "App";
import Search from "./Search";

const Navigation = ({ links }) => {
  const [menuToggled, setMenuToggled] = useState(false);
  const { setMoviesPage, headerBar } = useContext(MoviesContext);
  const props = { menuToggled, setMenuToggled };
  const { id } = useParams();

  return (
    <div className="navbar" ref={headerBar}>
      <Link to="/movies" className="title" onClick={() => setMoviesPage(1)}>
        Movie Lord
      </Link>
      {!links.includes("Movies") && !id && <Search />}
      <NavToggler props={props} />
      <CSSTransition
        in={menuToggled}
        timeout={200}
        classNames="nav-page"
        unmountOnExit
        appear
      >
        <NavLinks links={links} />
      </CSSTransition>
    </div>
  );
};

export default Navigation;
