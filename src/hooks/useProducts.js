import { useState, useEffect } from 'react';
import NetworkService from "@services/NetworkService";

const networkService = new NetworkService('https://fakestoreapi.com')
const useProducts = (path) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await networkService.get(path);
                setProducts(response.data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };

        fetchProducts();
    }, [path]);

    return [isLoading, products, error];
};

export default useProducts;
