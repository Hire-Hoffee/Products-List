import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { Container, Typography, Button, CardMedia } from "@mui/material";
import { setShouldRefresh } from "../store/productsSlice";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const product = useAppSelector((state) =>
    state.products.products.find((p) => p.id == Number(id))
  );

  if (!product) {
    return (
      <Container>
        <Typography variant="h5">Продукт не найден</Typography>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setShouldRefresh(false));
            navigate("/products");
          }}
        >
          Вернуться к списку
        </Button>
      </Container>
    );
  }

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
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          dispatch(setShouldRefresh(false));
          navigate("/products");
        }}
      >
        Назад к списку
      </Button>
      <Typography variant="h3" gutterBottom>
        {product.title}
      </Typography>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        style={{ maxHeight: 400, marginBottom: 20 }}
      />
      <Typography variant="body1">{product.description}</Typography>
    </Container>
  );
};

export default ProductDetailsPage;
