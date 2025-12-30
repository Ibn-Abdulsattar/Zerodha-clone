import { Box, Container, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid"; // Import Grid2 for better performance/v5+ standards

export default function Docs() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#fafafa",
        py: { xs: 6, md: 12 }, // Using MUI spacing (8px * 6 = 48px)
        mb: { xs: 0, md: 4 },
        overflowX: "hidden", 
      }}
    >
      <Container maxWidth="xxl">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
          {/* Left Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            {[
              `We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.`,
              `Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.`,
              `Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.`,
            ].map((text, idx) => (
              <Typography
                key={idx}
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  color: "text.secondary",
                  mb: 3,
                  "&:last-child": { mb: 0 },
                }}
              >
                {text}
              </Typography>
            ))}
          </Grid>

          {/* Right Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.8,
                color: "text.secondary",
                mb: 3,
              }}
            >
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.8,
                color: "text.secondary",
                mb: 3,
              }}
            >
              <Link href="#" underline="hover" sx={{ color: "primary.main", fontWeight: 500 }}>
                Rainmatter
              </Link>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.8,
                color: "text.secondary",
              }}
            >
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <Link href="#" underline="hover">blog</Link>, see what the media is{" "}
              <Link href="#" underline="hover">saying about us</Link>, or learn
              more about our business and product{" "}
              <Link href="#" underline="hover">philosophies</Link>.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
