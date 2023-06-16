import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    currentAnimes: null,
  },
  reducers: {
    showRecommended: (state, action) => {
      state.currentAnimes = action.payload;
    },
    serchByName: (state, action) => {
      state.currentAnimes = action.payload;
    },
  }, //END REDUCERS
});
export const { showRecommended, serchByName } = animeSlice.actions;

export default animeSlice.reducer;
