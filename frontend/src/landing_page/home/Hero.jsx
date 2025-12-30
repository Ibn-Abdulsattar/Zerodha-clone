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
        flexDirection: "column",
        px: { xs: 2, sm: 4, md: 8 },
        pt: { xs: 4, sm: 6, md: 8 },
        mt: { xs: "4rem", md: "2rem" },
        // height: { xs: "auto", sm: "50vh", md: "70vh" },
        minHeight: "200px",
        overflow: "hidden",
        backgroundColor: "#fff",
        order: {md: 1, xs:2}
      }}
    >
      <Box
        component="img"
        src={homeHero}
        alt="Hero Image"
        sx={{
          width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" },
          maxWidth: "1200px",
          objectFit: "cover",
          borderRadius: { xs: 1, sm: 2 },
        }}
      />
    </Box>
  );
}
