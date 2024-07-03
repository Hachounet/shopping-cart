import styles from '../Shop.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardPrice from './CardPrice';

const Card = ({ addItemToCart, fetchID }) => {
  const [itemNumbs, setItemNumbs] = useState(1);
  const [itemPrice, setItemPrice] = useState(null);

  const retrieveItemPrice = (price) => {
    setItemPrice(price);
  };

  const increment = () => {
    setItemNumbs((prevState) => prevState + 1);
  };

  const decrement = () => {
    if (itemNumbs === 1) {
      return;
    }
    setItemNumbs((prevState) => prevState - 1);
  };

  const handleAddToCart = () => {
    addItemToCart(itemPrice, itemNumbs);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setItemNumbs(value);
    }
  };

  return (
    <div className={`${styles['card']}`}>
      <CardImage fetchID={fetchID} />
      <div className={`${styles['card-infos']}`}>
        <CardTitle fetchID={fetchID} />

        <CardPrice
          retrieveItemPrice={retrieveItemPrice}
          fetchID={fetchID}
        />
        <div className={`${styles['interaction-container']}`}>
          <div
            className={`${styles['crement-container']} ${styles['flex']} ${styles['centered']}`}
          >
            <button
              className={`${styles['red']} ${styles['clickable']} ${styles['crement-btns']} ${styles['flex']} ${styles['centered']}`}
              onClick={decrement}
              aria-label="Decrement button"
            >
              -
            </button>
            <input
              type="number"
              className={`${styles['input-numb']}`}
              value={itemNumbs}
              onChange={handleChange}
            ></input>

            <button
              className={`${styles['green']} ${styles['clickable']} ${styles['crement-btns']} ${styles['flex']} ${styles['centered']}`}
              onClick={increment}
              aria-label="Increment button"
            >
              +
            </button>
          </div>

          <div className={`${styles['push']} ${styles['cart-btns']}`}>
            <button className={`${styles['clickable']}`}>See more</button>
            <button
              className={`${styles['clickable']}`}
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  addItemToCart: PropTypes.func,
  fetchID: PropTypes.number,
};
