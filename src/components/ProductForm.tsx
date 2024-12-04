import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Button, TextField, Typography } from "@mui/material";
import { initialFormValues } from "../types/product";
import { FormikHelpers } from "formik";
import { NavigateFunction } from "react-router-dom";

type ProductFormProps = {
  title: string;
  initialValues: initialFormValues;
  onSubmit: (values: initialFormValues, { resetForm }: FormikHelpers<initialFormValues>) => void;
  buttonText: string;
  navigate: NavigateFunction;
};

const ProductForm = ({
  title,
  initialValues,
  onSubmit,
  buttonText,
  navigate,
}: ProductFormProps) => {
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
        {title}
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
        initialValues={initialValues}
        validationSchema={Yup.object({
          title: Yup.string().required("Название обязательно"),
          description: Yup.string().required("Описание обязательно"),
          image: Yup.string().url("Введите корректный URL").required("URL изображения обязателен"),
        })}
        onSubmit={onSubmit}
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
              {buttonText}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ProductForm;
