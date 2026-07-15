import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
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

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            color="inherit"
            onClick={() => navigate("/")}
          >
            Dashboard
          </Button>

          <Button
            color="inherit"
            onClick={() => navigate("/hcp")}
          >
            HCP
          </Button>

          <Button
            color="inherit"
            onClick={() => navigate("/ai-chat")}
          >
            🤖 AI Assistant
          </Button>

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
        </Box>
      </Toolbar>
    </AppBar>
  );
}