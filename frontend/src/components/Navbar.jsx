import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">
          AI First CRM 🚀
        </Typography>

        <Button
          color="inherit"
          variant="outlined"
          onClick={handleLogout}
          sx={{
            borderColor: "white",
            color: "white",
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}