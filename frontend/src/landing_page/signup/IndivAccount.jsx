import { Box, Link, Typography } from "@mui/material";

export default function IndivAccount({ icon, title, description }) {
  return (
    <>
      <Box sx={{textDecoration: "none", color: "black", position: "relative",}} >
           <Box
        sx={{
          position: 'absolute',
          top: 35,
          left: -16,
          backgroundColor: '#eff6ff',
          borderRadius: '50%',
          border: '1px solid #e0e0e0',
          padding: '0px 6px',
          fontSize: "1.3rem",
          color: "blue"
        }}
      >{icon}</Box>
        <Box
          sx={{
            padding: "2rem 2.5rem",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            "&:hover": {
              border: "1px solid blue",
            },
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "1.5rem" }}>
            {title}
          </Typography>
          <Typography sx={{ color: "rgb(121, 120, 120)", fontSize: "1.06rem" }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
