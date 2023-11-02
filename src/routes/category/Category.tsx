import { useParams } from 'react-router-dom';
import { useCategories } from '../../contexts/categories-context';
import { useMemo } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

import { CategoryContainer, Title } from './category.styles';

function Category() {
  const { category } = useParams();
  const { categories } = useCategories();

  const products = useMemo(() => categories[category as string], [category, categories]);

  return (
    <>
      <Title>{category?.toUpperCase()}</Title>
      <CategoryContainer>
        {products?.map(product => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </CategoryContainer>
    </>
  );
}

export default Category;

