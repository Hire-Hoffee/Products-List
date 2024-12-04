export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  isLiked: boolean;
  price: number;
}

export interface FetchedProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface initialFormValues {
  title: string;
  description: string;
  image: string;
  price: number;
}
