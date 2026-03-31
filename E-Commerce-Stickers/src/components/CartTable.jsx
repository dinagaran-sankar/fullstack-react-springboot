import React from "react";
import { useCart } from "../Store/cart-Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartTable = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const totalPrice = cart
    .reduce((acc, items) => acc + items.price * items.quantity, 0)
    .toFixed(2);

  const updateCartValue = (productId, quantity) => {
    const filterProduct = cart.find((items) => items.productId == productId);
    console.log(filterProduct);
    addToCart(filterProduct, quantity - (filterProduct?.quantity || 0));
  };

  const totalQty = cart.reduce((acc, items) => acc + items.quantity, 0);
  return (
    <>
      <div className="max-w-[865px]  min-h-[450px] mx-auto w-full font-serif [&_tr]:!border-b">
        <table className="w-full">
          <thead>
            <tr className="uppercase text-sm text-teal-800">
              <th className="px-6 py-6">Product</th>
              <th className="px-12 py-6">Quantity</th>
              <th className="px-12 py-6">Price</th>
              <th className="px-12 py-6">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((items) => (
              <tr
                key={items.productId}
                className="text-sm text-base text-gray-600 text-center [&_a]:!no-underline [&_a]:!text-gray-600"
              >
                <td className="px-2 sm:px-8 py-1 flex items-center">
                  <Link
                    to={`/products/${items.productId}`}
                    state={{ items }}
                    className="flex items-center"
                  >
                    <img
                      src={items.imageUrl}
                      alt={items.name}
                      className="w-16 h-16 rounded-md object-cover mr-4 hover:scale-110 transition-transform"
                    />
                    <span className="font-extrabold">{items.name}</span>
                  </Link>
                </td>
                <td className="px-2 sm:px-8 py-1">
                  <input
                    type="number"
                    inputMode="numeric"
                    className="w-16 px-2 py-1 rounded-sm focus:ring-gray-200 outline-2 focus:ring-light"
                    value={items.quantity}
                    onChange={(e) =>
                      updateCartValue(
                        items.productId,
                        parseInt(e.target.value, 10) || 1,
                      )
                    }
                  />
                </td>
                <td className="px-2 sm:px-8 py-1 text-base font-light">
                  ${items.price}
                </td>
                <td className="px-2 sm:px-8 py-1 text-base font-light">
                  <button
                    className="text-red-500 "
                    onClick={() => removeFromCart(items.productId)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
            {cart.length > 0 && (
              <tr className="text-center">
                <td className="px-6 py-6 text-sm text-teal-800 font-bold uppercase">
                  SubTotal
                </td>
                <td className="px-12 py-6 text-sm text-teal-800 font-bold uppercase">
                  {totalQty}
                </td>
                <td className="px-12 py-6 text-sm text-teal-800 font-bold uppercase">
                  ${totalPrice}
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartTable;
