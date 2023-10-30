import './category-styles.scss';

type CategoryProps = {
  category: {
    title: string;
    imageUrl: string;
  };
};

function CategoryItem({ category: { title, imageUrl } }: CategoryProps) {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;

