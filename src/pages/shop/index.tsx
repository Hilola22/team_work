import { memo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import ProductView from '../../components/product-view/ProductView';

const Shop = () => {
   const {data} = useFetch("/products", {limit: 12})
  return (
    <div className="container">
      <h2>Shop</h2>
       <ProductView data={data?.products}/> 
    </div>
  );
};

export default memo(Shop);