import ShoppingCartIcon from "components/ShoppingCartIcon";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MovieIcon from "@material-ui/icons/Movie";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const LinkTextIcons = ({ type }) => {
  switch (type.toLowerCase()) {
    case "home":
      return (
        <div className="link-container">
          <HomeIcon />
          <span>Home</span>
        </div>
      );
    case "about":
      return (
        <div className="link-container">
          <InfoIcon />
          <span>About</span>
        </div>
      );
    case "movies":
      return (
        <div className="link-container">
          <MovieIcon />
          <span>Movies</span>
        </div>
      );
    case "contact":
      return (
        <div className="link-container">
          <ContactMailIcon />
          <span>Contact</span>
        </div>
      );
    case "cart":
      return (
        <div className="cart">
          <span>Cart</span>
          <ShoppingCartIcon />
        </div>
      );
    default:
      return;
  }
};

export default LinkTextIcons;
