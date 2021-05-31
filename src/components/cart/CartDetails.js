import { MoviesContext } from "App";
import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CartButtons from "./CartButtons";
import CartContainer from "./CartContainer";
import PriceTable from "./PriceTable";

const CartDetails = () => {
  const { cartMovies, setCartMovies } = useContext(MoviesContext);

  return (
    <>
      <div className="cart-wrapper">
        <TransitionGroup component={null}>
          {cartMovies.map((movie, idx) => (
            <CSSTransition
              key={movie.id}
              timeout={350}
              classNames="cart-container"
              unmountOnExit
              appear
            >
              <CartContainer
                movie={movie}
                idx={idx}
                cartMovies={cartMovies}
                setCartMovies={setCartMovies}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <CartButtons setCartMovies={setCartMovies} />
      <PriceTable cartMovies={cartMovies} />
    </>
  );
};

export default CartDetails;
