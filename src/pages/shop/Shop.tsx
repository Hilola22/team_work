import {
  memo,
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductView from "../../components/product-view/ProductView";

const ShopCards = () => {
  const [order, setOrder] = useState<string>("id-asc");
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const [category, setCategory] = useState("");
  const limit = 4;

  const { data: categories } = useFetch("/products/category-list");

  const { data, loading } = useFetch(`/products/${category}`, {
    limit,
    skip,
    sortBy: order.split("-")[0],
    order: order.split("-")[1],
  });

  useEffect(() => {
    if (data) {
      setProducts((prev: any) => [...prev, ...data?.products]);
    }
  }, [data]);

  const setDefaultValue = useCallback(() => {
    setProducts([]);
    setSkip(0);
  }, []);

  const handleChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
    setDefaultValue();
  };

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCategory(value ? `category/${value}` : value);
    setDefaultValue();
  };

  return (
    <div className="container mx-auto">
      <div>
        <select className="border" onChange={handleChangeOrder} name="" id="">
          <option value="id-asc">Ommabop</option>
          <option value="rating-desc">Reting</option>
          <option value="price-desc">Qimmat</option>
          <option value="price-asc">Arzon</option>
        </select>
        <select
          onChange={handleChangeCategory}
          name=""
          className="border"
          id=""
        >
          <option value="">All</option>
          {categories?.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span>{data?.total}</span>
      </div>
      <ProductView data={products} />
      {loading && <div className="text-center text-5xl">Loading...</div>}
      {data?.total > skip + limit && (
        <div className="flex justify-center py-6">
          <button onClick={() => setSkip((p) => p + limit)}>See more</button>
        </div>
      )}
    </div>
  );
};

export default memo(ShopCards);
