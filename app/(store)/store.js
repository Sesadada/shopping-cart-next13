import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  product: {},
  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => {
      return {
        ...state,
        cart: newProduct,
      };
    });
  },
  addItemToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const newCart = [...state.cart, newItem];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
  removeItemFromCart: (params) => {
    const { intemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== intemIndex;
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },
  emptyCart: () => {
    set((state) => {
      const newCart = [];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
