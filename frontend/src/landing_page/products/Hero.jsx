import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Container, Divider } from "@mui/material";

export default function Hero() {
  return (
    <Box >
      <Container>
        <Box sx={{ textAlign: "center", marginTop: "6.5rem" }}>
          <Typography
          fontWeight={600}
            sx={{ fontSize: { xs: "2rem", sm: "2.6rem", md: "3.4rem" } }}
            variant="h3"
          >
            Zerodha Products
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
              margin: "1rem 0",
            }}
          >
            Sleek, modern, and intuitive trading platforms
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
              mb:"1rem"
            }}
          >
            Check out our{" "}
            <Link
              href={`${import.meta.env.VITE_Dashboard_Url}`}
              target='_blank'
              underline="hover"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                fontWeight: 500,
              }}
            >
              investment offerings <ArrowRightAltIcon fontSize="small" />
            </Link>
          </Typography>
        <Divider sx={{ background: "#ddd" }} />
        </Box>
      </Container>
    </Box>
  );
}
