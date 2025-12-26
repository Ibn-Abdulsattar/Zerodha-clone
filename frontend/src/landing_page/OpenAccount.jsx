import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function OpenAccount() {
  
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
        <Link href={`${import.meta.env.VITE_Frontend_Url}/authenticate`} sx={{textDecoration: "none"}}>
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
            
        >
          Signup for free
        </Button>
        </Link>
      </Box>
    </>
  );
}
