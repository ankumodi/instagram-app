import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch posts"
      );
    }
  }
);

export const userPosts = createAsyncThunk(
  "posts/userPosts",
  async (user_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/${user_id}`
      );
      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch posts"
      );
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (
    { title, body, tags, likes, dislikes, views },
    { getState, rejectWithValue }
  ) => {
    const token = getState().auth.token || localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/posts",
        {
          post: { title, body, tags, likes, dislikes, views }, // ✅ only wrap here
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create post"
      );
    }
  }
);
