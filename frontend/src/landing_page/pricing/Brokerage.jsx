import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Section from "./Section";

export default function Brokerage() {
  return (
    <Box sx={{ width: "98.8vw" }}>
      <Container>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          {/* <Link href="" sx={{ textDecoration: "none" }}> */}
            Calculate your costs upfront
          {/* </Link>{" "} */}
          using our brokerage calculator
        </Typography>
        <Typography sx={{ margin: "2.5rem 0", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
          Charges explained
        </Typography>

        <Grid container columnSpacing={9}>
          <Grid size={{ md: 6, xs: 12 }}>
            <Section
              title="Securities/Commodities transaction tax"
              discrp="Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O."
            />
            <Section
              title="Transaction/Turnover Charges"
              discrp="BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover."
            />
            <Section
              title="Call & trade"
              discrp="BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022."
            />
            <Section
              title="Stamp charges"
              discrp="Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories."
            />
            <Section
              title="NRI brokerage charges"
              discrp="₹100 per order for futures and options.
                    For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).
                    For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                    ₹500 + GST as yearly account maintenance charges (AMC) charges."
            />
          </Grid>

          <Grid size={{ md: 6, xs: 12 }}>
            <Section
              title="GST"
              discrp="Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)"
            />
            <Section
              title="SEBI Charges"
              discrp="Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.

"
            />
            <Section
              title="DP (Depository participant) charges"
              discrp="₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.

Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.

Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.

"
            />
            <Section
              title="Pledging charges"
              discrp="₹30 + GST per pledge request per ISIN."
            />
            <Section
              title="AMC (Account maintenance charges)"
              discrp="For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here

For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here

"
            />
            <Section
              title="Corporate action order charges"
              discrp="₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console."
            />
          </Grid>
        </Grid>
        <Section
          title="Disclaimer"
          discrp="For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged."
        />
      </Container>
    </Box>
  );
}
