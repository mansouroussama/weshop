import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import userSlice from "./user-slice";
import cartSlice from "./cart-slice";
import wishlistSlice from "./wishlist-slice";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   ui: uiSlice.reducer,
   user: userSlice.reducer,
   cart: cartSlice.reducer,
   wishlist: wishlistSlice.reducer
})
const persistConfig = {
   key: 'root',
   storage,
 }
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk]
})
export const persistor = persistStore(store);
