import { Link } from "react-router-dom";
import LinkTextIcons from "./LinkTextIcons";

const PageLinks = ({ links }) => {
  return (
    <>
      {links.map((link, i) => (
        <li key={i}>
          <Link
            to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
          >
            <LinkTextIcons type={link} />
          </Link>
        </li>
      ))}
    </>
  );
};

export default PageLinks;
