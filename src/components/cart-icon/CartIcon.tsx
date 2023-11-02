import { useCart } from '../../contexts/cart-context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

function CartIcon() {
  const { totalItemsInCart } = useCart();

  return (
    <CartIconContainer>
      <ShoppingIcon />
      <ItemCount>{totalItemsInCart}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;

