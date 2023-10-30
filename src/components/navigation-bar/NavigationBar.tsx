import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation-styles.scss';

function NavigationBar() {
  return (
    <>
      <div className="navigation">
        <Link
          to="/"
          className="logo-container">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link
            className="nav-link"
            to="shop">
            SHOP
          </Link>
          <Link
            className="nav-link"
            to="sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavigationBar;
