import { useState, createContext } from "react";
import HomeMenu from "./HomeMenu";
import LandPage from "./LandPage";
import setPageDetails from "components/hooks_functions/setPageDetails";

export const HomeContext = createContext();

const Home = () => {
  const links = setPageDetails("home");
  const [menuToggled, setMenuToggled] = useState(false);
  const menuSize = 250;
  const props = { menuSize, menuToggled, setMenuToggled };

  return (
    <HomeContext.Provider value={props}>
      <div className="home">
        <LandPage menuToggled={menuToggled} menuSize={menuSize} />
        <HomeMenu menuToggled={menuToggled} links={links} />
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
