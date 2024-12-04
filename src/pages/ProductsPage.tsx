import { useEffect } from "react";
import {
  Grid,
  Container,
  Button,
  Box,
  Typography,
  Pagination,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setProducts, setFilter } from "../store/productsSlice";
import { setShouldRefresh, setCurrentPage } from "../store/utilsSlice";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { FetchedProduct } from "../types/product";
import { fetchProducts } from "../api";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products, filter } = useAppSelector((state) => state.products);
  const { shouldRefresh, currentPage } = useAppSelector((state) => state.utils);
  const itemsPerPage = 6;

  const handlePagination = (e: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleFilter = (state: "all" | "liked" | "alphabet") => {
    dispatch(setCurrentPage(1));
    dispatch(setFilter(state));
  };

  useEffect(() => {
    if (!shouldRefresh && products.length > 0) {
      dispatch(setShouldRefresh(true));
      return;
    }
    (async () => {
      const data = await fetchProducts();
      const changedData = data.map((item: FetchedProduct) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        isLiked: false,
      }));
      dispatch(setProducts(changedData));
    })();
  }, []);

  const filteredProducts =
    filter === "liked"
      ? products.filter((product) => product.isLiked)
      : filter === "alphabet"
      ? [...products].sort((a, b) => a.title.localeCompare(b.title))
      : products;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <Typography variant="h4" fontWeight={"bold"} textAlign={"center"} marginTop={"20px"}>
        Список продуктов
      </Typography>
      <Box
        sx={{
          backgroundColor: "#eee",
          paddingY: "10px",
          borderRadius: "10px",
          width: "310px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button onClick={() => handleFilter("all")}>Все</Button>
          <Button onClick={() => handleFilter("liked")}>Избранное</Button>
          <Button onClick={() => handleFilter("alphabet")}>По алфавиту</Button>
        </Box>
        <Button variant="contained" onClick={() => navigate("/create-product")}>
          Создать
        </Button>
      </Box>
      <Autocomplete
        disablePortal
        options={products}
        sx={{ width: "300px", marginBottom: "20px" }}
        renderInput={(params) => <TextField {...params} label="Поиск продукта..." />}
        getOptionLabel={(option) => option.title}
        onChange={(e, value) => navigate(`/products/${value?.id}`)}
      />
      <Grid container spacing={3} bgcolor={"#eee"} borderRadius={"10px"} paddingBottom={"20px"}>
        {paginatedProducts.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h5" textAlign={"center"}>
              Нет продуктов
            </Typography>
          </Grid>
        ) : (
          paginatedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} onClick={() => navigate(`/products/${product.id}`)} />
            </Grid>
          ))
        )}
      </Grid>
      <Pagination
        count={Math.ceil(filteredProducts.length / itemsPerPage)}
        page={currentPage}
        variant="outlined"
        color="primary"
        onChange={handlePagination}
      />
    </Container>
  );
};

export default ProductsPage;
