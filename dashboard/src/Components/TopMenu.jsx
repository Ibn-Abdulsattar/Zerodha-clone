import { useState } from "react";
import {
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Box,
  Button,
  Typography,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import authService from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

const menuLinks = [
  { label: "Dashboard", to: "/" },
  { label: "Orders", to: "/orders" },
  { label: "Holdings", to: "/holdings" },
  { label: "Positions", to: "/positions" },
  { label: "Funds", to: "/funds" },
  { label: "Apps", to: "/apps" },
];

const TopMenu = () => {
  const { user, setUser, setAlert } = useAuth();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(anchorEl);
  const isWide = useMediaQuery("(min-width:1060px)");

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleMobileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setAnchorEl(null);

  const [profile, setProfile] = useState(null);
  const open = Boolean(profile);
  const handleClick = (event) => {
    setProfile(event.currentTarget);
  };
  const handleClose = () => {
    setProfile(null);
  };

  const handleLogout = async () => {
    console.log("Logged out successfuly");
    const response = await authService.authenticate("logout", {});
    setAlert({ type: "success", message: response.message });
    setUser(null);

    setTimeout(
      () => (window.location.href = `${import.meta.env.VITE_Frontend_Url}`),
      [1000]
    );
  };

  return (
    <>
      {isWide ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "flex-end",
          }}
        >
          {menuLinks.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.to}
              onClick={() => handleMenuClick(index)}
              sx={{
                textTransform: "none",
                fontWeight: selectedMenu === index ? "600" : "400",
                color: selectedMenu === index ? "#f56a2c" : "#444",
                fontSize: "0.9rem",
              }}
            >
              {item.label}
            </Button>
          ))}
          <Box
            sx={{
              borderLeft: "1px solid #ccc",
              pl: 2,
              ml: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                background: "#f3d9ff",
                color: "#9a30d0",
                width: 28,
                height: 28,
                borderRadius: "50%",
                fontSize: "0.75rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              ZU
            </Box>
            <Typography
              sx={{ ml: 1, fontSize: "0.85rem", mr: 2, cursor: "pointer" }}
            >
              USERID
            </Typography>
          </Box>

          <Menu
            anchorReference="anchorPosition"
            anchorPosition={{ top: 60, left: window.innerWidth }}
            open={open}
            onClose={handleClose}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {/* <MenuItem onClick={handleClose}>👤 My Profile</MenuItem> */}
            {user ? (
              <>
                <MenuItem
                  onClick={() => {
                    handleLogout();
                    handleClose();
                  }}
                >
                  🔓 Logout
                </MenuItem>
              </>
            ) : (
              <>
                <a
                  style={{ textDecoration: "none" }}
                  href={`${import.meta.env.VITE_Frontend_Url}/authenticate`}
                  target="_blank"
                >
                  <MenuItem>🔓 Signup</MenuItem>
                </a>
              </>
            )}
          </Menu>
        </Box>
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMobileMenuOpen}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <MuiMenu
        anchorEl={anchorEl}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{ sx: { width: "250px", p: 1 } }}
      >
        {menuLinks.map((item, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={item.to}
            onClick={() => {
              setSelectedMenu(index);
              handleMobileMenuClose();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
        {/* <MenuItem>👤 My Profile</MenuItem> */}
        <MenuItem>🔓 Logout</MenuItem>
      </MuiMenu>
    </>
  );
};

export default TopMenu;
