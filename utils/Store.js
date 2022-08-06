import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "CARD_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      let cartItems;
      if (existItem) {
        state.cart.cartItems.map((item) => {
          if (item.name === existItem) {
            cartItems = newItem;
          } else {
            cartItems = item;
          }
        });
      } else {
        cartItems = [...state.cart.cartItems, newItem];
      }
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProdiver({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
