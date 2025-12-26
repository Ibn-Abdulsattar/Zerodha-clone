import { Box, Grid, Typography, Link, Container } from "@mui/material";
import { Facebook, LinkedIn, YouTube, WhatsApp } from "@mui/icons-material";
import logo from "../assets/image/logo-zerodha.png";

const linkStyle = {
  color: "#666666",
  display: "block",
  textDecoration: "none",
  lineHeight: "2.2",
  fontSize: "0.9rem",
};

const sections = {
  Support: [
    "Open demat account",
    "Minor demat account",
    "NRI demat account",
    "Commodity",
    "Dematerialisation",
    "Fund transfer",
    "MTF",
    "Referral program",
  ],
  Account: [
    "Contact us",
    "Support portal",
    "How to file a complaint?",
    "Status of your complaints",
    "Bulletin",
    "Circular",
    "Z-Connect blog",
    "Downloads",
  ],
  Company: [
    "About",
    "Philosophy",
    "Press & media",
    "Careers",
    "Zerodha Cares (CSR)",
    "Zerodha.tech",
    "Open source",
  ],
  "Quick links": [
    "Upcoming IPOs",
    "Brokerage charges",
    "Market holidays",
    "Economic calendar",
    "Calculators",
    "Markets",
    "Sectors",
  ],
};

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#fbfbfb",
        borderTop: "1px solid #ccc",
        px: { xs: "1rem", md: "4rem" },
        py: "2rem",
        width: { xs: "98.8vw", md: "98.8vw" },
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Brand and Social Icons */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="#046db0"
              fontWeight="bold"
              gutterBottom
              sx={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={logo}
                alt="Zerodha Logo"
                style={{ width: 28, height: 28, marginRight: 8 }}
              />
              ZERODHA
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
              &copy; 2025 created by{" "}
              <i style={{ color: "#4B0082" }}>Ibn-Abdulsattar</i>
              <br />
              Contact: <i style={{ color: "#4B0082" }}>+92-3086972305</i>
              <br />
              All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {[
                {
                  icon: Facebook,
                  url: "https://www.facebook.com/IbnAbdulsattar",
                },
                {
                  icon: LinkedIn,
                  url: "https://www.linkedin.com/in/usman-abdulsattar-41aa0933b/",
                },
                {
                  icon: YouTube,
                  url: "https://www.youtube.com/channel/UCf9LT4Y3wRRExt7Oh3GplSQ",
                },
                { icon: WhatsApp, url: "https://web.whatsapp.com/" },
              ].map(({ icon: Icon, url }, i) => (
                <Link
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${url}`}
                  sx={{ color: "#666" }}
                >
                  <Icon
                    sx={{ fontSize: "1.6rem", "&:hover": { color: "#046db0" } }}
                  />
                </Link>
              ))}
            </Box>
            <hr />
          </Grid>

          {/* Links Section */}
          {Object.entries(sections).map(([title, items], idx) => (
            <Grid sx={{ px: "2rem" }} key={idx} item xs={12} sm={6} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {title}
              </Typography>
              {items.map((text, i) => (
                <Link
                  key={i}
                  sx={linkStyle}
                  aria-label={`Link to ${text}`}
                >
                  {text}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
