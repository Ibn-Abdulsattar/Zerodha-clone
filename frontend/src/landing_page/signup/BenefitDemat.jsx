import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Benefit_demat from "../../assets/image/benefit_demat.png";
import BenefitSteps from "./BenefitSteps";

export default function BenefitDemat() {
  const steps = [
    {
      title: "Unbeatable pricing",
      description:
        "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
    },
    {
      title: "Best investing experience",
      description:
        "Simple and intuitive trading platform with an easy-to-understand user interface.",
    },
    {
      title: "No spam or gimmicks",
      description:
        "Committed to transparency — no gimmicks, spam, gamification, or intrusive push notifications.",
    },
    {
      title: "The Zerodha universe",
      description:
        "More than just an app — gain free access to the entire ecosystem of our partner products.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3, sm: 5, md: 10 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="xxl">
        <Grid
          container
          rowSpacing={{ xs: 3, md: 8 }}
          columnSpacing={{ xs: 2, sm: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Column: Image + Heading */}
          <Grid size={{xs:12, md:6}}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={Benefit_demat}
                alt="Benefits of Demat Account"
                sx={{
                  width: { xs: "80%", sm: "70%", md: "100%" },
                  maxWidth: 480,
                  mx: "auto",
                  display: "block",
                  mt:{xs:2, sm:0}
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  mt: { xs: 2, sm: 5 },
                  fontWeight: 600,
                  lineHeight: 1.3,
                  textAlign: "center",
                  fontSize: {
                    xs: "1.4rem",
                    sm: "1.8rem",
                    md: "2rem",
                    lg: "2.4rem",
                  },
                }}
              >
                Benefits of opening a&nbsp;
                <Box component="span" color="primary.main">
                  Zerodha
                </Box>{" "}
                demat account
              </Typography>
            </Box>
          </Grid>

          {/* Right Column: Benefit Steps */}
          <Grid
            size={{xs:12, md:6}}
            sx={{
              textAlign: { xs: "center", md: "start" },
            }}
          >
            {steps.map((step, idx) => (
              <Box key={idx} sx={{ mb: { xs: 2, sm: 5 } }}>
                <BenefitSteps title={step.title} description={step.description} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
