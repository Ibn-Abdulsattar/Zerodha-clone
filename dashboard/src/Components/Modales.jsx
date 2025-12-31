import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import orderService from "../services/order.service";
import { useAuth } from "../context/AuthContext";

const Modales = ({
  setModalType,
  mode,
  setShowWatchlistActions,
  idRef,
  open,
  setOpen,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "8px",
    p: 4,
     // Widths based on breakpoints
    width: {
      xs: '95%',    // Default (mobile)
      sm: '60%',    // 600px+
      md: '50%',    // 900px+
      lg: '35%',    // 1200px+
      xl: '30%',    // 1536px+
    },
    // Max width constraint
    maxWidth: '600px',
    
    // Height styling
    height: 'auto',
    maxHeight: '95vh',
  };

  const [price, setPrice] = useState(0);
  const {setAlert} = useAuth();

  useEffect(() => {
    const cleanSymbol = idRef.endsWith(".NS") ? idRef : `${idRef}.NS`;
    axios
      .get(`${import.meta.env.VITE_Backend_Url}/api/price/${cleanSymbol}`, {
        withCredentials: true,
      })
      .then((res) => {
        setPrice(res.data.price);
      })
      .catch((err) => {
        console.error("Price fetch failed:", err.response?.data || err.message);
      });
  }, [idRef]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = idRef;
      const qty = Number(formData.get("qty"));
      const price = Number(formData.get("price"));

      const response = await orderService.createOrder({
        name,
        qty,
        price,
        mode,
      });
      setModalType(null);
      setOpen(false);
      setShowWatchlistActions?.(false);
      setAlert({type: "success", message: response.message})

    } catch (err) {
      setModalType(null);
      setOpen(false);
      setShowWatchlistActions?.(false);
      setAlert({type: "error", message: err.message})
    }
  };

  const handleClose = () => {
    setOpen(false);
    setShowWatchlistActions?.(false);
    setModalType(null);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
            <TextField
              label="Qty"
              name="qty"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Price"
              value={price}
              name="price"
              type="number"
              required
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <p>Margin required from ₨.140.55</p>
            <Button
              type="submit"
              variant={mode === "Buy" ? "contained" : "outlined"}
              sx={{ height: "30px", color: mode == "Sell" ? "#ff5722" : "" }}
            >
              {mode}
            </Button>
            <Button sx={{ height: "30px" }} onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default Modales;
