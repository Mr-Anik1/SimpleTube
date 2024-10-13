import { createSlice } from "@reduxjs/toolkit";

const videoInfoSlice = createSlice({
  name: "videoInfo",
  initialState: {
    watchVideoInfo: null,
  },
  reducers: {
    addWatchVideoInfo: (state, action) => {
      state.watchVideoInfo = action.payload;
    },
  },
});

export const { addWatchVideoInfo } = videoInfoSlice.actions;

export default videoInfoSlice.reducer;
