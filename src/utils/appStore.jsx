import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoInfoReducer from "./videoInfoSlice";
import videoListReducer from "./videoListSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    videoList: videoListReducer,
    videoInfo: videoInfoReducer,
  },
});

export { appStore };
