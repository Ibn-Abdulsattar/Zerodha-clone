import { Box, Container, Grid, Typography } from "@mui/material";
import Benefit_demat from "../../assets/image/benefit_demat.png";
import BenefitSteps from "./BenefitSteps";

export default function BenefitDemat() {
  const steps = [
    {
      title: "Unbeatable pricing",
      description:
        "Zero charges for equity & mutual fund investments. Flat ₹20 fees for\nintraday and F&O trades.",
    },
    {
      title: "Best investing experience",
      description:
        "Simple and intuitive trading platform with an easy-to-understand user\ninterface.",
    },
    {
      title: "No spam or gimmicks",
      description:
        "Committed to transparency — no gimmicks, spam, gamification, or\nintrusive push notifications.",
    },
    {
      title: "The Zerodha universe",
      description:
        "More than just an app — gain free access to the entire ecosystem of\nour partner products.",
    },
  ];
  return (
    <>
      <Container>
        <Grid container columnSpacing={7} sx={{ marginTop: "7rem" }}>
          <Grid
            item
            size={{ md: 6, xs: 12 }}
            sx={{
              position: "relative",
              top: "7.5rem",
              mb: { xs: "10rem", lg: "2rem" },
            }}
          >
            <Box>
              <Box sx={{ textAlign: "center" }}>
                <img src={Benefit_demat} alt="Benefit_demat" />
              </Box>
              <Box sx={{ marginTop: "3rem" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "3rem",
                    lineHeight: 1.4,
                    fontSize: {
                      xs: "1.5rem", // small screens (mobile)
                      sm: "2rem", // small to medium
                      md: "2.2rem", // tablets
                      lg: "2.8rem", // laptops/desktops
                      xl: "3.2rem", // extra large monitors
                    },
                  }}
                  variant="h4"
                >
                  Benefits of opening a Zerodha&nbsp; demat account
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item size={{ md: 6, xs: 12 }}>
            {steps.map((step, idx) => (
              <BenefitSteps
                key={idx}
                title={step.title}
                description={step.description}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
