import { Link } from 'react-router-dom';
import styles from '../ErrorPage.module.scss';
const ErrorPage = () => {
  return (
    <div
      className={`${styles['flex']} ${styles['just-center']} ${styles['ali-items-center']} ${styles['container']}`}
    >
      <h1>Oh no, I think you are lost ! </h1>
      <Link to="/">You can go back to the homepage right here !</Link>
    </div>
  );
};

export default ErrorPage;
