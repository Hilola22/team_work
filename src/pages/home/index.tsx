import { memo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import ProductView from '../../components/product-view/ProductView';
import Furniture from './components/furniture';
import Grid from './components/grid';
import Service from './components/service';
import Article from './components/article';
import Newsletter from '../../components/newsletter';

const Home = () => {
  const {data} = useFetch("/products", {limit: 16})
  
  return (
    <div className="container">
      <Furniture />
      <Grid />
      <ProductView data={data?.products} />
      <Service />
      <Article />
      <Newsletter/>
    </div>
  );
};

export default memo(Home);