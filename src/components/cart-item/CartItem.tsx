import { CartItemType } from '../../types/cartItem';
import './cart-item.styles.scss';

type CartItemProps = {
  cartItem: CartItemType;
};

function CartItem({ cartItem }: CartItemProps) {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;

