import { useCart } from '../../contexts/cart-context';
import { CartItemType } from '../../types/cartItem';

type CheckoutItemProps = {
  item: CartItemType;
};

function CheckoutItem({ item }: CheckoutItemProps) {
  const { decrementQuantity, incrementQuantity, deleteCartItem } = useCart();
  const { imageUrl, name, quantity, price, id } = item;

  return (
    <div>
      <img
        src={imageUrl}
        alt={name}
      />
      <span>{name}</span>
      <span>
        <span onClick={() => decrementQuantity(id)}>⏪</span>
        {quantity}
        <span onClick={() => incrementQuantity(id)}>⏩</span>
      </span>
      <span>{price}</span>
      <span onClick={() => deleteCartItem(id)}>❌</span>
    </div>
  );
}

export default CheckoutItem;

