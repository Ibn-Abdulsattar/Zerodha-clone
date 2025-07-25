import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function Invest() {

  const handleSignup=()=>{
     window.open("https://main.d27cqj4o838ikf.amplifyapp.com/#", "_blank", "noopener,noreferrer");
  }
  return (
    <>
      <Box sx={{ padding: "1.5rem" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Invest in everthing
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", fontSize: { xs: "1rem", sm: "1.2rem" } }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </Typography>
        <Stack
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        </Stack>
      </Box>
    </>
  );
}
