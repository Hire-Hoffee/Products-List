import { FetchedProduct } from "../types/product";

export const fetchProducts = async (): Promise<FetchedProduct[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

export const fetchOneProduct = async (id: number): Promise<FetchedProduct> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
};
