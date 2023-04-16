import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, email: '', displayName: '' }
const userslice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      login(state, payload) {
         state.isLoggedIn = true;
         state.email = payload.payload.email;
         state.displayName = payload.payload.displayName;
      },
      logout(state) {
         state.isLoggedIn = false;
         state.email = '';
         state.displayName = ''
      }
   } 
})
export default userslice;
export const userActions = userslice.actions;