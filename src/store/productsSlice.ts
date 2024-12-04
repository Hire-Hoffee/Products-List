import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface ProductsState {
  products: Product[];
  selectedProduct: Product;
  filter: "all" | "liked";
}

const initialState: ProductsState = {
  products: [],
  filter: "all",
  selectedProduct: {} as Product,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products = [...state.products, action.payload];
    },
    updateProduct(state, action: PayloadAction<Product>) {
      state.products = state.products.map((p) => {
        if (p.id === action.payload.id) {
          return action.payload;
        }
        return p;
      });
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    setSelectedProduct(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
    toggleLike(state, action: PayloadAction<number>) {
      state.products = state.products.map((p) => {
        if (p.id === action.payload) {
          return { ...p, isLiked: !p.isLiked };
        }
        return p;
      });
    },
    setFilter(state, action: PayloadAction<"all" | "liked">) {
      state.filter = action.payload;
    },
  },
});

export const {
  setProducts,
  toggleLike,
  deleteProduct,
  setFilter,
  addProduct,
  setSelectedProduct,
  updateProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
