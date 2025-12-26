import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import dittoLogo from "../../assets/image/dittoLogo.png";
import smallcaseLogo from "../../assets/image/smallcaseLogo.png";
import sensibullLogo from "../../assets/image/sensibullLogo.svg";
import streakLogo from "../../assets/image/streakLogo.png";
import zerodhaFundhouse from "../../assets/image/zerodhaFundhouse.png";
import tijori from "../../assets/image/tijori.png";

export default function Universe() {
  const zerodha = [
    {
      discrp:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
      img: zerodhaFundhouse,
      link: "https://www.zerodhafundhouse.com",
    },
    {
      discrp:
        "Options trading platform that lets you create strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.",
      img: sensibullLogo,
      link: "https://sensibull.com",
    },
    {
      discrp:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
      img: tijori,
      link: "https://tijorifinance.com",
    },
    {
      discrp:
        "Systematic trading platform that allows you to create and backtest strategies without coding",
      img: streakLogo,
      link: "https://www.streak.tech",
    },
    {
      discrp:
        "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
      img: smallcaseLogo,
      link: "https://www.smallcase.com",
    },
    {
      discrp:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
      img: dittoLogo,
      link: "https://joinditto.in",
    },
  ];


  return (
    <Box sx={{ width: "98.8vw" }}>
      <Container sx={{ textAlign: "center", mb: "5rem" }}>
        <Typography variant="h4">The Zerodha Universe</Typography>
        <Typography sx={{ margin: "2rem 0", mb: "4rem", fontSize: "1.2rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </Typography>

        <Grid container columnSpacing={12}>
          {zerodha.map((label, idx) => (
            <Grid sx={{ mb: "3.5rem" }} key={idx} size={{ xs: 12, md: 4 }}>
              <Link
                href={label.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ color: "inherit" }}
              >
                <Box
                  component="img"
                  src={label.img}
                  alt="partner logo"
                  sx={{
                    width: { xs: "140px", sm: "160px", md: "200px" },
                    mb: 2,
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    opacity: 0.7,
                    px: 2,
                  }}
                >
                  {label.discrp}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Link href={`${import.meta.env.VITE_Frontend_Url}/authenticate`}>
        <Button
          style={{
            width: "200px",
            padding: "0.4rem",
            fontSize: "1.3rem",
            fontWeight: "bold",
            textTransform: "none",
          }}
          variant="contained"
          color="primary"
        >
          Signup for free
        </Button>
        </Link>
      </Container>
    </Box>
  );
}
