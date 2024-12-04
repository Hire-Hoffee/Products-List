import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface ProductsState {
  products: Product[];
  filter: "all" | "liked";
  shouldRefresh?: boolean;
}

const initialState: ProductsState = {
  products: [],
  filter: "all",
  shouldRefresh: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    toggleLike(state, action: PayloadAction<number>) {
      state.products = state.products.map((p) => {
        if (p.id === action.payload) {
          return { ...p, isLiked: !p.isLiked };
        }
        return p;
      });
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<"all" | "liked">) {
      state.filter = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products = [...state.products, action.payload];
    },
    setShouldRefresh(state, action: PayloadAction<boolean>) {
      state.shouldRefresh = action.payload;
    },
  },
});

export const { setProducts, toggleLike, deleteProduct, setFilter, addProduct, setShouldRefresh } =
  productsSlice.actions;
export default productsSlice.reducer;
