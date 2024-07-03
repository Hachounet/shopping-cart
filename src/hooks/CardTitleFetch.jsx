import { useState, useEffect } from 'react';

const useTitleData = ({ fetchID }) => {
  const [textData, setTextData] = useState('');
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
      .then((response) => setTextData(response.title))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [fetchID]);

  return { textData, error, loading };
};

export default useTitleData;
