import { Box, Container, Typography, Link } from "@mui/material";
import {Grid} from "@mui/material"; // Latest MUI Grid

const ChargeSection = ({ title, description }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      component="h3"
      sx={{
        fontSize: { xs: "1.1rem", md: "1.25rem" },
        fontWeight: 600,
        color: "text.primary",
        mb: 1.5,
        lineHeight: 1.4,
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontSize: { xs: "0.9rem", md: "0.95rem" },
        lineHeight: 1.7,
        color: "text.secondary",
        whiteSpace: "pre-line", // Preserves line breaks in descriptions
      }}
    >
      {description}
    </Typography>
  </Box>
);

export default function Brokerage() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%", // Prevent horizontal scroll
        py: { xs: 4, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="xxl">
        {/* Top Link/Header */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            mb: { xs: 3, md: 5 },
          }}
        >
          <Link
            href="#"
            underline="hover"
            sx={{ color: "primary.main", fontWeight: 500 }}
          >
            Calculate your costs upfront
          </Link>{" "}
          using our brokerage calculator
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 500,
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "primary.main",
            borderBottom: "1px solid #eee",
            pb: 2,
          }}
        >
          Charges explained
        </Typography>

        <Grid container spacing={{ xs: 2, md: 8 }}>
          {/* Left Column */}
          <Grid size={{ md: 6, xs: 12 }}>
            <ChargeSection
              title="Securities/Commodities transaction tax"
              description="Tax by the government when transacting on the exchanges. Charged on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O."
            />
            <ChargeSection
              title="Transaction/Turnover Charges"
              description={`BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. \n\nBSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.`}
            />
            <ChargeSection
              title="Call & trade"
              description="Additional charges of ₹50 + GST per order placed through a dealer at Zerodha including squared off positions by our RMS team."
            />
            <ChargeSection
              title="Stamp charges"
              description="Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories."
            />
          </Grid>

          {/* Right Column */}
          <Grid size={{ md: 6, xs: 12 }}>
            <ChargeSection
              title="GST"
              description="Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)"
            />
            <ChargeSection
              title="SEBI Charges"
              description="Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets."
            />
            <ChargeSection
              title="DP (Depository participant) charges"
              description="₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity."
            />
            <ChargeSection
              title="AMC (Account maintenance charges)"
              description="For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. \n\nFor non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly."
            />
          </Grid>
        </Grid>

        {/* Footer Disclaimer */}
        <Box 
          sx={{ 
            mt: 6, 
            pt: 4, 
            borderTop: "1px dashed #ccc" 
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
          >
            Disclaimer
          </Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              fontSize: "0.85rem",
            }}
          >
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
