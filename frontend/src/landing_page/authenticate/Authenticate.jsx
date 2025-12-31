import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Avatar,
  Link,
  Grid,
  Alert,
  Paper
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CircularProgress from '@mui/material/CircularProgress';


function Authenticate() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Tracks API request status
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    setFormData({ username: "", email: "", password: "" });
    setError(null);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Disable the button and show spinner

  const endpoint = isSignup
    ? `${import.meta.env.VITE_Backend_Url}/user/signup`
    : `${import.meta.env.VITE_Backend_Url}/user/signin`;

  const payload = { ...formData };
  if (!isSignup) delete payload.username;

  try {
     await axios.post(endpoint, payload, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    window.location.href = `${import.meta.env.VITE_Dashboard_Url}`;
  } catch (err) {
    const msg = err.response?.data?.msg || err.response?.data?.message || "Authentication failed.";
    setError(msg);
  } finally {
    setLoading(false); // Re-enable button after request finishes
  }
};

  return (
    <Container maxWidth={false} sx={{minHeight: "auto",mt:11, mb:{xs:2, md:2}
    }}>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",}}>
      <Paper
         elevation={3}
        sx={{
          p: { xs: 2, sm: 4 }, // Responsive padding
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 4,
          bgcolor: "background.paper",
          // Responsive Width Logic
          width: {
            xs: '90%',    // Mobile
            sm: '70%',    // Tablet
            md: '50%',    // Laptop
            lg: '40%',    // Desktop
            xl: '30%',    // Large Screen
            
          },
          maxWidth: '500px', // Prevents it from getting too wide on large monitors
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography 
  component="h1" 
  variant="h5" 
  sx={{
    fontWeight: 600, 
    mb: 1,
    // Responsive font sizing
    fontSize: {
      xs: '1.25rem', // Mobile (approx 20px)
      sm: '1.5rem',  // Tablet (approx 24px)
      md: '1.75rem', // Desktop (approx 28px)
      lg: '2rem',    // Large screens (approx 32px)
    }
  }}
>
  {isSignup ? "Sign Up" : "Sign In"}
</Typography>


        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Grid container spacing={1.5}>
            {isSignup && (
              <Grid size={12}>
                <TextField
                  autoFocus
                  fullWidth
                  label="Full Name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Grid>
            )}
            <Grid size={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid size={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel htmlFor="auth-password">Password</InputLabel>
                <OutlinedInput
                  id="auth-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  label="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>

          {error && (
            <Alert severity="error" variant="filled" sx={{ mt: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ 
              mt: {xs:2, md:4}, 
              mb: {xs:1,sm:2}, 
              py: {xs:1.5,md:2}, 
              fontSize: {xs:".8rem",sm:'1rem'}, 
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            {loading ? <CircularProgress size={26} color="inherit" /> : (isSignup ? "Sign Up" : "Sign In")}
          </Button>

          <Box sx={{ textAlign: "center", }}>
            <Link 
              component="button" 
              type="button"
              variant="body2" 
              onClick={toggleMode}
            >
              {isSignup
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </Link>
          </Box>
        </Box>
      </Paper>
      </Box>
    </Container>
  );
}

export default Authenticate;
