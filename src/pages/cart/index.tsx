import { memo, useMemo, useState } from "react";
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
  const [shipping, setShipping] = useState(0);
  const total = useMemo(() => {
    return carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [carts]);

  return (
    <div className="container flex flex-col justify-center items-center text-center mt-20">
      <h2 className="text-[54px] font-medium">Cart</h2>

      <div className="sm:flex gap-20 hidden sm:block w-[900px] mt-10 justify-around">
        <div>
          <div className="flex gap-5">
            <p className="bg-black text-white w-[42px] h-[42px] rounded-full flex justify-center items-center">
              1
            </p>
            <p className="mt-2 text-[16px]">Shopping cart</p>
          </div>
          <hr className="mt-5 h-0.5 w-[200px] bg-black border-none" />
        </div>
        <div className="flex gap-5">
          <p className="bg-slate-300 text-white w-[42px] h-[42px] rounded-full flex justify-center items-center">
            2
          </p>
          <p className="mt-2 text-[16px]">Checkout details</p>
        </div>
        <div className="flex gap-5">
          <p className="bg-slate-300 text-white w-[42px] h-[42px] rounded-full flex justify-center items-center">
            3
          </p>
          <p className="mt-2 text-[16px]">Order complete</p>
        </div>
      </div>

      {carts.length ? (
        <div className="container grid grid-cols-1 sm:grid-cols-2 mt-10">
          <div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-4 font-semibold">Product</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item: ICartProduct) => (
                  <tr key={item.id} className="border-b p-10">
                    <td className="p-4">
                      <div className=" sm:flex flex flex-row items-center gap-4">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-16 h-16 object-cover"
                        />
                        <div className="flex flex-col">
                          <span>{item.title}</span>
                          <button
                            onClick={() => dispatch(removeFromCart(item))}
                            className=" text-red-700 mt-1"
                          >
                            &#10005; remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          disabled={item.quantity <= 1}
                          onClick={() => dispatch(decreaseAmount(item))}
                          className="px-2 py-1 border rounded disabled:opacity-30"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          disabled={item.quantity >= item.stock}
                          onClick={() => dispatch(increaseAmount(item))}
                          className="px-2 py-1 border rounded disabled:opacity-30"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 border p-6 rounded-lg shadow-md w-full max-w-md mb-10 ml-auto">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="space-y-2 text-gray-700">
              <label className="flex justify-center items-center gap-2">
                <input
                  value="0"
                  onChange={() => setShipping(0)}
                  type="radio"
                  name="shipping"
                />
                Free shipping $0.00
              </label>
              <label className="flex justify-center items-center gap-2">
                <input
                  value="15"
                  onChange={() => setShipping(15)}
                  type="radio"
                  name="shipping"
                />
                Express Shipping: + $15.00
              </label>
              <label className="flex justify-center items-center gap-2">
                <input
                  value="21"
                  onChange={() => setShipping(21)}
                  type="radio"
                  name="shipping"
                />
                Pick Up: $21.00
              </label>
            </div>

            <div className="text-lg font-semibold mt-5">
              <p>Subtotal: $ {total.toFixed(2)}</p>
              <hr className="my-4 h-[2px] bg-gray-300 border-none" />
              <p>Total: $ {(total + shipping).toFixed(2)}</p>{" "}
            </div>
            <button className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-around items-center mt-10">
          <img
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            width={150}
            alt=""
          />
          <p className="text-3xl font-sans font-medium mt-4">empty</p>
        </div>
      )}
    </div>
  );
};

export default memo(Cart);
