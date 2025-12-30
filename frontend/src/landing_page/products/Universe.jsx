import { Box, Button, Container, Link, Typography } from "@mui/material";
import {Grid} from "@mui/material"; // Use Grid2 for modern layout
// ... (Your image imports remain the same) ...
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
    <Box 
      component="section" 
      sx={{ 
        width: "100%", // Fixed from 98.8vw to prevent horizontal scrolling
        overflowX: "hidden",
        pb: { xs: 6, md: 10 },
        pt:{xs:1, md:0}
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography 
          variant="h4" 
          component="h2" // Use h2 for SEO hierarchy
          sx={{ fontWeight: 600 }}
        >
          The Zerodha Universe
        </Typography>
        
        <Typography 
          sx={{ 
            mt: 2, 
            mb: { xs: 6, md: 8 }, 
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "text.secondary"
          }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </Typography>

        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {zerodha.map((label, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }}>
              <Link
                href={label.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ 
                  color: "inherit", 
                  display: "block",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "translateY(-5px)" }
                }}
              >
                <Box
                  component="img"
                  src={label.img}
                  alt={`Logo for ${label.link}`}
                  sx={{
                    width: { xs: "120px", sm: "160px", md: "180px" },
                    height: "auto",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    opacity: 0.7,
                    px: { xs: 1, md: 3 },
                    lineHeight: 1.6
                  }}
                >
                  {label.discrp}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Link 
          href={`${import.meta.env.VITE_Frontend_Url}/authenticate`}
          underline="none"
        >
          <Button
            variant="contained"
            color="primary"
            size="large" // Use standard size prop for responsiveness
            sx={{
              width: { xs: "100%", sm: "200px" },
              padding: "0.6rem",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "none",
            }}
          >
            Signup for free
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
