import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../src/images/wisebox-logo.png";
import vector from "../src/images/Vector.png";
import { Card, Stack } from "@mui/material";
import Image from "next/image";

export default function EmailValidationConfirmation() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
            <Box
              sx={{
                maxWidth: "80.85px",
              }}
              to="/"
            >
              <Image src={logo} alt="logo" style={{ width: "100%" }} />
            </Box>
            <Box
              mt={15}
              sx={{
                maxWidth: "45px",
              }}
              to="/"
            >
              <Image src={vector} alt="logo" style={{ width: "100%" }} />
            </Box>
            <Box mt={1}  >
              <Typography
                variant="h3"
                sx={{
                  color: "#2955BF",
                  fontWeight: "300",
                  fontSize: "48px",
                }}
              >
                Your account
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  color: "#2955BF",
                  fontWeight: "300",
                  fontSize: "48px",
                }}
              >
                {" "}
                is ready!
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography
                variant="caption"
                sx={{
                  color: "#353945",
                  fontSize: "14px",
                }}
              >
                Taking you to your dashboard.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
