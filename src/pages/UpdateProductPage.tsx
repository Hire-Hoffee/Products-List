import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { updateProduct } from "../store/productsSlice";
import ProductForm from "../components/ProductForm";
import { initialFormValues } from "../types/product";

const UpdateProductPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state) =>
    state.products.products.find((p) => p.id == Number(id))
  );

  const handleSubmit = (values: initialFormValues) => {
    const updatedProduct = {
      ...values,
      id: product?.id || 0,
      isLiked: product?.isLiked || false,
    };
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <ProductForm
      title="Обновление продукта"
      initialValues={{
        title: product?.title || "",
        description: product?.description || "",
        image: product?.image || "",
        price: product?.price || 0,
      }}
      onSubmit={handleSubmit}
      buttonText="Обновить продукт"
      navigate={navigate}
    />
  );
};

export default UpdateProductPage;
