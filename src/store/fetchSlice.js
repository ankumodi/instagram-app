import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    startFetching: (state) => {
      state.currentlyFetching = true;
    },
    endFetching: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchActions = fetchSlice.actions;
export default fetchSlice;
