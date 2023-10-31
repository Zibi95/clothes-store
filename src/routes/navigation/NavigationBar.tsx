import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useUser } from '../../contexts/user-context';
import { useCart } from '../../contexts/cart-context';
import { signOutUser } from '../../services/firebase/firebase-utils';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

function NavigationBar() {
  const { currentUser } = useUser();
  const { isCartOpen, toggleCart } = useCart();

  const signOutHandler = async () => {
    await signOutUser();
  };

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
          {currentUser ? (
            <span
              onClick={signOutHandler}
              className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link
              className="nav-link"
              to="auth">
              SIGN IN
            </Link>
          )}
          <span
            onClick={toggleCart}
            className="nav-link">
            <CartIcon />
          </span>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}

export default NavigationBar;

