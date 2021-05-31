import { useContext } from "react";
import { MoviesContext } from "App";

const ShoppingCartIcon = () => {
  const { cartMovies } = useContext(MoviesContext);
  return (
    <span className="fa-stack fa-2x has-badge" data-count={cartMovies.length}>
      <i className="fa fa-circle fa-stack-2x"></i>
      <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
    </span>
  );
};

export default ShoppingCartIcon;
