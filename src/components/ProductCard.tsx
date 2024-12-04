import { FC } from "react";
import { Product } from "../types/product";
import { useAppDispatch } from "../store/hooks";
import { toggleLike, deleteProduct } from "../store/productsSlice";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{ maxWidth: 345, position: "relative", height: "250px", cursor: "pointer" }}
      onClick={onClick}
    >
      <CardMedia component="img" height="140" image={product.image} alt={product.title} />
      <CardContent>
        <Typography fontSize={20} noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap marginTop="5px">
          {product.description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          noWrap
          marginTop="10px"
          fontWeight="bold"
          textAlign="right"
        >
          {product.price + " $"}
        </Typography>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "#eee",
          borderRadius: "10px",
        }}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleLike(product.id));
          }}
        >
          <FavoriteIcon color={product.isLiked ? "error" : "inherit"} />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteProduct(product.id));
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;
