import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useCart } from '../../contexts/cart-context';
import { CartItemType } from '../../types/cartItem';

function Checkout() {
  const { items } = useCart();

  return (
    <div>
      {items.map((item: CartItemType) => (
        <CheckoutItem item={item} />
      ))}
    </div>
  );
}

export default Checkout;

