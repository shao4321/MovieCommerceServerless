import { useState, useEffect } from "react";

const useFetch = (url, dependencies) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(url + dependencies)
      .then((res) => {
        if (!res.ok)
          throw new Error("Could not fetch the data from the server");
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
      })
      .catch((err) => {
        setHasError(true);
        setErrorMessage(err.message);
      });
  }, [url, dependencies]);

  return { data, setData, isPending, hasError, errorMessage };
};

export default useFetch;
