import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { addProduct } from "../store/productsSlice";
import ProductForm from "../components/ProductForm";
import { initialFormValues } from "../types/product";

const CreateProductPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: initialFormValues) => {
    const newProduct = {
      ...values,
      id: Date.now(),
      isLiked: false,
    };
    dispatch(addProduct(newProduct));
  };

  return (
    <ProductForm
      title="Создание продукта"
      initialValues={{
        title: "",
        description: "",
        image: "",
        price: 0,
      }}
      onSubmit={handleSubmit}
      buttonText="Создать продукт"
      navigate={navigate}
    />
  );
};

export default CreateProductPage;
