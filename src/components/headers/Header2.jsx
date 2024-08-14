import { ShoppingCartOutlined } from "@mui/icons-material";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import Search from "./Search";
import PersonIcon from "@mui/icons-material/Person";
import CustomizedBadges from "./IconCar";

const Header2 = () => {
  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>

      <Search />

      <Stack direction={"row"} alignItems={"center"}>
        <CustomizedBadges />

        <IconButton>
          <PersonIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;
