import Typography from "@mui/material/Typography";
import Stock from "../../assets/image/Stock.png";
import mutual_fund from "../../assets/image/mutual-fund.png";
import future_options from "../../assets/image/future-options.png";
import IPO from "../../assets/image/IPO.png";
import InvestCard from "./InvestCard";
import Grid from "@mui/material/Grid";
import { Button, Container, Link } from "@mui/material";

export default function InvestOption() {
  return (
    <>
      <Container sx={{ marginBottom: "3rem" }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12 }}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "1.4rem", // for mobile
                  sm: "1.8rem", // small tablets
                  md: "2.2rem", // desktops and above
                },
              }}
              variant="h4"
            >
              Investment options with Zerodha demat account
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <InvestCard
              icon={Stock}
              title={"Stocks"}
              subtitle={"Invest in all exchange-listed securities"}
            ></InvestCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InvestCard
              icon={mutual_fund}
              title={"Mutual funds"}
              subtitle={"Invest in commission-free direct mutual funds"}
            ></InvestCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InvestCard
              icon={IPO}
              title={"IPO"}
              subtitle={"Apply to the latest IPOs instantly via UPI"}
            ></InvestCard>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InvestCard
              icon={future_options}
              title="Futures & options"
              subtitle={
                "Hedge and mitigate market risk through simplified F&O trading"
              }
            ></InvestCard>
          </Grid>
          <Grid item size={{ xs: 12 }} textAlign={"center"}>
            <Link href={`${import.meta.env.VITE_Dashboard_Url}/orders`} target='_blank'>
            <Button
            variant="contained"
            sx={{
              fontSize: "1.2rem",
              px: "2rem",
              py: "0.6rem",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Explore Investments
          </Button>
          </Link>

          </Grid>
        </Grid>
      </Container>
    </>
  );
}
