import { CSSTransition } from "react-transition-group";
import Navigation from "../navigation";
import Footer from "../Footer";
import setPageDetails from "../hooks_functions/setPageDetails";
import Content from "./Content";

const About = () => {
  const links = setPageDetails("about");

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
        <Content />
        <Footer />
      </div>
    </CSSTransition>
  );
};

export default About;
