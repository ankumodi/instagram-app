import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchSlice";
import postsSlice from "./postsSlice";
const instaStore = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    fetchStatus: fetchSlice.reducer,
  },
});
export default instaStore;
