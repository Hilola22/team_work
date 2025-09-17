import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../lib";
import ProductView from "../../components/product-view/ProductView";

const WishList = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  return (
    <div className="WishList">
      {!wishlist.length ? (
        <div className="text-center">
          <img
            src="https://st2.depositphotos.com/41116220/47825/v/450/depositphotos_478250634-stock-illustration-wishlist-line-icon-simple-outline.jpg"
            className="mx-auto"
            alt=""
          />
        </div>
      ) : (
        <ProductView data={wishlist} />
      )}
    </div>
  );
};

export default memo(WishList);
