import { usePagination } from "@material-ui/lab/Pagination";

const Pagination = (props) => {
  const { moviesPage, setMoviesPage, totalPages } = props;

  const validatePageNav = (changeCntType) => {
    if (changeCntType === "decrement")
      return moviesPage > 1 ? `${moviesPage - 1}` : 1;
    return moviesPage < totalPages ? `${moviesPage + 1}` : totalPages;
  };

  const handlePageUpdate = (handleClick, page) => {
    handleClick();
    setMoviesPage(page);
  };

  const increment = "increment";
  const decrement = "decrement";

  const { items } = usePagination({
    count: totalPages,
  });
  return (
    <div className="pagination">
      {items.map(
        ({ page, type, selected, onClick: handleClick, ...items }, index) => {
          switch (type) {
            case "previous":
              return (
                <button
                  onClick={() =>
                    handlePageUpdate(
                      handleClick,
                      Number(validatePageNav(decrement))
                    )
                  }
                  key={index}
                  {...items}
                  className="pages page-arrow"
                >
                  &#9754;
                </button>
              );
            case "next":
              return (
                <button
                  onClick={() =>
                    handlePageUpdate(
                      handleClick,
                      Number(validatePageNav(increment))
                    )
                  }
                  key={index}
                  {...items}
                  className="pages page-arrow"
                >
                  &#9755;
                </button>
              );
            case "page":
              return (
                <button
                  key={index}
                  onClick={() => handlePageUpdate(handleClick, page)}
                  className={`pages ${moviesPage === page ? "active" : ""}`}
                  {...items}
                >
                  {page}
                </button>
              );
            default:
              return <span key={index}>...</span>;
          }
        }
      )}
    </div>
  );
};

export default Pagination;
