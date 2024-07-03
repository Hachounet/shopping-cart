import PropTypes from 'prop-types';
import useImageUrl from '../hooks/CardImageFetch';

const CardImage = ({ fetchID }) => {
  const { imageURL, error, loading } = useImageUrl({ fetchID });

  if (loading) return <p>Loading</p>;
  if (error) return <p>A network error was encountered, sorry !</p>;

  return (
    <>
      <img
        src={imageURL}
        alt={'placeholder text'}
      />
    </>
  );
};

export default CardImage;

CardImage.propTypes = {
  fetchID: PropTypes.number,
};
