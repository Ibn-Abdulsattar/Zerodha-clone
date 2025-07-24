import { Box, Typography } from "@mui/material";

export default function BenefitSteps({ title, description }) {
  return (
    <>
      <Box sx={{ marginBottom: "3.5rem" }}>
        <Typography variant="h5" sx={{ marginBottom: "1.5rem" }}>
          {title}
        </Typography>
        <Typography
          sx={{
            color: "rgb(131, 127, 123)",
            wordSpacing: "0.5rem",
            fontWeight: "semiBold",
          }}
          variant="h6"
        >
          {description}
        </Typography>
      </Box>
    </>
  );
}


