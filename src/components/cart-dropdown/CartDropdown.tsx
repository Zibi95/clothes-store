import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/cart-context';
import Button from '../UI/button/Button';
import CartItem from '../cart-item/CartItem';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

function CartDropdown() {
  const { items } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {items.length > 0 ? (
          items.map(item => (
            <CartItem
              cartItem={item}
              key={item.id}
            />
          ))
        ) : (
          <EmptyMessage>Cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button
        onClick={handleClick}
        type="button">
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;

