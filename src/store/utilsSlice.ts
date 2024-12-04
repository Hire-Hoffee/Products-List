import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UtilsState {
  shouldRefresh: boolean;
  currentPage: number;
}

const initialState: UtilsState = {
  shouldRefresh: true,
  currentPage: 1,
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
  },
});

export const { setShouldRefresh, setCurrentPage } = utilsSlice.actions;
export default utilsSlice.reducer;
