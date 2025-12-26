import React, { useState } from "react"; // ← Add useState
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import signupHero from "../../assets/image/SignupHero.png";
import { TextField, InputAdornment, Button, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

export default function Hero() {
  const [mobile, setMobile] = useState("");

  const isValidMobile = mobile.length >= 10 && mobile.length <= 11;

  return (
    <Container sx={{ padding: "5rem 2rem", width: "98.8vw" }}>
      <Grid
        item
        size={{ xs: 12 }}
        sx={{ marginBottom: "6rem", textAlign: "center" }}
      >
        <Typography
          sx={{
            lineHeight: "1.4",
            fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
          }}
          variant="h3"
        >
          Open a free demat and trading account online
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </Typography>
      </Grid>

      <Grid container columnSpacing={12}>
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "end" },
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={signupHero}
            alt="signupHero"
            sx={{
              width: { xs: "100%", sm: "80%", md: "100%" },
              maxWidth: "600px",
            }}
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "end" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              mt: { md: 0, xs: "2rem" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 1,
                textAlign: { md: "start", xs: "center" },
                fontSize: {
                  xs: "1.6rem",
                  sm: "2rem",
                  md: "2.4rem",
                  lg: "2.6rem",
                },
              }}
            >
              Sign up now
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 3,
                textAlign: { md: "start", xs: "center" },
              }}
            >
              Or track your existing application
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter mobile number"
              type="tel"
              value={mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 11) setMobile(value);
              }}
              inputProps={{ maxLength: 11 }}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{ borderRight: "1px solid #ccc", pr: 1 }}
                    position="start"
                  >
                    PKR +92
                  </InputAdornment>
                ),
              }}
            />

            <Link
              href={`${import.meta.env.VITE_Frontend_Url}/authenticate`}
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Button
                fullWidth
                sx={{ fontSize: "1.1rem", py: 1.2 }}
                color="primary"
                variant="contained"
                disabled={!isValidMobile} // ← disable if invalid
              >
                Signup
              </Button>
            </Link>

            <Typography
              variant="caption"
              sx={{ mt: 3, display: "block", color: "text.secondary" }}
            >
              By proceeding, you agree to the Zerodha terms & privacy policy
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
