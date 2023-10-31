import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useCart } from '../../contexts/cart-context';
import './cart-icon.styles.scss';

function CartIcon() {
  const { totalItemsInCart } = useCart();

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItemsInCart}</span>
    </div>
  );
}

export default CartIcon;

