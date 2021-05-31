const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const setPageDetails = (currPage) => {
  const allLinks = ["Home", "About", "Movies", "Contact", "Cart"];
  document.title = `${
    currPage === "home"
      ? ""
      : `${capitalize(currPage)} ${
          currPage.indexOf("about") > -1 || currPage.indexOf("contact") > -1
            ? "Us"
            : ""
        } - `
  }Movie Lord`;
  return allLinks.filter((link) => link.toLowerCase() !== currPage);
};

export default setPageDetails;
