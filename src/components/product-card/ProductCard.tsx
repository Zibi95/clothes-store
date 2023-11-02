import { useCart } from '../../contexts/cart-context';
import { Product } from '../../types/product';
import Button, { ButtonTypes } from '../UI/button/Button';
import { ProductCardContainer, Footer, Name, Price } from './product-card.style';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { name, price, imageUrl } = product;

  return (
    <ProductCardContainer>
      <img
        src={imageUrl}
        alt={name}
      />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        onClick={() => addToCart(product)}
        type="button"
        buttonType={ButtonTypes.Inverted}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;

