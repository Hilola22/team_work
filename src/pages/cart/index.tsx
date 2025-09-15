import { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
  type ICartProduct,
} from "../../lib/features/cartSlice";

const Cart = () => {
  const carts = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  const total = useMemo(()=> {
    return carts.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [carts])
  
  return (
    <div className="container flex flex-col justify-center items-center text-center mt-20">
      {/* <h2>Cart</h2> */}
      {carts.length ? (
        <div className="container grid grid-cols-2">
          <div>
            {carts?.map((item: ICartProduct) => (
              <div key={item.id}>
                <img src={item.thumbnail} width={80} alt="" />
                <h3>{item.title}</h3>
                <strong>{item.stock}</strong>
                <p>
                  {item.price} * {item.quantity} = {item.price * item.quantity}
                </p>
                <div>
                  <button
                    className="disabled:opacity-30 p-2"
                    disabled={item.quantity <= 1}
                    onClick={() => dispatch(decreaseAmount(item))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    disabled={item.quantity >= item.stock}
                    className=" p-2"
                    onClick={() => dispatch(increaseAmount(item))}
                  >
                    +
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item))}>
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2>Total : {Math.floor(total).toLocaleString()} USD</h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-around">
          <img
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            width={150}
            alt=""
          />
          <p className="text-3xl font-sans">empty</p>
        </div>
      )}
    </div>
  );
};

export default memo(Cart);
