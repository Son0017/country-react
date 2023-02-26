import { useEffect, useState } from "react";

export const getData = (api) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const request = async (api) => {
      try {
        setIsPending(true);
        const response = await fetch(api);
        const countrys = await response.json();
        if (response.status !== 200) {
          throw new Error("Something got wrong!!");
        }
        setData(countrys);
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error);
      }
    };
    request(api);
  }, [api]);

  return { data, isPending, error };
};
