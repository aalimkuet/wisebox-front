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
import Typography from "@mui/material/Typography";
import logo from "../src/images/wisebox-logo.png";
import wisebox from "../src/images/Wisebox.png";
import Image from "next/image";
import { useFormik } from "formik";
import { signInSchema } from "../src/validation-schemas/change-password";

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

export default function SignInSide() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: null,
    onSubmit: async (values) => {
      console.log(values);
      // enqueueSnackbar("Successfully signed in!", {
      //   variant: "success",
      // });
      Router.push("/dashboard");
      //   try {
      //     setSaving(true);
      //     let body = new FormData();
      //     Object.keys(values).forEach((k) => {
      //       body.append(k, values[k]);
      //     });
      //     const res = await fetch(ApiRoutes.signin, {
      //       method: "POST",
      //       body: body,
      //     });
      //     const data = await res.json();
      //     if (!data.status.status) throw new Error(data.status.msg);
      //     const user = data.user[0];
      //     dispatch(setUser(user));
      //     enqueueSnackbar("Successfully signed in!", {
      //       variant: "success",
      //     });
      //     navigate(
      //       `/dashboard/${user.is_investor === "1" ? "investor" : "investee"}`
      //     );
      //     if (nextAction === "meeting") {
      //       dispatch(openMeetingDialog());
      //     }
      //     dispatch(close());
      //   } catch (e) {
      //     console.log(e);
      //     enqueueSnackbar(e.message, {
      //       variant: "error",
      //     });
      //   } finally {
      //     setSaving(false);
      //   }
    },
  });
  const hasError = (field) => {
    return formik.touched[field] && Boolean(formik.errors[field]);
  };
  const getError = (field) => {
    return formik.touched[field] && formik.errors[field];
  };

  return (
    <Box>
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
            <Box
              sx={{
                maxWidth: "80.85px",
              }}
              to="/"
            >
              <Image src={logo} alt="logo" style={{ width: "100%" }} />
            </Box>
            <Box
              sx={{
                marginTop: "0.5em",
                maxWidth: "100px",
              }}
              to="/"
            >
              <Image src={wisebox} alt="logo" style={{ width: "100%" }} />
            </Box>
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
            <Grid mt={5} container spacing={2}>
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
                <TextField
                  margin="normal"
                  fullWidth
                  label="FIRST NAME"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("firstName")}
                  error={hasError("firstName")}
                  helperText={getError("firstName")}
                />
              </Grid>
              <Grid item md={4} xs={12} sm={12} lg={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="LAST NAME"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("lastName")}
                  error={hasError("lastName")}
                  helperText={getError("lastName")}
                />
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
                <TextField
                  margin="normal"
                  fullWidth
                  label="COUNTRY"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("country")}
                  error={hasError("country")}
                  helperText={getError("country")}
                />
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
                <TextField
                  margin="normal"
                  fullWidth
                  label="CITY"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("city")}
                  error={hasError("city")}
                  helperText={getError("city")}
                />
              </Grid>
              <Grid item md={4} xs={12} sm={12} lg={4}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="STATE/ PROVINCE"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("state")}
                  error={hasError("state")}
                  helperText={getError("state")}
                />
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
                <TextField
                  margin="normal"
                  fullWidth
                  label="EMAIL"
                  type="email"
                  variant="outlined"
                  {...formik.getFieldProps("email")}
                  error={hasError("email")}
                  helperText={getError("email")}
                />
              </Grid>
              <Grid item md={1} xs={6} sm={6} lg={1}>
                <TextField
                  margin="normal"
                  fullWidth
                  label=""
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("phoneCode")}
                  error={hasError("phoneCode")}
                  helperText={getError("phoneCode")}
                />
              </Grid>
              <Grid item md={3} xs={6} sm={6} lg={3}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="PHONE"
                  type="text"
                  variant="outlined"
                  {...formik.getFieldProps("phone")}
                  error={hasError("phone")}
                  helperText={getError("phone")}
                />
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
                <TextField
                  margin="normal"
                  fullWidth
                  label="PASSWORD"
                  type="password"
                  variant="outlined"
                  {...formik.getFieldProps("password")}
                  error={hasError("password")}
                  helperText={getError("password")}
                />
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
                <TextField
                  margin="normal"
                  fullWidth
                  label="CONFIRM PASSWORD"
                  type="password"
                  variant="outlined"
                  {...formik.getFieldProps("confirmPassword")}
                  error={hasError("confirmPassword")}
                  helperText={getError("confirmPassword")}
                />
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
                <Box mt={2} with="50px">
                  <Button
                    className="myBtn"
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ borderRadius: "20px", height: "40px" }}
                  >
                    Sign Up
                  </Button>
                </Box>
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
                <Link href="/signin">
                  <Typography fontWeight={"600"}>Login</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
