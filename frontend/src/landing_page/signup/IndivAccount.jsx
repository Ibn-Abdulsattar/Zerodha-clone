import { Box, Typography } from "@mui/material";

export default function IndivAccount({ icon, title, description }) {
  return (
    <Box
      sx={{
        position: "relative",
        textDecoration: "none",
        color: "text.primary",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Floating Icon */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 25, sm: 30, md: 35 },
          left: { xs: -12, sm: -14, md: -16 },
          backgroundColor: "#eff6ff",
          borderRadius: "50%",
          border: "1px solid #e0e0e0",
          p: { xs: "4px 8px", sm: "5px 9px", md: "6px 10px" },
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
          color: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
      >
        {icon}
      </Box>

      {/* Account Card */}
      <Box
        sx={{
          width: "100%",
          p: { xs: "1.5rem 1.5rem", sm: "2rem 2rem", md: "2rem 2.5rem" },
          border: "1px solid #dcdcdc",
          borderRadius: "0.6rem",
          backgroundColor: "#fff",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "primary.main",
            transform: "translateY(-5px)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          },
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            mb: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            fontWeight: 600,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.06rem" },
            lineHeight: 1.6,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
