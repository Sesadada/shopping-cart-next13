import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  addItemToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const existingItem = state.cart.find((item) => item._id === newItem._id);
      if (existingItem) {
        console.log("existing");
        const updatedCart = state.cart.map((item) => {
          console.log(item._id === newItem._id);
          return item._id === newItem._id
            ? { ...item, count: item.count + 1 }
            : item;
        });
        return { cart: updatedCart };
      } else {
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
      const newCart = state.cart.filter((item) => item._id !== _id);
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
