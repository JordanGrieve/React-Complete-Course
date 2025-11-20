import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const respone = fetch(url, config);

  const resData = await respone.json();

  if (!respone.ok) {
    throw new Error(resData.message || "Request failed");
  }

  return resData;
}

export default function useHttp(url, config) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    function sendRequest() {
      setIsLoading(true);
      try {
        const resData = sendHttpRequest(url, config);
        setData(resData);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [url, config],
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return { data, error, isLoading };
}
