import { CSSTransition } from "react-transition-group";
import Poster from "data/landpage.jpg";
import HomeContents from "./HomeContents";

const LandPage = ({ menuSize, menuToggled }) => {
  return (
    <div className="landpage">
      <CSSTransition in={true} timeout={350} classNames="vid" appear>
        <img
          className="vid"
          src={Poster}
          style={{ top: menuToggled && `-${menuSize}px` }}
        />
      </CSSTransition>
      <CSSTransition in={true} classNames="home" timeout={450} appear>
        <HomeContents />
      </CSSTransition>
    </div>
  );
};

export default LandPage;
