import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { Container, Typography, Button, CardMedia, Box } from "@mui/material";
import { setSelectedProduct } from "../store/productsSlice";
import { setShouldRefresh } from "../store/utilsSlice";
import { fetchOneProduct } from "../api";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedProduct } = useAppSelector((state) => state.products);
  const existingProduct = useAppSelector((state) =>
    state.products.products.find((p) => p.id == Number(id))
  );

  useEffect(() => {
    if (existingProduct) {
      dispatch(setSelectedProduct(existingProduct));
      return;
    }
    (async () => {
      const data = await fetchOneProduct(Number(id));
      const changedData = {
        id: data.id,
        title: data.title,
        description: data.description,
        image: data.image,
        isLiked: false,
        price: data.price,
      };
      dispatch(setSelectedProduct(changedData));
    })();
  }, []);

  if (!selectedProduct) {
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
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setShouldRefresh(false));
            navigate("/products");
          }}
        >
          Назад к списку
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setShouldRefresh(false));
            navigate("/update-product/" + selectedProduct.id);
          }}
        >
          Обновить продукт
        </Button>
      </Box>
      <Typography variant="h3" gutterBottom>
        {selectedProduct.title}
      </Typography>
      <CardMedia
        component="img"
        image={selectedProduct.image}
        alt={selectedProduct.title}
        style={{ maxHeight: 400, marginBottom: 20 }}
      />
      <Typography variant="body1">{selectedProduct.description}</Typography>
      <Typography width="100%" variant="body1" fontWeight="bold" fontSize="20px" textAlign="right">
        {selectedProduct.price && selectedProduct.price + " $"}
      </Typography>
    </Container>
  );
};

export default ProductDetailsPage;
