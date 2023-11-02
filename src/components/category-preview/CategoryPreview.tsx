import { Product } from '../../types/product';
import ProductCard from '../product-card/ProductCard';
import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';

type CategoryPreviewProps = {
  title: string;
  products: Product[];
};

export function CategoryPreview({ title, products }: CategoryPreviewProps) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;

