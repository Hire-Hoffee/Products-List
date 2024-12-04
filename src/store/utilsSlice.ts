import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UtilsState {
  shouldRefresh: boolean;
  currentPage: number;
  isFetching: boolean;
}

const initialState: UtilsState = {
  shouldRefresh: true,
  currentPage: 1,
  isFetching: false,
};

const utilsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setShouldRefresh(state, action: PayloadAction<boolean>) {
      state.shouldRefresh = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export const { setShouldRefresh, setCurrentPage, setIsFetching } = utilsSlice.actions;
export default utilsSlice.reducer;
