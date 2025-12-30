import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Container } from "@mui/material";
import {Grid} from "@mui/material"; // Using modern Grid2

export default function LeftCorner({
  img,
  link,
  title,
  description,
  learn,
  google,
  app,
  Try,
  stack
}) {
  return (
    <Box 
      component="section" 
      sx={{ 
        width: "100%", 
        overflowX: "hidden",
        py: { xs: 3, md: 6 } 
      }}
    >
      <Container maxWidth="xxl">
        <Grid 
          container 
          spacing={{ xs: 4, md: 8, lg: 12 }} 
          alignItems="center"
          sx={{ mb: stack ? 4 : 0 }}
        >
          {/* Image Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Link href={link} target='_blank' rel="noopener">
              <Box
                component="img"
                src={img}
                alt={title}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: { xs: "400px", md: "550px" },
                  display: "block",
                  mx: "auto", // Centers on mobile
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" }
                }}
              />
            </Link>
          </Grid>

          {/* Content Column */}
          <Grid size={{ xs: 12, md: 5 }}>
             <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                fontWeight: 600,
                lineHeight: 1.3,
                mb: 2,
                textAlign: { xs: "center", md: "left" }
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
                color: "text.secondary",
                mb: 4,
                textAlign: { xs: "center", md: "left" }
              }}
            >
              {description}
            </Typography>

            {/* Action Links */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: { xs: 2, sm: 4 },
                mb: 4,
              }}
            >
              {Try && (
                <Link
                  href={`${import.meta.env.VITE_Dashboard_Url}`}
                  target='_blank'
                  rel="noopener"
                  sx={{
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontWeight: 500,
                  }}
                >
                  {Try} <ArrowRightAltIcon />
                </Link>
              )}
              {learn && (
                <Link
                  href={link}
                  target='_blank'
                  rel="noopener"
                  sx={{
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontWeight: 500,
                  }}
                >
                  {learn} <ArrowRightAltIcon />
                </Link>
              )}
            </Box>

            {/* App Store Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
              }}
            >
              {google && (
                <Link href="https://play.google.com/store/apps" target='_blank' rel="noopener">
                  <Box 
                    component="img" 
                    src={google} 
                    sx={{ width: { xs: 130, sm: 150 }, height: "auto" }} 
                    alt="Get it on Google Play" 
                  />
                </Link>
              )}
              {app && (
                <Link href="https://www.apple.com/app-store/" target='_blank' rel="noopener">
                  <Box 
                    component="img" 
                    src={app} 
                    sx={{ width: { xs: 120, sm: 140 }, height: "auto" }} 
                    alt="Download on the App Store" 
                  />
                </Link>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Stack / Footer Note */}
        {stack && (
          <Typography 
            sx={{
              fontSize: { xs: "1.1rem", md: "1.4rem" }, 
              textAlign: "center",
              mt: { xs: 6, md: 10 },
              mb: { xs: 4, md: 6 },
              color: "text.primary",
              fontWeight: 400
            }}
          >
            {stack}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
