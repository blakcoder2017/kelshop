import { useState, useEffect } from "react";
import NetworkService from "@services/NetworkService";

const networkService = new NetworkService("https://fakestoreapi.com");
const useCarts = (path, data) => {
  const [carts, setCarts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postCarts = async () => {
      setIsLoading(true);
      try {
        const response = await networkService.post(path, data);
        setCarts(response.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    postCarts();
  }, [path, data]);

  return [isLoading, carts, error];
};

export default useCarts;
