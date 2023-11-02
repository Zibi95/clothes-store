import { CartItemType } from '../../types/cartItem';
import { CartItemContainer, ItemDetails, Name } from './cart-item.styles';

type CartItemProps = {
  cartItem: CartItemType;
};

function CartItem({ cartItem }: CartItemProps) {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img
        src={imageUrl}
        alt={name}
      />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;

