import { CSSTransition } from "react-transition-group";
import Video from "data/moviescene.mp4";
import HomeContents from "./HomeContents";

const LandPage = ({ menuSize, menuToggled }) => {
  return (
    <div className="landpage">
      <CSSTransition in={true} timeout={350} classNames="vid" appear>
        <video
          className="vid"
          src={Video}
          muted
          loop
          autoPlay
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
