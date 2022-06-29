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
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../images/wisebox_logo.png";
import { fontSize, fontWeight, padding } from "@mui/system";
import Form from "react-bootstrap/Form";
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
        www.wisebox.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

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
        <Grid mt={5} item xs={12} sm={8} md={8}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={Logo} />
            <Typography
              component="h6"
              variant="subtitle2"
              sx={{
                color: "#3772FF",
                fontFamily: "Arial",
                fontWeight: "500",
                borderBottom: "2px solid #E6E8EC",
              }}
            >
              SIGN UP
            </Typography>

            <Form style={{ marginTop: "20px" }}>
              <Grid container spacing={2}>
                <Grid
                  sx={{
                    ml: {
                      md: 22,
                      xs: 0,
                    },
                  }}
                  item
                  md={4}
                  xs={12}
                  sm={12}
                  lg={4}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    >
                      FIRST NAME
                    </Form.Label>
                    <Form.Control fullWidth type="email" />
                  </Form.Group>
                </Grid>
                <Grid item md={4} xs={12} sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    >
                      LAST NAME
                    </Form.Label>
                    <Form.Control fullWidth type="email" />
                  </Form.Group>
                </Grid>
                <Grid
                  sx={{
                    ml: {
                      md: 22,
                      xs: 0,
                    },
                  }}
                  item
                  md={8}
                  xs={12}
                  sm={12}
                  lg={8}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    >
                      COUNTRY
                    </Form.Label>
                    <Form.Control fullWidth type="email" />
                  </Form.Group>
                </Grid>
                <Grid
                  sx={{
                    ml: {
                      md: 22,
                      xs: 0,
                    },
                  }}
                  item
                  md={4}
                  xs={12}
                  sm={12}
                  lg={4}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    >
                      CITY
                    </Form.Label>
                    <Form.Control fullWidth type="email" />
                  </Form.Group>
                </Grid>
                <Grid item md={4} xs={12} sm={12} lg={4}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    >
                      STATE / PROVINCE
                    </Form.Label>
                    <Form.Control fullWidth type="email" />
                  </Form.Group>
                </Grid>
                <Grid
                  sx={{
                    ml: {
                      md: 22,
                      xs: 0,
                    },
                  }}
                  item
                  md={4}
                  xs={12}
                  sm={12}
                  lg={4}
                >
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
                    <Form.Control fullWidth type="email" />
                  </Form.Group>
                </Grid>
                <Grid item md={1} xs={6} sm={6} lg={1}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    >
                      PHONE
                    </Form.Label>
                    <Form.Control fullWidth type="email" />
                  </Form.Group>
                </Grid>
                <Grid item md={3} xs={6} sm={6} lg={3}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    ></Form.Label>
                    <Form.Control fullWidth type="email" />
                  </Form.Group>
                </Grid>
                <Grid
                  sx={{
                    ml: {
                      md: 22,
                      xs: 0,
                    },
                  }}
                  item
                  md={8}
                  xs={12}
                  sm={12}
                  lg={8}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    >
                      PASSWORD
                    </Form.Label>
                    <Form.Control fullWidth type="password" />
                  </Form.Group>
                </Grid>
                <Grid
                  sx={{
                    ml: {
                      md: 22,
                      xs: 0,
                    },
                  }}
                  item
                  md={8}
                  xs={12}
                  sm={12}
                  lg={8}
                >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      style={{
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        color: "#777E90",
                      }}
                    >
                      VERIFY PASSWORD
                    </Form.Label>
                    <Form.Control fullWidth type="password" />
                  </Form.Group>
                  <Grid
                    sx={{
                      ml: {
                        md: 13,
                        xs: 0,
                      },
                    }}
                    item
                    md={8}
                    xs={12}
                    sm={12}
                    lg={8}
                  >
                    <Box mt={2} with="50px">
                      <Button
                        className="myBtn"
                        fullWidth
                        type="submit"
                        variant="contained"
                      >
                        Sign Up
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    ml: {
                      md: 37,
                      xs: 0,
                    },
                  }}
                  item
                  md={3}
                  xs={8}
                  sm={8}
                  lg={4}
                >
                  <Typography fontWeight={"600"}>
                    Already have an account?
                  </Typography>
                </Grid>
                <Grid item md={3} xs={2} sm={2} lg={2}>
                  <Link>
                    {" "}
                    <Typography fontWeight={"600"}>Login</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
