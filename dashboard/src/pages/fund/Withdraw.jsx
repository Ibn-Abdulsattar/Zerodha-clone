import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Link, TextField } from "@mui/material";

const Withdraw = ({openWithdraw, handleOpenWithdraw, handleCloseWithdraw, handleSubmitWithdraw, data}) => {


  const nestedStyle = {
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
