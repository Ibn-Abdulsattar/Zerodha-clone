import { Alert, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../context/AuthContext";

export default function GlobalAlert() {
    const { alert, setAlert } = useAuth();
  return (
    <>
      {alert && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity={alert.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setAlert(null)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
          sx={{
            position: "fixed",
            top: 50,
            left: "50%",
            // right: "30%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            minWidth: "20rem",
            maxWidth: "37.5rem",

            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            backdropFilter: "blur(8px)",
            borderRadius: "12px",
            fontSize: "0.95rem",
            fontWeight: 500,
            "& .MuiAlert-icon": {
              fontSize: "1.5rem",
            },
            "& .MuiAlert-message": {
              padding: "8px 0",
              display: "flex",
              alignItems: "center",
            },
            "@media (max-width: 600px)": {
              left: "2rem",
              right: "2rem",
              transform: "none",
            },
          }}
        >
          {alert.message}
        </Alert>
      )}
    </>
  );
}

