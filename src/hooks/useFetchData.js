import { useState, useEffect } from 'react';
import httpService from '../services/httpService';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await httpService.get(url);
      setData(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.response ? error.response.statusText : error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const refetchData = (url) => {
    fetchData(url);
  };

  return { data, loading, error, refetchData };
};

export default useFetchData;