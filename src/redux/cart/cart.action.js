import CartActionTypes from "./Cart.Type";

// toggleCartHidden
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// addItem
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

// ClearItemFromCart
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

// RemoveItem
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
