import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
  name: "videoList",
  initialState: {
    mostPopularVideos: null,
  },
  reducers: {
    addMostPopularVideos: (state, action) => {
      state.mostPopularVideos = action.payload;
    },
  },
});

export const { addMostPopularVideos } = videoListSlice.actions;

export default videoListSlice.reducer;
