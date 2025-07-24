import { Box } from "@mui/material";
import homeHero from "../../assets/image/homeHero.png";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6 },
        width: "98.8vw",
        mt: "3.5rem",
        height: { xs: "auto", md: "65vh" },
        minHeight: "300px",
        backgroundColor: "#fff", // optional
      }}
    >
      <Box
        component="img"
        src={homeHero}
        alt="Hero Image"
        sx={{
          width: { xs: "100%", sm: "80%", md: "60%" },
          maxWidth: "700px",
          height: "auto",
        }}
      />
    </Box>
  );
}
