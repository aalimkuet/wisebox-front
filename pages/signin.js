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
import { Button as ButtonA } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "../styles/site.module.css";
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

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
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
        <Grid mt={15} item xs={12} sm={8} md={8}>
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
            <Typography
              component="h6"
              variant="subtitle2"
              sx={{
                color: "#3772FF",
                fontFamily: "Arial;",
                fontWeight: "500",
                borderBottom: "2px solid #E6E8EC",
              }}
            >
              LOGIN
            </Typography>
            <Form style={{ marginTop: "50px" }}>
              <Box sx={{ width: "400px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{
                      fontWeight: "bold",
                      fontSize: ".8rem",
                      color: "#777E90",
                    }}
                  >
                    EMAIL
                  </Form.Label>
                  <Form.Control
                    fullWidth
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </Form.Group>
              </Box>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                  style={{
                    fontWeight: "bold",
                    fontSize: ".8rem",
                    color: "#777E90",
                  }}
                >
                  PASSWORD
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                />
              </Form.Group>
              <Button
                className="myBtn"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item md={6} xs={6}>
                  <Typography fontWeight={"600"}>
                    Don't have an account?
                  </Typography>
                </Grid>
                <Grid ml={8} item md={4} xs={4}>
                  <Link style={{ fontWeight: "600" }}>Signup for free</Link>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
