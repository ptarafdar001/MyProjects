import { useState, useEffect } from "react";
import axios from "axios";
//import { RAPID_API_KEY } from "@env";
//const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "cad238c4cdmshd08bfe2b250cb24p1ed3d9jsnf81a69779bff",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  // const options = {
  //   method: "GET",
  //   url: "https://indeed12.p.rapidapi.com/job/b762b8d1132bd276",
  //   headers: {
  //     "content-type": "application/octet-stream",
  //     "X-RapidAPI-Key": "da65001e21msh7b07baf323e4299p11beefjsn789c99f2a829",
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
      alert("There is an error");
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
