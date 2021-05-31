import { useContext } from "react";
import { MoviesContext } from "App";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Search = () => {
  const { input, setInput } = useContext(MoviesContext);
  const history = useHistory();
  const handleSearch = () => {
    if (input) {
      history.push(`/movies?search_query=${input}`);
      return;
    }
    history.push("/movies");
  };

  const handleClearSearch = () => {
    setInput("");
    history.push("/movies");
  };

  const clearTextBtnStyle = () => {
    return input === ""
      ? { opacity: "0", visibility: "hidden" }
      : { opacity: "1", visibility: "visible" };
  };

  return (
    <div className="searchBar">
      <div className="input-box">
        <input
          type="text"
          placeholder="Search Movies..."
          className="searchText"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          value={input}
        />
        <Button
          className="deleteText"
          onClick={handleClearSearch}
          style={clearTextBtnStyle()}
        >
          clear search
        </Button>
      </div>
      <Button
        variant="contained"
        color="default"
        className="searchBtn"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
