import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("get data");
    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
          setData(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [url]);
  return { data };
};

export default useFetch;
