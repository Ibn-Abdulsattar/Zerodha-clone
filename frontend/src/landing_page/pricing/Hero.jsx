import { Box, Container, Typography } from "@mui/material";
import {Grid} from "@mui/material"; // Use Grid2 for modern v5/v6 standards
import intradayTrades from "../../assets/image/intradayTrades.svg";
import pricingEquity from "../../assets/image/pricingEquity.svg";

export default function Hero() {
  const trades = [
    {
      img: pricingEquity,
      title: "Free equity delivery",
      discrp:
        "All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.",
    },
    {
      img: intradayTrades,
      title: "Intraday and F&O trades",
      discrp:
        "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
    },
    {
      img: pricingEquity,
      title: "Free direct MF",
      discrp:
        "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
    },
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        width: "100%", // Fixed: 98.8vw creates horizontal scrollbars on Windows
        overflowX: "hidden",
        py: { xs: 10, md: 12 }, 
        pb:{xs:0, md:0}
      }}
    >
      <Container maxWidth="xxl">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 12 },
          }}
        >
          <Typography
            variant="h1" // SEO best practice
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
              fontWeight: 600,
              mb: 1.5
            }}
          >
            Charges
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              color: "text.secondary",
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto"
            }}
          >
            List of all charges and taxes
          </Typography>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {trades.map((trade, idx) => (
            <Grid
              key={idx}
              size={{ xs: 12, md: 4 }}
              sx={{ textAlign: "center" }}
            >
              <Box
                component="img"
                src={trade.img}
                alt={trade.title}
                sx={{
                  width: "100%",
                  maxWidth: { xs: "180px", sm: "220px", md: "100%" },
                  height: "auto",
                  mx: "auto",
                  mb: 0
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.3rem", lg: "1.6rem", md:"1.4" },
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {trade.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.6,
                  color: "text.secondary",
                  px: { xs: 1, sm: 3, md: 0 },
                }}
              >
                {trade.discrp}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
