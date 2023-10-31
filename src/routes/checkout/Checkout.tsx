import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useCart } from '../../contexts/cart-context';
import { CartItemType } from '../../types/cartItem';
import './checkout.styles.scss';

function Checkout() {
  const { items } = useCart();

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item: CartItemType) => (
        <CheckoutItem
          item={item}
          key={item.id}
        />
      ))}
      <span className="total">Total: 0</span>
    </div>
  );
}

export default Checkout;

