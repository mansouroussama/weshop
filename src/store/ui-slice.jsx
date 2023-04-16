import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   picks: {
      itemPicks: [],
      categoryPicks: [],
   },
   categories: [],
   categoriesNames: []
}
const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      setUiPicks(state, payload) {
         state.picks.itemPicks = payload.payload.picks.itemPicks;
         state.picks.categoryPicks = payload.payload.picks.categoryPicks;
         state.categories = payload.payload.categories;
         state.categoriesNames = payload.payload.categoriesNames;
         state.dataLoaded = payload.payload.dataLoaded;
      },
   } 
})
export default uiSlice;
export const uiActions = uiSlice.actions;