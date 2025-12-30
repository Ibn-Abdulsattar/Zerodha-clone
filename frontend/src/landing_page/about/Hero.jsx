import { Box, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: "3.5rem", sm: "5rem", },
        px: { xs: "1.2rem", sm: "2rem" },
        mt: { xs: "2rem", md: "3rem" },
        backgroundColor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xxl">
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: "1.5rem",   // mobile
              sm: "1.9rem",   // small tablets
              md: "2.4rem",   // desktops
              lg: "2.8rem",   // large screens
              xl: "3rem",     // 4K screens
            },
            fontWeight: 600,
            color: "text.primary",
            lineHeight: {
              xs: "2.2rem",
              sm: "2.6rem",
              md: "3rem",
              lg: "3.4rem",
            },
            letterSpacing: "0.02rem",
            wordSpacing: "0.1rem",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </Typography>
      </Container>
    </Box>
  );
}
