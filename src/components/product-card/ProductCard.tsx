import { Product } from '../../types/product';
import Button from '../UI/button/Button';
import './product-card.style.scss';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        type="button"
        buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;

