import { Box, Container, Grid, Typography } from "@mui/material";
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
    <Box sx={{ width: {xs: "98.8vw",md: "98.8vw"}, py: { xs: 6, md: 10 } }}>
      <Container>
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 16 },
            mt: "4rem"
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
              fontWeight: 700,
            }}
          >
            Charges
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              opacity: 0.6,
            }}
          >
            List of all charges and taxes
          </Typography>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={{ xs: 6, md: 10 }}>
          {trades.map((trade, idx) => (
            <Grid
              item
              key={idx}
              size={{xs: 12, md:4}}
              sx={{ textAlign: "center" }}
            >
              <Box
                component="img"
                src={trade.img}
                alt={trade.title}
                sx={{
                  width: { xs: "70%", sm: "60%", md: "100%" },
                  maxWidth: "300px",
                  mx: "auto",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  fontWeight: 600,
                  mt: 3,
                  mb: 2,
                }}
              >
                {trade.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  opacity: 0.7,
                  px: { xs: 2, sm: 4 },
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
