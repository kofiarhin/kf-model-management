import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
          setData(data);
          setIsLoading(false);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
