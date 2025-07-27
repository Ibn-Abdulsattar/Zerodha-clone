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
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    e.preventDefault()

const endpoint = isSignup
  ? "https://zerodha-clone-backend.eba-fe3juwiv.ap-south-1.elasticbeanstalk.com/user/signup"
  : "https://zerodha-clone-backend.eba-fe3juwiv.ap-south-1.elasticbeanstalk.com/user/signin";


    const payload = { ...formData };
    if (!isSignup) delete payload.username;

    try {
      const res = await axios.post(endpoint, payload, {
        withCredentials: true
      });

      
      window.location.href = 'https://main.dunuolnoll92w.amplifyapp.com/';
    } catch (err) {
      const msg =
        err.response?.data?.msg || "Authentication failed. Try again.";
      setError(msg);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
                    color: "black", // light blue label
                    "&.Mui-focused": {
                      color: "#90caf9",
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
                    backgroundColor: "#242424",
                    color: "#fff",
                    borderRadius: "6px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#181818ff",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#90caf9",
                    },
                    "& input": {
                      color: "#fff",
                    },
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: "#ffffff" }}
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
            sx={{ mt: 3, mb: 2 }}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justifyContent="center">
            <Grid size={{ xs: 12 }}>
              <Link href="#" variant="body2" onClick={toggleMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
