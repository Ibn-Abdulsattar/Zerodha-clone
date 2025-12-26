import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function NotFound() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          padding: "4rem",
          gap: "1rem",
          width: "98.8vw",
        }}
      >
        <Typography variant="h4" sx={{fontWeight: "bold"}}>404 Not Found</Typography>
        <br />
        <Typography variant="subtitle1">
          Sorry, the page you are looking for does not exist.
        </Typography>
        <br />
      </Box>
    </>
  );
}
