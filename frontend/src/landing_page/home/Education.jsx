import { Box, Typography, Link } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import education from "../../assets/image/education.svg";

export default function Education() {
  return (
    <Box
      component="section"
      sx={{
        width: "98.8vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 12 },
        gap: 6,
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
        }}
      >
        <Link href={`${import.meta.env.VITE_Backend_Url}/funds`}
          target="_blank"
        >
        <Box
          component="img"
          src={education}
          alt="Education Visual"
          sx={{
            width: { xs: "80%", md: "90%" },
            maxWidth: "600px",
          }}
        />
        </Link>
      </Box>
      

      {/* Right side: Text */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="600"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mb: 3 }}
        >
          Free and open market education
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
          Varsity, the largest online stock market education book in the world <br />
          covering everything from the basics to advanced trading.
        </Typography>
        <Link
          href={`${import.meta.env.VITE_Dashboard_Url}/funds`}
          underline="none"
          target="_blank"
          rel="noopener"
          sx={{ display: "inline-flex", alignItems: "center", fontWeight: 500 }}
        >
          Varsity <ArrowRightAltIcon fontSize="small" sx={{ ml: 0.5 }} />
        </Link>

        <Typography variant="body1" sx={{ mt: 4, mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
        </Typography>
        <Link 
          href={`${import.meta.env.VITE_Dashboard_Url}/funds`}
          underline="none"
          target="_blank"
          rel="noopener"
          sx={{ display: "inline-flex", alignItems: "center", fontWeight: 500 }}
        >
          TradingQ&A <ArrowRightAltIcon fontSize="small" sx={{ ml: 0.5 }} />
        </Link>
      </Box>
    </Box>
  );
}
