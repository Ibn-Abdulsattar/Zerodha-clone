import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Link} from "@mui/material";

const OpenAccount = ({ setAlertVisible}) => {

  const [nestedModel, setNestedModel] = useState(false);

  const handleNestedOpen = () => setNestedModel(true);
  const handleNestedClose = () => setNestedModel(false);

  const nestedStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 24,
    pt: 2,
    px: 4,
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

  const handleConfirmOpenAccount = () => {
    handleNestedClose();
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <>
      <Link   sx={{
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
  }} onClick={handleNestedOpen} className="btn btn-blue">
        Open Account
      </Link>
      <Modal
        open={nestedModel}
        onClose={handleNestedClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...nestedStyle,}}>
          <h3
            id="parent-modal-title"
            style={{ textAlign: "center", color: "blue" }}
          >
            Open Account
          </h3>
          <p id="parent-modal-description">
            To trade in commodities, you need to open a commodity account.
          </p>
          <Button onClick={handleConfirmOpenAccount} variant="outlined">
            Open
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default OpenAccount;