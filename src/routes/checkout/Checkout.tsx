import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useCart } from '../../contexts/cart-context';
import { CartItemType } from '../../types/cartItem';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, TotalPrice } from './checkout.styles';

function Checkout() {
  const { items, totalCartPrice } = useCart();

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {items.map((item: CartItemType) => (
        <CheckoutItem
          item={item}
          key={item.id}
        />
      ))}
      <TotalPrice>Total: ${totalCartPrice}</TotalPrice>
    </CheckoutContainer>
  );
}

export default Checkout;

