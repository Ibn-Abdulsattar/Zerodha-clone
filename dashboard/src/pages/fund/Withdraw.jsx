import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Link, TextField } from "@mui/material";

const Withdraw = ({openWithdraw, handleOpenWithdraw, handleCloseWithdraw, handleSubmitWithdraw, data}) => {


  const nestedStyle = {
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
      lg: '35%',    // 1200px+
      xl: '30%',    // 1536px+
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
        onClick={handleOpenWithdraw}
        className="btn btn-blue"
      >
        Withdraw
      </Link>
      <Modal
        open={openWithdraw}
        onClose={handleCloseWithdraw}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...nestedStyle }}>
          <h3
            id="parent-modal-title"
            style={{ textAlign: "center", color: "blue", marginBottom: "2rem" }}
          >
            Withdraw Money
          </h3>

          {/* Summary Section */}
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <span>Available Cash</span>
              <span className="text-warning" style={{ fontWeight: "bold" }}>
                {data?.availableCash?.toLocaleString() || 0}
              </span>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <span>Available Margin</span>
              <span className="text-success" style={{ fontWeight: "bold" }}>
                {data?.availableMargin?.toLocaleString() || 0}
              </span>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <span>Used Margin</span>
              <span className="text-primary" style={{ fontWeight: "bold" }}>
                {data?.usedMargin?.toLocaleString() || 0}
              </span>
            </Box>
          </Box>

          {/* Withdraw Input */}
          <form onSubmit={handleSubmitWithdraw}>
            <TextField
              id="outlined-basic"
              label="Enter amount to withdraw"
              name="withdraw_amount"
              variant="outlined"
              sx={{ width: "100%", mb: 2 }}
              required
            />

            {/* Withdraw Button */}
            <Box sx={{ textAlign: "center" }}>
              <Button type="submit" variant="outlined">
                Withdraw
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Withdraw;
