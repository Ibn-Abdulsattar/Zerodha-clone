import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Invest() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
          mb: { xs: 1.5, sm: 2 },
        }}
      >
        Invest in everything
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
          mb: { xs: 2, sm: 3 },
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </Typography>

      {/* Button Section */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
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
              fontSize: { xs: "1rem", sm: "1.2rem" },
              fontWeight: "bold",
              borderRadius: 2,
              textTransform: "none",
              width: { xs: "100%" },
              maxWidth: "300px",
            }}
          >
            Sign up for free
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
