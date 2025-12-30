import { Box, Grid, Typography, Link, Container } from "@mui/material";
import { Facebook, LinkedIn, YouTube, WhatsApp } from "@mui/icons-material";
import logo from "../assets/image/logo-zerodha.png";

const linkStyle = {
  color: "text.secondary",
  display: "block",
  textDecoration: "none",
  lineHeight: "2",
  fontSize: "0.9rem",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "primary.main",
  },
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
      component="footer"
      sx={{
        backgroundColor: "#fbfbfb",
        borderTop: "1px solid #ddd",
        py: { xs: "2.5rem", sm: "3rem", md: "4rem" },
        px: { xs: "1.5rem" },
      }}
    >
      <Container maxWidth="xxl">
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 6 }}
          justifyContent="space-between"
        >
          {/* -------- Brand and Social Icons -------- */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              color="primary"
              fontWeight={700}
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: 1.5,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Zerodha Logo"
                sx={{
                  width: 28,
                  height: 28,
                  mr: 1,
                  verticalAlign: "middle",
                }}
              />
              ZERODHA
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 2,
                lineHeight: 1.7,
                textAlign: { xs: "center", sm: "left" },
                color: "text.secondary",
              }}
            >
              &copy; 2025 created by{" "}
              <i style={{ color: "#4B0082" }}>Ibn-Abdulsattar</i>
              <br />
              Contact: <i style={{ color: "#4B0082" }}>+92-3086972305</i>
              <br />
              All rights reserved.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
                mb: 2,
              }}
            >
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
                  aria-label={`Visit ${url}`}
                  sx={{
                    color: "#666",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Icon sx={{ fontSize: "1.7rem" }} />
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                borderTop: "1px solid #e0e0e0",
                mt: { xs: 3, sm: 2 },
                mx: { xs: "auto", sm: 0 },
                width: { xs: "70%", sm: "100%" },
              }}
            />
          </Grid>

          {/* -------- Dynamic Links Section -------- */}
          {Object.entries(sections).map(([title, items], idx) => (
              <Grid
              key={idx}
                item
                xs={12}
                sm={6}
                md={2}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >

                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    color: "text.primary",
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    mb: { xs: 1, sm: 1.5 },
                  }}
                >
                  {title}
                </Typography>
                {items.map((text, i) => (
                  <Link
                    key={i}
                    href="#"
                    sx={linkStyle}
                    aria-label={`Navigate to ${text}`}
                  >
                    {text}
                  </Link>
                ))}

              </Grid>
          ))}
        </Grid>

        {/* -------- Bottom Disclaimer -------- */}
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 4, sm: 6 },
            pt: { xs: 2, sm: 3 },
            borderTop: "1px solid #e0e0e0",
            color: "text.secondary",
            fontSize: "0.8rem",
            lineHeight: 1.6,
          }}
        >
          Zerodha Broking Ltd. — Member of NSE & BSE — CIN:
          U65929KA2010PLC092453
          <br />
          Registered Office: #153/154, 4th Cross, JP Nagar 4th Phase, Bengaluru
          — 560078, Karnataka, India.
        </Box>
      </Container>
    </Box>
  );
}
