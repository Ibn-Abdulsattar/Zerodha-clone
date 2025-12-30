import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function InvestCard({ icon, title, subtitle }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "flex-start" },
        gap: { xs: 0, sm: 3 },
        width: "100%",
        px: { xs: 1, md: 2 },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: { xs: "60px", sm: "70px", md: "80px" },
          height: "auto",
          flexShrink: 0,
          mb: { xs: 1, sm: 0 },
        }}
      >
        <img
          src={icon}
          alt={title}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>

      {/* Text */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
            // fontWeight: 600,
            mb: 0.3,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1rem" },
            whiteSpace: "pre-line",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
