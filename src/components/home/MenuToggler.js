import { useContext } from "react";
import { HomeContext } from "./index";

const MenuToggler = () => {
  const { menuToggled, setMenuToggled } = useContext(HomeContext);

  return (
    <div>
      <input
        type="checkbox"
        className="toggler"
        checked={menuToggled}
        onChange={() => setMenuToggled(!menuToggled)}
      />
      <div className="hamburger">
        <div
          className="hamburger-div"
          style={{ background: menuToggled && "#333" }}
        ></div>
      </div>
    </div>
  );
};

export default MenuToggler;
