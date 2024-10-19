import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import videoInfoReducer from "./videoInfoSlice";
import videoListReducer from "./videoListSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    videoList: videoListReducer,
    videoInfo: videoInfoReducer,
    search: searchReducer,
  },
});

export { appStore };
