import { Box, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ width: {md:"100%", xs: "100%"}, py: { xs: "4rem", md: "7rem" }, mt: "2rem"}}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1.6rem",
              sm: "2rem",
              md: "2.4rem",
            },
            fontWeight: 600,
            lineHeight: { xs: "2.2rem", sm: "2.6rem", md: "3rem" },
          }}
        >
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </Typography>
      </Container>
    </Box>
  );
}
