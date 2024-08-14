import { Box, Button, Typography } from "@mui/material";
import ScrollToTop from "./ScrollbarTop";

export default function Footer() {
  return (
    <>
      <ScrollToTop />
      <Box
        sx={{
          mt: 5,
          bgcolor: "#2B3445",

          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Typography
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          color={"HighlightText"}
          variant="h6"
          sx={{ fontSize: 18 }}
        >
          Designed and developed by
          <Button
            sx={{
              mx: 0.5,
              fontSize: "18px",
              textTransform: "capitalize",
              color: "#ff7790",
            }}
            variant="text"
            color="primary"
          >
            Alrawy
          </Button>
          ©2024
        </Typography>
      </Box>
    </>
  );
}
