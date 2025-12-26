import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Container, Divider, Grid } from "@mui/material";

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
    <Box sx={{ width: {md:"98.8vw", xs: "98.8vw"} }}>
      <Container>
        <Grid container sx={{ margin: "5rem 0" }} columnSpacing={21}>
          <Grid sx={{ textAlign: "center" }} size={{ md: 7, xs: 12 }}>
            <Link href={link} target='_blank'>
            <Box
              component="img"
              src={img}
              alt="Illustration"
              sx={{
                width: { xs: "80%", sm: "60%", md: "100%" },
                maxWidth: "500px",
                mx: "auto",
              }}
            />
            </Link>
          </Grid>

          <Grid sx={{ marginTop: "3.5rem" }} size={{ md: 5, xs: 12 }}>
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
                color: "text.secondary",
                mb: 3,
              }}
            >
              {description}
            </Typography>

            {/* Action Links */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 3,
                mb: 4,
              }}
            >
              {Try && (
                <Link
                  href={`${import.meta.env.VITE_Dashboard_Url}`}
                  target='_blank'
                  sx={{
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontWeight: 500,
                  }}
                >
                  {Try} <ArrowRightAltIcon fontSize="small" />
                </Link>
              )}
              {learn && (
                <Link
                target='_blank'
                  href={link}
                  sx={{
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontWeight: 500,
                  }}
                >
                  {learn} <ArrowRightAltIcon fontSize="small" />
                </Link>
              )}
            </Box>

            {/* App Store Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                mb: { xs: 4, md: 0 },
              }}
            >
              {google && (
                <Link href="https://play.google.com/store/apps?hl=en" target='_blank' sx={{ display: "inline-block" }}>
                  <Box component="img" src={google} width={150} alt="Google Play" />
                </Link>
              )}
              {app && (
                <Link href="https://www.apple.com/app-store/" target='_blank' sx={{ display: "inline-block" }}>
                  <Box component="img" src={app} width={140} alt="App Store" />
                </Link>
              )}
            </Box>
          </Grid>
        </Grid>
        {stack && <Typography sx={{fontSize: "1.4rem", textAlign: "center",mb:"6rem"}}>{stack}</Typography>}
      </Container>
    </Box>
  );
}
