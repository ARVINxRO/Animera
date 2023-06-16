import { configureStore } from "@reduxjs/toolkit";
import animeRedcer from "./animeSlice";

const store = configureStore({
  reducer: {
    animes: animeRedcer,
  },
});
export default store;
