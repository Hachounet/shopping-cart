import styles from '../Header.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ items = 3, sum = 151 }) => {
  function displayCheckout() {
    const scrollingText = document.querySelector(
      `.${styles['scrolling-text']}`
    );
    if (scrollingText) {
      scrollingText.classList.toggle(styles['display-none']);
    }
  }

  return (
    <header className={`${styles.header} longline`}>
      <div className={`${styles.logo} longline`}>The Factory</div>

      <div className={styles['btn-pages']}>
        <Link
          className={styles['hvr-underline-from-center']}
          to="/"
        >
          Home
        </Link>

        <Link
          className={styles['hvr-underline-from-center']}
          to="Shop"
        >
          Shop
        </Link>
      </div>
      <div
        className={styles['cart-container']}
        onMouseEnter={displayCheckout}
        onMouseLeave={displayCheckout}
      >
        <p>{items} items,</p>
        <p>{sum} $</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
        <div
          className={`${styles['scrolling-text']} ${styles['display-none']}`}
        >
          <button>
            <div className={styles['text']}>
              <span>Go to checkout Go to checkout Go to checkout</span>
              <span>Go to checkout Go to checkout Go to checkout</span>
              <span>Go to checkout Go to checkout Go to checkout</span>
              <span>Go to checkout Go to checkout Go to checkout</span>
            </div>
            <div className={styles['text']}>
              <span>Go to checkout Go to checkout Go to checkout</span>
              <span>Go to checkout Go to checkout Go to checkout</span>
              <span>Go to checkout Go to checkout Go to checkout</span>
              <span>Go to checkout Go to checkout Go to checkout</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  items: PropTypes.number,
  sum: PropTypes.number,
};

export default Header;
