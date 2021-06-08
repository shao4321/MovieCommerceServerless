import { useContext } from "react";
import { HomeContext } from "./index";

const SocialMedia = () => {
  const { menuSize, menuToggled } = useContext(HomeContext);
  const myUrlTextSnippet = "Shao Movie Store";
  const myUrl = "https://moviecommerce.herokuapp.com/";

  return (
    <div>
      <h4
        className="media-label"
        style={{ bottom: menuToggled && `${menuSize + 50}px` }}
      >
        Share us on
      </h4>
      <ul className="social" style={{ bottom: menuToggled && `${menuSize}px` }}>
        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${myUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/x7P24fL/facebook.png"
              alt="facebook share"
            />
          </a>
        </li>
        <li>
          <a
            href={`http://twitter.com/share?text=${myUrlTextSnippet}&url=${myUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/Wnxq2Nq/twitter.png"
              alt="twitter share"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
