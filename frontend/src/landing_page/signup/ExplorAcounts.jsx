import { Box, Container, Grid, Link, Typography } from "@mui/material";
import IndivAccount from "./IndivAccount";

export default function ExploreAcounts() {
  const accounts = [
    {
      title: "Individual Account",
      link: `${import.meta.env.VITE_Dashboard_Url}`,
      icon: <i className="fa-regular fa-circle-user"></i>,
      description: "Invest in equities, mutual funds, and derivatives",
    },
    {
      title: "HUF Account",
      link: `${import.meta.env.VITE_Dashboard_Url}/orders`,
      icon: <i className="fa-solid fa-users-line"></i>,
      description: "Make tax-efficient investments for your family",
    },
    {
      title: "NRI Account",
      link: `${import.meta.env.VITE_Dashboard_Url}/holdings`,
      icon: <i className="fa-solid fa-globe"></i>,
      description: "Invest in Indian markets while residing abroad",
    },
    {
      title: "Minor Account",
      link: `${import.meta.env.VITE_Dashboard_Url}/positions`,
      icon: <i className="fa-solid fa-child-reaching"></i>,
      description:
        "Teach your kids about investing early and save for their future",
    },
    {
      title: "Corporate / LLP / Partnership",
      link: `${import.meta.env.VITE_Dashboard_Url}/funds`,
      icon: <i className="fa-solid fa-building-columns"></i>,
      description:
        "Open accounts for business entities and manage surplus efficiently",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: "2rem", md: "4rem" },
        px: {xs:"1rem", md: "1.5rem"},
        background: "#fafafa",
      }}
    >
      <Container >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: {
                    xs: "1.4rem",
                    sm: "1.8rem",
                    md: "2rem",
                    lg: "2.4rem",
                  },
            // fontWeight: 600,
            mb: { xs: "2rem", md: "3rem" },
          }}
        >
          Explore different account types
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {accounts.map((account, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Link
                href={account.link}
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <IndivAccount
                  icon={account.icon}
                  title={account.title}
                  description={account.description}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
