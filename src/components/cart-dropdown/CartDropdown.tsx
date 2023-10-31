import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/cart-context';
import Button from '../UI/button/Button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';

function CartDropdown() {
  const { items } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {items.map(item => (
          <CartItem
            cartItem={item}
            key={item.id}
          />
        ))}
      </div>
      <Button
        onClick={handleClick}
        type="button">
        Go to checkout
      </Button>
    </div>
  );
}

export default CartDropdown;

