import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function OpenAccount() {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        py: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        px: { xs: "1.5rem", sm: "2rem", md: "3rem" },
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem", lg: "2.5rem" },
          lineHeight: 1.3,
          mb: { xs: 2, sm: 2.5 },
          color: "text.primary",
          maxWidth: { xs: "100%", sm: "80%", md: "60%" },
        }}
      >
        Open a Zerodha account
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          color: "text.secondary",
          mb: { xs: 3, sm: 4 },
          lineHeight: 1.8,
          maxWidth: { xs: "90%", sm: "75%", md: "55%" },
        }}
      >
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </Typography>

      {/* CTA Button */}
      <Link
        href={`${import.meta.env.VITE_Frontend_Url}/authenticate`}
        underline="none"
        sx={{ width: "fit-content" }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.2 },
            fontSize: { xs: "1rem", sm: "1.15rem" },
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "6px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "translateY(-2px)",
            },
          }}
        >
          Signup for free
        </Button>
      </Link>
    </Box>
  );
}
