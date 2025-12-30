import { Box, Typography, Link } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import education from "../../assets/image/education.svg";

export default function Education() {
  return (
<Box
  component="section"
  sx={{

    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 2, sm: 4, md: 8 },
    py: { xs: 2, sm: 4, md: 6 },
    gap: { xs: 3, sm: 4, md: 6, lg: 8 },
    overflowX: "hidden",
    backgroundColor: "#fff",
  }}
>
  {/* Left side: Image */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mb: { xs: 3, md: 0 },
    }}
  >
    <Link
      href={`${import.meta.env.VITE_Backend_Url}/funds`}
      target="_blank"
      rel="noopener"
    >
      <Box
        component="img"
        src={education}
        alt="Education Visual"
        sx={{
          width: { xs: "85%", sm: "80%", md: "90%" },
          maxWidth: "600px",
          height: "auto",
          borderRadius: 2,
          objectFit: "cover"
        }}
      />
    </Link>
  </Box>

  {/* Right side: Text */}
  <Box
    sx={{
      flex: 1,
      textAlign: { xs: "center", md: "left" },
      px: { xs: 1, sm: 2 },
    }}
  >
    {/* Heading */}
    <Typography
      variant="h4"
      fontWeight={600}
      gutterBottom
      sx={{
        fontSize: {
          xs: "1.5rem",
          sm: "2rem",
          md: "2.4rem",
          lg: "2.8rem",
        },
        mb: { xs: 1, sm: 1.5, md: 2 },
        color: "#1a1a1a",
      }}
    >
      Free and open market education
    </Typography>

    {/* Subtext */}
    <Typography
      variant="body1"
      sx={{
        mb: { xs: 1.5, sm: 2, md: 3 },
        fontSize: {
          xs: "0.95rem",
          sm: "1rem",
          md: "1.1rem",
          lg: "1.2rem",
        },
        color: "#444",
      }}
    >
      Varsity, the largest online stock market education book in the world{" "}
      <br />
      covering everything from the basics to advanced trading.
    </Typography>

    {/* Varsity link */}
    <Link
      href={`${import.meta.env.VITE_Dashboard_Url}/funds`}
      underline="none"
      target="_blank"
      rel="noopener"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        fontWeight: 600,
        fontSize: { xs: "0.95rem", md: "1rem" },
        color: "#1976d2",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      Varsity <ArrowRightAltIcon fontSize="small" sx={{ ml: 0.5 }} />
    </Link>

    {/* Second section */}
    <Typography
      variant="body1"
      sx={{
        mt: { xs: 3, sm: 4 },
        mb: { xs: 1, sm: 2 },
        fontSize: {
          xs: "0.95rem",
          sm: "1rem",
          md: "1.1rem",
          lg: "1.2rem",
        },
        lineHeight: 1.8,
        color: "#444",
      }}
    >
      TradingQ&A, the most active trading and investment community in India for
      all your market-related queries.
    </Typography>

    {/* TradingQ&A link */}
    <Link
      href={`${import.meta.env.VITE_Dashboard_Url}/funds`}
      underline="none"
      target="_blank"
      rel="noopener"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        fontWeight: 600,
        fontSize: { xs: "0.95rem", md: "1rem" },
        color: "#1976d2",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      TradingQ&A <ArrowRightAltIcon fontSize="small" sx={{ ml: 0.5 }} />
    </Link>
  </Box>
</Box>

  );
}
