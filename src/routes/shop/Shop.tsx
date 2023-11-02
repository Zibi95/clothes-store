import ProductCard from '../../components/product-card/ProductCard';
import { useProducts } from '../../contexts/products-context';
import './shop.styles.scss';

function Shop() {
  const { allProducts } = useProducts();

  return (
    <div className="products-container">
      {allProducts.map(product => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default Shop;

