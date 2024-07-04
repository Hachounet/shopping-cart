import styles from '../Landing.module.scss';

const Landing = () => {
  return (
    <>
      <div className={`${styles['grid']} ${styles['landing']}`}>
        <p className={`${styles['flex']} ${styles['fader']}`}>
          {' '}
          <span>Introducing the new </span>
          <span
            aria-label="product-descr1"
            className={styles['bradshaw']}
          >
            XR Turbo Sneakers !
          </span>
          <span>
            Grab them now before they{"'"}re gone and{' '}
            <span className={styles['bradshaw']}>unleash your style</span> on
            the streets of your city!
          </span>
        </p>

        <div
          className={`${styles['bg-imgs']} ${styles['tilt-in-fwd-br-no-scale']}`}
        >
          {' '}
          <img
            className={`${styles['img']} ${styles['tilt-in-fwd-br']} ${styles['flip']}`}
            src="public/assets/1E4NWpHR.png"
            alt="Futuristic shoes"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Landing;
