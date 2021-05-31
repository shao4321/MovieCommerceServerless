import { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "./index";

const HomeText = () => {
  const { menuSize, menuToggled } = useContext(HomeContext);

  return (
    <div className="text" style={{ top: menuToggled && `-${menuSize}px` }}>
      <h1 className="title">Movie Lord</h1>
      <h2>Binge Watch</h2>
      <h3>All Desired Movies</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur
        porro hic voluptates fuga, commodi nesciunt necessitatibus fugit dolore
        assumenda.
      </p>
      <Link to="/movies" className="browse">
        Browse Movies
      </Link>
    </div>
  );
};

export default HomeText;
