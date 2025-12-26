import { Box, Container, Grid, Link, Typography } from "@mui/material";

export default function Docs() {
  return (
    <Box
      sx={{
        width: { md: "98.8vw", xs: "98.8vw" },
        backgroundColor: "#fafafa",
        py: { xs: "3rem", md: "6rem" },
        mb: {md: "2rem"}
      }}
    >
      
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            {[
              `We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.`,
              `Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.`,
              `Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.`,
            ].map((text, idx) => (
              <Box key={idx} sx={{ my: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: "2rem",
                    color: "text.primary",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ my: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: "2rem",
                  color: "text.primary",
                }}
              >
                In addition, we run a number of popular open online educational
                and community initiatives to empower retail traders and
                investors.
              </Typography>
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: "2rem",
                  color: "text.primary",
                }}
              >
                  Rainmatter
                , our fintech fund and incubator, has invested in several
                fintech startups with the goal of growing the Indian capital
                markets.
              </Typography>
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: "2rem",
                  color: "text.primary",
                }}
              >
                And yet, we are always up to something new every day. Catch up
                on the latest updates on our{" "}
                  blog
                , see what the media is{" "}
                  saying about us
                , or learn more about our business and product{" "}
                  philosophies
                .
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
