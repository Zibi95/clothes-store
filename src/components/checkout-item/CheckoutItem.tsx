import { useCart } from '../../contexts/cart-context';
import { CartItemType } from '../../types/cartItem';
import { CheckoutItemContainer, ImageContainer, Quantity, RemoveButton } from './checkout-item.styles';

type CheckoutItemProps = {
  item: CartItemType;
};

function CheckoutItem({ item }: CheckoutItemProps) {
  const { decrementQuantity, deleteCartItem, addToCart } = useCart();
  const { imageUrl, name, quantity, price, id } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img
          src={imageUrl}
          alt={name}
        />
      </ImageContainer>
      <span>{name}</span>
      <Quantity>
        <div onClick={() => decrementQuantity(id)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addToCart(item)}>&#10095;</div>
      </Quantity>
      <span>${price}</span>
      <RemoveButton onClick={() => deleteCartItem(id)}>❌</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;

