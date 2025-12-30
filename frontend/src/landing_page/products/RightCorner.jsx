import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Container } from "@mui/material";
import {Grid} from "@mui/material"; // Updated to Grid2

export default function RightCorner({
  img,
  link,
  title,
  description,
  Try,
}) {
  return (
    <Box 
      component="section"
      sx={{ 
        width: "100%", // Fixed from 98.8vw to prevent horizontal scroll
        overflowX: "hidden",
        py: { xs: 2, md: 1 } // Responsive padding
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 4, md: 8, lg: 12 }} 
          alignItems="center"
        >
          {/* Content Column - order 2 on mobile, 1 on desktop */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
             <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  fontWeight: 600,
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
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
                  rel="noopener"
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    transition: "gap 0.2s",
                    "&:hover": { gap: 1.5 } // Interactive animation
                  }}
                >
                  {Try}
                  <ArrowRightAltIcon />
                </Link>
              )}
            </Box>
          </Grid>

          {/* Image Column - order 1 on mobile, 2 on desktop */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Link href={link} target='_blank' rel="noopener">
              <Box
                component="img"
                src={img}
                alt={title}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: { xs: "450px", md: "100%" },
                  display: "block",
                  mx: "auto",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" }
                }}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
