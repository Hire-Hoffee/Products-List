import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { addProduct, setShouldRefresh } from "../store/productsSlice";
import ProductForm from "../components/ProductForm";
import { FormikHelpers } from "formik";
import { initialFormValues } from "../types/product";

const CreateProductPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (
    values: initialFormValues,
    { resetForm }: FormikHelpers<initialFormValues>
  ) => {
    const newProduct = {
      ...values,
      id: Date.now(),
      isLiked: false,
    };
    dispatch(addProduct(newProduct));
    dispatch(setShouldRefresh(false));
    resetForm();
    navigate("/products");
  };

  return (
    <ProductForm
      title="Создание продукта"
      initialValues={{
        title: "",
        description: "",
        image: "",
      }}
      onSubmit={handleSubmit}
      buttonText="Создать продукт"
      navigate={navigate}
    />
  );
};

export default CreateProductPage;
