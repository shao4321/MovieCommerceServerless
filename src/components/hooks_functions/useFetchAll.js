import { useState, useEffect } from "react";

const useFetchAll = (url, totalPages) => {
  const [datas, setDatas] = useState({});
  const [genres, setGenres] = useState(new Set());
  const [isPending, setIsPending] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const insertGenres = (datas) => {
    let genreList = new Set();
    for (let data of datas) {
      genreList = new Set([...genreList, ...new Set(data["genres"])]);
    }
    setGenres((currGenres) => new Set([...currGenres, ...genreList]));
  };

  useEffect(() => {
    for (let i = 1; i <= totalPages; i++) {
      fetch(url + i)
        .then((res) => {
          if (!res.ok)
            throw new Error("Could not fetch the data from the server");
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          let currdatas = datas;
          currdatas[i] = data;
          insertGenres(data);
          setDatas(currdatas);
        })
        .catch((err) => {
          setHasError(true);
          setErrorMessage(err.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { datas, genres, isPending, hasError, errorMessage };
};

export default useFetchAll;
