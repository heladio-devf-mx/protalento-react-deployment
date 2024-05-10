import { useParams } from 'react-router-dom';
const Category = () => {
  // Get the userId param from the URL.
  // /category/5
  const { categoryId, search } = useParams();
  console.log(search);
  return <div>Category {categoryId}</div>;
};

export default Category;
