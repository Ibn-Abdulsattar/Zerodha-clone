import { Box, Container, Grid, Link, Typography } from "@mui/material";
import IndivAccount from "./IndivAccount";

export default function ExploreAcounts() {
  const accounts = [
    {
      title: "Individual Account",
      icon: <i className="fa-regular fa-circle-user"></i>,
      description: "Invest in equities, mutual funds, and derivatives",
    },
    {
      title: "HUF Account",
      icon: <i className="fa-solid fa-users-line"></i>,
      description: "Make tax-efficient investments for your family",
    },
    {
      title: "NRI Account",
      icon: <i className="fa-solid fa-globe"></i>,
      description: "Invest in Indian markets while residing abroad",
    },
    {
      title: "Minor Account",
      link: "",
      icon: <i className="fa-solid fa-child-reaching"></i>,
      description:
        "Teach your kids about investing early and save for their future",
    },
    {
      title: "Corporate / LLP / Partnership",
      link: "",
      icon: <i className="fa-solid fa-building-columns"></i>,
      description:
        "Open accounts for business entities and manage surplus efficiently",
    },
  ];

  return (
    <Box
      sx={{
        width: { xs: "100vw", md: "98.8vw" },
        py: { xs: "2rem", md: "4rem" },
        background: "#fafafa",
      }}
    >
      <Container sx={{ padding: "2rem" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            // fontWeight: 600,
            mb: { xs: "2rem", md: "3rem" },
          }}
        >
          Explore different account types
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {accounts.map((account, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Link href=''>
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
