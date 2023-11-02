import { useCategories } from '../../contexts/categories-context';
import CategoryPreview from '../../components/category-preview/CategoryPreview';

function CategoriesPreview() {
  const { categories } = useCategories();

  return (
    <>
      {Object.keys(categories).map(title => (
        <CategoryPreview
          key={title}
          title={title}
          products={categories[title]}
        />
      ))}
    </>
  );
}

export default CategoriesPreview;

