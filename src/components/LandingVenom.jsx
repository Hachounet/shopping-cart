import styles from '../Landing.module.scss';

const LandingVenom = () => {
  return (
    <>
      <div className={`${styles['grid']} ${styles['landing']}`}>
        <div
          className={`${styles['bg-imgs-2']} ${styles['tilt-in-fwd-bl-no-scale']} ${styles['push-down']}`}
        >
          <img
            className={`${styles['img']} ${styles['tilt-in-fwd-bl']} `}
            src="src/assets/ja0GU8Il.png"
            alt="Futuristic Jordan shoes"
          ></img>
        </div>

        <p className={`${styles['push-up']}`}>
          <span>Or discover our new</span>
          <br></br>
          <span className={styles['cyberfall']}>Venom XT</span>
          <br></br>
          <span>
            to go <span className={styles['italic']}>faster</span> than light
            speed !
          </span>
        </p>
      </div>
    </>
  );
};

export default LandingVenom;
