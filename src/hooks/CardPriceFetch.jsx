import { useState, useEffect } from 'react';

const usePriceData = ({ fetchID }) => {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${fetchID}`, { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error(`Server error : ${response.status}`);
        }
        return response.json();
      })
      .then((response) => setPrice(response.price))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [fetchID]);

  return { price, error, loading };
};

export default usePriceData;
