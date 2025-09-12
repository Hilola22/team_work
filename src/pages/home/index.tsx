import { memo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import ProductView from '../../components/product-view/ProductView';

const Home = () => {
  const {data} = useFetch("/products", {limit: 4})
  
  return (
    <div className="container">
      <h2>Home</h2>
      <ProductView data={data?.products}/>  
    </div>
  );
};

export default memo(Home);