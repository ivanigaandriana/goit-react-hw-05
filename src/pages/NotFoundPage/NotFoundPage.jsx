import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {

    return (
        <div className={css.notFoundPage}>
            <p className={css.notFoundPage__text}>Page not found</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}
export default NotFoundPage;