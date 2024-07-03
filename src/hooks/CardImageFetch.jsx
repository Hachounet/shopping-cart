import { useState, useEffect } from 'react';

const useImageUrl = ({ fetchID }) => {
  const [imageURL, setImageURL] = useState(null);
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

      .then((response) => setImageURL(response.image))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [fetchID]);

  return { imageURL, error, loading };
};

export default useImageUrl;
