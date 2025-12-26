import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  InputAdornment,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import { useState } from "react";

export default function Hero() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Box
      sx={{
        background: "#387ed1",
        color: "white",
        width: { xs: "98.8vw", md: "98.8vw" },
      }}
    >
      <Container
        sx={{
          px: { xs: "1.5rem", sm: "3rem", md: "7rem" },
          py: { xs: "3rem", md: "4.5rem" },
          mt: "3rem",
        }}
      >
        {/* Header Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            mb: "2.5rem",
            gap: "0.8rem",
          }}
        >
          <Typography sx={{ fontSize: { xs: "1.2rem", md: "1.4rem" } }}>
            Support Portal
          </Typography>
          <Typography>
            <Link
              href="https://www.freshworks.com/"
              sx={{
                color: "#fff",
                borderBottom: "1px solid #fff",
                pb: "0.2rem",
                fontSize: { xs: "1rem", md: "1.1rem" },
                textDecoration: "none",
              }}
            >
              Track tickets
            </Link>
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: "1rem" }}>
          {/* Left Side */}
          <Grid item size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{ fontSize: { xs: "1.2rem", md: "1.4rem" }, mb: "1.5rem" }}
            >
              Search for an answer or browse help topics to create a ticket
            </Typography>

            <TextField
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              sx={{
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: "3px",
                mb: "1.5rem",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {inputValue.trim() ? (
                      <Link href="https://www.freshworks.com/" underline="none">
                        <i className="fa-regular fa-magnifying-glass" />
                      </Link>
                    ) : (
                      <i
                        className="fa-regular fa-magnifying-glass"
                        style={{
                          color: "gray",
                          cursor: "not-allowed",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />

            {/* Helpful Links */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                mb: "1rem",
              }}
            >
              {[
                "Track account opening",
                "Track segment activation",
                "Intraday margins",
                "Kite user manual",
              ].map((label, idx) => (
                <Link
                  key={idx}
                  sx={{
                    color: "#fff",
                    borderBottom: "1px solid #fff",
                    pb: "0.2rem",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{ fontSize: { xs: "1.2rem", md: "1.4rem" }, mb: "1rem" }}
            >
              Featured
            </Typography>
            <List sx={{ listStyleType: "decimal", pl: "1.2rem" }}>
              {[
                "Surveillance measure on scrips - June 2025",
                "Latest Intraday leverages and Square-off timings",
              ].map((text, idx) => (
                <ListItem sx={{ display: "list-item", pl: 0 }} key={idx}>
                  <ListItemText>
                    <Link sx={{ textDecoration: "none", color: "#fff" }}>
                      {text}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
