import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";
import authReducer from "./slices/authSlice";
const instaStore = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
  },
});
export default instaStore;
