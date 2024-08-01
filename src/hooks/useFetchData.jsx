import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useFetchData = ({ url, limit, offset }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  const handleFetchFunc = useCallback(async () => {
    try {
      const res = await axios.get(url, {
        params: { limit, offset },
        headers: {
          environmentId: "66a9f2d939e2fdc09bbba056",
          projectId: "66a9f2d939e2fdc09bbba055",
        },
      });
      setData(res.data.data); // Adjust according to your API response structure
      setTotalCount(res.data.totalCount); // Adjust according to your API response structure
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, limit, offset]);

  useEffect(() => {
    handleFetchFunc();
  }, [handleFetchFunc]);

  return { data, loading, error, refetch: handleFetchFunc, totalCount };
};

export default useFetchData;
