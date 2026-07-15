import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          background: "#1976d2",
          color: "white",
          padding: 2,
        },
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        🤖 AI CRM
      </Typography>

      <Divider sx={{ bgcolor: "white", mb: 2 }} />

      <List>
        <ListItem
          component={Link}
          to="/"
          sx={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <ListItemText primary="📊 Dashboard" />
        </ListItem>

        <ListItem
          component={Link}
          to="/hcp"
          sx={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <ListItemText primary="👨‍⚕️ HCP Management" />
        </ListItem>

        <ListItem
          component={Link}
          to="/ai-chat"
          sx={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <ListItemText primary="🤖 AI Assistant" />
        </ListItem>
      </List>
    </Drawer>
  );
}