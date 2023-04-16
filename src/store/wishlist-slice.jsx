import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
   wishlistItems: [],
   totalQuantity: 0,
}
const wishlistSlice = createSlice({
   name: 'wishlist',
   initialState,
   reducers: {
      addWishlistItem(state, action) {
         const { price, thumbnail, category, title, id} = action.payload
         const existingItem = state.wishlistItems.find((item) => item.id === id)
         if (existingItem) return;
         
         state.wishlistItems.push({
            title: title,
            id: id,
            thumbnail: thumbnail,
            price: price,
            category: category,
         })
         state.totalQuantity++
      },
      removeWishlistItem(state, action) {
         const id = action.payload;
         state.wishlistItems = state.wishlistItems.filter((item) => item.id !== id)
         state.totalQuantity--
      },
      clearWishlist(state) {
         state.wishlistItems = [];
         state.totalQuantity = 0;
      }
   } 
})
export default wishlistSlice;
export const wishlistActions = wishlistSlice.actions;