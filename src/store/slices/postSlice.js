import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, userPosts, createPost } from "../actions/postActions";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    creating: false,
    createError: null,
    created: false,
  },
  reducers: {
    resetCreated(state) {
      state.created = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchPosts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // userPosts
      .addCase(userPosts.pending, (state) => {
        console.log("pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(userPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        console.log("fulfilled");
        console.log(action.payload);
      })
      .addCase(userPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // createPost
      .addCase(createPost.pending, (state) => {
        state.creating = true;
        state.createError = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.creating = false;
        state.items.unshift(action.payload.post);
        state.created = true;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.creating = false;
        state.createError = action.payload;
      });
  },
});

export const { resetCreated } = postSlice.actions;
export default postSlice.reducer;
