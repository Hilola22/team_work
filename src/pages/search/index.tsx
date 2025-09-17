import { memo } from "react";
// import ProductView from "../../components/product-view/ProductView";
// import { useFetch } from "../../hooks/useFetch";

const Search = () => {
  //   const { data } = useFetch("/products", { limit: 4 });

  return (
    <div className="container border">
      <div></div>
      {/* <ProductView data={data?.products} /> */}
    </div>
  );
};

export default memo(Search);
