import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoListReducer from "./videoListSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    videoList: videoListReducer,
  },
});

export { appStore };
