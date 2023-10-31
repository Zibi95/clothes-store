import { useCart } from '../../contexts/cart-context';
import { CartItemType } from '../../types/cartItem';
import './checkout-item.styles.scss';

type CheckoutItemProps = {
  item: CartItemType;
};

function CheckoutItem({ item }: CheckoutItemProps) {
  const { decrementQuantity, deleteCartItem, addToCart } = useCart();
  const { imageUrl, name, quantity, price, id } = item;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={name}
        />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => decrementQuantity(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => addToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => deleteCartItem(id)}>
        ❌
      </div>
    </div>
  );
}

export default CheckoutItem;

