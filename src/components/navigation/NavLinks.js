import { Link } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "App";
import PageLinks from "./PageLinks";

const NavLinks = ({ links }) => {
  const { setMoviesPage } = useContext(MoviesContext);

  return (
    <div className="nav-page">
      <div className="navbar dropdown" style={{ boxShadow: "none" }}>
        <Link to="/movies" className="title" onClick={() => setMoviesPage(1)}>
          Movie Lord
        </Link>
        <ul className="nav-links">
          <PageLinks links={links} />
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
