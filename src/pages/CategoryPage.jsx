import { Link } from 'react-router-dom';

const CategoryPage = () => {
  return (
    <>
      <div>Category Page</div>
      <ul>
        <Link to='/category/1'>Categoria 1</Link>
        <Link to='/category/2'>Categoria 2</Link>
        <Link to='/category/3'>Categoria 3</Link>
        <Link to='/category/4'>Categoria 4</Link>
      </ul>
    </>
  );
};
export default CategoryPage;
