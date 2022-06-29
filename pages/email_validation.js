import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../images/wisebox_logo.png";
import { fontSize, fontWeight, padding } from "@mui/system";
import { Card, Stack } from "@mui/material";
import Image from "next/image";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function EmailValidation() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box sx={{ marginTop: "10%" }}>
            <Typography
              component="h6"
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Manage asset in Bangladesh
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "24px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              WITH CONFIDENCE
            </Typography>
          </Box>
          <Box sx={{ bottom: 0, position: "fixed", padding: "10%" }}>
            <Typography
              component="h6"
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontSize: "17px",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Photo by- www.unsplash.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={Logo} />
            <Box mt={1}>
              <Typography
                component="h6"
                fontWeight="500"
                sx={{
                  color: "#3772FF",
                  fontFamily: "Arial;",
                  fontWeight: "500",
                }}
              >
                EMAIL VERIFICATION
              </Typography>
            </Box>
            <Box mt={8}>
              <Typography fontSize="14px" variant="caption" color={"#353945"}>
                Enter the 4 digit code received at
              </Typography>
            </Box>
            <Box>
              <Typography fontSize="14px" variant="caption" color={"#353945"}>
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  info.shadman@gmail.com
                </span>
              </Typography>
            </Box>
            <Box mt={4}>
              <Stack direction="row" spacing={2}>
                <Card sx={{ width: "60px", height: "80px" }}></Card>
                <Card sx={{ width: "60px", height: "80px" }}></Card>
                <Card sx={{ width: "60px", height: "80px" }}></Card>
                <Card sx={{ width: "60px", height: "80px" }}></Card>
              </Stack>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <Stack direction="row" spacing={15}>
                <Button className="whiteBtn" variant="outlined">
                  Resend
                </Button>
                <Button className="myBtn" variant="contained">
                  Continue
                </Button>
              </Stack>

              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
