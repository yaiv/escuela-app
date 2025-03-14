import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <IconButton edge="start" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sobre Nosotros" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;