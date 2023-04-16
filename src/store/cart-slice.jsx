import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
   cartItems: [],
   totalQuantity: 0,
   totalCost: 0,
   delivery: 10,
   totalPrice: 0
}
const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addCartItem(state, action) {
         const { price, thumbnail, category, title, id} = action.payload
         const existingItem = state.cartItems.find((item) => item.id === id)
         if (!existingItem) {
            state.cartItems.push({
               title,
               id,
               thumbnail,
               price,
               category,
               quantity: 1,
               totalPrice: price
            })
         } else {
            existingItem.quantity++;
            existingItem.totalPrice += existingItem.price;
         }
         state.totalQuantity++;
         state.totalCost = state.cartItems.reduce((totalSum, item) => totalSum + item.totalPrice, 0);
         state.totalPrice = state.totalCost + state.delivery;
      },
      removeCartItem(state, action) {
         const { id } = action.payload;
         const existingItem = state.cartItems.find((item) => item.id === id)
         if (existingItem.quantity === 1) {
            state.cartItems = state.cartItems.filter((item) => item.id !== id)
         } else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
         }
         state.totalQuantity--;
         state.totalCost = state.cartItems.reduce((totalSum, item) => totalSum + item.totalPrice, 0);
         state.totalPrice = state.totalCost + state.delivery;
      },
      clearCartItem(state, action) {
         const { id } = action.payload;
         const existingItem = state.cartItems.find((item) => item.id === id);
         state.cartItems = state.cartItems.filter((item) => item.id !== id);
         state.totalQuantity -= existingItem.quantity;
         state.totalCost = state.cartItems.reduce((totalSum, item) => totalSum + item.totalPrice, 0);
         state.totalPrice = state.totalCost + state.delivery;

      },
      clearCart(state) {
         state.cartItems = []
         state.totalQuantity = 0
         state.totalCost = 0
         state.delivery = 10
         state.totalPrice = 0
      },
   } 
})
export default cartSlice;
export const cartActions = cartSlice.actions;