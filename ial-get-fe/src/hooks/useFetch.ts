import { useCallback, useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => Promise<void>;
}

const useFetch = <T,>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error as Error);
    }

    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
};

export { useFetch };
