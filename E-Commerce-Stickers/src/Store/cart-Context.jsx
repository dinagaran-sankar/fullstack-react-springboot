import { useReducer } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(); //u can provide initial data use array object nested objectr

// const inputCartContext = {
//   cart: [],
//   setCart: () => {},
//   addToCart: () => {
//     console.log("add to cart sucesss");
//   },
//   removeFromCart: () => {},
//   totalQuantity: 0,
// };
const Add_To_Cart = "ADD_TO_CART";
const Remove_From_Cart = "REMOVE_FROM_CART";
const Clear_Cart = "CLEART_FROM_CART";
const reducer = (previousCartValue, action) => {
  switch (action.type) {
    case Add_To_Cart:
      const { products, quantity } = action.payload;
      const existingCart = previousCartValue.find(
        (items) => items.productId === products.productId,
      );

      if (existingCart) {
        return previousCartValue.map((items) =>
          items.productId === products.productId
            ? { ...items, quantity: items.quantity + quantity }
            : items,
        );
      }
      return [...previousCartValue, { ...products, quantity }];
    case Remove_From_Cart:
      return previousCartValue.filter(
        (items) => items.productId !== action.payload.productId,
      );
    case Clear_Cart:
      return [];
    default:
      return previousCartValue;
  }
};

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const initialState = (() => {
    try {
      const storingCart = localStorage.getItem("cart");
      return storingCart ? JSON.parse(storingCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  })(); // invokes the function immediately.

  const [cart, dispatch] = useReducer(reducer, initialState);

  // const [cart, setCart] = useState(() => {
  //   try {
  //     const storingCart = localStorage.getItem("cart");
  //     return storingCart ? JSON.parse(storingCart) : [];
  //   } catch (error) {
  //     console.error("Failed to parse cart from localStorage:", error);
  //     return [];
  //   }
  // });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, [cart]);

  // const addToCart = (products, quantity) => {
  //   setCart((previousCartValue) => {
  //     const existingCart = previousCartValue.find(
  //       (items) => items.productId === products.productId,
  //     );

  //     if (existingCart) {
  //       return previousCartValue.map((items) =>
  //         items.productId === products.productId
  //           ? { ...items, quantity: items.quantity + quantity }
  //           : items,
  //       );
  //     }

  //     return [...previousCartValue, { ...products, quantity }];
  //   });
  // };

  // const removeFromCart = (productId) => {
  //   return setCart((previousCartValue) => {
  //     return previousCartValue.filter((items) => items.productId !== productId);
  //   });
  // };

  const addToCart = (products, quantity) => {
    dispatch({ type: Add_To_Cart, payload: { products, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: Remove_From_Cart, payload: { productId } });
  };

  const clearCart = () => {
    dispatch({ type: Clear_Cart });
  };

  const totalQuantity = cart.reduce((acc, items) => acc + items.quantity, 0);

  return (
    <CartContext.Provider
      // value={{ cart, setCart, addToCart, removeFromCart, totalQuantity }}
      value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
