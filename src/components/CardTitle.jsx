import useTitleData from '../hooks/CardTitleFetch';
import styles from '../Shop.module.scss';
import PropTypes from 'prop-types';

const CardTitle = ({ fetchID }) => {
  const { textData, error, loading } = useTitleData({ fetchID });

  const truncatedText =
    textData.length > 40 ? textData.slice(0, 37).concat('...') : textData;

  if (loading) return <p>Loading</p>;
  if (error) return <p>Network error</p>;

  return (
    <>
      <p
        className={`${styles['longline']} ${styles['clickable']} ${styles['item-title']}`}
      >
        {truncatedText}
      </p>
    </>
  );
};

export default CardTitle;

CardTitle.propTypes = {
  fetchID: PropTypes.number,
};
