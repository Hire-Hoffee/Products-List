import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingFallback = ({ message = "Загрузка..." }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: 2,
      }}
    >
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography variant="h6" sx={{ marginTop: 2, color: "#555" }}>
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingFallback;
