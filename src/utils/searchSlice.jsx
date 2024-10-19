import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestionList: {},
  },
  reducers: {
    addSearchSuggestion: (state, action) => {
      state.searchSuggestionList = {
        ...state.searchSuggestionList,
        ...action.payload,
      };
    },
  },
});

export const { addSearchSuggestion } = searchSlice.actions;

export default searchSlice.reducer;
