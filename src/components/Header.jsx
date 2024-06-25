import styles from '../Header.module.scss';
import PropTypes from 'prop-types';

const Header = ({ items = 3, sum = 92 }) => {
  console.log(items);
  return (
    <header className={styles.header}>
      <div className="noto-serif">L`Usine</div>
      <div>
        <button>Home</button>
        <button>Shop</button>
      </div>
      <div className={styles['cart-container']}>
        <p>{items} Items</p>
        <p>{sum} euros</p>
        <img
          src="src/assets/cart.svg"
          alt="Cart"
        ></img>
        <button>Go to checkout</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  items: PropTypes.number,
  sum: PropTypes.number,
};

Header.defaultProps = {
  items: 3,
  sum: 72.57,
};

export default Header;
