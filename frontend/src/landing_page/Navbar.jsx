import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo-zerodha.png";

export default function Navbar() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const mobileMenuId = "primary-menu-mobile";

  const navLinks = [
    { label: "Signup", path: "/signup" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/product" },
    { label: "Pricing", path: "/pricing" },
    { label: "Support", path: "/support" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottom: "1px solid #ccc",
          height: "4rem",
          px: "1rem",
          // width: "100%",
          justifyContent: "center",
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* ✅ LOGO + BRAND (Always visible) */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={logo}
              alt="Zerodha Logo"
              style={{ width: 30, height: 30, marginRight: 8 }}
            />
            <Typography variant="h6" sx={{color: "#046db0"}} fontWeight={700}>
              Zerodha
            </Typography>
          </Box>

          {/* ✅ DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map(({ label, path }) => (
              <Button
                key={label}
                color="inherit"
                component={Link}
                to={path}
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  px: 2,
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* ✅ HAMBURGER BUTTON */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ MOBILE MENU */}
      <Menu
        anchorEl={mobileMenuAnchor}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            width: "85vw",
            left: "6.5% !important",
            right: "auto !important",
            padding: 1.5,
          },
        }}
      >
        {/* ✅ Close Icon */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton size="small" onClick={handleMobileMenuClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* ✅ Zerodha Logo & Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            pl: 1,
          }}
        >
          <img
            src={logo}
            alt="Zerodha Logo"
            style={{ width: 28, height: 28, marginRight: 8 }}
          />
          <Typography variant="h6" sx={{color: "#046db0"}} fontWeight={700}>
            Zerodha
          </Typography>
        </Box>

        {/* ✅ Mobile Links */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
          {navLinks.map(({ label, path }) => (
            <MenuItem
              key={label}
              component={Link}
              to={path}
              onClick={handleMobileMenuClose}
              sx={{ fontSize: "0.95rem" }}
            >
              {label}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
}
