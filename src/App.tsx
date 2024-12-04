import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingFallback from "./components/LoadingFallback";

// Динамический импорт компонентов
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const ProductDetailsPage = React.lazy(() => import("./pages/ProductDetailsPage"));
const CreateProductPage = React.lazy(() => import("./pages/CreateProductPage"));
const UpdateProductPage = React.lazy(() => import("./pages/UpdateProductPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/create-product" element={<CreateProductPage />} />
          <Route path="/update-product/:id" element={<UpdateProductPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
