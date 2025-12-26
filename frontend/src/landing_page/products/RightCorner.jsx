import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Container, Grid } from "@mui/material";

export default function RightCorner({
  img,
  link,
  title,
  description,
  Try,
}) {
  return (
    <Box sx={{ width: "98.8vw" }}>
      <Container>
        <Grid container columnSpacing={12}>
          <Grid sx={{ marginTop: "1rem", order: { xs: 2,md:1} }} size={{ md: 5, xs: 12 }}>
             <Box sx={{ mt: { xs: 0, md: 10 } }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: "2rem",
                  mb: 3,
                  color: "text.secondary",
                }}
              >
                {description}
              </Typography>

              {Try && (
                <Link
                  href={link}
                  target='_blank'
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {Try}
                  <ArrowRightAltIcon fontSize="small" />
                </Link>
              )}
            </Box>
          </Grid>

          <Grid sx={{ textAlign: "center", order: { xs: 1,md:2} }} size={{ md: 7, xs: 12 }}>
            <Link href={link} target='_blank'>
            <Box
              component="img"
              src={img}
              alt="illustration"
              sx={{
                width: { xs: "90%", sm: "80%", md: "100%" },
                maxWidth: "600px",
                mx: "auto",
              }}
            />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
