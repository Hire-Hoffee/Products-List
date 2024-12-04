import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { addProduct, setShouldRefresh } from "../store/productsSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Button, TextField, Typography } from "@mui/material";

const CreateProductPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        backgroundColor: "#eee",
        borderRadius: "10px",
        padding: "20px",
        marginY: "50px",
        position: "relative",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Создание продукта
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ position: "absolute", top: 20, left: 20 }}
        onClick={() => navigate("/products")}
      >
        Назад к списку
      </Button>
      <Formik
        initialValues={{
          title: "",
          description: "",
          image: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Название обязательно"),
          description: Yup.string().required("Описание обязательно"),
          image: Yup.string().url("Введите корректный URL").required("URL изображения обязателен"),
        })}
        onSubmit={(values, { resetForm }) => {
          const newProduct = {
            ...values,
            id: Date.now(),
            isLiked: false,
          };
          dispatch(addProduct(newProduct));
          dispatch(setShouldRefresh(false));
          resetForm();
          navigate("/products");
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ width: "100%" }}>
            <Field name="title" as={TextField} label="Название" fullWidth margin="normal" />
            <ErrorMessage name="title" component="div">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>

            <Field
              name="description"
              as={TextField}
              label="Описание"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <ErrorMessage name="description" component="div">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>

            <Field name="image" as={TextField} label="URL изображения" fullWidth margin="normal" />
            <ErrorMessage name="image" component="div">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              style={{ marginTop: 20 }}
            >
              Создать продукт
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateProductPage;
