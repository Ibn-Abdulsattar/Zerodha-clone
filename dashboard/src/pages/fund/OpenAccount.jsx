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
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleConfirmOpenAccount = () => {
    handleNestedClose();
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <>
      <Link sx={{textDecoration: "none", color: "#fff"}} onClick={handleNestedOpen} className="btn btn-blue">
        Open Account
      </Link>
      <Modal
        open={nestedModel}
        onClose={handleNestedClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...nestedStyle, width: 400 }}>
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