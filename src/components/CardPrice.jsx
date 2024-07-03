import usePriceData from '../hooks/CardPriceFetch';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const CardPrice = ({ retrieveItemPrice, fetchID }) => {
  const { price, error, loading } = usePriceData({ fetchID });

  useEffect(() => {
    if (price) {
      retrieveItemPrice(price);
    }
  }, [price, retrieveItemPrice]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Network error</p>;

  return (
    <>
      <p>{price}$</p>
    </>
  );
};

CardPrice.propTypes = {
  retrieveItemPrice: PropTypes.func,
  fetchID: PropTypes.number,
};

usePriceData.propTypes = {
  fetchID: PropTypes.number,
};
export default CardPrice;
