import React from "react";
import { Box, Typography } from "@mui/material";

export default function BenefitSteps({ title, description }) {
  return (
    <Box
      sx={{
        mb: { xs: 1, sm: 5 },
        textAlign: { xs: "center", md: "start" },
        maxWidth: { xs: "100%", md: "90%" },
        mx: { xs: "auto", md: 0 },
      }}
    >
      {/* Step Title */}
      <Typography
        variant="h5"
        sx={{
          mb: { xs: 1.5, sm: 2 },
          fontWeight: 600,
          fontSize: {
            xs: "1.2rem", // mobile
            sm: "1.4rem", // tablets
            md: "1.5rem", // desktops
          },
          color: "text.primary",
          lineHeight: 1.4,
        }}
      >
        {title}
      </Typography>

      {/* Step Description */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: {
            xs: "0.95rem",
            sm: "1rem",
            md: "1.05rem",
          },
          lineHeight: 1.7,
          letterSpacing: "0.01rem",
          wordSpacing: "0.2rem",
          fontWeight: 400,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
