import {
  Box,
  Container,
  Typography,
  Link,
  TextField,
  InputAdornment,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import {Grid} from "@mui/material"; // Use Grid2 for modern standards
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search"; // Native MUI icon for stability

export default function Hero() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box
      component="section"
      sx={{
        background: "#387ed1",
        color: "white",
        // width: "100%", // Fixed from 98.8vw
        overflowX: "hidden",
        pt: { xs: 4, md:14 },
        pb: { xs: 6, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row" }, // Keep horizontal for clean branding
            justifyContent: "space-between",
            alignItems: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
                fontWeight: 600, 
                fontSize: { xs: "1.1rem", md: "1.4rem" } 
            }}
          >
            Support Portal
          </Typography>
          <Link
            href="#"
            sx={{
              color: "#fff",
              borderBottom: "1px solid #fff",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              textDecoration: "none",
              "&:hover": { opacity: 0.8 }
            }}
          >
            Track tickets
          </Link>
        </Box>

        <Grid container spacing={{ xs: 6, md: 10 }}>
          {/* Left Side: Search & Quick Links */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h5"
              sx={{ 
                fontSize: { xs: "1.2rem", md: "1.5rem" }, 
                mb: 3,
                lineHeight: 1.4 
              }}
            >
              Search for an answer or browse help topics to create a ticket
            </Typography>

            <TextField
              fullWidth
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                mb: 3,
                "& .MuiOutlinedInput-root": {
                   height: { xs: "55px", md: "65px" }
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon 
                        sx={{ 
                            color: inputValue.trim() ? "#387ed1" : "gray",
                            cursor: inputValue.trim() ? "pointer" : "default"
                        }} 
                    />
                  </InputAdornment>
                ),
              }}
            />

            {/* Helpful Links */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 2, md: 3 },
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
                  href="#"
                  sx={{
                    color: "#fff",
                    borderBottom: "1px solid rgba(255,255,255,0.6)",
                    fontSize: { xs: "0.9rem", md: "1.05rem" },
                    textDecoration: "none",
                    "&:hover": { borderBottomColor: "#fff" }
                  }}
                >
                  {label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Right Side: Featured */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h6"
              sx={{ 
                fontSize: { xs: "1.2rem", md: "1.4rem" }, 
                mb: 2,
                fontWeight: 600 
              }}
            >
              Featured
            </Typography>
            <List 
                component="ol" 
                sx={{ 
                    listStyleType: "decimal", 
                    pl: 3,
                    "& .MuiListItem-root": {
                        display: "list-item",
                        px: 0,
                        py: 1
                    }
                }}
            >
              {[
                "Surveillance measure on scrips - December 2025",
                "Latest Intraday leverages and Square-off timings for 2025",
              ].map((text, idx) => (
                <ListItem key={idx}>
                  <ListItemText>
                    <Link 
                        href="#"
                        sx={{ 
                            textDecoration: "underline", 
                            color: "#fff",
                            fontSize: { xs: "0.95rem", md: "1.1rem" }
                        }}
                    >
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
