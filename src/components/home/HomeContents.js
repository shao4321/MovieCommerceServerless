import HomeText from "./HomeText";
import MenuToggler from "./MenuToggler";
import SocialMedia from "./SocialMedia";

const HomeContents = () => {
  return (
    <div className="content-container">
      <HomeText />
      <SocialMedia />
      <MenuToggler />
    </div>
  );
};

export default HomeContents;
