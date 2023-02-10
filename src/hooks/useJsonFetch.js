import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const timestampRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        if (timestampRef.current === timestamp) {
          setData(data);
        }
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return [{data, loading, error}]
}
