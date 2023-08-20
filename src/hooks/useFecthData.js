import { useEffect, useState } from "react";

export default function useFetchData(endpoint = `/server/data.json`) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setIsLoading(true);

    async function fetchBooks() {
      try {
        const response = await fetch(endpoint, { signal });
        const responseData = await response.json();
        setData(...responseData.book);
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return { data, isLoading, error };
}
