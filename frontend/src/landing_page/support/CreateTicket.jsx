import { Box, Container, Typography, Link } from "@mui/material";
import {Grid} from "@mui/material"; // Modern MUI Grid

const helpSections = [
  {
    iconClass: "fa-solid fa-circle-plus",
    title: "Account Opening",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    iconClass: "fa-solid fa-user",
    title: "Your Zerodha Account",
    items: [
      "Your Profile",
      "Account modification",
      "CMR and DP",
      "Nomination",
      "Transfer and conversion",
    ],
  },
  {
    iconClass: "fa-solid fa-chart-column",
    title: "Kite",
    items: [
      "IPO",
      "Trading FAQs",
      "MTF and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    iconClass: "fa-solid fa-wallet",
    title: "Funds",
    items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    iconClass: "fa-solid fa-table-columns",
    title: "Console",
    items: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
    ],
  },
  {
    iconClass: "fa-solid fa-coins",
    title: "Coin",
    items: [
      "Mutual funds",
      "NPS",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

export default function CreateTicket() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%", // Fixed from 98.8vw to prevent horizontal scroll
        overflowX: "hidden",
        mb: { xs: 6, md: 10 },
        py: { xs: 4, md: 6 }
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            color: "text.secondary",
            mb: { xs: 4, md: 6 },
            textAlign: { xs: "center", md: "left" },
            fontWeight: 400
          }}
        >
          To create a ticket, select a relevant topic
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {helpSections.map((section, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              {/* Section Header */}
              <Box 
                sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    mb: 2,
                    justifyContent: { xs: "center", md: "flex-start" } 
                }}
              >
                <Box 
                    component="i" 
                    className={section.iconClass} 
                    sx={{ mr: 1.5, fontSize: "1.1rem", color: "text.primary" }} 
                />
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
                  {section.title}
                </Typography>
              </Box>

              {/* List of Links */}
              <Box 
                sx={{ 
                    pl: { xs: 0, md: 4 }, // No padding on mobile for centering, indentation on desktop
                    textAlign: { xs: "center", md: "left" } 
                }}
              >
                {section.items.map((item, i) => (
                  <Link
                    key={i}
                    href={`${import.meta.env.VITE_Dashboard_Url}`}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    sx={{
                      display: "block",
                      color: "primary.main",
                      mb: 1.5,
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      "&:hover": {
                        color: "text.primary",
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
