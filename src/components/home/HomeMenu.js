import { CSSTransition } from "react-transition-group";
import PageLinks from "components/navigation/PageLinks";

const HomeMenu = ({ menuToggled, links }) => {
  return (
    <CSSTransition
      in={menuToggled}
      timeout={{ enter: 350, exit: 200 }}
      classNames="menu"
      unmountOnExit
    >
      <div className="menu">
        <ul>
          <PageLinks links={links} />
        </ul>
      </div>
    </CSSTransition>
  );
};

export default HomeMenu;
