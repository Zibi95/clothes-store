import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useUser } from '../../contexts/user-context';
import { useCart } from '../../contexts/cart-context';
import { signOutUser } from '../../services/firebase/firebase-utils';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import { LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from './navigation.styles';

function NavigationBar() {
  const { currentUser } = useUser();
  const { isCartOpen, toggleCart } = useCart();

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink
              onClick={signOutHandler}
              as="button"
              to="">
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <NavLink
            onClick={toggleCart}
            as="span"
            to="">
            <CartIcon />
          </NavLink>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default NavigationBar;

