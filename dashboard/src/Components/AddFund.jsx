import { useState } from "react";
import {
  Modal, Box, Button, Link, TextField, Typography,
  InputLabel, MenuItem, FormControl, Select, FormHelperText
} from "@mui/material";
import axios from "axios";

const AddFund = () => {
  const [open, setOpen] = useState(false);
  const [payMethod, setPayMethod] = useState("");
  const [payMethodError, setPayMethodError] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPayMethod("");
    setPayMethodError(false);
  };

  const handleFundSubmit = async (e) => {
    e.preventDefault();
    const fundData = new FormData(e.target);
    const amount = fundData.get("amount");

    // Custom required check for Select
    if (!payMethod) {
      setPayMethodError(true);
      return;
    }

    try {
      await axios.post(
        "https://ofe1qf8tyd.execute-api.ap-south-1.amazonaws.com/fund/createfund",
        { amount, payMethod },
        { withCredentials: true }
      );
      handleClose();
    } catch (err) {
      alert("Error submitting fund: " + err.message);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30rem",
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <Link
        sx={{ textDecoration: "none", color: "#fff" }}
        onClick={handleOpen}
        className="btn btn-green"
      >
        Add funds
      </Link>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: "blue", mb: "1rem" }}
          >
            Add Funds
          </Typography>
          <form onSubmit={handleFundSubmit}>
            <TextField
              label="Enter Amount"
              name="amount"
              type="number"
              variant="outlined"
              sx={{ width: "100%" }}
              required
            />
            <Box sx={{ mt: 2 }}>
              <FormControl fullWidth error={payMethodError}>
                <InputLabel>Select payment method</InputLabel>
                <Select
                  name="payMethod"
                  value={payMethod}
                  label="Select payment method"
                  onChange={(e) => {
                    setPayMethod(e.target.value);
                    setPayMethodError(false);
                  }}
                >
                  <MenuItem value="UBL">UBL</MenuItem>
                  <MenuItem value="HBL">HBL</MenuItem>
                  <MenuItem value="Jazzcash">Jazz cash</MenuItem>
                </Select>
                {payMethodError && (
                  <FormHelperText>Please select a payment method</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Button type="submit" sx={{ mt: 2 }} variant="contained">
              Confirm
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddFund
