import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Paper,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Dialog
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductDetails from "./components/ProductDetails";

const Main = () => {
  const [clickedProduct, setClickedProduct] = useState({});
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container sx={{ mt: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        sx={{ mt: 6 }}
      >
        {data.map((el) => (
          <Paper
            key={el.id}
            elevation={3}
            sx={{
              marginLeft: { sm: 2, xs: 2 },
              mb: 3,
              width: 350, // تحديد عرض الكرت
            }}
          >
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                maxWidth: 350, // تحديد عرض الكرت
                position: 'relative',
                ':hover .MuiCardMedia-root': {
                  transform: 'scale(1.1)',
                  transition: '0.35s',
                },
              }}
            >
              <CardMedia
                sx={{
                  height: 300,
                  width: '100%',
                  objectFit: 'cover', // لضمان عرض الصورة كاملة دون تقطيع
                }}
                image={el.image}
                title={el.title}
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {el.title}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    ${el.price}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {el.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={() => {
                    handleClickOpen();
                    setClickedProduct(el);
                  }}
                  size="large"
                >
                  <AddShoppingCartIcon />
                  Add To Cart
                </Button>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="read-only"
                    value={el.rating?.rate || 0}
                    precision={0.5}
                    readOnly
                  />
                </Box>
              </CardActions>
            </Card>
          </Paper>
        ))}
      </Stack>

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails clickedProduct={clickedProduct} />
      </Dialog>
    </Container>
  );
};

export default Main;
