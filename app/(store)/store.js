import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  count: 0,
  addItemToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const existingItem = state.cart.find((item) => item._id === newItem._id);
      if (existingItem) {
        console.log("existing");
        const updatedCart = state.cart.map((item) => {
          if (item._id === newItem._id) {
            state.count += 1;
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
        return { cart: updatedCart };
      } else {
        state.count += 1;
        const newCart = [...state.cart, { ...newItem, count: 1 }];
        return {
          ...state,
          cart: newCart,
        };
      }
    });
  },

  removeItemFromCart: (params) => {
    const { _id } = params;
    set((state) => {
      const newCart = state.cart
        .map((item) => {
          if (item._id === _id) {
            if (item.count > 1) {
              state.count -= 1;
              return { ...item, count: item.count - 1 };
            } else {
              state.count -= 1;
              return null; // Remove item from cart if count reaches 1
            }
          }
          return item;
        })
        .filter(Boolean); // Filter out null values

      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
