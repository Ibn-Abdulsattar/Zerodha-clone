import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import demat_account from "../../assets/image/demat_account.png";
import React from "react";

export default function DematAcount() {
  const steps = [
    "Enter the requested details",
    "Complete e-sign & verification",
    "Start investing!",
  ];

  return (
    <Box
      sx={{
        background: "#fafafb",
        py: { xs: "3rem", md: "5rem" },
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Heading */}
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                mb: { xs: 0, md: 0 },
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              Steps to open a demat account with Zerodha
            </Typography>
          </Grid>

          {/* Image Column */}
          <Grid
            item
            size={{ md: 6, xs: 12 }}
            sx={{ textAlign: { xs: "center", md: "end" } }}
          >
            <Box
              component="img"
              src={demat_account}
              alt="demat_account"
              sx={{
                width: { xs: "80%", sm: "70%", md: "100%" },
                maxWidth: "450px",
              }}
            />
          </Grid>

          {/* Steps Column */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              mt: { xs: 0, md: "2rem" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            {steps.map((label, idx) => (
              <React.Fragment key={idx}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        px: "0.6rem",
                        py: "0.4rem",
                        border: "1px solid #ccc",
                        background: "#f5f5f5",
                        borderRadius: "50%",
                        fontWeight: 500,
                        fontSize: "1rem",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1.2rem",
                          md: "1.3rem",
                        },
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>

                  {idx < steps.length - 1 && (
                    <Divider
                      sx={{
                        width: "90%",
                        my: "1.2rem",
                        bgcolor: "#ccc",
                      }}
                    />
                  )}
                </Box>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
