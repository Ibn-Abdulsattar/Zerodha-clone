import { Box, Grid, Typography, Link, Container, Divider } from "@mui/material";
import { Facebook, LinkedIn, YouTube, WhatsApp } from "@mui/icons-material";
import logo from "../assets/image/logo-zerodha.png";

const linkStyle = {
  color: "text.secondary",
  display: "block",
  textDecoration: "none",
  lineHeight: "2.2", // Slightly increased for better mobile tapping
  fontSize: { xs: "0.85rem", md: "0.9rem" },
  transition: "all 0.2s ease",
  cursor: "pointer",
  "&:hover": {
    color: "primary.main",
    transform: "translateX(3px)", // Subtle hover effect
  },
};

const sections = {
  Company: ["About", "Philosophy", "Press & media", "Careers", "Zerodha Cares (CSR)", "Zerodha.tech", "Open source"],
  Support: ["Open demat account", "Minor demat account", "NRI demat account", "Commodity", "Fund transfer", "Referral program"],
  Account: ["Contact us", "Support portal", "How to file a complaint?", "Status of your complaints", "Bulletin", "Circular"],
  "Quick links": ["Upcoming IPOs", "Brokerage charges", "Market holidays", "Economic calendar", "Calculators", "Markets"],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fbfbfb",
        borderTop: "1px solid #eaeaea",
        pt: { xs: 6, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, lg: 2 }} justifyContent="space-between">
          
          {/* -------- Brand Section -------- */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 4 }}>
              <Typography
                variant="h6"
                color="primary"
                fontWeight={800}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: 2,
                  letterSpacing: 1
                }}
              >
                <Box component="img" src={logo} alt="Logo" sx={{ width: 30, height: 30, mr: 1.5 }} />
                ZERODHA
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
                &copy; 2025 Created by <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>Ibn-Abdulsattar</Box>
                <br />
                Contact: <Link href="tel:+923086972305" sx={{ color: "inherit", textDecoration: "none" }}>+92-3086972305</Link>
                <br />
                All rights reserved.
              </Typography>

              <Box sx={{ display: "flex", gap: 2.5, justifyContent: { xs: "center", md: "flex-start" } }}>
                {[
                  { Icon: Facebook, url: "https://www.facebook.com/IbnAbdulsattar" },
                  { Icon: LinkedIn, url: "https://www.linkedin.com/in/usman-abdulsattar-41aa0933b/" },
                  { Icon: YouTube, url: "www.youtube.com" },
                  { Icon: WhatsApp, url: "wa.me" },
                ].map(({ Icon, url }, i) => (
                  <Link
                    key={i}
                    href={url}
                    target="_blank"
                    sx={{
                      color: "text.secondary",
                      "&:hover": { color: "primary.main", transform: "scale(1.2)" },
                      transition: "0.2s"
                    }}
                  >
                    <Icon sx={{ fontSize: "1.6rem" }} />
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* -------- Link Sections -------- */}
          {Object.entries(sections).map(([title, items], idx) => (
            <Grid key={idx} size={{ xs: 6, sm: 6, md: 2 }}>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{
                  color: "text.primary",
                  mb: 2,
                  fontSize: "1rem",
                  textAlign: { xs: "center", md: "left" }
                }}
              >
                {title}
              </Typography>
              <Box component="nav" sx={{
                  textAlign: { xs: "center", md: "left" }
              }}>
                {items.map((text, i) => (
                  <Link key={i} href="#" sx={linkStyle}>
                    {text}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* -------- Bottom Section -------- */}
        <Divider sx={{ mt: 8, mb: 4 }} />
        
        <Box sx={{ textAlign: "center" }}>
          <Typography 
            variant="caption" 
            display="block" 
            sx={{ color: "text.disabled", maxWidth: "800px", mx: "auto", lineHeight: 1.8 }}
          >
            Zerodha Broking Ltd. — Member of NSE & BSE — CIN: U65929KA2010PLC092453 <br />
            Registered Office: #153/154, 4th Cross, JP Nagar 4th Phase, Bengaluru — 560078, Karnataka, Pakistan.
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
