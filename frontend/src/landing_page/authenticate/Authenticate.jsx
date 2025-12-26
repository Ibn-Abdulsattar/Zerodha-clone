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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
    <Container maxWidth="xs" sx={{minHeight: "80vh"}}>
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
          border: "1px solid #e7e5e5ff",
          borderRadius: "2rem",
          p:2,
          bgcolor: "#fbfbfb",
          boxShadow:2
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {isSignup && (
              <Grid xs={12}>
                <TextField
                  autoFocus
                  fullWidth
                  label="Full Name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  sx={{ width: "24.8rem" }}
                />
              </Grid>
            )}
            <Grid xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ width: "24.8rem" }}
              />
            </Grid>

            <Grid xs={12}>
              <FormControl variant="outlined" sx={{ width: "24.8rem" }}>
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{
                    "&.Mui-focused": {
                      color: "#078dfcff",
                    },
                  }}
                >
                  Password
                </InputLabel>

                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  label="Password"
                  fullWidth
                  sx={{
                    backgroundColor: "#fff",
                    color: "#242424",
                    borderRadius: "6px",
                    "& .MuiOutlinedInput-notchedOutline": {
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#038af8ff",
                    },
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: "#4d4b4bff" }}
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
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, height: 40 }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : isSignup ? (
              "Sign Up"
            ) : (
              "Sign In"
            )}
          </Button>

          <Grid container justifyContent="center">
            <Grid size={{ xs: 12 }} sx={{display: "flex", justifyContent: "center"}}>
              <Link href="#" variant="body2" onClick={toggleMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Box>
    </Container>
  );
}

export default Authenticate;
