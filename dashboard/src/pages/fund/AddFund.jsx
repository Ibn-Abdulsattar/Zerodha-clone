import {
  Modal,
  Box,
  Button,
  Link,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";

const AddFund = ({open, payMethod, setPayMethod, payMethodError, setPayMethodError, handleOpen, handleClose, handleFundSubmit}) => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 24,
    pt: 2,
    px: {xs:2, md:4},
    pb: 3,
        width: {
      xs: '95%',    // Default (mobile)
      sm: '60%',    // 600px+
      md: '50%',    // 900px+
    },
    // Max width constraint
    maxWidth: '600px',
    
    // Height styling
    height: 'auto',
    maxHeight: '95vh',
  };

  return (
    <>
<Link
  component="button" // Ensures accessibility as a clickable element
  onClick={handleOpen}
  sx={{
    textDecoration: "none",
    color: "#fff",
    bgcolor: "#3205fcff", // Standard "btn-green" color
    fontWeight: 600,
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease-in-out",
    
    // RESPONSIVE SIZING
    fontSize: {
      xs: "0.85rem", // Smaller text on mobile
      sm: "0.9rem",
      md: "1rem",    // Standard on desktop
    },
    px: {
      xs: 2,         // 16px padding on sides for mobile
      sm: 3,         // 24px for tablet
      md: 4          // 32px for desktop
    },
    py: {
      xs: 1,         // 8px padding top/bottom
      md: 1.5        // 12px for desktop
    },
    
    // INTERACTION
    "&:hover": {
      bgcolor: "#0516faff", // Darker green on hover
      boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
      transform: "translateY(-1px)",
    },
    "&:active": {
      transform: "translateY(0)",
    }
  }}
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
                  <FormHelperText>
                    Please select a payment method
                  </FormHelperText>
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

export default AddFund;
