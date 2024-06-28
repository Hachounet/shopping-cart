import styles from '../Shop.module.scss';
import Card from './/Card';
const Shop = () => {
  return (
    <div
      className={`${styles['grid']} ${styles['grid-col-4']} ${styles['grid-row-2']} ${styles['shop-container']}`}
    >
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default Shop;
