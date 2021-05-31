import { useState, useEffect, useContext } from "react";
import { MoviesContext } from "App";

const useSearch = () => {
  const { url, totalPages } = useContext(MoviesContext);
  const [datas, setDatas] = useState({});

  useEffect(() => {
    for (let i = 1; i <= totalPages; i++) {
      fetch(url + i)
        .then((res) => res.json())
        .then((data) => {
          let currdatas = datas;
          currdatas[i] = data;
          setDatas(currdatas);
        });
    }
  }, []);

  return datas;
};

export default useSearch;
