import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, { [css.active]: isActive });

  return (
    <div className={css.nav}>
    <nav className={css.nav}>
      <NavLink to="/" className={getNavLinkClassName}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getNavLinkClassName}>
        Movies
      </NavLink>
    </nav></div>
  );
};

export default Navigation;