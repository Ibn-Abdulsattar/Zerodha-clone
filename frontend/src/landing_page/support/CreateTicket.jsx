import { Box, Container, Grid, Typography, Link } from "@mui/material";

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
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    iconClass: "fa-solid fa-chart-column",
    title: "Kite",
    items: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
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
      "National Pension Scheme (NPS)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

export default function CreateTicket() {
  return (
    <Box sx={{ width: "98.8vw", mb: "5rem" }}>
      <Container sx={{ mt: 6 }}>
        <Typography
          sx={{
            fontSize: "1.2rem",
            opacity: "0.7",
            mb: "2.5rem",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          To create a ticket, select a relevant topic
        </Typography>
        <Grid container spacing={4}>
          {helpSections.map((section, idx) => (
            <Grid size={{ xs: 12, sm:6,  md: 4 }} key={idx}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 , pl: "1.5rem"}}>
                <i
                  className={section.iconClass}
                  style={{ marginRight: "0.5rem" }}
                ></i>
                <Typography sx={{ fontSize: "1.1rem" }}>
                  {section.title}
                </Typography>
              </Box>
              {section.items.map((item, i) => (
                <Link
                  key={i}
                  href={`${import.meta.env.VITE_Dashboard_Url}`}
                  target='_blank'
                  underline="hover"
                  sx={{
                    display: "block",
                    color: "primary.main",
                    mb: "1rem",
                    fontSize: "0.95rem",
                    position: "relative",
                    left: "1.5rem",
                    "&:hover": {
                      textDecoration: "none",
                      color: "black",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
