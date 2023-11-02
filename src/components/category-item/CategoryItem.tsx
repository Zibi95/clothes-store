import { BackgroundImage, CategoryBody, CategoryContainer } from './category.styles';

type CategoryProps = {
  category: {
    title: string;
    imageUrl: string;
  };
};

function CategoryItem({ category: { title, imageUrl } }: CategoryProps) {
  return (
    <CategoryContainer to={`shop/${title}`}>
      <BackgroundImage $imageUrl={imageUrl} />
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </CategoryBody>
    </CategoryContainer>
  );
}

export default CategoryItem;

