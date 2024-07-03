import styles from '../Shop.module.scss';
import Card from './Card';
import { useOutletContext } from 'react-router-dom';

import itemsToFetch from '../VarSetup';

const Shop = () => {
  const { addItemToCart } = useOutletContext();

  const cardList = [];
  for (let i = 0; i < itemsToFetch; i++) {
    cardList.push(
      <ul key={i}>
        <Card
          addItemToCart={addItemToCart}
          fetchID={i + 1}
        />
      </ul>
    );
  }
  return (
    <li
      className={`${styles['grid']} ${styles['grid-col-4']} ${styles['grid-row-2']} ${styles['shop-container']}`}
    >
      {cardList}
    </li>
  );
};

export default Shop;
