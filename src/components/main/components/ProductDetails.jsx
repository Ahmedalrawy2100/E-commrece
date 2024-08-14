import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ProductDetails = ({ clickedProduct }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  if (!clickedProduct) {
    return <Typography>Product not found</Typography>;
  }

  // استخدام البيانات من Fake Store API
  const productImgs = [clickedProduct.image]; // Fake Store API يحتوي على صورة واحدة
  const mainImgUrl = productImgs[selectedImg];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src={mainImgUrl ? mainImgUrl : ""} 
          alt="Product image"
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {clickedProduct.title}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.price}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.description}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {/* بما أن Fake Store API يحتوي على صورة واحدة فقط، هذه الحلقة ليست ضرورية ولكن تم الإبقاء عليها للتوافق */}
          {productImgs.map((el, index) => (
            <img
              key={index}
              onClick={() => setSelectedImg(index)}
              style={{ borderRadius: 3, cursor: "pointer" }}
              height={"100px"}
              width={"auto"}
              src={el} // لا حاجة لإضافة رابط أساسي هنا
              alt={`Thumbnail ${index}`}
            />
          ))}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
