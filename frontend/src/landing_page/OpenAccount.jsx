import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function OpenAccount() {
  const handleSignup=()=>{
     window.open("https://main.d1j2bhmi0fpcet.amplifyapp.com/", "_blank", "noopener,noreferrer");
  }
  return (
    <>
      <Box sx={{textAlign: "center", padding: "4rem", gap: "1rem", width: "98.8vw"}}>
        <Typography variant="h4" sx={{fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },}}>Open a Zerodha account</Typography>
        <br />
        <Typography variant="subtitle1">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </Typography>
        <br />
        <Button
          style={{
            width: "200px",
            padding: "0.4rem",
            fontSize: "1.3rem",
            fontWeight: "bold",
            textTransform: "none",
          }}
          variant="contained"
          color="primary"
            onClick={handleSignup}
        >
          Signup for free
        </Button>
      </Box>
    </>
  );
}
