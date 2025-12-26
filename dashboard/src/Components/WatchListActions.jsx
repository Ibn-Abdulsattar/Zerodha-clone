import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import {
  Tooltip,
  Grow,
  Modal,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import Modales from "./Modales";

const WatchListActions = ({ idRef, setShowWatchlistActions }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const [modalType, setModalType] = useState(null);

  const [analyticsOpen, setAnalyticsOpen] = useState(false);

  // MORE menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const openMore = Boolean(anchorEl);

  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorEl(null);
    setShowWatchlistActions(false);
  };

  const handleAnalyticClose = () => {
    setAnalyticsOpen(false);
    setShowWatchlistActions(false);
  };

  const handleOpenBuy = () => {
    setModalType("buy");
  };

  const handleOpenSell = () => {
    setModalType("sell");
  };

  const [price, setPrice] = useState(0);

useEffect(() => {
  const cleanSymbol = idRef.endsWith(".NS") ? idRef : `${idRef}.NS`;
  axios
    .get(`${import.meta.env.VITE_Backend_Url}/api/price/${cleanSymbol}`, {withCredentials: true})
    .then((res) => {
      setPrice(res.data.price);
    })
    .catch((err) => {
      console.error("Price fetch failed:", err.response?.data || err.message);
    });
}, [idRef]);


  return (
    <>
      <span className="actions" style={{ display: "flex", gap: "0.5rem" }}>
        {/* BUY */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <Button
            className="buy"
            onClick={() => {
              handleOpen();
              handleOpenBuy();
            }}
          >
            Buy
          </Button>
        </Tooltip>
        {/* BUY MODAL */}
        {modalType === "buy" && (
          <Modales
            open={open}
            setOpen={setOpen}
            idRef={idRef}
            mode={"Buy"}
            setModalType={setModalType}
            setShowWatchlistActions={setShowWatchlistActions}
          />
        )}
        {/* SELL */}
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <Button
            className="sell"
            onClick={() => {
              handleOpen();
              handleOpenSell();
            }}
          >
            Sell
          </Button>
        </Tooltip>
        {/* SELL MODAL */}
        {modalType === "sell" && (
          <Modales
            open={open}
            setOpen={setOpen}
            idRef={idRef}
            mode={"Sell"}
            setModalType={setModalType}
            setShowWatchlistActions={setShowWatchlistActions}
          />
        )}
        {/* ANALYTICS */}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <Button className="action" onClick={() => setAnalyticsOpen(true)}>
            <BarChartOutlined className="icon" />
          </Button>
        </Tooltip>
        {/* ANALYTICS MODAL */}
        <Modal open={analyticsOpen} onClose={() => setAnalyticsOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 2,
              width: 300,
              border: "0.5px solid black",
            }}
          >
            <Typography variant="h6">
              Analytics for <i style={{ color: "blue" }}>{idRef}</i>
            </Typography>
            <Typography>
              Price: <i>Rs.{price}</i>
            </Typography>
            <Typography>
              Company: <i>Demo Ltd</i>
            </Typography>
            <Typography>
              Sector: <i>Technology</i>
            </Typography>
            <Button onClick={handleAnalyticClose}>close</Button>
          </Box>
        </Modal>
        {/* MORE */}
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <Button className="action" onClick={handleMoreClick}>
            <MoreHoriz className="icon" />
          </Button>
        </Tooltip>

        {/* MORE MENU */}
        <Menu anchorEl={anchorEl} open={openMore} onClose={handleMoreClose}>
          <MenuItem
            onClick={() => {
              Swal.fire({
                title: "Added to Watchlist!",
                text: "This stock was successfully added.",
                icon: "success",
                confirmButtonText: "OK",
                timer: 2000,
                showConfirmButton: false,
              });
              handleMoreClose();
            }}
          >
            ➕ Add to Watchlist
          </MenuItem>

          <MenuItem
            onClick={() => {
              Swal.fire({
                title: " Remove from Watchlist!",
                text: "This stock was successfully deleted.",
                icon: "success",
                confirmButtonText: "OK",
                timer: 2000,
                showConfirmButton: false,
              });
              handleMoreClose();
            }}
          >
            ❌ Remove from Watchlist
          </MenuItem>
        </Menu>
      </span>
    </>
  );
};

export default WatchListActions;
