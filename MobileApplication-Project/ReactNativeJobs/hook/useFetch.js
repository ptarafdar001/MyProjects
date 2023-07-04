import { useState, useEffect } from 'react';
import axios from 'axios';

//import { RAPID_API_KEY } from '@env';
//import { RAPID_API_KEY2 } from '@env';

//const rapidApiKey1 = RAPID_API_KEY;
//const rapidApiKey2 = RAPID_API_KEY2;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  };

  // const options = {
  //   method: "GET",
  //   url: `https://indeed12.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     "content-type": "application/octet-stream",
  //     "X-RapidAPI-Key": rapidApiKey2,
  //     "X-RapidAPI-Host": "indeed12.p.rapidapi.com",
  //   },
  // };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
