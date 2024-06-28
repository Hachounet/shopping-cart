import styles from '../Shop.module.scss';

const Card = () => {
  return (
    <div className={`${styles['card']}`}>
      <img
        src=""
        alt=""
      />
      <div className={`${styles['card-infos']}`}>
        <p className={`${styles['longline']} ${styles['clickable']}`}>
          Item name
        </p>
        <p>27.99$</p>
        <div className={`${styles['interaction-container']}`}>
          <div>
            <button className={`${styles['red']} ${styles['clickable']}`}>
              -
            </button>
            <input
              type="number"
              className={`${styles['input-numb']}`}
            ></input>

            <button className={`${styles['green']} ${styles['clickable']}`}>
              +
            </button>
          </div>

          <div className={`${styles['push']}`}>
            <button className={`${styles['clickable']}`}>See more</button>
            <button className={`${styles['clickable']}`}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
