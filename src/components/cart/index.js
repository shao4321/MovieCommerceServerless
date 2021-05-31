import { CSSTransition } from "react-transition-group";
import Navigation from "components/navigation";
import setPageDetails from "components/hooks_functions/setPageDetails";
import Footer from "components/Footer";
import CartContents from "./CartContents";

const Cart = () => {
  const links = setPageDetails("cart");

  return (
    <CSSTransition
      in={true}
      timeout={350}
      classNames="header"
      unmountOnExit
      appear
    >
      <div>
        <Navigation links={links} />
        <CartContents />
        <Footer />
      </div>
    </CSSTransition>
  );
};

export default Cart;
