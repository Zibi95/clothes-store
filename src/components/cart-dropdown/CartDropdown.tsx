import Button from '../UI/button/Button';
import './cart-dropdown.styles.scss';

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button type="button">Go to checkout</Button>
    </div>
  );
}

export default CartDropdown;

