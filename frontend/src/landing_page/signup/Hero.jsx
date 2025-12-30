import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Link,
  Grid,
  Container,
  Stack,
} from "@mui/material";
import signupHero from "../../assets/image/SignupHero.png";

export default function Hero() {
  const [mobile, setMobile] = useState("");
  const isValidMobile = mobile.length >= 10 && mobile.length <= 11;

  return (
    <Container
      maxWidth="xxl"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4 },
        mt:5
      }}
    >
      {/* Header Section */}
      <Box sx={{display: "flex", justifyContent: "center"}}>
      <Box textAlign="center" sx={{width: "95%"}} mb={{ xs: 6, md: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
            lineHeight: 1.3,
            fontWeight: 600,
          }}
        >
          Open a free demat and trading account online
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            color: "text.secondary",
          }}
        >
          Start investing brokerage-free and join a community of 1.6+ crore
          investors and traders.
        </Typography>
      </Box>
      </Box>

      {/* Main Grid */}
      <Grid
        container
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left: Image Section */}
        <Grid size={{xs:12, md:7}}>
          <Box
            component="img"
            src={signupHero}
            alt="Sign up illustration"
            sx={{
              width: "100%",
              maxWidth: 600,
              mx: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* Right: Signup Form */}
        <Grid size={{xs:12, md:5}}>
          <Stack
            spacing={2}
            sx={{
              width: "100%",
              maxWidth: 400,
              mx: { xs: "auto", md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.4rem" },
                fontWeight: 600,
              }}
            >
              Sign up now
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 2,
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
              inputProps={{ maxLength: 11, "aria-label": "Mobile number" }}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{
                      borderRight: "1px solid #ccc",
                      pr: 1.2,
                      color: "text.secondary",
                      fontSize: "0.9rem",
                    }}
                    position="start"
                  >
                    +92
                  </InputAdornment>
                ),
              }}
            />

            <Link
              href={`${import.meta.env.VITE_Frontend_Url}/authenticate`}
              target="_blank"
              underline="none"
            >
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValidMobile}
                sx={{
                  py: 1.4,
                  fontSize: "1.05rem",
                  textTransform: "none",
                  borderRadius: 2,
                }}
              >
                Signup
              </Button>
            </Link>

            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                mt: 2,
              }}
            >
              By proceeding, you agree to the Zerodha terms & privacy policy.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
